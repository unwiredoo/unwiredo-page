const menuBtn = document.querySelector(".menu-button");
const menuBox = document.getElementById("burguer-menu");
const closeMenuBtn = document.getElementById("close-menu");

menuBtn.addEventListener("click", () => {
  openMenu();
});

closeMenuBtn.addEventListener("click", () => {
  closeMenu();
});

function openMenu() {
  menuBox.classList.add("open");
}

function closeMenu() {
  menuBox.classList.remove("open");
}
