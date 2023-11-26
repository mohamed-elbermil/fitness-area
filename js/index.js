window.onload = () => {
  window.addEventListener("scroll", () => {
    let hauteur = document.documentElement.scrollHeight - window.innerHeight;
    let position = window.scrollY;
    let largeur = document.documentElement.clientWidth;

    let barre = (position / hauteur) * largeur;

    document.getElementById("barre").style.width = barre + "px";
  });
};

// ---Vidéo play/pause-----
let video = document.getElementById("myvideo");
video.addEventListener("mouseover", () => {
  video.play();
});

video.addEventListener("mouseout", () => {
  video.pause();
});

// // Burger-menu
let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", function () {
  body.classList.toggle("open");
});

// Changement css de la Nav Bar au scroll

const nav = document.querySelector(".nav_header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});

// Carousel témoignage

// const productContainers = [...document.querySelectorAll(".product-container")];
// const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
// const preBtn = [...document.querySelectorAll(".pre-btn")];

// productContainers.forEach((item, i) => {
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nxtBtn[i].addEventListener("click", () => {
//     item.scrollLeft += containerWidth;
//   });

//   preBtn[i].addEventListener("click", () => {
//     item.scrollLeft -= containerWidth;
//   });
// });

// Apparition du modele

const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach(function (r) {
  observer.observe(r);
});

// FAQ
const allCross = document.querySelectorAll(".visible-pannel img");
console.log(allCross);

allCross.forEach((element) => {
  element.addEventListener("click", function () {
    const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

    const currentChoice = this.parentNode.parentNode.childNodes[3];

    // console.log(this.src);
    if (this.src.includes("croix2")) {
      this.src = "/img/moin.svg";
      gsap.to(currentChoice, {
        duration: 0.2,
        height: height + 40,
        opacity: 1,
        padding: "20px 15px",
      });
    } else if (this.src.includes("moin")) {
      this.src = "./img/croix2.svg";
      gsap.to(currentChoice, {
        duration: 0.2,
        height: 0,
        opacity: 0,
        padding: "0px 15px",
      });
    }
  });
});

//Pop-up cookies

let cookieModal = document.querySelector(".cookie-consent-modal");
let cancelCookieBtn = document.querySelector(".btn.cancel");
let acceptCookieBtn = document.querySelector(".btn.accept");

cancelCookieBtn.addEventListener("click", function () {
  cookieModal.classList.remove("active");
});
acceptCookieBtn.addEventListener("click", function () {
  cookieModal.classList.remove("active");
  localStorage.setItem("cookieAccepted", "yes");
});

setTimeout(function () {
  let cookieAccepted = localStorage.getItem("cookieAccepted");
  if (cookieAccepted != "yes") {
    cookieModal.classList.add("active");
  }
}, 2000);

//-----DARK-MODE-----------------

var content = document.getElementsByTagName("body")[0];
var darkMode = document.getElementById("dark-change");

var Maintenant = document.querySelector(".maintenant");
var Satisfait = document.getElementById("like");

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
  Maintenant.style.color = "white";
  Satisfait.style.color = "white";
});
