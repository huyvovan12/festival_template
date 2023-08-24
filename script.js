const contentDiv = document.getElementById("content");
const navLinks = document.querySelectorAll("nav a");

async function loadPage(pageId) {
    try {
        const response = await fetch(`${pageId}/index.html`);
        const pageContent = await response.text();
        contentDiv.innerHTML = pageContent;

        //script homepage
        if (window.location.hash === '#home' || window.location.hash === '') {
            const hoverDiv = document.querySelector('.home__header');

            hoverDiv?.addEventListener('mouseover', () => {
                hoverDiv.classList.add('hover');
            });

            const container = document.getElementById("table__list");
            const loadMoreButton = document.getElementById("load-more");
            const homeTableContainer = document.getElementById("home__film_table");

            const item = '<div class="table__item"><div class="table__item--img"><img src="../img/image_bg.png" alt="" /></div><div class="table__item--header">Column heading here</div><div class="table__item--author">By Jordan Roberts, Octobers</div><div class="table__item--hashtag"><span class="item">hash tag</span><span class="item">hash tag</span><span class="item">hash tag</span></div></div>'

            const items = [
                item, item, item, item, item, item, item, item, item
            ];

            let visibleItemCount = 4; // Số phần tử hiển thị ban đầu
            let isShortened = false; // Biến cờ để theo dõi trạng thái

            function renderItems(startIndex, endIndex) {
                for (let i = startIndex; i < endIndex; i++) {
                    const itemDiv = document.createElement("div");
                    itemDiv.innerHTML = items[i];
                    container.appendChild(itemDiv);
                }
            }

            function toggleVisibility() {
                visibleItemCount = isShortened ? 4 : items.length;
                isShortened = !isShortened;
                container.innerHTML = "";
                loadMoreButton.textContent = isShortened ? "Load More" : "Shorten";
                homeTableContainer.classList.toggle("show-items", isShortened);

                setTimeout(() => {
                    renderItems(0, visibleItemCount);
                    const targetElement = document.getElementById('load-more');
                    if (targetElement) {
                        const yOffset = window.pageYOffset + targetElement.getBoundingClientRect().top;
                        window.scrollTo({ top: yOffset / 2, behavior: "smooth" });
                    }
                }, isShortened ? 100 : 140);

            }

            loadMoreButton.addEventListener("click", toggleVisibility);


            renderItems(0, visibleItemCount);


            const topWhite = document.getElementById('home__bg-top');
            const bottomWhite = document.getElementById('home__bg-bottom');

            console.log(document.getElementById('home__film_table').clientWidth);


            topWhite.style.width = `${document.getElementById('home__film_table').clientWidth}px`;
            bottomWhite.style.width = `${document.getElementById('home__film_table').clientWidth}px`;
            console.log(topWhite.style.width)
        }

        //script homepage

    } catch (error) {
        console.error("Error loading page:", error);
    }
}

function navigate(event) {
    event.preventDefault();
    const pageId = event.target?.getAttribute("href").substr(1);
    loadPage(pageId);
}

navLinks.forEach(link => {
    link.addEventListener("click", navigate);
});

// Load initial page
loadPage("home");

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);

let rotationAngle = 0;

function rotateOnClick() {
    const scroll1 = document.getElementById('scroll1');
    const scroll2 = document.getElementById('scroll2');
    rotationAngle += 720; // Góc xoay (45 độ mỗi lần click)
    scroll1.style.transform = `rotate(${rotationAngle}deg)`;
    scroll2.style.transform = `rotate(${rotationAngle}deg)`;
}





