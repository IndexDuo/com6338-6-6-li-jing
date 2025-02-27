
var hamburgerButton = document.querySelector(".hamburger-btn");
var navList = hamburgerButton.nextElementSibling;
// console.log(navList);

handleHamburgerButton()

function handleHamburgerButton() {
    // console.log("small screen" + window.innerWidth);
    // hamburgerButton.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     if (navList.classList.contains("show-menu")) {
    //         navList.classList.remove("show-menu");
    //         hamburgerButton.setAttribute("aria-expanded", false);
    //     } else {
    //         navList.classList.add("show-menu");
    //         hamburgerButton.setAttribute("aria-expanded", true);
    //         console.log(hamburgerButton.getAttribute("aria-expanded"));
    //     }
    // });

    document.body.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (hamburgerButton.contains(e.target)) {
            if (navList.classList.contains("show-menu")) {
                navList.classList.remove("show-menu");
                hamburgerButton.setAttribute("aria-expanded", false);
            } else {
                navList.classList.add("show-menu");
                hamburgerButton.setAttribute("aria-expanded", true);
                console.log(hamburgerButton.getAttribute("aria-expanded"));
            }
        } else if (
            hamburgerButton.getAttribute("aria-expanded") &&
            !navList.contains(e.target) &&
            navList.classList.contains("show-menu")
        ) {
            navList.classList.remove("show-menu");
            hamburgerButton.setAttribute("aria-expanded", false);
            // console.log(e.target.textContent + ": outside is clicked");
        }
    });

    document.onkeyup = function (e) {
        if (e.key === "Escape" && navList.classList.contains("show-menu")) {
            navList.classList.remove("show-menu");
            hamburgerButton.setAttribute("aria-expanded", false);
            hamburgerButton.focus();
        }
    };
}

// console.log(hamburgerButton.getAttribute("aria-expanded"));

// document.body.onclick = function (e) {
//     e.stopImmediatePropagation();
//     e.stopPropagation();
//     e.preventDefault();
//     if (navList.contains(e.target)) {
//         console.log("list is clicked");
//     } else if (
//         hamburgerButton.getAttribute("aria-expanded") &&
//         !navList.contains(e.target) &&
//         navList.classList.contains("show-menu")
//     ) {
//         navList.classList.remove("show-menu");
//         console.log(e.target.textContent + ": outside is clicked");
//     }
// };

// if (navList.classList.contains("show-menu")) {
//     hamburgerButton.setAttribute("aria-expanded", "true");
// } else {
//     hamburgerButton.setAttribute("aria-expanded", "false");
// }
