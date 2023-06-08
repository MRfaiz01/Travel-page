const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    preloader.classList.add("remove");
})

// add  event on multiple element 

const addEventOnElement = function (element, eventType, callback) {
    for (let i = 0, len = element.length; i < len; i++)
        element[i].addEventListener(eventType, callback)
}
//navbar toggler for mobile 

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]")

const toggleNav = function () {
    navbar.classList.toggle("active")
    overlay.classList.toggleNav("active")
    document.body.classList.toggle("nav-active")
}

addEventOnElement(navTogglers, "click", toggleNav)

//header

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
})