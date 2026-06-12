document.addEventListener('DOMContentLoaded', () => {

  /* ─── THEME SWITCHER ─── */
  const themeButtons = document.querySelectorAll('[data-theme-choice]');
  const applyTheme = (theme) => {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    themeButtons.forEach(button => {
      const isActive = button.dataset.themeChoice === nextTheme;
      button.setAttribute('aria-pressed', String(isActive));
    });
    try {
      localStorage.setItem('bloom-theme', nextTheme);
    } catch (error) {
      // Theme persistence is optional
    }
  };

  const initialTheme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  applyTheme(initialTheme);
  themeButtons.forEach(button => {
    button.addEventListener('click', () => applyTheme(button.dataset.themeChoice));
  });

  /* ─── DYNAMIC WHATSAPP CONFIGURATION ─── */
  const WHATSAPP_NUMBER = '972501234567';

  const whatsappLinks = document.querySelectorAll('a[href*="wa.me/"]');
  whatsappLinks.forEach(link => {
    let href = link.getAttribute('href');
    href = href.replace(/wa\.me\/[0-9]+/g, `wa.me/${WHATSAPP_NUMBER}`);
    link.setAttribute('href', href);
  });

  /* ─── SCROLL REVEAL ANIMATIONS ─── */
  const revealElements = document.querySelectorAll('.reveal');
  if (navigator.webdriver) {
    revealElements.forEach(el => el.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ─── SCROLL PROGRESS BAR + HEADER + STICKY CTA + FAB ─── */
  const header = document.querySelector('header');
  const stickyCta = document.querySelector('.sticky-mobile-cta');
  const scrollProgressEl = document.getElementById('scroll-progress');
  const whatsappFab = document.getElementById('whatsapp-fab');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollProgressEl && docH > 0) {
      scrollProgressEl.style.transform = `scaleX(${scrollY / docH})`;
    }

    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (stickyCta) {
      if (scrollY > 550) {
        stickyCta.classList.add('active');
      } else {
        stickyCta.classList.remove('active');
      }
    }

    if (whatsappFab) {
      if (scrollY > 400) {
        whatsappFab.classList.add('visible');
      } else {
        whatsappFab.classList.remove('visible');
      }
    }
  }, { passive: true });

  /* ─── HERO IMAGE PARALLAX ─── */
  const heroImageEl = document.querySelector('.hero-image-wrapper img');
  if (heroImageEl) {
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      if (sy < window.innerHeight * 1.2) {
        heroImageEl.style.transform = `translateY(${sy * 0.18}px) scale(1.06)`;
      }
    }, { passive: true });
  }

  /* ─── FAQ ACCORDION ─── */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    trigger.setAttribute('aria-expanded', 'false');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-content').style.maxHeight = null;
          otherItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ─── INTERACTIVE QUIZ LOGIC ─── */
  const quizResult = document.getElementById('quiz-result');
  const progressFill = document.querySelector('.progress-fill');
  const progressStepText = document.querySelector('.progress-step span');
  const quizOptions = document.querySelectorAll('.quiz-option');
  const resetQuizBtn = document.getElementById('reset-quiz');

  let quizAnswers = { experience: '', equipment: '', style: '' };
  let currentStep = 1;
  const totalSteps = 3;

  const selectQuizOption = (option) => {
    const siblings = option.parentElement.querySelectorAll('.quiz-option');
    siblings.forEach(sib => sib.classList.remove('selected'));
    option.classList.add('selected');

    const stepName = option.dataset.step;
    const stepValue = option.dataset.value;
    quizAnswers[stepName] = stepValue;

    setTimeout(() => {
      if (currentStep < totalSteps) {
        goToStep(currentStep + 1);
      } else {
        showQuizResult();
      }
    }, 300);
  };

  quizOptions.forEach(option => {
    option.addEventListener('click', () => selectQuizOption(option));
    option.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectQuizOption(option);
      }
    });
  });

  function goToStep(step) {
    document.getElementById(`quiz-step-${currentStep}`).classList.remove('active');
    currentStep = step;
    document.getElementById(`quiz-step-${currentStep}`).classList.add('active');
    const percent = ((currentStep - 1) / totalSteps) * 100;
    progressFill.style.width = `${percent || 10}%`;
    progressStepText.textContent = currentStep;
  }

  function showQuizResult() {
    document.getElementById('quiz-step-3').classList.remove('active');
    progressFill.style.width = '100%';
    progressStepText.textContent = totalSteps;

    let kitTitle = '';
    let kitDesc = '';
    let kitImg = '';
    let targetSectionId = '#kit-starter';

    /* Score-based match: total beginners get the Starter kit,
       experienced users / equipment upgraders get the Pro kit */
    const experienceScore = { none: 0, some: 1, course: 2 }[quizAnswers.experience] || 0;
    const equipmentScore  = { nothing: 0, 'has-lamp': 2, 'drill-upgrade': 2 }[quizAnswers.equipment] || 0;
    const styleScore      = { classic: 0, viral: 1, studio: 2 }[quizAnswers.style] || 0;
    const wantsPro = (experienceScore + equipmentScore + styleScore) >= 2;

    if (wantsPro) {
      kitTitle = 'ערכת הסטודיו המקצועית (Studio Pro Kit)';
      kitDesc = 'הבחירה המתאימה עבורך! הערכה המלאה למניקור חשמלי בבית, הכוללת מכשיר שיוף 35,000 RPM שקט, מנורת 48W חזקה, וכל כלי העבודה שאת באמת צריכה.';
      kitImg = './assets/kit_beginner_drill.webp';
      targetSectionId = '#kit-studio-pro';
    } else {
      kitTitle = 'ערכת ההתחלה הנכונה (Beginner Tool Kit)';
      kitDesc = 'הבחירה המומלצת עבורך להתחלת הדרך: מנורת ייבוש איכותית וכלי הכנת ציפורניים בסיסיים, בלי שיוף חשמלי מורכב. כשתרגישי מוכנה — תמיד אפשר לשדרג.';
      kitImg = './assets/hero_flatlay.webp';
      targetSectionId = '#kit-starter';
    }

    document.getElementById('result-kit-title').textContent = kitTitle;
    document.getElementById('result-kit-desc').textContent = kitDesc;
    document.getElementById('result-kit-image').src = kitImg;
    document.getElementById('result-kit-image').alt = kitTitle;

    const resultLink = document.getElementById('result-scroll-link');
    resultLink.href = targetSectionId;
    quizResult.classList.add('active');
  }

  resetQuizBtn.addEventListener('click', () => {
    quizResult.classList.remove('active');
    quizOptions.forEach(opt => opt.classList.remove('selected'));
    quizAnswers = { experience: '', equipment: '', style: '' };
    currentStep = 1;
    goToStep(1);
  });

  /* ─── COLOR SWATCH INTERACTION ─── */
  const swatchesContainers = document.querySelectorAll('.kit-swatches-container');
  swatchesContainers.forEach(container => {
    const swatches = container.querySelectorAll('.swatch');
    const selectedText = container.querySelector('.swatch-selected-text strong');
    const kitCard = container.closest('.kit-card');
    const checkoutBtn = kitCard.querySelector('.btn-primary');

    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        swatches.forEach(s => {
          s.classList.remove('active');
          s.setAttribute('aria-pressed', 'false');
        });
        swatch.classList.add('active');
        swatch.setAttribute('aria-pressed', 'true');

        const colorName = swatch.getAttribute('data-color');
        selectedText.textContent = colorName;

        try {
          const hrefString = checkoutBtn.getAttribute('href');
          const decodedTextIndex = hrefString.indexOf('text=');
          if (decodedTextIndex !== -1) {
            const baseUrl = hrefString.substring(0, decodedTextIndex + 5);
            let currentText = decodeURIComponent(hrefString.substring(decodedTextIndex + 5));
            const colorAppend = ` - עם קולקציית ${colorName}`;
            if (!currentText.includes('עם קולקציית')) {
              currentText += colorAppend;
            } else {
              currentText = currentText.replace(/ - עם קולקציית .*/, colorAppend);
            }
            checkoutBtn.setAttribute('href', baseUrl + encodeURIComponent(currentText));
          }
        } catch (e) {
          console.error('Failed to update WhatsApp link text: ', e);
        }
      });
    });
  });

  /* ─── KIT CARD MOUSE TRACKING GLOW ─── */
  const kitCards = document.querySelectorAll('.kit-card');
  kitCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });

  /* ─── ANIMATED STAT COUNTERS ─── */
  const statNums = document.querySelectorAll('.stat-num[data-count]');
  if (statNums.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const isDecimal = el.hasAttribute('data-decimal');
        const duration = 1600;
        const startTime = performance.now();

        const tick = (now) => {
          const pct = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - pct, 3);
          el.textContent = isDecimal
            ? (eased * target).toFixed(1)
            : Math.round(eased * target);
          if (pct < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.6 });

    statNums.forEach(el => counterObserver.observe(el));
  }

});
