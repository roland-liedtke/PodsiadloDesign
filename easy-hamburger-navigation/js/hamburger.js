const hamburgerBtn = document.getElementById("js-hamburger");
const topLine = document.getElementById("js-top-line");
const centerLine = document.getElementById("js-center-line");
const bottomLine = document.getElementById("js-bottom-line");
const nav = document.getElementById("js-nav");


function hamburgerIcon() {
  topLine.classList.toggle("active");
  centerLine.classList.toggle("active");
  bottomLine.classList.toggle("active");
  nav.classList.toggle("show");
};

hamburgerBtn.addEventListener("click", hamburgerIcon);


const linkButton = document.getElementById("list");

linkButton.addEventListener("click", hamburgerIcon);