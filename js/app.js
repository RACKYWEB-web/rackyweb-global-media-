/* ─── CAROUSEL ─────────────────────────────────── */
let carIdx = 0;
const SLIDE_W = 404;

function carSlide(d) {
  const track = document.getElementById('carTrack');
  if (!track) return;

  carIdx = Math.max(0, Math.min(carIdx + d, track.children.length - 1));
  track.style.transform = `translateX(-${carIdx * SLIDE_W}px)`;
  updateCarDots();
}

function carGo(i) {
  carIdx = i;
  const track = document.getElementById('carTrack');
  if (track) {
    track.style.transform = `translateX(-${carIdx * SLIDE_W}px)`;
  }
  updateCarDots();
}

function updateCarDots() {
  document.querySelectorAll('.car-dot').forEach((d, i) => {
    d.classList.toggle('on', i === carIdx);
  });
}

// Auto-advance carousel
setInterval(() => {
  if (cur === 'home') {
    const track = document.getElementById('carTrack');

    if (track) {
      carIdx = (carIdx + 1) % track.children.length;
      track.style.transform = `translateX(-${carIdx * SLIDE_W}px)`;
      updateCarDots();
    }
  }
}, 5000);

/* ─── PARTICLES ─────────────────────────────────── */

function spawnParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');

    p.className = 'particle';

    p.style.cssText = `
      left: ${Math.random() * 100}%;
      animation-duration: ${8 + Math.random() * 12}s;
      animation-delay: ${Math.random() * 8}s;
      width: ${1 + Math.random() * 2}px;
      height: ${1 + Math.random() * 2}px;
    `;

    container.appendChild(p);
  }
}

/* ─── INITIALIZATION ─────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // Reveal animations
  setTimeout(triggerReveal, 100);
  setTimeout(triggerHeroCnts, 400);

  // Duplicate ticker
  const ticker = document.getElementById('ticker');
  if (ticker) {
    ticker.innerHTML += ticker.innerHTML;
  }

  // Dashboard sidebar
  document.querySelectorAll('.dsb-item').forEach(item => {
    item.addEventListener('click', function () {

      const nav = this.closest('.dsb-nav');

      if (nav) {
        nav.querySelectorAll('.dsb-item')
          .forEach(i => i.classList.remove('on'));
      }

      this.classList.add('on');
    });
  });

  // Particles
  spawnParticles();
});

// Initial page setup
window.addEventListener('load', () => {
  setNav('home');
  updateLinks('home');
  triggerReveal();
});

console.log("APP INITIALIZED");