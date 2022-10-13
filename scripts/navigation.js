// alert("I am alive");
// console.log("here we go again");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const slideMenu = document.querySelector(".menu");

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", reverseToggleMenu);
// if ((slideMenu.classList.contains("active"), classList.remove("active")))
function toggleMenu() {
  slideMenu.classList.toggle("active");
  //   openMenu.style.color = "white";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
}

function reverseToggleMenu() {
  slideMenu.classList.remove("active");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
}
