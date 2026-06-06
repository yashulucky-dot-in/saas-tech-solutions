/**
 * nav.js — Shared navigation & scroll animation logic
 * Ekan Solutions Inc. — Static Site
 */

/* ============================================================
   Page Navigation: scroll to top on load (restores correct position)
   ============================================================ */
function initScrollTop() {
  // Scroll to top immediately on page load (prevents browser scroll restoration
  // from landing on a mid-page position when navigating from footer links)
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
}

/* ============================================================
   Mobile Hamburger Menu Toggle
   ============================================================ */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    // Close all mobile dropdowns when main menu closes
    if (!isOpen) {
      for (const dd of mobileMenu.querySelectorAll('.mobile-dropdown.open')) {
        dd.classList.remove('open');
      }
    }
  });

  for (const link of mobileMenu.querySelectorAll('.mobile-link, .mobile-cta, .mobile-sub-link')) {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      // Close mobile dropdowns too
      for (const dd of mobileMenu.querySelectorAll('.mobile-dropdown.open')) {
        dd.classList.remove('open');
      }
    });
  }

  document.addEventListener('click', (e) => {
    const header = document.getElementById('site-header');
    if (header && !header.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      for (const dd of mobileMenu.querySelectorAll('.mobile-dropdown.open')) {
        dd.classList.remove('open');
      }
    }
  });
}

/* ============================================================
   Mobile Services Dropdown Accordion
   ============================================================ */
function initMobileDropdowns() {
  const toggles = document.querySelectorAll('.mobile-dropdown-toggle');
  if (!toggles.length) return;

  for (const toggle of toggles) {
    toggle.addEventListener('click', (e) => {
      // Stop propagation so the "click outside" handler doesn't immediately close
      e.stopPropagation();
      const parent = toggle.closest('.mobile-dropdown');
      if (!parent) return;

      const isOpen = parent.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
}

/* ============================================================
   Scroll: header shadow + elevation
   ============================================================ */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   Active Nav Link
   ============================================================ */
function initActiveNav() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';

  const pageMap = {
    'index.html': 'home',
    'home.html': 'home',
    'about.html': 'about',
    'services.html': 'services',
    'solutions.html': 'solutions',
    'contact.html': 'contact',
    'cybersecurity.html': 'services',
    'projectmanagement.html': 'services',
    'fullstack.html': 'services',
    'awscloud.html': 'services',
    'javadevelopment.html': 'services',
    'qatesting.html': 'services',
    'aiservices.html': 'services',
    // legacy filenames (kept for back-compat)
    'service-cybersecurity.html': 'services',
    'service-project-management.html': 'services',
    'service-fullstack.html': 'services',
    'service-aws.html': 'services',
    'service-java.html': 'services',
    'service-qa.html': 'services',
    'service-ai.html': 'services',
  };

  const activePage = pageMap[filename] || '';

  // Standard nav-links and mobile-links
  for (const link of document.querySelectorAll('.nav-link, .mobile-link')) {
    const page = link.getAttribute('data-page');
    link.classList.toggle('active', page === activePage && !!activePage);
  }

  // Desktop dropdown trigger: mark active when on any service sub-page
  for (const trigger of document.querySelectorAll('.nav-link-has-dropdown')) {
    const page = trigger.getAttribute('data-page');
    trigger.classList.toggle('active', page === activePage && !!activePage);
  }

  // Mobile dropdown toggle: mark active when on any service sub-page
  for (const toggle of document.querySelectorAll('.mobile-dropdown-toggle')) {
    const page = toggle.getAttribute('data-page');
    toggle.classList.toggle('active', page === activePage && !!activePage);
  }

  // Highlight the specific sub-link that matches the current page
  const serviceFileMap = {
    'cybersecurity.html': 'cybersecurity.html',
    'projectmanagement.html': 'projectmanagement.html',
    'fullstack.html': 'fullstack.html',
    'awscloud.html': 'awscloud.html',
    'javadevelopment.html': 'javadevelopment.html',
    'qatesting.html': 'qatesting.html',
    'aiservices.html': 'aiservices.html',
  };

  if (serviceFileMap[filename]) {
    const targetHref = serviceFileMap[filename];
    for (const link of document.querySelectorAll('.nav-dropdown-menu a, .mobile-sub-link')) {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === targetHref);
    }
    // Auto-expand mobile dropdown when on a service page
    const mobileDd = document.querySelector('.mobile-dropdown');
    if (mobileDd) {
      mobileDd.classList.add('open');
      const toggle = mobileDd.querySelector('.mobile-dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
    }
  }
}

/* ============================================================
   Scroll Fade-In Animations
   — Elements with .fade-in are always opacity:1 (set in CSS).
   — JS adds .visible immediately so the decorative animation plays.
   — Multiple fallbacks ensure no content ever stays hidden,
     regardless of navigation path (direct load, back/forward,
     inter-page navigation, or slow connections).
   ============================================================ */
function initScrollAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Step 1: Make ALL .fade-in elements visible immediately (safety net).
  // CSS already sets opacity:1, but adding .visible triggers the animation.
  function makeAllVisible() {
    for (const el of document.querySelectorAll('.fade-in')) {
      el.classList.add('visible');
    }
  }

  if (prefersReduced) {
    makeAllVisible();
    return;
  }

  // Step 2: Use IntersectionObserver for staggered animation on scroll.
  // Elements already in viewport are made visible immediately.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    for (const el of document.querySelectorAll('.fade-in')) {
      // Check if element is already in viewport (handles page navigation)
      const rect = el.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (inViewport) {
        // Already visible — add class now, skip observer
        el.classList.add('visible');
      } else {
        observer.observe(el);
      }
    }
  } else {
    // Fallback for browsers without IntersectionObserver
    makeAllVisible();
  }

  // Step 3: Hard fallback — after 150ms, force-show any remaining hidden elements.
  // Covers race conditions where observer fires too late after navigation.
  setTimeout(makeAllVisible, 150);

  // Step 4: Final fallback on window load event.
  window.addEventListener('load', makeAllVisible, { once: true });
}

/* ============================================================
   Smooth Scroll for Anchor Links (#id only, never page navigation)
   ============================================================ */
function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a[href^="#"]');
    if (!target) return;

    const href = target.getAttribute('href');
    if (!href || href === '#' || href.includes('.html')) return;

    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ============================================================
   Service Tabs
   ============================================================ */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn[data-tab]');
  if (!tabBtns.length) return;

  for (const btn of tabBtns) {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      const tabGroup = btn.getAttribute('data-group') || 'default';

      for (const b of document.querySelectorAll(`.tab-btn[data-group="${tabGroup}"]`)) {
        b.classList.remove('active');
      }

      for (const p of document.querySelectorAll(`.tab-panel[data-group="${tabGroup}"]`)) {
        p.classList.remove('active');
      }

      btn.classList.add('active');

      const panel = document.querySelector(`.tab-panel[data-tab="${tabId}"][data-group="${tabGroup}"]`);
      if (panel) panel.classList.add('active');
    });
  }
}

/* ============================================================
   Main init
   ============================================================ */
function initNav() {
  initScrollTop();
  initMobileMenu();
  initMobileDropdowns();
  initHeaderScroll();
  initActiveNav();
  initScrollAnimations();
  initSmoothScroll();
  initTabs();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav();
}

// ===== CONTACT FORM START =====
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const btn = document.getElementById("submitBtn");
  const status = document.getElementById("formStatus");

  // Safety check
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Loading state
    btn.disabled = true;
    btn.innerText = "Sending...";
    status.innerText = "";

    // Collect form data
    const payload = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      service: document.getElementById("service").value,
      message: document.getElementById("message").value.trim()
    };

    try {
      const response = await fetch(
        "https://9i0e1bal1a.execute-api.us-west-2.amazonaws.com/sendemail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Success UI
        form.innerHTML = `
          <div style="text-align:center; padding:30px;">
            <h3 style="color:#1ABC9C;">Thank You!</h3>
            <p>Your message has been sent successfully. We'll contact you soon.</p>
          </div>
        `;
      } else {
        // API error
        status.innerText = data.message || "Something went wrong.";
        btn.disabled = false;
        btn.innerText = "Send Message";
      }

    } catch (error) {
      console.error("Fetch Error:", error);

      // Network / CORS error
      status.innerText = "Network error. Please try again.";
      btn.disabled = false;
      btn.innerText = "Send Message";
    }
  });

});
// ===== CONTACT FORM END =====
