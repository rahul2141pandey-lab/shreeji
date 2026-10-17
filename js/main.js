/**
 * =========================================================================
 * SHREEJI WEB STUDIO - MAIN INTERACTIVITY
 * =========================================================================
 * Handles sticky header, mobile drawer navigation, FAQ accordions,
 * package pre-fills, and contact submissions.
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.STUDIO_CONFIG || {};

  /* ------------------------------------------------------------------------
     1. Inject Config Values into DOM
     ------------------------------------------------------------------------ */
  function applyConfig() {
    // WhatsApp direct links
    const waLinks = document.querySelectorAll(".js-wa-link");
    waLinks.forEach(link => {
      const cleanNumber = (config.whatsappNumber || "919876543210").replace(/[^0-9]/g, "");
      const msgType = link.dataset.msgType || "general";
      const message = config.whatsappMessages?.[msgType] || config.whatsappMessages?.general || "";
      link.href = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });

    // Email links
    const emailLinks = document.querySelectorAll(".js-email-link");
    emailLinks.forEach(link => {
      if (config.email) {
        link.href = `mailto:${config.email}?subject=${encodeURIComponent("Website Inquiry - Shreeji Web Studio")}`;
      }
    });

    // Social links
    if (config.socials) {
      const ig = document.getElementById("social-instagram");
      const igFoot = document.getElementById("footer-social-instagram");
      if (ig && config.socials.instagram) ig.href = config.socials.instagram;
      if (igFoot && config.socials.instagram) igFoot.href = config.socials.instagram;
    }
  }

  applyConfig();

  /* ------------------------------------------------------------------------
     2. Sticky Header Compact on Scroll
     ------------------------------------------------------------------------ */
  const header = document.querySelector(".header");
  function handleScroll() {
    if (window.scrollY > 30) {
      header?.classList.add("header-scrolled");
    } else {
      header?.classList.remove("header-scrolled");
    }
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  /* ------------------------------------------------------------------------
     3. Mobile Navigation Drawer
     ------------------------------------------------------------------------ */
  const hamburger = document.querySelector(".hamburger");
  const mobileDrawer = document.querySelector(".mobile-nav-drawer");
  const mobileOverlay = document.querySelector(".mobile-nav-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-nav-cta .btn");

  function openMobileNav() {
    hamburger?.classList.add("is-active");
    mobileDrawer?.classList.add("is-active");
    mobileOverlay?.classList.add("is-active");
    hamburger?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    hamburger?.classList.remove("is-active");
    mobileDrawer?.classList.remove("is-active");
    mobileOverlay?.classList.remove("is-active");
    hamburger?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  hamburger?.addEventListener("click", () => {
    if (hamburger.classList.contains("is-active")) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  mobileOverlay?.addEventListener("click", closeMobileNav);
  mobileLinks.forEach(l => l.addEventListener("click", closeMobileNav));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileNav();
  });

  /* ------------------------------------------------------------------------
     4. FAQ Accordion Interaction
     ------------------------------------------------------------------------ */
  const faqTriggers = document.querySelectorAll(".faq-trigger");

  faqTriggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".faq-card");
      const content = card.querySelector(".faq-content");
      const isOpen = card.classList.contains("is-open");

      // Close all other accordions for neat single-open view
      document.querySelectorAll(".faq-card").forEach(other => {
        if (other !== card) {
          other.classList.remove("is-open");
          const otherContent = other.querySelector(".faq-content");
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (isOpen) {
        card.classList.remove("is-open");
        content.style.maxHeight = null;
      } else {
        card.classList.add("is-open");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  /* ------------------------------------------------------------------------
     5. Smart Pre-fill CTAs into Contact Form
     ------------------------------------------------------------------------ */
  const prefillButtons = document.querySelectorAll(".js-prefill-cta");
  const serviceSelect = document.getElementById("form-need");
  const contactSection = document.getElementById("contact");
  const contactCard = document.querySelector(".contact-col");

  prefillButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetService = btn.dataset.service;
      if (targetService && serviceSelect) {
        serviceSelect.value = targetService;
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          if (contactCard) {
            contactCard.style.boxShadow = "0 0 0 3px #C59A3F, 0 16px 40px rgba(197, 154, 63, 0.22)";
            setTimeout(() => {
              contactCard.style.boxShadow = "";
            }, 1800);
          }
        }, 500);
      }
    });
  });

  /* ------------------------------------------------------------------------
     6. Contact Form Validation & Submission with Clear Real Feedback
     ------------------------------------------------------------------------ */
  const enquiryForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatusMsg");

  function showStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = `form-status-box ${type}`;
    formStatus.style.display = "block";
    formStatus.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("form-name")?.value.trim() || "";
      const business = document.getElementById("form-business")?.value.trim() || "";
      const email = document.getElementById("form-email")?.value.trim() || "";
      const phone = document.getElementById("form-phone")?.value.trim() || "";
      const need = document.getElementById("form-need")?.value || "";
      const message = document.getElementById("form-message")?.value.trim() || "";

      // Validation
      if (!name || !phone || !email) {
        showStatus("Please provide your Name, Phone / WhatsApp number, and Email address to proceed.", "error");
        return;
      }

      // Format enquiry text
      const text = `*New Website Enquiry - Shreeji Web Studio*\n` +
        `👤 *Name:* ${name}\n` +
        `🏢 *Business:* ${business || "N/A"}\n` +
        `📱 *Phone:* ${phone}\n` +
        `✉️ *Email:* ${email}\n` +
        `🛠️ *Service Required:* ${need || "General Website Project"}\n` +
        `📝 *Message:* ${message || "I would like to discuss a project."}`;

      const cleanNumber = (config.whatsappNumber || "919780553941").replace(/[^0-9]/g, "");
      const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;

      showStatus(`Thank you, ${name}! Redirecting your enquiry directly to WhatsApp for instant discussion...`, "success");

      setTimeout(() => {
        window.open(waUrl, "_blank");
        enquiryForm.reset();
        setTimeout(() => {
          if (formStatus) formStatus.style.display = "none";
        }, 6000);
      }, 700);
    });
  }

  /* ------------------------------------------------------------------------
     7. Interactive 3D Tilt & Mouse-Responsive Parallax
     ------------------------------------------------------------------------ */
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion && window.innerWidth > 992) {
    // 3D Tilt for cards marked with [data-tilt]
    const tiltCards = document.querySelectorAll("[data-tilt]");
    tiltCards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });

    // 3D Parallax Movement for Hero Browser & Floating Cards
    const heroStage = document.getElementById("hero3dStage");
    const heroBrowser = document.getElementById("heroBrowser");
    const floatIdentity = document.getElementById("floatIdentity");
    const floatPricing = document.getElementById("floatPricing");
    const floatConversion = document.getElementById("floatConversion");

    if (heroStage) {
      heroStage.addEventListener("mousemove", (e) => {
        const rect = heroStage.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        if (heroBrowser) {
          heroBrowser.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 10}deg) translateZ(10px)`;
        }
        if (floatIdentity) {
          floatIdentity.style.transform = `translate(${x * 18}px, ${y * 18}px) translateZ(35px)`;
        }
        if (floatPricing) {
          floatPricing.style.transform = `translate(${x * -16}px, ${y * -16}px) translateZ(40px)`;
        }
        if (floatConversion) {
          floatConversion.style.transform = `translate(${x * 14}px, ${y * -14}px) translateZ(25px)`;
        }
      });

      heroStage.addEventListener("mouseleave", () => {
        if (heroBrowser) heroBrowser.style.transform = "";
        if (floatIdentity) floatIdentity.style.transform = "";
        if (floatPricing) floatPricing.style.transform = "";
        if (floatConversion) floatConversion.style.transform = "";
      });
    }
  }

  /* ------------------------------------------------------------------------
     8. Scroll-Triggered Reveal Observer
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.revealDelay || 0;
          setTimeout(() => {
            el.classList.add("is-revealed");
          }, delay);
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not available
    revealElements.forEach(el => el.classList.add("is-revealed"));
  }
});

