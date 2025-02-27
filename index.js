const screenSmall = window.innerWidth < 800 ? true : false;

// console.log(screenSmall);

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
            hamburgerButton.setAttribute("aria-expanded", false);
        } else {
            navList.classList.add("show-menu");
            hamburgerButton.setAttribute("aria-expanded", true);
        }
    });
} else {
    // console.log("large screen" + window.innerWidth);
}

// console.log(hamburgerButton.getAttribute("aria-expanded"));
if (hamburgerButton.getAttribute("aria-expanded") == true) {
    console("aria true");
    document.body.onclick = function (e) {
        e.stopPropagation();
        if (navList.contains(e.target)) {
            console.log("list is clicked");
        } else if (
            !navList.contains(e.target) &&
            navList.classList.contains("show-menu")
        ) {
            navList.classList.remove("show-menu");
            console.log(e.target.textContent + ": outside is clicked");
        }
    };
}

document.body.onclick = function (e) {
    e.stopPropagation();
    if (navList.contains(e.target)) {
        console.log("list is clicked");
    } else if (
        !navList.contains(e.target) &&
        navList.classList.contains("show-menu")
    ) {
        navList.classList.remove("show-menu");
        console.log(e.target.textContent + ": outside is clicked");
    }
};

// if (navList.classList.contains("show-menu")) {
//     hamburgerButton.setAttribute("aria-expanded", "true");
// } else {
//     hamburgerButton.setAttribute("aria-expanded", "false");
// }
