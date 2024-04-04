const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", menuHamburger);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function menuHamburger() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// script responsável por popular a sessão culturas

  function carregarCulturas() {}

  function adicionarOpcoesCulturas(culturas) {}

  function exibirDetalhesCultura(cultura) {}

  function culturaTemplate(cultura) {}

  function handleChangeSelect() {}