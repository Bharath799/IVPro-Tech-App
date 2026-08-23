/* ============================================
   IVPRO Technologies - Shared Components
   Navigation, Footer, Scroll animations
   ============================================ */

// ---- SVG Icons ----
const Icons = {
  // Navigation & UI
  menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  chevronDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  
  // Solution & Service Icons
  eye: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  barcode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="7" y1="7" x2="7" y2="17"/><line x1="10" y1="7" x2="10" y2="17"/><line x1="13" y1="7" x2="13" y2="11"/><line x1="16" y1="7" x2="16" y2="17"/></svg>`,
  rfid: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
  iot: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 2v5"/><path d="M8 2v5"/><circle cx="12" cy="14" r="2"/><path d="M7 14h-1"/><path d="M18 14h-1"/><path d="M12 9v1"/><path d="M12 18v1"/></svg>`,
  automation: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  pokayoke: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  
  // Service Icons
  connect: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8.59 13.51l6.83 6.83"/><line x1="15" y1="9" x2="21" y2="3"/><line x1="9" y1="15" x2="3" y2="21"/></svg>`,
  web: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  mobile: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  upgrade: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>`,
  erp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  
  // Industry Icons
  factory: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 20h20"/><path d="M5 20V8l5 4V8l5 4V4h5v16"/></svg>`,
  truck: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  warehouse: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35z"/><line x1="6" y1="18" x2="6" y2="14"/><line x1="10" y1="18" x2="10" y2="14"/><line x1="14" y1="18" x2="14" y2="14"/><line x1="18" y1="18" x2="18" y2="14"/></svg>`,
  car: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>`,
  
  // Contact / About
  phone: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  mapPin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  
  // Misc
  target: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  compass: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  award: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  users: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  settings: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  cpu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  database: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  trendUp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  image: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  twitter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
};

// ---- Navigation Component ----
function renderNavigation(activePage = 'home') {
  const nav = document.createElement('header');
  nav.className = 'header';
  nav.id = 'header';

  // Determine base path
  const isSubpage = window.location.pathname.includes('/pages/');
  const base = isSubpage ? '../' : '';

  nav.innerHTML = `
    <div class="container container--wide">
      <a href="${base}index.html" class="logo">
        <img src="${base}assets/Logo_png_best_fit.png" alt="IVPRO Technologies" class="logo__full">
      </a>

      <nav class="nav" id="mainNav">
        <ul class="nav__list">
          <li><a href="${base}index.html" class="nav__link ${activePage === 'home' ? 'nav__link--active' : ''}">Home</a></li>
          <li class="nav__item--dropdown">
            <a href="${base}pages/services.html" class="nav__link ${activePage === 'services' ? 'nav__link--active' : ''}">Services ${Icons.chevronDown}</a>
            <div class="nav__dropdown">
              <a href="${base}pages/services.html#data-connectivity" class="nav__dropdown-link">${Icons.connect} Smart Data Connectivity</a>
              <a href="${base}pages/services.html#web-development" class="nav__dropdown-link">${Icons.web} Website Development</a>
              <a href="${base}pages/services.html#mobile-development" class="nav__dropdown-link">${Icons.mobile} Mobile App Development</a>
              <a href="${base}pages/services.html#legacy-upgrade" class="nav__dropdown-link">${Icons.upgrade} Legacy System Upgrade</a>
              <a href="${base}pages/services.html#erp-development" class="nav__dropdown-link">${Icons.erp} ERP Plugin Development</a>
            </div>
          </li>
          <li class="nav__item--dropdown">
            <a href="${base}pages/solutions.html" class="nav__link ${activePage === 'solutions' ? 'nav__link--active' : ''}">Solutions ${Icons.chevronDown}</a>
            <div class="nav__dropdown">
              <a href="${base}pages/solution-vision.html" class="nav__dropdown-link">${Icons.eye} Vision Inspection</a>
              <a href="${base}pages/solution-barcode.html" class="nav__dropdown-link">${Icons.barcode} Barcode Solution</a>
              <a href="${base}pages/solution-rfid.html" class="nav__dropdown-link">${Icons.rfid} RFID Tracking</a>
              <a href="${base}pages/solution-iot.html" class="nav__dropdown-link">${Icons.iot} IoT Solutions</a>
              <a href="${base}pages/solution-automation.html" class="nav__dropdown-link">${Icons.automation} Industrial Automation</a>
              <a href="${base}pages/solution-pokayoke.html" class="nav__dropdown-link">${Icons.pokayoke} Poka-Yoke</a>
            </div>
          </li>
          <li><a href="${base}pages/about.html" class="nav__link ${activePage === 'about' ? 'nav__link--active' : ''}">About</a></li>
        </ul>
        <a href="${base}pages/contact.html" class="btn btn--primary nav__cta">Contact Us</a>
      </nav>

      <div class="nav__toggle" id="navToggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;

  document.body.prepend(nav);

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mainNav.classList.toggle('active');
    document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
  });

  // Mobile dropdown toggle
  mainNav.querySelectorAll('.nav__item--dropdown > .nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const parent = link.parentElement;
        // Close other open dropdowns
        mainNav.querySelectorAll('.nav__item--dropdown.open').forEach(item => {
          if (item !== parent) item.classList.remove('open');
        });
        parent.classList.toggle('open');
      }
    });
  });

  // Close mobile nav on link click
  mainNav.querySelectorAll('.nav__dropdown-link, .nav__cta').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mainNav.classList.remove('active');
      mainNav.querySelectorAll('.nav__item--dropdown.open').forEach(item => item.classList.remove('open'));
      document.body.style.overflow = '';
    });
  });

  // Close dropdowns on non-dropdown nav link click
  mainNav.querySelectorAll('.nav__list > li:not(.nav__item--dropdown) > .nav__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mainNav.classList.remove('active');
      mainNav.querySelectorAll('.nav__item--dropdown.open').forEach(item => item.classList.remove('open'));
      document.body.style.overflow = '';
    });
  });

  // Scroll behavior
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    lastScroll = window.scrollY;
  });
}

// ---- Footer Component ----
function renderFooter() {
  const isSubpage = window.location.pathname.includes('/pages/');
  const base = isSubpage ? '../' : '';

  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="${base}index.html" class="logo">
            <img src="${base}assets/Logo_png_best_fit.png" alt="IVPRO Technologies" class="logo__full">
          </a>
          <p class="footer__brand-text">Transforming industries with intelligent AI, IoT, and automation solutions. Building the smart industries of tomorrow.</p>
          <div class="footer__social">
            <a href="https://www.linkedin.com/company/ivpro-tech-solutions/?trk=profile-position" class="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">${Icons.linkedin}</a>
            <a href="#" class="footer__social-link" aria-label="Twitter">${Icons.twitter}</a>
          </div>
        </div>
        <div>
          <h4 class="footer__heading">Solutions</h4>
          <div class="footer__links">
            <a href="${base}pages/solution-vision.html" class="footer__link">Vision Inspection</a>
            <a href="${base}pages/solution-barcode.html" class="footer__link">Barcode Solution</a>
            <a href="${base}pages/solution-rfid.html" class="footer__link">RFID Tracking</a>
            <a href="${base}pages/solution-iot.html" class="footer__link">IoT Solutions</a>
            <a href="${base}pages/solution-automation.html" class="footer__link">Automation</a>
            <a href="${base}pages/solution-pokayoke.html" class="footer__link">Poka-Yoke</a>
          </div>
        </div>
        <div>
          <h4 class="footer__heading">Company</h4>
          <div class="footer__links">
            <a href="${base}pages/about.html" class="footer__link">About Us</a>
            <a href="${base}pages/services.html" class="footer__link">Services</a>
            <a href="${base}pages/contact.html" class="footer__link">Contact</a>
          </div>
        </div>
        <div>
          <h4 class="footer__heading">Contact</h4>
          <div class="footer__links">
            <span class="footer__link">${Icons.mail} info@ivprotech.com</span>
            <span class="footer__link">${Icons.phone} +91 9113981365</span>
            <span class="footer__link">${Icons.mapPin} No.26, 3rd Floor, 4th Main Road, Duo Marvel Layout, Anantapur, Yelahanka, Bangalore – 560064</span>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2026 IVPRO Technologies. All rights reserved.</p>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

// ---- Image Placeholder Generator ----
function createPlaceholder(label, aspectRatio = '16/10') {
  return `
    <div class="img-placeholder" style="aspect-ratio: ${aspectRatio};">
      ${Icons.image}
      <span>${label}</span>
    </div>
  `;
}

// ---- Scroll Reveal ----
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ---- Counter Animation ----
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'));
        const suffix = entry.target.getAttribute('data-suffix') || '';
        const prefix = entry.target.getAttribute('data-prefix') || '';
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            entry.target.textContent = prefix + target + suffix;
            clearInterval(timer);
          } else {
            entry.target.textContent = prefix + Math.floor(current) + suffix;
          }
        }, 30);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ---- Smooth scroll for anchor links ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ---- Initialize Everything ----
function initApp(activePage = 'home') {
  renderNavigation(activePage);
  renderFooter();
  initScrollReveal();
  animateCounters();
  initSmoothScroll();
}
