const CONFIG = {
  whatsappNumber: "50499999999",
  instagramUrl: "https://instagram.com/impulselanding",
  email: "hola@impulselanding.com"
};

const defaultMessage =
  "Hola Impulse Landing. Vi su tarjeta y me gustaría hablar sobre mi proyecto.";

function whatsappUrl(message = defaultMessage) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Contacto general
const whatsappHero = document.getElementById("whatsappHero");
const whatsappInline = document.getElementById("whatsappInline");
const instagramLink = document.getElementById("instagramLink");
const emailLink = document.getElementById("emailLink");
const contactForm = document.getElementById("contactForm");

whatsappHero.href = whatsappUrl();
whatsappInline.href = whatsappUrl();
instagramLink.href = CONFIG.instagramUrl;
emailLink.href = `mailto:${CONFIG.email}`;

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text = [
    "Hola Impulse Landing.",
    "",
    `Soy ${name}.`,
    `Me interesa: ${service}.`,
    "",
    message,
    "",
    "Me gustaría conocer cuál sería el siguiente paso."
  ].join("\n");

  window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();

// ================================
// MINI LANDING BUILDER
// ================================
const setupScreen = document.getElementById("setupScreen");
const setupButton = document.getElementById("setupButton");
const projectNameInput = document.getElementById("projectName");
const fontOptions = [...document.querySelectorAll(".font-option")];

const demoSite = document.getElementById("demoSite");
const demoBrand = document.getElementById("demoBrand");
const demoFooterBrand = document.getElementById("demoFooterBrand");
const demoHeroTitle = document.getElementById("demoHeroTitle");
const browserDomain = document.getElementById("browserDomain");

const builderControls = document.getElementById("builderControls");
const builderButton = document.getElementById("builderButton");
const builderButtonText = document.getElementById("builderButtonText");
const builderInstruction = document.getElementById("builderInstruction");
const builderStep = document.getElementById("builderStep");
const builderReset = document.getElementById("builderReset");
const finishMessage = document.getElementById("finishMessage");

const pieces = {
  hero: document.querySelector('[data-piece="hero"]'),
  services: document.querySelector('[data-piece="services"]'),
  cta: document.querySelector('[data-piece="cta"]'),
  footer: document.querySelector('[data-piece="footer"]')
};

const steps = [
  {
    piece: "hero",
    button: "+ Agregar Hero",
    instruction: "Agrega el mensaje principal que verá primero tu visitante."
  },
  {
    piece: "services",
    button: "+ Agregar Servicios",
    instruction: "Ahora muestra, de forma clara, qué ofreces."
  },
  {
    piece: "cta",
    button: "+ Agregar CTA",
    instruction: "Dile al visitante cuál es el siguiente paso."
  }
];

let selectedFont = "inter";
let currentStep = 0;

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 22) || "tuproyecto";
}

function applyFont(font) {
  demoSite.classList.remove("font-inter", "font-manrope", "font-space", "font-serif");
  demoSite.classList.add(`font-${font}`);
}

fontOptions.forEach((option) => {
  option.addEventListener("click", () => {
    selectedFont = option.dataset.font;

    fontOptions.forEach((item) => item.classList.remove("is-selected"));
    option.classList.add("is-selected");

    applyFont(selectedFont);
  });
});

projectNameInput.addEventListener("input", () => {
  const value = projectNameInput.value.trim();
  browserDomain.textContent = `${slugify(value)}.com`;
});

setupButton.addEventListener("click", () => {
  const projectName = projectNameInput.value.trim() || "Tu Proyecto";

  demoBrand.textContent = projectName.toUpperCase();
  demoFooterBrand.textContent = projectName.toUpperCase();
  demoHeroTitle.textContent = `${projectName} merece una presencia que se recuerde.`;
  browserDomain.textContent = `${slugify(projectName)}.com`;

  applyFont(selectedFont);

  setupScreen.classList.add("is-hidden");
  builderControls.hidden = false;

  builderStep.textContent = `1 / ${steps.length}`;
  builderInstruction.textContent = steps[0].instruction;
  builderButtonText.textContent = steps[0].button;

  setTimeout(() => {
    setupScreen.hidden = true;
  }, 320);
});

builderButton.addEventListener("click", () => {
  if (currentStep >= steps.length) return;

  const step = steps[currentStep];
  pieces[step.piece].classList.add("is-visible");

  currentStep += 1;

  if (currentStep < steps.length) {
    builderStep.textContent = `${currentStep + 1} / ${steps.length}`;
    builderInstruction.textContent = steps[currentStep].instruction;
    builderButtonText.textContent = steps[currentStep].button;

    // desplazar ligeramente el mini sitio para que se vea la sección recién agregada
    if (currentStep === 2) {
      demoSite.scrollTo({ top: 80, behavior: "smooth" });
    }
  } else {
    pieces.footer.classList.add("is-visible");

    builderStep.textContent = "LIVE";
    builderInstruction.textContent = "¡Listo! Acabas de construir una landing page.";
    builderButton.hidden = true;
    finishMessage.classList.add("show");

    demoSite.scrollTo({ top: demoSite.scrollHeight, behavior: "smooth" });
  }
});

builderReset.addEventListener("click", () => {
  currentStep = 0;
  selectedFont = "inter";

  Object.values(pieces).forEach((piece) => {
    if (!piece.classList.contains("base-piece")) {
      piece.classList.remove("is-visible");
    }
  });

  demoSite.scrollTo({ top: 0, behavior: "auto" });
  demoSite.classList.remove("font-manrope", "font-space", "font-serif");
  demoSite.classList.add("font-inter");

  demoBrand.textContent = "TU PROYECTO";
  demoFooterBrand.textContent = "TU PROYECTO";
  demoHeroTitle.textContent = "Haz que tu proyecto se vea como merece.";
  browserDomain.textContent = "tuproyecto.com";
  projectNameInput.value = "";

  fontOptions.forEach((item) => item.classList.remove("is-selected"));
  fontOptions[0].classList.add("is-selected");

  finishMessage.classList.remove("show");
  builderButton.hidden = false;
  builderControls.hidden = true;

  setupScreen.hidden = false;
  requestAnimationFrame(() => {
    setupScreen.classList.remove("is-hidden");
  });

  builderStep.textContent = "Configura";
});
