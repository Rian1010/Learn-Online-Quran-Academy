const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');

// const topCardBottomPos = card1.offsetTop + card1.offsetHeight;
// const bottomCardTopPos = card4.offsetTop;
// const distanceBetweenCards = bottomCardTopPos - topCardBottomPos

// console.log(topCardBottomPos, bottomCardTopPos, distanceBetweenCards)
// // card4.style.position = "absolute";
// card4.style.marginTop = distanceBetweenCards / 2 + "px";

// const cardBottomPositioning = (topCard, targetCard) => {
//     if (topCard && targetCard) {
//         const topCardBottomPos = topCard.offsetTop + topCard.offsetHeight;
//         const bottomCardTopPos = targetCard.offsetTop;
//         const distanceBetweenCards = bottomCardTopPos - topCardBottomPos

//         console.log(topCardBottomPos, bottomCardTopPos, distanceBetweenCards)
//         // card4.style.position = "absolute";

//         if (screen.width >= 992) {
//             targetCard.style.marginTop = -distanceBetweenCards + 25 + "px";
//         }
//     }
// }

// cardBottomPositioning(card1, card4);
// cardBottomPositioning(card2, card5);
// cardBottomPositioning(card3, card6);

document.addEventListener("DOMContentLoaded", () => {
    fetch("./blogs.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const blogs = data.blogs;
            blogs.forEach(blog => {
                document.getElementById('blogCards').innerHTML += `
                    <div class="col-lg-4 mt-5 card-column">
                        <div class="card card-blog" style="width: 85%">
                        <img
                            src="${blog.image}"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body card-body-blog">
                            <h5 class="card-title">${blog.title}</h5>
                            <p class="card-text">
                                ${blog.shortDescription}
                            </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                `;
            });

            const cardCol = document.querySelectorAll('.card-column');
            for (let i = 0; i < cardCol.length; i++) {
                if (i == 0) {
                    cardCol[i].classList.add('pt-3');
                } else if (i == 1) {
                    cardCol[i].classList.add('pt-5');
                }
            }
            const cards = document.querySelectorAll('.card');
            for (let i = 0; i < cards.length - 3; i++) {
                const topCard = cards[i];
                const targetCard = cards[i + 3];

                const topCardBottomPos = topCard.offsetTop + topCard.clientHeight;
                const bottomCardTopPos = targetCard.offsetTop;
                const distanceBetweenCards = bottomCardTopPos - topCardBottomPos

                console.log(topCardBottomPos, bottomCardTopPos, distanceBetweenCards)
                // card4.style.position = "absolute";

                if (screen.width >= 992) {

                    targetCard.style.marginTop = -distanceBetweenCards + "px";
                }
            }

        });

});

window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;
    var bgParallax = document.getElementsByClassName('card-img-top2')[0];
    var limit = bgParallax.offsetTop + bgParallax.offsetHeight;
    if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit) {
        bgParallax.style.backgroundPositionY = (50 - 10 * scrollPosition / limit) + '%';
    } else {
        bgParallax.style.backgroundPositionY = '50%';
    }
});

// window.onscroll(() => {
//     let scroll = document.documentElement.scrollTop;
//     console.log(scroll / 100)

//     document.querySelectorAll('.card-img-top2').forEach(img => {
//         let speed = 0.5;
//         img.style.top = scroll + "px";
//     });
// })