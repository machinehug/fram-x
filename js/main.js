//Victoria Pettersen > github.com/machinehug & machinehug.com

const navContainer = document.querySelector(".nav-container");
const body = document.body;

//open nav
const openHamburgerIcon = document.querySelector(".hamburger-open-icon");
openHamburgerIcon.addEventListener("click", () => {
  navContainer.classList.toggle("open-nav");
  body.classList.toggle("open-nav");
});

//close nav
const closeHamburgerIcon = document.querySelector(".hamburger-close-icon");
closeHamburgerIcon.addEventListener("click", () => {
  navContainer.classList.remove("open-nav");
});

//stop nav from scrolling in bg
navContainer.addEventListener("click", () => {
  body.classList.toggle("open-nav");
});

//make nav hidden when clicking on nav li
const navLi = document.querySelectorAll("nav ul li a");
for (let i = 0; i < navLi.length; i++) {
  navLi[i].addEventListener("click", () => {
    navContainer.classList.remove("open-nav");
  });
};

//CAROUSEL

//GALLERY 1
const gallery1 = document.querySelectorAll(".gallery-1");
hideAllImgsExceptFirst(gallery1);

const arrow1 = document.querySelector(".gallery-1-arrow");
arrow1.addEventListener("click", () => {
  carousel(gallery1)
});

//GALLERY 2
const gallery2 = document.querySelectorAll(".gallery-2");
hideAllImgsExceptFirst(gallery2);

const arrow2 = document.querySelector(".gallery-2-arrow");
arrow2.addEventListener("click", () => {
  carousel(gallery2)
});

//GALLERY 3
const gallery3 = document.querySelectorAll(".gallery-3");
hideAllImgsExceptFirst(gallery3);

const arrow3 = document.querySelector(".gallery-3-arrow");
arrow3.addEventListener("click", () => {
  carousel(gallery3)
});

function carousel(gallery) {

  let next = 0;

  for (let i = 0; i < gallery.length; i++) {

    if (gallery[i].style.display === "block") {

      gallery[i].style.display = "none";
      next = i + 1;
      break;
    };
  };

  if (next > gallery.length - 1) {
    next = 0;
  };

  gallery[next].style.display = "block";
};

function hideAllImgsExceptFirst(gallery) {

  for (let i = 0; i < gallery.length; i++) {
    gallery[i].style.display = "none";
  };

  gallery[0].style.display = "block";
};