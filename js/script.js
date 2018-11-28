const bars = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times");
const menu = document.querySelector("nav");
const menuButtons = document.querySelectorAll("li a");
const regButton = document.getElementById("reg");
const modal = document.querySelector(".modal");
const closeButton = document.getElementById("close");
const modalWrapper = document.querySelector(".modal_wrapper");
const startButton = document.getElementById("start");

// events - buttons

bars.addEventListener("click", function () {
    bars.classList.add("off");
    close.classList.remove("off");
    menu.classList.remove("off");
})
close.addEventListener("click", function () {
    close.classList.add("off");
    bars.classList.remove("off");
    menu.classList.add("off");
})

menuButtons.forEach(function (menuButton) {
    menuButton.addEventListener("click", function () {
        close.classList.add("off");
        bars.classList.remove("off");
        menu.classList.add("off");
    })
})

// modal

regButton.addEventListener("click", function () {
    modal.classList.remove("off");
    closeButton.classList.add("on");
    modalWrapper.classList.add("active");
    close.classList.add("off");
    bars.classList.remove("off");
    menu.classList.add("off");
})

closeButton.addEventListener("click", function () {
    modal.classList.add("off");
    closeButton.classList.remove("on");
    modalWrapper.classList.remove("active");
})

// start button

startButton.addEventListener("click", function () {
    close.classList.add("off");
    bars.classList.remove("off");
    menu.classList.add("off");
})

// scrolling

$("#start").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#top").offset().top,
    }, 1000)
})

$(".fa-angle-double-up").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#main_title").offset().top,
    }, 1000)
})