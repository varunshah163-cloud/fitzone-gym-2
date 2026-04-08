// ==================== DOM ELEMENTS ====================
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const scrollTopBtn = document.getElementById("scrollTop");
const statNumbers = document.querySelectorAll(".stat-number");

// ==================== NAVBAR SCROLL EFFECT ====================
function handleNavbarScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleNavbarScroll);

// ==================== MOBILE MENU TOGGLE ====================
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.style.overflow = navMenu.classList.contains("active")
    ? "hidden"
    : "";
});

// Close mobile menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================
const sections = document.querySelectorAll("section[id]");

function updateActiveNavLink() {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      if (navLink) navLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink);

// ==================== SCROLL TO TOP BUTTON ====================
function handleScrollTop() {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
}

window.addEventListener("scroll", handleScrollTop);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ==================== ANIMATED STAT COUNTERS ====================
let countersAnimated = false;

function animateCounters() {
  const statsSection = document.querySelector(".hero-stats");
  const statsSectionTop = statsSection.offsetTop;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY + windowHeight >= statsSectionTop + 100 && !countersAnimated) {
    countersAnimated = true;

    statNumbers.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    });
  }
}

window.addEventListener("scroll", animateCounters);
// Trigger on load if already in view
animateCounters();

// ==================== SWIPER TESTIMONIALS ====================
const testimonialsSwiper = new Swiper(".testimonials-slider", {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
});

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ==================== SCROLL REVEAL ANIMATION ====================
const revealElements = document.querySelectorAll(
  ".service-card, .trainer-card, .pricing-card, .about-content, .about-images",
);

function handleScrollReveal() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active", "reveal");
    }
  });
}

// Initialize reveal elements
revealElements.forEach((el) => el.classList.add("reveal"));
window.addEventListener("scroll", handleScrollReveal);
handleScrollReveal(); // Trigger on load

// ==================== FORM HANDLING ====================
const contactForm = document.querySelector(".contact-form");
const newsletterForm = document.querySelector(".newsletter-form");

// Contact form success message
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    // Netlify handles the form submission
    // This is for showing a success message after submission
    setTimeout(() => {
      const successMessage = document.createElement("div");
      successMessage.className = "form-success";
      successMessage.innerHTML = `
                <div style="text-align: center; padding: 20px; background: #d4edda; border-radius: 8px; color: #155724;">
                    <i class="fas fa-check-circle" style="font-size: 40px; margin-bottom: 10px;"></i>
                    <h3 style="margin-bottom: 5px;">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you soon!</p>
                </div>
            `;

      // Check if form was actually submitted (Netlify will redirect or handle)
      // This is a visual enhancement
    }, 1000);
  });
}

// ==================== PARALLAX EFFECT FOR HERO ====================
function handleParallax() {
  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  if (hero && heroContent) {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
      heroContent.style.opacity = 1 - scrolled / 700;
    }
  }
}

window.addEventListener("scroll", handleParallax);

// ==================== LAZY LOADING IMAGES ====================
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  document.body.appendChild(script);
}

// ==================== PRELOADER (Optional) ====================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Trigger any load animations
  setTimeout(() => {
    handleScrollReveal();
    animateCounters();
  }, 100);
});

// ==================== CONSOLE MESSAGE ====================
console.log(
  "%c🏋️ FitZone Gym - Built with ❤️",
  "color: #ff4757; font-size: 16px; font-weight: bold;",
);
console.log("%cDeployed on Netlify", "color: #00c7b7; font-size: 12px;");
