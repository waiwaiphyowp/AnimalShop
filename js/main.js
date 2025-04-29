const menuIcon = document.getElementById("menu-icon");
const navItem = document.getElementById("nav-item");

menuIcon.addEventListener("click", () => {
  navItem.classList.toggle("show");
  if(navItem.classList.contains("show")) {
    menuIcon.src = "../img/cross.svg";
  } else {
    menuIcon.src = "../img/menu.svg";
  }
});

window.addEventListener("scroll", () => {
  navItem.classList.remove("show");
  menuIcon.src = "../img/menu.svg"
})