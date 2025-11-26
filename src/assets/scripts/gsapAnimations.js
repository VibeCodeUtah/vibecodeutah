import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Initialize all animations
export function initAnimations() {
  heroEntrance();
  scrollRevealSections();
  initCounterAnimations();
  initCardHovers();
  animateProgressBars();
}

// Hero Section Entrance
function heroEntrance() {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-logo", {
    scale: 0.5,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
  })
    .from(
      ".hero-title",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      },
      "-=0.4"
    )
    .from(
      ".hero-subtitle",
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".countdown-container",
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.4"
    )
    .from(
      ".hero-button",
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      },
      "-=0.3"
    )
    .from(
      ".hero-grid-bg",
      {
        opacity: 0,
        duration: 1.5,
      },
      0
    );
}

// Scroll-triggered section reveals
function scrollRevealSections() {
  gsap.utils.toArray(".reveal-section").forEach((section) => {
    gsap.from(section, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Stagger animations for cards
  gsap.utils.toArray(".reveal-cards").forEach((container) => {
    const cards = container.querySelectorAll(".card-item");
    gsap.from(cards, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
      },
    });
  });
}

// Number counter animation
function initCounterAnimations() {
  gsap.utils.toArray(".animate-counter").forEach((counter) => {
    const target = parseFloat(counter.dataset.target);
    const prefix = counter.dataset.prefix || "";
    const suffix = counter.dataset.suffix || "";

    ScrollTrigger.create({
      trigger: counter,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerText: 1 },
            onUpdate: function () {
              const value = Math.floor(
                parseFloat(this.targets()[0].innerText)
              );
              counter.innerText =
                prefix +
                value.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }) +
                suffix;
            },
          }
        );
      },
    });
  });
}

// Card hover effects
function initCardHovers() {
  gsap.utils.toArray(".hover-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });

      const glow = card.querySelector(".card-glow");
      if (glow) {
        gsap.to(glow, {
          opacity: 0.6,
          duration: 0.3,
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      const glow = card.querySelector(".card-glow");
      if (glow) {
        gsap.to(glow, {
          opacity: 0,
          duration: 0.3,
        });
      }
    });
  });
}

// Animate progress bars
function animateProgressBars() {
  gsap.utils.toArray(".progress-segment").forEach((segment, index) => {
    const targetWidth = segment.dataset.width;
    if (targetWidth) {
      ScrollTrigger.create({
        trigger: segment.closest(".progress-bar-container"),
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(segment, {
            width: targetWidth,
            duration: 1.5,
            delay: index * 0.3,
            ease: "power2.out",
          });
        },
      });
    }
  });
}

// Initialize on DOM load
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAnimations);
  } else {
    initAnimations();
  }
}
