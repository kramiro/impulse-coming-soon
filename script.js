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

// CONTACTO
const whatsappHero = document.getElementById("whatsappHero");
const whatsappInline = document.getElementById("whatsappInline");
const instagramLink = document.getElementById("instagramLink");
const emailLink = document.getElementById("emailLink");

whatsappHero.href = whatsappUrl();
whatsappInline.href = whatsappUrl();
instagramLink.href = CONFIG.instagramUrl;
emailLink.href = `mailto:${CONFIG.email}`;

document.getElementById("year").textContent = new Date().getFullYear();

// BUILDER
const projectNameInput = document.getElementById("projectName");
const browserDomain = document.getElementById("browserDomain");
const demoBrand = document.getElementById("demoBrand");
const demoFooterBrand = document.getElementById("demoFooterBrand");
const demoHeroTitle = document.getElementById("demoHeroTitle");
const demoSite = document.getElementById("demoSite");
const emptyPreview = document.getElementById("emptyPreview");
const styleOptions = [...document.querySelectorAll(".style-option")];
const buildSteps = [...document.querySelectorAll(".build-step")];
const demoSections = [...document.querySelectorAll(".demo-section")];
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const resetBuilder = document.getElementById("resetBuilder");
const builderComplete = document.getElementById("builderComplete");
const viewButtons = [...document.querySelectorAll(".view-button")];
const siteFrame = document.getElementById("siteFrame");

let selectedFont = "inter";
let addedSections = [];
const order = ["hero", "services", "contact"];

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 22) || "tuproyecto";
}

function updateProjectIdentity() {
  const raw = projectNameInput.value.trim();
  const name = raw || "Tu Proyecto";

  browserDomain.textContent = `www.${slugify(raw)}.com`;
  demoBrand.textContent = name.toUpperCase();
  demoFooterBrand.textContent = name.toUpperCase();

  demoHeroTitle.textContent = raw
    ? `${name} merece una presencia que se recuerde.`
    : "Tu proyecto merece verse bien.";
}

projectNameInput.addEventListener("input", updateProjectIdentity);

function applyFont(font) {
  demoSite.classList.remove("font-inter", "font-space", "font-serif");
  demoSite.classList.add(`font-${font}`);
}

styleOptions.forEach((option) => {
  option.addEventListener("click", () => {
    selectedFont = option.dataset.font;

    styleOptions.forEach(item => item.classList.remove("is-selected"));
    option.classList.add("is-selected");

    applyFont(selectedFont);
  });
});

function refreshBuildUI() {
  const count = addedSections.length;

  progressText.textContent = `${count} de 3 secciones`;
  progressBar.style.width = `${(count / 3) * 100}%`;

  buildSteps.forEach((button, index) => {
    const section = button.dataset.add;
    const state = button.querySelector(".build-state");

    button.classList.remove("is-active", "is-added");

    if (addedSections.includes(section)) {
      button.classList.add("is-added");
      button.disabled = true;
      state.textContent = "Listo";
    } else {
      const nextSection = order[count];

      if (section === nextSection) {
        button.classList.add("is-active");
        button.disabled = false;
        state.textContent = "Agregar";
      } else {
        button.disabled = true;
        state.textContent = "Después";
      }
    }
  });

  if (count > 0) {
    emptyPreview.classList.add("is-hidden");
  } else {
    emptyPreview.classList.remove("is-hidden");
  }

  if (count === 3) {
    builderComplete.classList.add("show");
  } else {
    builderComplete.classList.remove("show");
  }
}

buildSteps.forEach((button) => {
  button.addEventListener("click", () => {
    const sectionName = button.dataset.add;

    if (addedSections.includes(sectionName)) return;
    if (sectionName !== order[addedSections.length]) return;

    addedSections.push(sectionName);

    const target = document.querySelector(`[data-demo="${sectionName}"]`);
    target.classList.add("is-visible");

    refreshBuildUI();

    requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });
  });
});

resetBuilder.addEventListener("click", () => {
  addedSections = [];

  demoSections.forEach(section => section.classList.remove("is-visible"));
  demoSite.scrollTo({ top: 0, behavior: "smooth" });

  refreshBuildUI();
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    viewButtons.forEach(item => item.classList.remove("is-selected"));
    button.classList.add("is-selected");

    const view = button.dataset.view;
    siteFrame.classList.toggle("mobile", view === "mobile");
    siteFrame.classList.toggle("desktop", view === "desktop");
  });
});

updateProjectIdentity();
applyFont(selectedFont);
refreshBuildUI();

// Cursor y formulario
const cc=document.querySelector(".custom-cursor");
if(cc&&matchMedia("(hover:hover) and (pointer:fine)").matches){document.body.classList.add("custom-cursor-enabled");addEventListener("pointermove",e=>{cc.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`;cc.classList.add("show")});document.querySelectorAll("a,button,input,select,textarea").forEach(el=>{el.onpointerenter=()=>cc.classList.add("hover");el.onpointerleave=()=>cc.classList.remove("hover")})}
const launch=document.getElementById("contactLaunch"),form=document.getElementById("contactForm");
launch?.addEventListener("click",e=>{e.preventDefault();form.classList.add("open");document.getElementById("leadName").focus()});
form?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);const m=`Hola Impulse Landing, quiero conversar sobre mi proyecto.\nNombre: ${d.get("name")}\nContacto: ${d.get("contact")}\nMe interesa: ${d.get("interest")}\nIdea: ${d.get("idea")}`;open(whatsappUrl(m),"_blank","noopener,noreferrer")});
