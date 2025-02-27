const screenSmall = window.innerWidth < 800 ? true : false;

console.log(screenSmall);

var hamburgerButton = document.getElementsByClassName("hamburger-btn")[0];
var navList = hamburgerButton.nextElementSibling;
// console.log(navList);

addEventListener("resize", () => {
    screenSmall = window.innerWidth < 800 ? true : false;
});

if (screenSmall) {
    // console.log("small screen" + window.innerWidth);
    hamburgerButton.addEventListener("click", () => {
        if (navList.classList.contains("show-menu")) {
            navList.classList.remove("show-menu");
        } else {
            navList.classList.add("show-menu");
        }
    });
} else {
    // console.log("large screen" + window.innerWidth);
}

if (navList.classList.contains("show-menu")) {
    hamburgerButton.setAttribute("aria-expanded", "true");
} else {
    hamburgerButton.setAttribute("aria-expanded", "false");
}
