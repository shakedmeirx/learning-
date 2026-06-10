const CONFIG = {
  whatsappNumber: '972500000000', // Change this to your business phone number
  colors: [
    { name: 'ורוד עדין', hex: '#F3D2C1' },
    { name: 'ורוד פודרה', hex: '#ECC4C4' },
    { name: 'לבנדר רך', hex: '#D7CBE4' },
    { name: 'אפרסק', hex: '#F6C3A6' },
    { name: 'לאטה', hex: '#D5C4B4' },
    { name: 'בורדו', hex: '#A84F5B' }
  ],
  kits: {
    'kit-prep-removal': {
      title: 'ערכת המתחילה',
      price: '₪149',
      image: './assets/kit_prep_removal.png',
      hasColors: false
    },
    'kit-diy-gel': {
      title: 'ערכת הסטודיו הביתי',
      price: '₪389',
      image: './assets/kit_diy_gel.png',
      hasColors: false
    },
    'kit-beginner-tech': {
      title: 'ערכת האמנית הביתית',
      price: '₪549',
      image: './assets/kit_beginner_drill.png',
      hasColors: false
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  /* ─── STATE ─── */
  let selectedColors = [];
  let lastFocusedElement = null;

  /* ─── POPULATE DYNAMIC WHATSAPP LINKS ─── */
  function populateWhatsAppLinks() {
    const links = document.querySelectorAll('.whatsapp-link');
    links.forEach(link => {
      const type = link.dataset.waType;
      let text = '';
      switch (type) {
        case 'help':
          text = 'היי, אשמח לקבל עזרה בבחירת ערכת ציפורניים של BLOOM';
          break;
        case 'general':
          text = 'היי, אני לא בטוחה איזו ערכת ציפורניים מתאימה לי ואשמח להתייעץ';
          break;
        default:
          text = 'היי, אשמח לקבל פרטים נוספים על ערכות הציפורניים של BLOOM';
          break;
      }
      link.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
      link.rel = 'noopener noreferrer';
    });
  }
  populateWhatsAppLinks();

  /* ─── SCROLL REVEAL ANIMATIONS ─── */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  if (window.location.search.includes('qa')) {
    revealElements.forEach(el => el.classList.add('visible'));
  } else {
    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ─── HEADER SCROLLED STATE ─── */
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ─── MOBILE DRAWER MENU ─── */
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileDrawer.removeAttribute('inert');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
    const firstFocusable = mobileDrawer.querySelector('a, button:not([disabled])');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeDrawer() {
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileDrawer.setAttribute('inert', '');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
    hamburgerBtn.focus();
  }

  hamburgerBtn.addEventListener('click', () => {
    if (mobileDrawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerCloseBtn.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // Focus trap within drawer
  mobileDrawer.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !mobileDrawer.classList.contains('active')) return;
    const focusable = Array.from(mobileDrawer.querySelectorAll('a[href], button:not([disabled])'));
    if (focusable.length < 2) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  /* ─── FAQ ACCORDION ─── */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const contentId = `faq-content-${index + 1}`;
    content.id = contentId;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', contentId);

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-content').style.maxHeight = null;
          otherItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  /* ─── INTERACTIVE COLOR SELECTORS ─── */
  function renderColorSwatches(container, isModal = false) {
    if (!container) return;
    container.innerHTML = '';
    
    CONFIG.colors.forEach(color => {
      const swatch = document.createElement('button');
      swatch.type = 'button';
      swatch.className = 'color-swatch';
      swatch.style.backgroundColor = color.hex;
      swatch.title = color.name;
      swatch.dataset.colorName = color.name;
      swatch.setAttribute('aria-label', `בחירת גוון ${color.name}`);
      swatch.setAttribute('aria-pressed', selectedColors.includes(color.name) ? 'true' : 'false');

      // Check mark indicator
      const check = document.createElement('span');
      check.className = 'swatch-check';
      check.innerHTML = '✓';
      swatch.appendChild(check);

      // Color label below swatch
      const label = document.createElement('span');
      label.className = 'swatch-label';
      label.textContent = color.name;
      swatch.appendChild(label);

      if (selectedColors.includes(color.name)) {
        swatch.classList.add('active');
      }

      swatch.addEventListener('click', () => {
        if (selectedColors.includes(color.name)) {
          selectedColors = selectedColors.filter(c => c !== color.name);
        } else {
          if (selectedColors.length >= 2) {
            selectedColors.shift(); // Remove oldest
          }
          selectedColors.push(color.name);
        }
        updateColorSelectorsUI();
      });

      container.appendChild(swatch);
    });
  }

  function updateColorSelectorsUI() {
    // Update inline swatches (DIY card)
    const inlineSwatches = document.querySelectorAll('#diy-kit-color-swatches .color-swatch');
    inlineSwatches.forEach(swatch => {
      const colorName = swatch.dataset.colorName;
      if (selectedColors.includes(colorName)) {
        swatch.classList.add('active');
        swatch.setAttribute('aria-pressed', 'true');
      } else {
        swatch.classList.remove('active');
        swatch.setAttribute('aria-pressed', 'false');
      }
    });

    // Update modal swatches
    const modalSwatches = document.querySelectorAll('#modal-color-swatches .color-swatch');
    modalSwatches.forEach(swatch => {
      const colorName = swatch.dataset.colorName;
      if (selectedColors.includes(colorName)) {
        swatch.classList.add('active');
        swatch.setAttribute('aria-pressed', 'true');
      } else {
        swatch.classList.remove('active');
        swatch.setAttribute('aria-pressed', 'false');
      }
    });

    // Update names text in both places
    const textContent = selectedColors.length > 0 
      ? selectedColors.join(' + ') 
      : 'לא נבחרו צבעים';
      
    const inlineNames = document.getElementById('diy-kit-selected-colors-names');
    if (inlineNames) inlineNames.textContent = textContent;

    const modalNames = document.getElementById('modal-colors-selected-names');
    if (modalNames) modalNames.textContent = textContent;
  }

  // Initial render of color swatches on the landing page
  const diyKitSwatchesContainer = document.getElementById('diy-kit-color-swatches');
  renderColorSwatches(diyKitSwatchesContainer);

  /* ─── PREMIUM CHECKOUT MODAL LOGIC ─── */
  const checkoutModal = document.getElementById('checkout-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalOverlay = checkoutModal.querySelector('.modal-overlay');
  const checkoutForm = document.getElementById('checkout-form');
  
  let currentKitId = '';

  function openCheckoutModal(kitId) {
    currentKitId = kitId;
    const kit = CONFIG.kits[kitId];
    if (!kit) return;
    lastFocusedElement = document.activeElement;

    // Populate modal details
    document.getElementById('modal-kit-title').textContent = kit.title;
    document.getElementById('modal-kit-price').textContent = kit.price;
    document.getElementById('modal-kit-image').src = kit.image;
    document.getElementById('modal-kit-image').alt = kit.title;

    // Show/hide color section
    const colorsSection = document.getElementById('modal-colors-section');
    if (kit.hasColors) {
      colorsSection.style.display = 'block';
      const modalSwatchesContainer = document.getElementById('modal-color-swatches');
      renderColorSwatches(modalSwatchesContainer, true);
      updateColorSelectorsUI();
    } else {
      colorsSection.style.display = 'none';
    }

    // Open modal UI
    checkoutModal.removeAttribute('inert');
    checkoutModal.classList.add('active');
    checkoutModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.getElementById('customer-name').focus();
  }

  function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    checkoutModal.setAttribute('aria-hidden', 'true');
    checkoutModal.setAttribute('inert', '');
    document.body.style.overflow = '';
    checkoutForm.reset();
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }

  // Bind all order buttons dynamically
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.order-btn');
    if (btn) {
      e.preventDefault();
      const kitId = btn.dataset.kitId;
      if (kitId) openCheckoutModal(kitId);
    }
  });

  modalCloseBtn.addEventListener('click', closeCheckoutModal);
  modalOverlay.addEventListener('click', closeCheckoutModal);

  // Focus trap within modal
  checkoutModal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !checkoutModal.classList.contains('active')) return;
    const focusable = Array.from(checkoutModal.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    ));
    if (focusable.length < 2) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (checkoutModal.classList.contains('active')) {
        closeCheckoutModal();
      }
      if (mobileDrawer.classList.contains('active')) {
        closeDrawer();
      }
    }
  });

  // Form submit handler
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const kit = CONFIG.kits[currentKitId];
    if (!kit) return;

    const name = document.getElementById('customer-name').value.trim();
    const city = document.getElementById('customer-city').value.trim();
    const giftWrap = document.getElementById('gift-wrap').checked;

    // Format WhatsApp message
    let waText = `היי בלום! 🌸\nאשמח להזמין את *${kit.title}* במחיר של ${kit.price}.\n\n`;
    waText += `*פרטי הזמנה ומשלוח:*\n`;
    waText += `• שם מלא: ${name}\n`;
    waText += `• עיר מגורים: ${city}\n`;
    waText += `• אריזת מתנה: ${giftWrap ? 'כן, אשמח! 🎁' : 'לא'}\n`;
    
    if (kit.hasColors) {
      waText += `• גוונים שנבחרו: ${selectedColors.join(', ')}\n`;
    }
    
    waText += `\nנא לחזור אליי להסדרת התשלום והמשלוח. תודה!`;

    // Redirect
    const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank', 'noopener');
    closeCheckoutModal();
  });

  /* ─── INTERACTIVE QUIZ LOGIC ─── */
  const quizSteps = document.querySelectorAll('.quiz-step');
  const quizResult = document.getElementById('quiz-result');
  const progressFill = document.querySelector('.progress-fill');
  const progressStepText = document.querySelector('.progress-step span');
  const quizOptions = document.querySelectorAll('.quiz-option');
  const resetQuizBtn = document.getElementById('reset-quiz');

  // Answers object
  let quizAnswers = {
    goal: '',
    experience: '',
    equipment: ''
  };

  let currentStep = 1;
  const totalSteps = 3;

  // Option Click Handler
  quizOptions.forEach(option => {
    option.addEventListener('click', () => {
      const stepName = option.dataset.step;
      const stepValue = option.dataset.value;

      // Save answer
      quizAnswers[stepName] = stepValue;

      if (currentStep < totalSteps) {
        // Go to next step
        goToStep(currentStep + 1);
      } else {
        // Show result
        showQuizResult();
      }
    });
  });

  function goToStep(step) {
    // Hide current step
    document.getElementById(`quiz-step-${currentStep}`).classList.remove('active');
    
    // Update step counter
    currentStep = step;
    
    // Show next step
    document.getElementById(`quiz-step-${currentStep}`).classList.add('active');

    // Update progress bar
    const percent = (currentStep / totalSteps) * 100;
    progressFill.style.width = `${percent}%`;
    progressStepText.textContent = currentStep;
  }

  function showQuizResult() {
    // Hide last step
    document.getElementById(`quiz-step-3`).classList.remove('active');
    
    // Fill progress to 100%
    progressFill.style.width = '100%';
    progressStepText.textContent = totalSteps;

    // Recommendation logic
    let recommendedKitId = 'kit-prep-removal'; // Default
    let kitDesc = '';

    // Branching decisions
    if (quizAnswers.goal === 'nail-tech' || quizAnswers.experience === 'course' || quizAnswers.equipment === 'drill-upgrade') {
      recommendedKitId = 'kit-beginner-tech';
      kitDesc = 'זו כנראה הערכה המתאימה עבורך. מאחר שהמטרה שלך היא לעבוד עם לקוחות או חברות, או שיש לך כבר מנורה ומניקור בסיסי ומחפשת לשדרג לכלים ומכונת שיוף למתחילות.';
    } else if (quizAnswers.goal === 'prep-only' || (quizAnswers.goal === 'diy-gel' && quizAnswers.experience === 'none' && quizAnswers.equipment === 'has-lamp')) {
      recommendedKitId = 'kit-prep-removal';
      kitDesc = 'הבחירה המומלצת עבורך. מכיוון שאת מעוניינת בבסיס הבטוח ביותר — הכנה נכונה והסרה מסודרת של לק ג׳ל בבית, או שיש לך כבר מנורת ייבוש ואת צריכה רק את כלי ההכנה והסרת הלק.';
    } else {
      recommendedKitId = 'kit-diy-gel';
      kitDesc = 'הערכה המתאימה ביותר עבורך. היא כוללת את מנורת הייבוש, צבעים יפים, ואת כל כלי ההכנה וההסרה כדי להתחיל לעשות לק ג׳ל לעצמך בבית מאפס מוחלט באופן מסודר ובטוח.';
    }

    const kit = CONFIG.kits[recommendedKitId];
    if (!kit) return;

    // Set result UI
    document.getElementById('result-kit-title').textContent = kit.title;
    document.getElementById('result-kit-desc').textContent = kitDesc;
    document.getElementById('result-kit-image').src = kit.image;
    document.getElementById('result-kit-image').alt = kit.title;

    // Target link to kit scroll
    const resultLink = document.getElementById('result-scroll-link');
    resultLink.href = `#${recommendedKitId}`;

    // Set dataset kit id on quiz result order btn
    const resultOrderBtn = document.getElementById('result-order-btn');
    resultOrderBtn.dataset.kitId = recommendedKitId;

    // Show result div
    quizResult.classList.add('active');
  }

  // Reset quiz
  resetQuizBtn.addEventListener('click', () => {
    quizResult.classList.remove('active');
    quizAnswers = { goal: '', experience: '', equipment: '' };
    currentStep = 1;
    goToStep(1);
  });

  /* ─── TESTIMONIALS CAROUSEL LOGIC ─── */
  const carouselTrack = document.getElementById('reviews-carousel');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const dots = document.querySelectorAll('#carousel-dots-container .carousel-dot');
  const reviewCards = document.querySelectorAll('#reviews-carousel .review-card');
  
  let currentSlide = 0;
  const totalSlides = reviewCards.length;

  function updateCarouselUI() {
    // Smooth scroll to card
    const targetCard = reviewCards[currentSlide];
    if (targetCard && carouselTrack) {
      // In RTL, we might want to calculate the offset relative to the track's scrollWidth
      const offset = targetCard.offsetLeft - carouselTrack.offsetLeft;
      carouselTrack.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
    }

    // Update active dots
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('active');
        dot.removeAttribute('aria-current');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarouselUI();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarouselUI();
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      currentSlide = parseInt(e.target.dataset.index, 10);
      updateCarouselUI();
    });
  });

  // Handle manual scroll snaps on mobile (updating dots accordingly)
  let scrollTimeout;
  if (carouselTrack) {
    carouselTrack.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Detect which slide is currently in view
        const trackWidth = carouselTrack.clientWidth;
        const scrollLeftValue = Math.abs(carouselTrack.scrollLeft);
        
        let minDiff = Infinity;
        let activeIndex = 0;
        
        reviewCards.forEach((card, index) => {
          // Calculate difference from target scrollLeft
          const cardOffset = Math.abs(card.offsetLeft - carouselTrack.offsetLeft);
          const diff = Math.abs(cardOffset - scrollLeftValue);
          if (diff < minDiff) {
            minDiff = diff;
            activeIndex = index;
          }
        });
        
        if (currentSlide !== activeIndex) {
          currentSlide = activeIndex;
          dots.forEach((dot, index) => {
            if (index === currentSlide) {
              dot.classList.add('active');
              dot.setAttribute('aria-current', 'true');
            } else {
              dot.classList.remove('active');
              dot.removeAttribute('aria-current');
            }
          });
        }
      }, 100);
    });
  }
});
