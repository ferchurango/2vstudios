const EVENT_DATE = "2026-04-11T18:00:00-05:00";
const WHATSAPP_NUMBER = "573105520419";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");
const scrollCue = document.getElementById("scrollCue");
const rsvpForm = document.getElementById("rsvpForm");
const formStatus = document.getElementById("formStatus");
const storyCards = [...document.querySelectorAll(".story-card")];
const parallaxLayers = [...document.querySelectorAll("[data-parallax]")];

function updateCountdown() {
  const eventTime = new Date(EVENT_DATE).getTime();
  const now = new Date().getTime();
  const distance = eventTime - now;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

function setMusicUi(isPlaying) {
  musicIcon.src = isPlaying
    ? "assets/img/icons/music-on.png"
    : "assets/img/icons/music-off.png";
  musicText.textContent = isPlaying ? "Musica on" : "Musica off";
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
}

async function tryAutoplay() {
  if (!music) return false;

  try {
    music.volume = 0.85;
    await music.play();
    setMusicUi(true);
    return true;
  } catch (error) {
    setMusicUi(false);
    return false;
  }
}

async function toggleMusic() {
  if (!music) return;

  if (music.paused) {
    try {
      await music.play();
      setMusicUi(true);
    } catch (error) {
      setMusicUi(false);
    }
  } else {
    music.pause();
    setMusicUi(false);
  }
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.18 }
  );

  storyCards.forEach((card) => observer.observe(card));
}

function updateParallax() {
  const viewportCenter = window.innerHeight / 2;

  parallaxLayers.forEach((layer) => {
    const parent = layer.closest(".story-card");
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const distance = (center - viewportCenter) / window.innerHeight;
    const depth = Number(layer.dataset.parallax || 0.1);
    const shift = Math.max(-36, Math.min(36, distance * depth * -160));
    layer.style.setProperty("--parallax-y", `${shift}px`);
  });
}

function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const particles = [];
  let width = 0;
  let height = 0;

  function resize() {
    width = canvas.width =
      window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
    height = canvas.height =
      window.innerHeight * Math.min(window.devicePixelRatio || 1, 2);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    particles.length = 0;

    const count = Math.max(60, Math.floor(window.innerWidth / 18) * 3);
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 5.0 + 1.0,
        vx: (Math.random() - 1.5) * 0.14,
        vy: Math.random() * 1.25 + 0.08,
        a: Math.random() * 1.45 + 0.15,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.y > height + 8) p.y = -8;
      if (p.x < -8) p.x = width + 8;
      if (p.x > width + 8) p.x = -8;

      ctx.beginPath();
ctx.fillStyle = `rgba(255, 234, 241, ${p.a})`;
ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize, { passive: true });
}

function initForm() {
  if (!rsvpForm) return;

  rsvpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const guestName = document.getElementById("guestName").value.trim();
    const guestCount = document.getElementById("guestCount").value.trim();
    const guestPhone = document.getElementById("guestPhone").value.trim();
    const guestMessage = document.getElementById("guestMessage").value.trim();

    const lines = [
      "Hola, quiero confirmar asistencia para los 15 anos de Danna.",
      `Nombre: ${guestName || "-"}`,
      `Asistentes: ${guestCount || "1"}`,
      `Celular: ${guestPhone || "-"}`,
      `Mensaje: ${guestMessage || "-"}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    formStatus.textContent = "Abriendo WhatsApp...";
    window.open(waUrl, "_blank", "noopener,noreferrer");
  });
}

function initScrollCue() {
  if (!scrollCue) return;

  scrollCue.addEventListener("click", () => {
    const target = document.getElementById("mensaje");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);

  initReveal();
  initParticles();
  initForm();
  initScrollCue();
  updateParallax();

  const tryPlayFromInteraction = () => {
    tryAutoplay();
  };

  tryAutoplay();
  window.addEventListener("load", tryAutoplay, { once: true });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && music && music.paused) {
      tryAutoplay();
    }
  });

  window.addEventListener("touchstart", tryPlayFromInteraction, {
    once: true,
    passive: true,
  });
  window.addEventListener("touchend", tryPlayFromInteraction, {
    once: true,
    passive: true,
  });
  window.addEventListener("click", tryPlayFromInteraction, {
    once: true,
  });
  window.addEventListener("scroll", tryPlayFromInteraction, {
    once: true,
    passive: true,
  });

  if (musicToggle) {
    musicToggle.addEventListener("click", toggleMusic);
  }

  window.addEventListener("scroll", updateParallax, { passive: true });
  window.addEventListener("resize", updateParallax, { passive: true });
});
