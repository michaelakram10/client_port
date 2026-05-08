"use strict";

/* ── ELEMENTS ── */
const progress    = document.querySelector("#progress");
const backToTop   = document.querySelector("#back-to-top");
const navToggle   = document.querySelector(".nav-toggle");
const mobileMenu  = document.querySelector("#mobile-menu");
const navLinks    = document.querySelectorAll(".nav-link");
const typedText   = document.querySelector("#typed-text");
const revealItems = document.querySelectorAll(".reveal");
const staggerItems= document.querySelectorAll(".stagger-child");
const pageLoader  = document.querySelector("#page-loader");
const sections    = document.querySelectorAll("section[id]");

/* ── TYPEWRITER ── */
const phrases = [
  "Intelligent Systems Engineer.",
  "Embedded Systems Developer.",
  "IoT & ML Enthusiast.",
  "Hardware + Software Builder.",
];

let phraseIndex    = 0;
let characterIndex = 0;
let deleting       = false;

function typeLoop() {
  const current = phrases[phraseIndex];

  typedText.textContent = current.slice(0, characterIndex);

  if (!deleting && characterIndex === current.length) {
    deleting = true;
    window.setTimeout(typeLoop, 1600);
    return;
  }

  if (deleting && characterIndex === 0) {
    deleting      = false;
    phraseIndex   = (phraseIndex + 1) % phrases.length;
    window.setTimeout(typeLoop, 420);
    return;
  }

  characterIndex += deleting ? -1 : 1;
  window.setTimeout(typeLoop, deleting ? 46 : 80);
}

/* ── PAGE LOADER ── */
function initPageLoader() {
  // Wait for loader bar animation (~900ms) then hide
  window.setTimeout(() => {
    pageLoader.classList.add("hidden");
    document.body.classList.remove("page-loading");
    document.body.classList.add("page-ready");
    // Start typewriter after page reveals
    window.setTimeout(typeLoop, 200);
  }, 1050);
}

/* ── SCROLL PROGRESS + BACK TO TOP ── */
function updateProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percent   = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progress.style.width = `${percent}%`;
  backToTop.classList.toggle("is-visible", window.scrollY > 420);
}

/* ── SCROLL-SPY: active nav link ── */
function updateActiveNav() {
  let currentId = "home";

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    // Consider a section "active" when its top is above 40% of the viewport
    if (top <= window.innerHeight * 0.4) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    const active = link.dataset.section === currentId;
    link.classList.toggle("is-active", active);
  });
}

/* ── MOBILE MENU ── */
function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation menu");
  const icon = navToggle.querySelector("i");
  icon.className = "fa-solid fa-bars";
  icon.setAttribute("aria-hidden", "true");
}

function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  const icon = navToggle.querySelector("i");
  icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  icon.setAttribute("aria-hidden", "true");
}

/* ── INTERSECTION OBSERVERS ── */

// Reveal sections
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach(item => revealObserver.observe(item));

// Stagger grid children
const staggerObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        staggerObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

staggerItems.forEach(item => staggerObserver.observe(item));

/* ── EVENT LISTENERS ── */
navToggle.addEventListener("click", toggleMobileMenu);

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  updateProgress();
  updateActiveNav();
}, { passive: true });

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMobileMenu();
  updateProgress();
}, { passive: true });

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMobileMenu();
});

/* ── INIT ── */
updateProgress();
updateActiveNav();
initPageLoader();