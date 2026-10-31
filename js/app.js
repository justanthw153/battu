// Giao diện ứng dụng
(function () {
  var cs = BT.cs, lg = BT.lg, $ = function (id) { return document.getElementById(id); };
  var VI_TRI = ['Năm', 'Tháng', 'Ngày', 'Giờ'];
  var hienTai = null;
  var KEY = 'battu.laso.v1';

  function luuDS() { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } }
  function ghiDS(ds) { try { localStorage.setItem(KEY, JSON.stringify(ds)); } catch (e) { } }

  function docForm() {
    var lich = document.querySelector('input[name=lich]:checked').value;
    var d = +$('f-ngay').value, m = +$('f-thang').value, y = +$('f-nam').value;
    var tz = +$('f-tz').value;
    if (lich === 'am') {
      var s = BT.lich.lunar2Solar(d, m, y, $('f-nhuan').checked ? 1 : 0, tz);
      if (!s) { alert('Ngày âm lịch không hợp lệ (tháng nhuận không tồn tại?).'); return null; }
      d = s.d; m = s.m; y = s.y;
    }
    return {
      ten: $('f-ten').value.trim(), gioiTinh: document.querySelector('input[name=gt]:checked').value,
      y: y, m: m, d: d, h: +$('f-gio').value, mi: +$('f-phut').value, tz: tz,
      khongGio: $('f-khonggio').checked, gioMatTroi: $('f-gmt').checked, kinhDo: +$('f-kinhdo').value || 105.8,
      tyMuon: $('f-tymuon').value, lichNhap: lich
    };
  }
  function ganForm(inp) {
    $('f-ten').value = inp.ten || '';
    document.querySelector('input[name=gt][value=' + inp.gioiTinh + ']').checked = true;
    document.querySelector('input[name=lich][value=duong]').checked = true;
    $('f-ngay').value = inp.d; $('f-thang').value = inp.m; $('f-nam').value = inp.y;
    $('f-gio').value = inp.h; $('f-phut').value = inp.mi; $('f-tz').value = inp.tz;
    $('f-khonggio').checked = !!inp.khongGio; $('f-gmt').checked = !!inp.gioMatTroi;
    $('f-kinhdo').value = inp.kinhDo || 105.8; $('f-tymuon').value = inp.tyMuon || 'sau';
    capNhatLich();
  }

  function fmtJD(jd, tz) {
    var d = BT.lich.dateFromJD(jd + tz / 24);
    var hh = Math.floor(d.h), mm = Math.floor((d.h - hh) * 60);
    return d.d + '/' + d.m + '/' + d.y + ' ' + (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm;
  }

  function veBangTuTru(ls) {
    var T = ls.tru;
    var cols = [3, 2, 1, 0]; // Giờ Ngày Tháng Năm (đọc từ phải sang trái như lá số truyền thống)
    var row = function (lbl, f, cls) {
      return '<tr class="' + (cls || '') + '"><th>' + lbl + '</th>' + cols.map(function (i) { return '<td>' + (T[i] ? f(T[i], i) : '—') + '</td>'; }).join('') + '</tr>';
    };
    var h = '<table class="bazi"><thead><tr><th></th>' + cols.map(function (i) { return '<th>' + VI_TRI[i] + '</th>'; }).join('') + '</tr></thead><tbody>';
    h += row('Thập thần', function (t, i) { return i === 2 ? '<b>Nhật chủ</b>' : cs.THAP_THAN[t.thapThanCan]; }, 'tt');
    h += row('Thiên can', function (t) { var hh = cs.HANH_KEY[cs.CAN_HANH[t.can]]; return '<div class="glyph g-' + hh + '"><span class="han">' + cs.CAN_HAN[t.can] + '</span>' + cs.CAN[t.can] + '<small>' + cs.amDuong(t.can) + ' ' + cs.HANH[cs.CAN_HANH[t.can]] + '</small></div>'; }, 'big');
    h += row('Địa chi', function (t) { var hh = cs.HANH_KEY[cs.CHI_HANH[t.chi]]; return '<div class="glyph g-' + hh + '"><span class="han">' + cs.CHI_HAN[t.chi] + '</span>' + cs.CHI[t.chi] + '<small>' + cs.CON_GIAP[t.chi] + ' · ' + cs.HANH[cs.CHI_HANH[t.chi]] + '</small></div>'; }, 'big');
    h += row('Tàng can', function (t) { return t.tangCan.map(function (tc) { return '<div class="tc"><span class="hanh h-' + cs.HANH_KEY[cs.CAN_HANH[tc.can]] + '">' + cs.CAN[tc.can] + '</span> <small>' + cs.THAP_THAN[tc.thapThan] + '</small></div>'; }).join(''); });
    h += row('Nạp âm', function (t) { return '<small>' + t.napAm + '</small>'; });
    h += row('Trường sinh', function (t) { return '<small>' + cs.TRUONG_SINH[t.truongSinh] + '</small>'; });
    h += row('Tự tọa', function (t) { return '<small>' + cs.TRUONG_SINH[t.tuToa] + '</small>'; });
    h += row('Thần sát', function (t) { return t.thanSat.map(function (s) { return '<span class="ts ' + (BT.tt.saoTot.indexOf(s.ten) >= 0 ? 'tot' : 'xau') + '">' + s.ten + '</span>'; }).join(''); }, 'ts-row');
    h += '</tbody></table>';
    return h;
  }

  function hienThi(ls) {
    hienTai = ls;
    var inp = ls.input, al = ls.amLich;
    var info = '<div class="info">' +
      '<div><b>' + (ls.ten || 'Lá số') + '</b> · ' + (ls.gioiTinh === 'nam' ? 'Nam' : 'Nữ') + ' · ' + (ls.daiVan.thuan ? (ls.gioiTinh === 'nam' ? 'Dương nam' : 'Âm nữ') : (ls.gioiTinh === 'nam' ? 'Âm nam' : 'Dương nữ')) + '</div>' +
      '<div>Dương lịch: ' + inp.d + '/' + inp.m + '/' + inp.y + (inp.khongGio ? ' (không rõ giờ)' : ' ' + String(inp.h).padStart(2, '0') + ':' + String(inp.mi).padStart(2, '0')) + ' (GMT' + (inp.tz >= 0 ? '+' : '') + inp.tz + ')</div>' +
      '<div>Âm lịch: ' + al.d + '/' + al.m + (al.leap ? ' (nhuận)' : '') + '/' + al.y + ' – năm ' + cs.CAN[ls.tru[0].can] + ' ' + cs.CHI[ls.tru[0].chi] + ' (' + ls.tru[0].napAm + ')</div>' +
      '<div>Tiết: ' + ls.tiet.truoc.ten + ' (' + fmtJD(ls.tiet.truoc.jd, ls.tz) + ') → ' + ls.tiet.sau.ten + ' (' + fmtJD(ls.tiet.sau.jd, ls.tz) + ')</div>' +
      (ls.ghiChuGio ? '<div>' + ls.ghiChuGio + '</div>' : '') +
      (ls.gioGiap ? '<div class="warn">⚠ Sinh sát thời điểm giao tiết (dưới 1 ngày) – trụ tháng/năm có thể thay đổi nếu giờ sinh lệch; hãy kiểm tra kỹ giờ sinh.</div>' : '') +
      (inp.khongGio ? '<div class="warn">⚠ Không có giờ sinh: lá số chỉ có 3 trụ (Tam trụ), phần luận về con cái – hậu vận – nội tâm bị hạn chế.</div>' : '') +
      '</div>';
    $('ket-qua').innerHTML = '<section class="card" id="la-so"><div class="ls-head"><h2>Lá số Bát Tự</h2><div class="acts"><button class="btn ghost" id="b-luu">Lưu lá số</button><button class="btn ghost" id="b-in">In / PDF</button></div></div>' + info + '<div class="scroll-x">' + veBangTuTru(ls) + '</div></section>' + lg.tatCa(ls);
    $('toc').innerHTML = [['la-so', 'Lá số'], ['tong-quan', 'Tổng quan'], ['nhat-chu', 'Nhật chủ'], ['ngu-hanh', 'Ngũ hành'], ['dung-than', 'Dụng thần'], ['thap-than', 'Thập thần'], ['cach-cuc', 'Cách cục'], ['tu-tru', 'Tương tác'], ['than-sat', 'Thần sát'], ['hon-nhan', 'Hôn nhân'], ['su-nghiep', 'Sự nghiệp'], ['suc-khoe', 'Sức khỏe'], ['dai-van', 'Đại vận'], ['luu-nien', 'Lưu niên']]
      .map(function (x) { return '<a href="#' + x[0] + '">' + x[1] + '</a>'; }).join('');
    $('toc').hidden = false;
    // Đại vận đang chạy
    var nay = new Date().getFullYear(), idx = 0;
    ls.daiVan.ds.forEach(function (t, i) { if (nay >= t.namBatDau) idx = i; });
    if (nay < ls.daiVan.ds[0].namBatDau) idx = 0;
    chonDaiVan(idx);
    $('b-luu').onclick = function () {
      var ds = luuDS(), id = inp.ten + '|' + inp.y + inp.m + inp.d + inp.h + inp.mi;
      ds = ds.filter(function (x) { return x.id !== id; });
      ds.unshift({ id: id, input: inp });
      ghiDS(ds.slice(0, 50)); veDS();
    };
    $('b-in').onclick = function () { document.querySelectorAll('details').forEach(function (d) { d.open = true; }); window.print(); };
    document.querySelectorAll('.dv-cell').forEach(function (b) { b.onclick = function () { chonDaiVan(+b.dataset.dv); }; });
    $('ln-xem').onclick = function () { xemNam(+$('ln-nam').value); };
    ganBangLN();
    $('la-so').scrollIntoView({ behavior: 'smooth' });
  }
  function chonDaiVan(i) {
    document.querySelectorAll('.dv-cell').forEach(function (b) { b.classList.toggle('sel', +b.dataset.dv === i); });
    $('dv-chitiet').innerHTML = lg.chiTietDaiVan(hienTai, i);
  }
  function xemNam(y) {
    if (!y) return;
    $('ln-nam').value = y;
    $('ln-chitiet').innerHTML = lg.luuNien(hienTai, y);
    $('ln-bang').innerHTML = lg.bangLuuNien(hienTai, y - 1);
    ganBangLN();
  }
  function ganBangLN() {
    document.querySelectorAll('.ln-row').forEach(function (r) { r.onclick = function () { xemNam(+r.dataset.y); $('ln-chitiet').scrollIntoView({ behavior: 'smooth' }); }; });
  }

  function veDS() {
    var ds = luuDS();
    $('ds-luu').innerHTML = ds.length ? ds.map(function (x, i) {
      var t = x.input;
      return '<li><button class="lnk" data-i="' + i + '">' + (t.ten || 'Không tên') + ' <small>' + t.d + '/' + t.m + '/' + t.y + ' · ' + (t.gioiTinh === 'nam' ? 'Nam' : 'Nữ') + '</small></button><button class="x" data-x="' + i + '" title="Xóa">×</button></li>';
    }).join('') : '<li class="empty">Chưa có lá số nào được lưu.</li>';
    document.querySelectorAll('#ds-luu .lnk').forEach(function (b) { b.onclick = function () { var inp = luuDS()[+b.dataset.i].input; ganForm(inp); hienThi(BT.ls.lapLaSo(inp)); }; });
    document.querySelectorAll('#ds-luu .x').forEach(function (b) { b.onclick = function () { var d = luuDS(); d.splice(+b.dataset.x, 1); ghiDS(d); veDS(); }; });
  }

  function capNhatLich() {
    var am = document.querySelector('input[name=lich]:checked').value === 'am';
    $('nhuan-wrap').hidden = !am;
    $('f-gio').disabled = $('f-phut').disabled = $('f-khonggio').checked;
    $('kinhdo-wrap').hidden = !$('f-gmt').checked;
  }

  function init() {
    var nam = new Date().getFullYear();
    document.querySelectorAll('input[name=lich], #f-khonggio, #f-gmt').forEach(function (e) { e.onchange = capNhatLich; });
    $('form').onsubmit = function (e) {
      e.preventDefault();
      var inp = docForm(); if (!inp) return;
      if (inp.y < 1900 || inp.y > 2100) { alert('Năm sinh nên trong khoảng 1900–2100.'); return; }
      try { hienThi(BT.ls.lapLaSo(inp)); } catch (err) { console.error(err); alert('Có lỗi khi lập lá số: ' + err.message); }
    };
    $('b-mau').onclick = function () {
      ganForm({ ten: 'Lá số mẫu', gioiTinh: 'nam', y: 1990, m: 8, d: 15, h: 9, mi: 30, tz: 7, kinhDo: 105.8, tyMuon: 'sau' });
      $('form').requestSubmit();
    };
    $('b-theme').onclick = function () {
      var r = document.documentElement, cur = r.getAttribute('data-theme');
      var next = cur === 'dark' ? 'light' : (cur === 'light' ? 'dark' : (matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark'));
      r.setAttribute('data-theme', next); try { localStorage.setItem('battu.theme', next); } catch (e) { }
    };
    try { var th = localStorage.getItem('battu.theme'); if (th) document.documentElement.setAttribute('data-theme', th); } catch (e) { }
    capNhatLich(); veDS();
  }
  document.addEventListener('DOMContentLoaded', init);
})();
