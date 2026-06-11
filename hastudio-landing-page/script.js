/* ============================================================
   הסטודיו הביתי — Landing Page Script
   UTM capture · Scroll CTA · FAQ accordion · Reveal animations
   ============================================================ */

/* --- UTM CAPTURE --- */
(function captureUTM() {
  const keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid','gclid','ttclid','msclkid'];
  const params = new URLSearchParams(window.location.search);
  const captured = {};
  keys.forEach(k => { const v = params.get(k); if (v) captured[k] = v; });
  if (Object.keys(captured).length) {
    try { sessionStorage.setItem('hastudio_utm', JSON.stringify(captured)); } catch (_) {}
  }
})();

function getUTM() {
  try { return JSON.parse(sessionStorage.getItem('hastudio_utm') || '{}'); } catch (_) { return {}; }
}

function buildAttribution() {
  const u = getUTM();
  if (!Object.keys(u).length) return '';
  const parts = [];
  if (u.utm_source) parts.push(u.utm_source);
  if (u.utm_medium) parts.push(u.utm_medium);
  if (u.utm_campaign) parts.push(u.utm_campaign);
  if (u.fbclid) parts.push('fb');
  if (u.gclid) parts.push('g');
  return parts.length ? ` [${parts.join('/')}]` : '';
}

/* Append attribution to all WhatsApp links */
document.querySelectorAll('.wa-link').forEach(link => {
  const href = link.getAttribute('href') || '';
  if (!href.includes('wa.me')) return;
  const attr = buildAttribution();
  if (!attr) return;
  const encoded = encodeURIComponent(attr);
  link.setAttribute('href', href + encoded);
});

/* --- SCROLL CTA BAR --- */
const scrollBar = document.getElementById('scrollCtaBar');
if (scrollBar) {
  const hero = document.getElementById('hero');
  const getThreshold = () => hero ? hero.offsetHeight * 0.75 : 400;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const show = window.scrollY > getThreshold();
      scrollBar.classList.toggle('visible', show);
      scrollBar.setAttribute('aria-hidden', show ? 'false' : 'true');
      ticking = false;
    });
  }, { passive: true });
}

/* --- REVEAL ANIMATIONS (IntersectionObserver) --- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      // stagger siblings inside same parent
      const siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.is-visible)');
      let delay = 0;
      siblings.forEach(el => {
        if (el === entry.target) {
          setTimeout(() => el.classList.add('is-visible'), delay);
          delay += 80;
        }
      });
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  // Fallback: show all immediately
  revealEls.forEach(el => el.classList.add('is-visible'));
}

/* --- FAQ ACCORDION --- */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const answer = btn.nextElementSibling;

    // Close all others
    document.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(other => {
      if (other === btn) return;
      other.setAttribute('aria-expanded', 'false');
      const otherA = other.nextElementSibling;
      if (otherA) otherA.hidden = true;
    });

    btn.setAttribute('aria-expanded', String(!expanded));
    if (answer) answer.hidden = expanded;
  });
});

/* --- WA CLICK TRACKING (console + future analytics hook) --- */
document.querySelectorAll('.wa-link').forEach(link => {
  link.addEventListener('click', () => {
    const kit = link.dataset.kit;
    const label = kit ? `kit_${kit}` : 'general';
    // Google Analytics 4 (if loaded)
    if (typeof gtag === 'function') {
      gtag('event', 'whatsapp_click', { event_category: 'conversion', event_label: label });
    }
    // Meta Pixel (if loaded)
    if (typeof fbq === 'function') {
      fbq('track', 'Contact', { content_name: label });
    }
    // Console log for debugging
    if (window.location.search.includes('debug=1')) {
      console.log('[HaStudio] WA click:', label, getUTM());
    }
  });
});

/* --- SMOOTH ANCHOR SCROLL (respects RTL) --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const headerH = document.querySelector('.site-header')?.offsetHeight || 60;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
