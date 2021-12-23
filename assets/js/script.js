const carouselItems = document.querySelectorAll('.carousel-item');

// carouselItems.forEach(item => {
//     console.log(item.classList)
//     if (item.classList.contains('active')) {
//         item.classList.toggle('d-flex', 'justify-content-center');
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    fetch("./../../content.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            const banner = data.homepage.banner;
            console.log(banner);
            banner.heading.forEach(heading => {
                document.getElementById('bannerTitle').innerHTML += `
                    ${heading}<br />
                `;
            })
            banner.bulletPoints.forEach(bulletPoint => {
                document.getElementById('bannerList').innerHTML += `
                <li class="p-2 no-banner-bullet-point">
                    <i class="fas fa-check"></i>
                    <span class="fs-5">${bulletPoint}</span>
                </li>
                `;
            })

            // Courses
            const courses = data.homepage.courses;
            console.log(courses);
            courses.forEach(course => {
                document.getElementById('coursesRow').innerHTML += `
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
                            <li class="list-group-item">${course.infoItems.item1}</li>
                            <li class="list-group-item">${course.infoItems.item2}</li>
                            <li class="list-group-item">${course.infoItems.item3}</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                        </div>
                    </div>
                `
            });
            // About Section
            const aboutUs = data.homepage.aboutUs;
            console.log(aboutUs);
            document.getElementById('aboutUsTitle').innerHTML += aboutUs.title;

            document.querySelector('.about-col-2').style.backgroundImage = `url(${aboutUs.images.imagePath1})`;
            document.querySelector('.about-col-6').style.backgroundImage = `url(${aboutUs.images.imagePath2})`;

            document.getElementById('aboutParagraph1').innerHTML += aboutUs.textContent.paragraph1;
            document.getElementById('aboutParagraph2').innerHTML += aboutUs.textContent.paragraph2;
            document.getElementById('aboutParagraph3').innerHTML += aboutUs.textContent.paragraph3;
            document.getElementById('aboutParagraph4').innerHTML += aboutUs.textContent.paragraph4;



            // Care
            const care = data.homepage.care;
            console.log(care);
            document.getElementById('careTitle').innerHTML += care.title;
            care.mainContent.forEach(content => {
                document.getElementById('careContent').innerHTML += `<div
                        class="
                            col-md-4
                            text-center
                            h-100
                            d-flex
                            flex-column
                            justify-content-center
                            px-5
                            pb-5
                            "
                        >
                        <div class="benefits_section pb-3">
                            ${content.icon}
                        </div>
                        <p>
                            ${content.text}
                        </p>
                    </div>
                `;
            });



            const demo = data.homepage.demo;
            console.log(demo);
            document.getElementById('demo').innerHTML += `
                <div class="col-md-6 d-flex flex-column justify-content-center">
                    <h2>${demo.title}</h2>
                    <p>
                        ${demo.quickDescription}
                    </p>
                </div>
                <div class="col-md-6 d-flex justify-content-center">
                    ${demo.video}
                </div>
            `;



            const callToAction = data.homepage.callToAction;
            console.log(callToAction);

            document.querySelector('.HP-contact-img').style.backgroundImage = `linear-gradient(
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.6),
                rgba(255, 255, 255, 0)
              ), url(${callToAction.backgroundImage})`;
            document.getElementById('callToAction').innerHTML += `
                <h2>${callToAction.title}</h2>
                <p class="p-3">
                    ${callToAction.text}
                </p>
                <button class="btn btn-outline-light btn-lg">Contact Us!</button>
            `;
        });
});