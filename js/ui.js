/* ─── SCROLL HANDLERS ─────────────────────────────── */
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  const nav = document.getElementById('nav');
  const docH = document.documentElement.scrollHeight - window.innerHeight;

  document.getElementById('pbar').style.width = (docH > 0 ? (sy / docH * 100) : 0) + '%';

  if (cur === 'home') {
    nav.classList.toggle('scrolled', sy > 80);
  }

  triggerReveal();
  triggerCounters();
  triggerBars();
  triggerHeroCnts();
});

/* ─── REVEAL ANIMATIONS ─────────────────────────── */
function triggerReveal() {
  document.querySelectorAll('.rv:not(.vis)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 70) {
      el.classList.add('vis');
    }
  });
}

function triggerCounters() {
  document.querySelectorAll('.cu:not(.done)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      animCount(el);
      el.classList.add('done');
    }
  });
}

function triggerBars() {
  document.querySelectorAll('.stat-fill:not(.done)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.style.width = el.dataset.w + '%';
      el.classList.add('done');
    }
  });
}

function triggerHeroCnts() {
  document.querySelectorAll('[data-cnt]:not(.done2)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      animHero(el);
      el.classList.add('done2');
    }
  });
}

/* ─── COUNTER ANIMATIONS ─────────────────────────── */
function animCount(el) {
  const target = parseInt(el.dataset.count);
  const duration = 1800;
  const start = performance.now();

  const animate = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(easeOutCubic * target).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      el.textContent = target.toLocaleString();
    }
  };

  requestAnimationFrame(animate);
}

function animHero(el) {
  const target = parseInt(el.dataset.cnt);
  const duration = 2000;
  const start = performance.now();

  const animate = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.floor(easeOutQuart * target);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      el.textContent = target;
    }
  };

  requestAnimationFrame(animate);
}

/* ─── MOBILE MENU ─────────────────────────────── */
function toggleMob() {
  const mobMenu = document.getElementById('mobMenu');
  if (mobMenu) mobMenu.classList.toggle('open');
}

function closeMob() {
  const mobMenu = document.getElementById('mobMenu');
  if (mobMenu) mobMenu.classList.remove('open');
}