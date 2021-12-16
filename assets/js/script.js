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

document.addEventListener("DOMContentLoaded", function () {
    fetch("../content.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const courses = data.homepage.courses
            console.log(courses);
            courses.forEach(course => {
                document.querySelector('#coursesRow').innerHTML += `
                    <div class="col-lg-4 mb-4 d-flex justify-content-center">
                        <div class="card w-100" style="width: 18rem">
                        <img
                            src=${course.image}
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title">${course.title}</h5>
                            <p class="card-text">
                                ${course.shortDescription}
                            </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                        </div>
                    </div>
                `
            })
        });
});