const skillMessages = {
  'HTML': `My proficiency in HTML comes from years of hands-on experience building web pages from scratch, both for academic projects and personal endeavors. I have a solid understanding of semantic markup, accessibility, and best practices, which allows me to create well-structured and maintainable websites. Regularly updating my knowledge with the latest HTML features ensures my code remains modern and efficient.`,
  'CSS': `I excel in CSS due to my extensive work designing responsive and visually appealing interfaces. I am adept at using advanced layout techniques like Flexbox and Grid, and I consistently experiment with animations and transitions to enhance user experience. My keen eye for design and attention to detail allow me to translate creative concepts into polished, professional web pages.`,
  'JavaScript': `I have a strong foundation in JavaScript, having used it to add interactivity and dynamic features to numerous web projects. My experience covers core concepts such as DOM manipulation, event handling, and basic ES6+ syntax. While I continue to deepen my understanding, I am confident in my ability to solve problems and implement essential functionality using JavaScript.`,
  'Java': `My proficiency in Java is rooted in both academic coursework and practical application. I have developed various object-oriented programs, from simple console applications to more complex projects involving data structures and algorithms. This experience has given me a solid grasp of Java's syntax, principles, and real-world use cases.`,
  'Communication': `I am highly skilled in communication, as demonstrated by my ability to clearly convey ideas in group projects, presentations, and written reports. My experience collaborating with diverse teams has strengthened my listening skills and taught me how to adapt my message for different audiences. This proficiency helps ensure smooth teamwork and successful project outcomes.`,
  'Leadership': `I have honed my leadership skills by taking on roles such as project lead and student organization officer. I am comfortable guiding teams, delegating tasks, and motivating others to achieve shared goals. My leadership style emphasizes collaboration, accountability, and fostering a positive, productive environment for everyone involved.`,
  'Problem-Solving': `I have consistently demonstrated strong problem-solving skills through my approach to tackling complex coding challenges and project obstacles. Whether debugging intricate issues in my programs or finding efficient solutions during group assignments, I rely on logical thinking and persistence. My ability to break down large problems into manageable steps and explore multiple solutions has helped me deliver reliable results in both academic and real-world scenarios.`,
  'Creativity': `Creativity is at the heart of my work, whether I'm designing visually engaging websites or brainstorming innovative project ideas. I enjoy experimenting with new layouts, color schemes, and interactive elements to make my work stand out. My creative mindset not only enhances the aesthetic appeal of my projects but also helps me approach challenges from fresh perspectives, leading to unique and effective solutions.`
};

function showSkillModal(skill) {
  document.getElementById('skill-modal-title').innerText = skill;
  document.getElementById('skill-modal-message').innerText = skillMessages[skill] || '';
  document.getElementById('skill-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function hideSkillModal() {
  document.getElementById('skill-modal').style.display = 'none';
  document.body.style.overflow = '';
}

function openProject(card) {
  const url = card.getAttribute('data-url');
  const title = card.querySelector('.project-title').textContent;
  
  if (confirm(`You are about to leave this site to view "${title}".\n\nWould you like to proceed?`)) {
    window.open(url, '_blank');
  }
}

// FAQ dropdown toggle with animation
function toggleFAQ(faqItem) {
  faqItem.classList.toggle('active');
}

// Burger menu toggle for mobile navbar
const burger = document.getElementById('burger-menu');
const navList = document.getElementById('nav-list');
if (burger && navList) {
  burger.addEventListener('click', function() {
    const isOpen = navList.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  // Close menu on nav link click (for single page UX)
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Back to Top Button functionality
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll spy for navbar active link
const navLinks = document.querySelectorAll('.navbar ul li a');
const sections = [
  document.getElementById('home'),
  document.getElementById('about'),
  document.getElementById('education'),
  document.getElementById('skills'),
  document.getElementById('projects'),
  document.getElementById('contact')
];
const sectionIds = ['home', 'about', 'education', 'skills', 'projects', 'contact'];

function onScrollSpy() {
  let currentSection = 'home';
  let minDist = window.innerHeight;
  sections.forEach((section, i) => {
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && Math.abs(rect.top) < minDist) {
        minDist = Math.abs(rect.top);
        currentSection = sectionIds[i];
      }
    }
  });
  navLinks.forEach(link => {
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', onScrollSpy);
window.addEventListener('DOMContentLoaded', onScrollSpy);

// Privacy Modal logic
const privacyLink = document.getElementById('privacy-link');
const privacyModal = document.getElementById('privacy-modal');
function showPrivacyModal() {
  privacyModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function hidePrivacyModal() {
  privacyModal.style.display = 'none';
  document.body.style.overflow = '';
}
if (privacyLink && privacyModal) {
  privacyLink.addEventListener('click', function(e) {
    e.preventDefault();
    showPrivacyModal();
  });
}

// Terms Modal logic
const termsLink = document.getElementById('terms-link');
const termsModal = document.getElementById('terms-modal');
function showTermsModal() {
  termsModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function hideTermsModal() {
  termsModal.style.display = 'none';
  document.body.style.overflow = '';
}
if (termsLink && termsModal) {
  termsLink.addEventListener('click', function(e) {
    e.preventDefault();
    showTermsModal();
  });
}

// Mobile Scroll Animations
function initMobileScrollAnimations() {
  // Only run on mobile devices
  if (window.innerWidth > 600) return;
  
  // Elements to animate
  const animatedElements = [
    ...document.querySelectorAll('.service-card'),
    ...document.querySelectorAll('.education-card'),
    ...document.querySelectorAll('.skill-bar'),
    ...document.querySelectorAll('.project-card'),
    ...document.querySelectorAll('.faq-item'),
    ...document.querySelectorAll('.about-details h2, .education-title, .skills-title, .projects-title, .contact-title'),
    ...document.querySelectorAll('.stat'),
    ...document.querySelectorAll('.form-group'),
    ...document.querySelectorAll('.footer-column')
  ];
  
  // Create Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Unobserve after animation to prevent re-triggering
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe all animated elements
  animatedElements.forEach(el => {
    if (el) observer.observe(el);
  });
  
  // Parallax effect for hero section
  let ticking = false;
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    }
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick);
  
  // Navbar slide effect
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
  });
  
  // Add bounce effect to back to top button
  if (backToTopBtn) {
    backToTopBtn.addEventListener('mouseenter', () => {
      backToTopBtn.style.animation = 'mobileBounce 0.6s ease-in-out';
    });
    
    backToTopBtn.addEventListener('animationend', () => {
      backToTopBtn.style.animation = '';
    });
  }
  
  // Add touch feedback for interactive elements
  const touchElements = document.querySelectorAll('.service-card, .education-card, .project-card, .skill-bar, .faq-item');
  
  touchElements.forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.98)';
    });
    
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize mobile animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileScrollAnimations();
});

// Re-initialize on window resize
window.addEventListener('resize', () => {
  // Clear existing animations
  document.querySelectorAll('.animate-in').forEach(el => {
    el.classList.remove('animate-in');
  });
  
  // Re-initialize
  setTimeout(initMobileScrollAnimations, 100);
});