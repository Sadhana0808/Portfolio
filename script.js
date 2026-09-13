// ======================================================
// PROJECT DATA
// ======================================================

const projectData = {

  // ----------------------------------------------------
  // DISEASE IDENTIFICATION PROJECT
  // ----------------------------------------------------

  disease: {
    emoji: '🏥',
    gradient: 'linear-gradient(135deg,#667eea,#764ba2)',
    title: 'Disease Identification & Medicine Recommendation',
    status: 'completed',
    statusLabel: '✅ Completed',

    stack: [
      'Python',
      'Machine Learning',
      'Django',
      'Scikit-Learn',
      'REST API'
    ],

    description:
      'An AI-powered web application that predicts diseases based on user-provided symptoms and recommends appropriate medicines. The system uses trained ML classification models to analyze symptom patterns and return accurate results through a Django REST API.',

    features: [
      'Symptom-based disease prediction using multi-class ML classifiers',
      'Medicine recommendation engine linked to predicted diagnosis',
      'Django REST API backend for clean frontend-backend separation',
      'Trained on medical symptom datasets with Scikit-Learn pipelines',
      'User-friendly input form with real-time prediction feedback',
      'Admin panel for managing symptom-disease-medicine mappings'
    ],

    // CHANGE THIS LINK IF YOUR REPOSITORY HAS A DIFFERENT NAME
    github: 'https://github.com/Sadhana0808/Disease-Identification',

    live: null
  },


  // ----------------------------------------------------
  // FURNITURE E-COMMERCE PROJECT
  // ----------------------------------------------------

  furniture: {
    emoji: '🛋️',
    gradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
    title: 'Furniture E-Commerce Website',
    status: 'completed',
    statusLabel: '✅ Completed',

    stack: [
      'PHP',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript'
    ],

    description:
      'A fully functional e-commerce platform built for furniture retail. The site supports end-to-end shopping — from product browsing and cart management to order placement — backed by a secure admin panel for inventory and order control.',

    features: [
      'Product catalogue with category filtering and search',
      'Shopping cart with quantity management and total calculation',
      'User registration, login and order history',
      'Secure admin panel for product, order and user management',
      'MySQL database with relational schema for orders and inventory',
      'Responsive design for mobile and desktop browsers'
    ],

    // CHANGE THIS LINK IF YOUR REPOSITORY HAS A DIFFERENT NAME
    github: 'https://github.com/Sadhana0808/Furniture-E-Commerce-Website',

    live: null
  },


  // ----------------------------------------------------
  // SMART RATION CARD PROJECT
  // ----------------------------------------------------

  ration: {
    emoji: '🪪',
    gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)',
    title: 'Smart Ration Card Management System',
    status: 'completed',
    statusLabel: '✅ Completed',

    stack: [
      'Django',
      'MySQL',
      'Python',
      'HTML/CSS',
      'Full Stack'
    ],

    description:
      'A full stack web application designed to digitize and streamline government ration card operations. It replaces manual paper-based processes with an online system covering beneficiary registration, stock monitoring, and grain distribution tracking.',

    features: [
      'Beneficiary registration and ration card issuance workflow',
      'Stock inventory monitoring with low-stock alerts',
      'Monthly grain distribution tracking per household',
      'Secure admin dashboard for officers and supervisors',
      'Django ORM with MySQL for reliable data management',
      'Role-based access control for admin, officer and beneficiary roles'
    ],

    // CHANGE THIS LINK IF YOUR REPOSITORY HAS A DIFFERENT NAME
    github: 'https://github.com/Sadhana0808/Smart-Ration-Card-Management-System',

    live: null
  },


  // ----------------------------------------------------
  // DIGITAL SUGGESTION BOX
  // ----------------------------------------------------

  suggestion: {
    emoji: '💡',
    gradient: 'linear-gradient(135deg,#0ea5e9,#6366f1)',
    title: 'Digital Suggestion Box App',
    status: 'in-progress',
    statusLabel: '🔧 In Progress',

    stack: [
      'Flutter',
      'Dart',
      'Mobile App'
    ],

    description:
      'A Flutter mobile application that digitizes the traditional suggestion box. Users can submit suggestions, view responses, and track status — all from their phone. Built with Flutter and Dart for a smooth cross-platform experience.',

    features: [
      'Submit suggestions digitally from any mobile device',
      'View and track the status of submitted suggestions',
      'Clean and simple UI built with Flutter widgets',
      'Cross-platform — works on both Android and iOS',
      'Admin view to manage and respond to suggestions'
    ],

    // CHANGE THIS LINK IF YOUR REPOSITORY HAS A DIFFERENT NAME
    github: 'https://github.com/Sadhana0808/Digital-Suggestion-Box',

    live: null
  }

};


// ======================================================
// CERTIFICATE LIGHTBOX
// ======================================================

const certOverlay = document.getElementById('certOverlay');
const certImg = document.getElementById('certImg');


// Open Certificate
function openCert(filename) {

  if (!certOverlay || !certImg) {
    console.error('Certificate elements not found.');
    return;
  }

  certImg.src = filename;

  certOverlay.classList.add('open');

  document.body.style.overflow = 'hidden';
}


// Close Certificate
function closeCert() {

  if (!certOverlay || !certImg) {
    return;
  }

  certOverlay.classList.remove('open');

  document.body.style.overflow = '';

  setTimeout(() => {
    certImg.src = '';
  }, 300);
}


// Close Certificate using Escape key
document.addEventListener('keydown', event => {

  if (
    event.key === 'Escape' &&
    certOverlay &&
    certOverlay.classList.contains('open')
  ) {
    closeCert();
  }

});


// Certificate cards keyboard support
document.querySelectorAll('.cert-card').forEach(card => {

  card.addEventListener('keydown', event => {

    if (event.key === 'Enter' || event.key === ' ') {

      event.preventDefault();

      card.click();
    }

  });

});


// ======================================================
// PROJECT MODAL
// ======================================================

const modalOverlay = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalHeader = document.getElementById('modalHeader');
const modalBody = document.getElementById('modalBody');


// Open Project Modal
function openModal(key) {

  const project = projectData[key];

  if (!project) {
    console.error('Project not found:', key);
    return;
  }


  // ----------------------------------------------------
  // MODAL HEADER
  // ----------------------------------------------------

  modalHeader.style.background = project.gradient;

  modalHeader.innerHTML = `

    <div class="modal-header-inner">

      <span class="big-emoji">
        ${project.emoji}
      </span>

      <h2>
        ${project.title}
      </h2>

      <div class="modal-status">

        <span class="status-badge ${project.status}">
          ${project.statusLabel}
        </span>

      </div>

    </div>

  `;


  // ----------------------------------------------------
  // TECH STACK
  // ----------------------------------------------------

  const tagsHTML = project.stack
    .map(technology => `
      <span class="tag">
        ${technology}
      </span>
    `)
    .join('');


  // ----------------------------------------------------
  // PROJECT FEATURES
  // ----------------------------------------------------

  const featuresHTML = project.features
    .map(feature => `
      <li>
        ${feature}
      </li>
    `)
    .join('');


  // ----------------------------------------------------
  // LIVE DEMO BUTTON
  // ----------------------------------------------------

  const liveButton = project.live
    ? `
      <a
        href="${project.live}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary">
        Live Demo 🚀
      </a>
    `
    : '';


  // ----------------------------------------------------
  // MODAL BODY
  // ----------------------------------------------------

  modalBody.innerHTML = `

    <div class="modal-section">

      <h4>
        About This Project
      </h4>

      <p>
        ${project.description}
      </p>

    </div>


    <div class="modal-section">

      <h4>
        Tech Stack
      </h4>

      <div class="modal-tags">
        ${tagsHTML}
      </div>

    </div>


    <div class="modal-section">

      <h4>
        Key Features
      </h4>

      <ul class="modal-features">
        ${featuresHTML}
      </ul>

    </div>


    <div class="modal-actions">

      <a
        href="${project.github}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary">

        View on GitHub 🐙

      </a>

      ${liveButton}

    </div>

  `;


  // ----------------------------------------------------
  // RESET MODAL ANIMATION
  // ----------------------------------------------------

  const modalBox = modalOverlay.querySelector('.modal-box');

  if (modalBox) {

    modalBox.style.animation = 'none';

    requestAnimationFrame(() => {
      modalBox.style.animation = '';
    });

  }


  // ----------------------------------------------------
  // SHOW MODAL
  // ----------------------------------------------------

  modalOverlay.classList.add('open');

  document.body.style.overflow = 'hidden';


  // Focus close button
  if (modalClose) {
    modalClose.focus();
  }

}


// Close Project Modal
function closeModal() {

  if (!modalOverlay) {
    return;
  }

  modalOverlay.classList.remove('open');

  document.body.style.overflow = '';

}


// ======================================================
// PROJECT CARD CLICK
// ======================================================

document
  .querySelectorAll('.project-card[data-project]')
  .forEach(card => {


    // Mouse click
    card.addEventListener('click', () => {

      openModal(card.dataset.project);

    });


    // Keyboard support
    card.addEventListener('keydown', event => {

      if (event.key === 'Enter' || event.key === ' ') {

        event.preventDefault();

        openModal(card.dataset.project);

      }

    });

  });


// ======================================================
// CLOSE MODAL BUTTON
// ======================================================

if (modalClose) {

  modalClose.addEventListener('click', closeModal);

}


// ======================================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ======================================================

if (modalOverlay) {

  modalOverlay.addEventListener('click', event => {

    if (event.target === modalOverlay) {

      closeModal();

    }

  });

}


// ======================================================
// CLOSE MODAL USING ESCAPE
// ======================================================

document.addEventListener('keydown', event => {

  if (
    event.key === 'Escape' &&
    modalOverlay &&
    modalOverlay.classList.contains('open')
  ) {

    closeModal();

  }

});


// ======================================================
// NAVBAR SCROLL
// ======================================================

const navbar = document.getElementById('navbar');
const backTop = document.getElementById('backTop');


window.addEventListener('scroll', () => {

  const scrollY = window.scrollY;


  if (navbar) {

    navbar.classList.toggle(
      'scrolled',
      scrollY > 50
    );

  }


  if (backTop) {

    backTop.classList.toggle(
      'visible',
      scrollY > 400
    );

  }


  updateActiveNav();

});


// ======================================================
// BACK TO TOP
// ======================================================

if (backTop) {

  backTop.addEventListener('click', () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

}


// ======================================================
// HAMBURGER MENU
// ======================================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');


if (hamburger && navLinks) {

  hamburger.addEventListener('click', () => {

    const isOpen =
      navLinks.classList.toggle('open');

    const spans =
      hamburger.querySelectorAll('span');


    if (isOpen) {

      if (spans[0]) {
        spans[0].style.transform =
          'rotate(45deg) translate(5px, 5px)';
      }

      if (spans[1]) {
        spans[1].style.opacity = '0';
      }

      if (spans[2]) {
        spans[2].style.transform =
          'rotate(-45deg) translate(5px, -5px)';
      }

    }

    else {

      spans.forEach(span => {

        span.style.transform = '';
        span.style.opacity = '';

      });

    }

  });

}


// ======================================================
// CLOSE MOBILE MENU AFTER NAVIGATION
// ======================================================

document.querySelectorAll('.nav-link')
  .forEach(link => {

    link.addEventListener('click', () => {

      if (navLinks) {
        navLinks.classList.remove('open');
      }


      if (hamburger) {

        hamburger
          .querySelectorAll('span')
          .forEach(span => {

            span.style.transform = '';
            span.style.opacity = '';

          });

      }

    });

  });


// ======================================================
// ACTIVE NAVIGATION LINK
// ======================================================

function updateActiveNav() {

  const sections =
    document.querySelectorAll('section[id]');

  const scrollPos =
    window.scrollY + 130;


  sections.forEach(section => {

    const top = section.offsetTop;

    const height = section.offsetHeight;

    const id = section.getAttribute('id');

    const link =
      document.querySelector(
        `.nav-link[href="#${id}"]`
      );


    if (link) {

      link.classList.toggle(
        'active',
        scrollPos >= top &&
        scrollPos < top + height
      );

    }

  });

}


// ======================================================
// TYPED TEXT EFFECT
// ======================================================

const typedEl =
  document.getElementById('typed');


const words = [

  'Web Apps 🌐',
  'ML Models 🤖',
  'REST APIs 🔗',
  'Beautiful UIs ✨',
  'AI Solutions 🧠'

];


let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;


function typeEffect() {

  if (!typedEl) {
    return;
  }


  const word =
    words[wordIndex];


  typedEl.textContent =
    word.substring(
      0,
      isDeleting
        ? charIndex - 1
        : charIndex + 1
    );


  if (isDeleting) {
    charIndex--;
  }

  else {
    charIndex++;
  }


  let speed =
    isDeleting ? 55 : 95;


  // Finished typing
  if (
    !isDeleting &&
    charIndex === word.length
  ) {

    speed = 2000;

    isDeleting = true;

  }


  // Finished deleting
  else if (
    isDeleting &&
    charIndex === 0
  ) {

    isDeleting = false;

    wordIndex =
      (wordIndex + 1) % words.length;

    speed = 400;

  }


  setTimeout(typeEffect, speed);

}


if (typedEl) {
  typeEffect();
}


// ======================================================
// COUNTER ANIMATION
// ======================================================

function animateCounters() {

  document
    .querySelectorAll('.stat-num')
    .forEach(counter => {


      const target =
        parseInt(
          counter.dataset.target,
          10
        );


      if (isNaN(target)) {
        return;
      }


      const duration = 1600;

      const step =
        target / (duration / 16);


      let current = 0;


      const tick = () => {

        current += step;


        if (current < target) {

          counter.textContent =
            Math.floor(current);

          requestAnimationFrame(tick);

        }

        else {

          counter.textContent =
            target;

        }

      };


      tick();

    });

}


// ======================================================
// SCROLL REVEAL
// ======================================================

const revealTargets =
  document.querySelectorAll(

    '.about-grid, ' +
    '.skill-pill, ' +
    '.project-card, ' +
    '.contact-grid, ' +
    '.section-header, ' +
    '.quick-card, ' +
    '.contact-item'

  );


revealTargets.forEach(element => {

  element.classList.add('reveal');

});


let countersAnimated = false;


// ======================================================
// REVEAL OBSERVER
// ======================================================

const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

        }

      });

    },

    {
      threshold: 0.1
    }

  );


revealTargets.forEach(element => {

  revealObserver.observe(element);

});


// ======================================================
// HERO COUNTER OBSERVER
// ======================================================

const heroObserver =
  new IntersectionObserver(

    entries => {

      if (
        entries[0].isIntersecting &&
        !countersAnimated
      ) {

        countersAnimated = true;

        animateCounters();

      }

    },

    {
      threshold: 0.3
    }

  );


const heroSection =
  document.getElementById('home');


if (heroSection) {

  heroObserver.observe(heroSection);

}


// ======================================================
// WINDOW LOAD
// ======================================================

window.addEventListener('load', () => {

  if (!countersAnimated) {

    countersAnimated = true;

    animateCounters();

  }

});


// ======================================================
// CONTACT FORM
// ======================================================

const contactForm =
  document.getElementById('contactForm');

const formSuccess =
  document.getElementById('formSuccess');

const submitBtn =
  document.getElementById('submitBtn');


if (contactForm) {

  contactForm.addEventListener(
    'submit',
    event => {

      event.preventDefault();


      if (!submitBtn) {
        return;
      }


      const originalText =
        submitBtn.textContent;


      submitBtn.textContent =
        'Sending... ⏳';


      submitBtn.disabled = true;


      // ------------------------------------------------
      // DEMO FORM
      // ------------------------------------------------
      // Replace this with Formspree or another form
      // service when you want real message delivery.
      // ------------------------------------------------

      setTimeout(() => {

        submitBtn.textContent =
          originalText;

        submitBtn.disabled = false;


        if (formSuccess) {

          formSuccess.classList.add('show');

        }


        contactForm.reset();


        setTimeout(() => {

          if (formSuccess) {

            formSuccess.classList.remove('show');

          }

        }, 4500);


      }, 1500);

    }

  );

}


// ======================================================
// SMOOTH SCROLL
// ======================================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {


    anchor.addEventListener(
      'click',
      function (event) {

        const id =
          this.getAttribute('href');


        if (id === '#') {
          return;
        }


        const target =
          document.querySelector(id);


        if (target) {

          event.preventDefault();


          window.scrollTo({

            top:
              target.getBoundingClientRect().top +
              window.scrollY -
              80,

            behavior: 'smooth'

          });

        }

      }

    );

  });


// ======================================================
// CURSOR GLOW
// ======================================================

const glow =
  document.createElement('div');


glow.style.cssText = `

  position: fixed;

  width: 380px;

  height: 380px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(139,92,246,0.055) 0%,
      transparent 70%
    );

  pointer-events: none;

  z-index: 9999;

  transform: translate(-50%,-50%);

  transition:
    left 0.08s ease,
    top 0.08s ease;

`;


document.body.appendChild(glow);


// Move glow with mouse
document.addEventListener(
  'mousemove',
  event => {

    glow.style.left =
      event.clientX + 'px';

    glow.style.top =
      event.clientY + 'px';

  }
);


// ======================================================
// PROJECT CARD TILT EFFECT
// ======================================================

document
  .querySelectorAll('.project-card')
  .forEach(card => {


    card.addEventListener(
      'mousemove',
      event => {

        const rect =
          card.getBoundingClientRect();


        const rotX =
          (
            (event.clientY -
              rect.top -
              rect.height / 2) /
            (rect.height / 2)
          ) * 4;


        const rotY =
          (
            (event.clientX -
              rect.left -
              rect.width / 2) /
            (rect.width / 2)
          ) * -4;


        card.style.transform =
          `perspective(700px)
           rotateX(${rotX}deg)
           rotateY(${rotY}deg)
           translateY(-10px)`;

      }

    );


    card.addEventListener(
      'mouseleave',
      () => {

        card.style.transform = '';

      }
    );

  });


// ======================================================
// CONSOLE MESSAGE
// ======================================================

console.log(
  '%c✦ Portfolio — Sadhana Bhat',
  'color:#8b5cf6;font-size:16px;font-weight:bold;'
);