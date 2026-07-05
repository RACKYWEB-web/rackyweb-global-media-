/* ─── FILTERS ─────────────────────────────────── */
function bFilter(btn) {
  document.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
}

function mpFilter(btn) {
  document.querySelectorAll('.cf').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
}