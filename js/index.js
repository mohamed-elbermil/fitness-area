// NAVBAR - FOCUS SUR LES ELEMENTS DE LA NAV

const currentPage = window.location.pathname.split('/').pop(); /*Cela permet de récupèrer uniquement le nom de la page*/ 
console.log(currentPage);

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
})
console.log(navLinks);

// BARRE DE PROGRESSION AU SCROLL
window.onload = () => {
  window.addEventListener("scroll", () => {
    let hauteur = document.documentElement.scrollHeight - window.innerHeight;
    let position = window.scrollY;
    let largeur = document.documentElement.clientWidth;

    let barre = (position / hauteur) * largeur;

    document.getElementById("barre").style.width = barre + "px";
  });
};
// ---
// CALENDRIER SYNCHRONISE AVEC LE FUSEAU HORAIRE DE PARIS

// 1. Obtenir la date actuelle à Paris
const parisDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Paris" }));

// 2. Trouver le jour actuel
const currentDay = parisDate.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi

// 3. Sélectionner toutes les cellules du tableau
const tableCells = document.querySelectorAll('tbody td');
const dayCells = document.querySelectorAll('th');

// 4. Appliquer la classe "active-day" au jour correspondant
tableCells.forEach(cell => {
  const day = parseInt(cell.getAttribute('data-day'), 10); // Récupère l'attribut `data-day`
  if (day === currentDay) {
    cell.classList.add('active-day'); // Ajoute la classe au jour correspondant
  }
});
dayCells.forEach(cell => {
  const day = parseInt(cell.getAttribute('data-day'), 10); // Récupère l'attribut `data-day`
  if (day === currentDay) {
    cell.classList.add('active-day'); // Ajoute la classe au jour correspondant
  }
});
// ---
// ---Vidéo play/pause-----
let video = document.getElementById("myvideo");
video.addEventListener("mouseover", () => {
  video.play();
});
video.addEventListener("mouseout", () => {
  video.pause();
});
// --
//---BURGER MENU
const menuBurger = document.querySelector('.menu-burger');
const menuItems = document.querySelector('.menu-items');
const menuBg = document.querySelector('.menu-bg');
const toggleElements = [menuBg, menuItems, menuBurger];

// Ajout de l'événement click
menuBurger.addEventListener('click', toggleMenu);
menuItems.addEventListener('click', toggleMenu);

function toggleMenu() {
    // Ajoute ou enlève la classe 'fs' aux éléments
    toggleElements.forEach(element => element.classList.toggle('fs'));

    // Change le texte du menu burger
    menuBurger.textContent = menuBurger.textContent === "☰" ? "✕" : "☰";
}
// ---

// NAVBAR - APPLICATION DE CSS AU SCROLL
const nav = document.querySelector(".nav_header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});




