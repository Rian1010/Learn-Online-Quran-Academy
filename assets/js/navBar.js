const navBg = document.querySelector('.primary-bg');
const navTextColor = document.querySelectorAll('.nav-item-color');
const navSearchBtn = document.getElementById('navSearchBtn');

window.onscroll = () => navDesignOnScroll();

function navDesignOnScroll() {
    if (document.documentElement.scrollTop > 50) {
        navBg.style.backgroundColor = "rgba( 255, 255, 255, 0.9 )";
        navBg.style.boxShadow = "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )";
        navBg.style.backdropFilter = "4px";
        navBg.style.border = "1px solid rgba( 255, 255, 255, 0.18 )";

        navTextColor.forEach(txt => txt.style.color = "#333");

        if (navSearchBtn.classList.contains("btn-outline-light")) {
            navSearchBtn.classList.remove("btn-outline-light")
        }
        navSearchBtn.classList.add("btn-outline-dark");
    } else {
        navTextColor.forEach(txt => txt.style.color = "#fff");

        navBg.style.backgroundColor = "rgba( 0, 0, 0, 0)";
        navBg.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0)";
        navBg.style.backdropFilter = "0px";
        navBg.style.border = "0";

        if (navSearchBtn.classList.contains("btn-outline-dark")) {
            navSearchBtn.classList.remove("btn-outline-dark")
        }
        navSearchBtn.classList.add("btn-outline-light")
    }
}