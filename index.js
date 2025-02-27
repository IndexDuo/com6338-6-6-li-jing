// const screenSize = window.innerWidth;

// console.log(screenSize);

var hamburgerButton = document.getElementsByClassName("hamburger-btn")[0];

console.log(hamburgerButton);

addEventListener("resize", (event) => {
    if (window.innerWidth < 800) {
        // console.log("small screen" + window.innerWidth);
    } else {
        // console.log("large screen" + window.innerWidth);
    }
});
