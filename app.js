const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

function toggleSubMenu(button) {
  navLinks.classList.toggle("show");
  console.log("Menú toggled");
}

//? Detectar resize y remover la clase show si está activa
window.addEventListener("resize", () => {
  if (navLinks.classList.contains("show")) {
    navLinks.classList.remove("show");
    console.log("Menú ocultado por resize");
  }
});
