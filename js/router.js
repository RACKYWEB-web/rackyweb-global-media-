

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