const CONFIG = { email: "info@impulselanding.com" };

function emailUrl(service) {
  const subject = `Consulta sobre ${service}`;
  const body = `Hola Impulse Landing,\n\nMe interesa conocer más sobre ${service}.\n\nMi proyecto es: \n\nMe gustaría conversar sobre el siguiente paso.`;
  return `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.getElementById("emailHero").href = emailUrl("un proyecto");
document.getElementById("emailContact").href = emailUrl("un proyecto");
document.getElementById("emailLanding").href = emailUrl("Landing Pages");
document.getElementById("emailBranding").href = emailUrl("Branding");
document.getElementById("emailPresence").href = emailUrl("Presencia Digital");
document.getElementById("servicesLink").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("servicios").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("year").textContent = new Date().getFullYear();
