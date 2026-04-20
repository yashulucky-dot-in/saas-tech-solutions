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
  });

  for (const link of mobileMenu.querySelectorAll('.mobile-link, .mobile-cta')) {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  }

  document.addEventListener('click', (e) => {
    const header = document.getElementById('site-header');
    if (header && !header.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
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
    'service-cybersecurity.html': 'services',
    'service-project-management.html': 'services',
    'service-fullstack.html': 'services',
    'service-aws.html': 'services',
    'service-java.html': 'services',
    'javadevelopment.html': 'services',
    'service-qa.html': 'services',
    'service-ai.html': 'services',
    'projectmanagement.html': 'services',
  };

  const activePage = pageMap[filename] || '';

  for (const link of document.querySelectorAll('.nav-link, .mobile-link')) {
    const page = link.getAttribute('data-page');
    link.classList.toggle('active', page === activePage && !!activePage);
  }
}

/* ============================================================
   Scroll Fade-In Animations
   ============================================================ */
function initScrollAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    for (const el of document.querySelectorAll('.fade-in')) {
      el.classList.add('visible');
    }
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  for (const el of document.querySelectorAll('.fade-in')) {
    observer.observe(el);
  }
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
   Contact Form Handler — Web3Forms integration
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const panel = document.getElementById('form-panel');
      const success = document.getElementById('form-success');

      if (response.ok) {
        // Show success UI
        if (panel && success) {
          panel.style.display = 'none';
          success.classList.add('visible');
        }
        form.reset();
        setTimeout(() => {
          if (panel && success) {
            panel.style.display = '';
            success.classList.remove('visible');
          }
        }, 6000);
      } else {
        // Show inline error without disrupting layout
        let errMsg = form.querySelector('.web3forms-error');
        if (!errMsg) {
          errMsg = document.createElement('p');
          errMsg.className = 'web3forms-error';
          errMsg.style.cssText = 'color:#e74c3c;font-size:0.875rem;margin-top:0.75rem;text-align:center;';
          form.appendChild(errMsg);
        }
        errMsg.textContent = 'Something went wrong. Please try again or email us directly at hr@ekansolutionsinc.awsapps.com.';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    } catch (_err) {
      let errMsg = form.querySelector('.web3forms-error');
      if (!errMsg) {
        errMsg = document.createElement('p');
        errMsg.className = 'web3forms-error';
        errMsg.style.cssText = 'color:#e74c3c;font-size:0.875rem;margin-top:0.75rem;text-align:center;';
        form.appendChild(errMsg);
      }
      errMsg.textContent = 'Network error. Please check your connection and try again.';
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  });
}

/* ============================================================
   Main init
   ============================================================ */
function initNav() {
  initScrollTop();
  initMobileMenu();
  initHeaderScroll();
  initActiveNav();
  initScrollAnimations();
  initSmoothScroll();
  initTabs();
  initContactForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav();
}
