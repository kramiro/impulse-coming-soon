// ================================
// IMPULSE LANDING — DATOS EDITABLES
// ================================
// Cambia estos 3 valores antes de publicar.
const CONFIG = {
  // Honduras: código de país 504 + número, sin +, espacios ni guiones.
  whatsappNumber: "50499999999",
  instagramUrl: "https://instagram.com/impulselanding",
  email: "hola@impulselanding.com"
};

const defaultMessage =
  "Hola Impulse Landing. Vi su tarjeta y me gustaría hablar sobre mi proyecto.";

function whatsappUrl(message = defaultMessage) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

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
