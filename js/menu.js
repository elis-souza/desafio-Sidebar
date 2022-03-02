let show = true;

const menuSection = document.querySelector(".menuSide")
const menuHamburger = menuSection.querySelector(".hamburger")

menuHamburger.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("off", show)
    show = !show;
}) 