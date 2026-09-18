// Cambia solo el número antes de publicar: código de país + número, sin + ni espacios.
const CONFIG = { whatsappNumber: "50499999999", email: "info@impulselanding.com" };
function whatsappUrl(service) { const message = `Hola Impulse Landing. Me interesa conocer más sobre ${service}.`; return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`; }
document.getElementById("emailHero").href = `mailto:${CONFIG.email}`;
document.getElementById("emailContact").href = `mailto:${CONFIG.email}`;
document.getElementById("whatsappLanding").href = whatsappUrl("Landing Pages");
document.getElementById("whatsappBranding").href = whatsappUrl("Branding");
document.getElementById("whatsappPresence").href = whatsappUrl("Presencia Digital");
document.getElementById("year").textContent = new Date().getFullYear();
