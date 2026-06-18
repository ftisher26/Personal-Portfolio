
/* Cuando es una clase es con "." y cuando es un id
se usa el # a la hora de usar querySelector. En cambio,
cuando usamos getElementById AHÍ se usa solo el nombre */

const navToggle = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");
const navIcons = document.querySelector(".nav-icons");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-links");
});



