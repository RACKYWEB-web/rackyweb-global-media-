console.log("JS STARTED");
const SUPABASE_URL = "https://imcwvzdokiclmcrbtlng.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Hf5tOXZv79vFrcVwlIZ1kQ_HXO-5O_v";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// Google Sign In Function
async function signInWithGoogle() {
  try {
    const { error } = await window.supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin
      }
    });

    if (error) {
      console.error("Google sign-in error:", error.message);
      toast("Sign-in failed. Please try again.");
    }
  } catch (err) {
    console.error("Unexpected error during sign-in:", err);
    toast("An unexpected error occurred. Please try again.");
  }
}

/* ─── ROUTING ─────────────────────────────────── */
const LIGHT_PAGES = [
  'blog', 'article', 'marketplace', 'about', 'partner', 
  'contact', 'pricing', 'dashboard', 'admin', 'login', 'signup'
];

let cur = 'home';

function go(page) {
  if (page === cur) {
    closeMob();
    return;
  }

  const pt = document.getElementById('pt');
  pt.classList.add('in');

  setTimeout(() => {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show target page
    const el = document.getElementById('page-' + page);
    if (el) {
      el.classList.add('active');
      cur = page;
    }

    // Scroll to top
    window.scrollTo(0, 0);
    
    // Update navigation styling
    setNav(page);
    updateLinks(page);
    closeMob();
    
    // Page transition animation
    pt.classList.remove('in');
    pt.classList.add('out');
    setTimeout(() => pt.classList.remove('out'), 500);
    
    // Trigger reveal animations
    triggerReveal();
  }, 280);
}

function setNav(page) {
  const nav = document.getElementById('nav');
  if (LIGHT_PAGES.includes(page)) {
    nav.classList.add('light');
    nav.classList.remove('scrolled');
  } else {
    nav.classList.remove('light');
    if (window.scrollY < 80) nav.classList.remove('scrolled');
  }
}

function updateLinks(page) {
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.remove('on');
    const onclick = l.getAttribute('onclick') || '';
    if (onclick.includes("'" + page + "'")) l.classList.add('on');
  });
}

/* ─── SCROLL HANDLERS ─────────────────────────────── */
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  const nav = document.getElementById('nav');
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  
  // Update progress bar
  document.getElementById('pbar').style.width = (docH > 0 ? (sy / docH * 100) : 0) + '%';
  
  // Update nav on home page
  if (cur === 'home') {
    nav.classList.toggle('scrolled', sy > 80);
  }
  
  // Trigger animations
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
  if (track) track.style.transform = `translateX(-${carIdx * SLIDE_W}px)`;
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

// Spawn particles on load
spawnParticles();

/* ─── TOAST NOTIFICATIONS ─────────────────────────── */
function toast(msg) {
  const t = document.getElementById('toast');
  const txt = document.getElementById('toastTxt');
  if (txt) txt.textContent = msg;
  if (t) {
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3200);
  }
}

/* ─── MODAL MANAGEMENT ─────────────────────────────── */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

// Close modal when clicking outside
document.querySelectorAll('.modal-ov').forEach(ov => {
  ov.addEventListener('click', e => {
    if (e.target === ov) ov.classList.remove('open');
  });
});

/* ─── FILTERS ─────────────────────────────────── */
function bFilter(btn) {
  document.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
}

function mpFilter(btn) {
  document.querySelectorAll('.cf').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
}

/* ─── INITIALIZATION ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Trigger reveal on page load
  setTimeout(triggerReveal, 100);
  setTimeout(triggerHeroCnts, 400);

  // Duplicate ticker for seamless loop
  const ticker = document.getElementById('ticker');
  if (ticker) ticker.innerHTML += ticker.innerHTML;

  // Dashboard sidebar navigation
  document.querySelectorAll('.dsb-item').forEach(item => {
    item.addEventListener('click', function() {
      const nav = this.closest('.dsb-nav');
      if (nav) {
        nav.querySelectorAll('.dsb-item').forEach(i => i.classList.remove('on'));
      }
      this.classList.add('on');
    });
  });
});

// Initial page setup
window.addEventListener('load', () => {
  setNav('home');
  updateLinks('home');
  triggerReveal();
});
console.log("JS FINISHED");