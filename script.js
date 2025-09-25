let formulario = document.querySelector(".formulario");
let mascara = document.querySelector(".mascara-formulario");

function aparecerFormulario() {
  formulario.classList.add("visivel");
  mascara.classList.add("visivel");
  document.body.style.overflow = "hidden";
}

function desaparecerFormulario() {
  formulario.classList.remove("visivel");
  mascara.classList.remove("visivel");
  document.body.style.overflow = "auto";
}

mascara.addEventListener("click", function () {
  desaparecerFormulario();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    desaparecerFormulario();
  }
});

formulario.addEventListener("click", function (e) {
  e.stopPropagation();
});

function ajustarFormulario() {
  const iframe = document.querySelector("iframe");
  if (iframe && window.innerWidth <= 768) {
    iframe.style.height = "calc(100% - 50px)";
  }
}

window.addEventListener("resize", function () {
  ajustarFormulario();
});

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.attributeName === "class") {
      if (formulario.classList.contains("visivel")) {
        setTimeout(ajustarFormulario, 100);
      }
    }
  });
});

observer.observe(formulario, { attributes: true });
