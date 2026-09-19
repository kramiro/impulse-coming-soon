const CONFIG = { email: "info@impulselanding.com" };

function emailUrl(service, project = "") {
  const subject = `Consulta sobre ${service}${project ? ` — ${project}` : ""}`;
  const body = `Hola Impulse Landing,\n\nMe interesa conocer más sobre ${service}.${project ? `\nMi proyecto es: ${project}.` : ""}\n\nMe gustaría conversar sobre el siguiente paso.`;
  return `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.getElementById("emailHero").href = emailUrl("un proyecto");
document.getElementById("emailContact").href = emailUrl("un proyecto");
document.getElementById("emailTextLink").href = emailUrl("un proyecto");
document.getElementById("servicesLink").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("servicios").scrollIntoView({ behavior: "smooth", block: "start" });
});

const projectName = document.getElementById("projectName");
const projectType = document.getElementById("projectType");
const previewBrand = document.getElementById("previewBrand");
const previewTitle = document.getElementById("previewTitle");
const previewText = document.getElementById("previewText");
const builderEmail = document.getElementById("builderEmail");

function updatePreview() {
  const name = projectName.value.trim() || "TU PROYECTO";
  previewBrand.textContent = name.toUpperCase();
  previewTitle.textContent = `${name}\nmerece ser descubierto.`;
  previewText.textContent = projectType.value;
}
projectName.addEventListener("input", updatePreview);
projectType.addEventListener("change", updatePreview);
builderEmail.addEventListener("click", () => { window.location.href = emailUrl("una mini landing page", projectName.value.trim()); });

document.getElementById("leadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("leadName").value.trim();
  const service = document.getElementById("leadService").value;
  const message = document.getElementById("leadMessage").value.trim();
  const subject = `Consulta sobre ${service}${name ? ` — ${name}` : ""}`;
  const body = `Hola Impulse Landing,\n\nSoy ${name}.\nMe interesa: ${service}.\n\n${message}\n\nMe gustaría conocer el siguiente paso.`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
document.getElementById("year").textContent = new Date().getFullYear();
