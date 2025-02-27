const screenSmall = window.innerWidth < 800 ? true : false;

console.log(screenSmall);

var hamburgerButton = document.getElementsByClassName("hamburger-btn")[0];
var navList = hamburgerButton.nextElementSibling;
// console.log(navList);

addEventListener("resize", () => {
    if (window.innerWidth < 800) {
        // console.log("small screen" + window.innerWidth);
        hamburgerButton.addEventListener("click", () => {
            navList.classList.add("show-menu");
        });
    } else {
        // console.log("large screen" + window.innerWidth);
    }
});
