

// load more

const container = document.getElementById("list");
const loadMoreButton = document.getElementById("pillar__dot");

const item = '<div class="list__item"><div class="list__item--img"><img src="../img/SW2W-2022-Header-1-1024x577.png" alt="" /><div class="list__item--text"><span class="above">Column Heading Here</span><span class="below">By Jordan Roberts, October 5</span></div><div class="list__item--bridge"></div><div class="list__item--note"><div class="time">8:00</div><div class="date">26th dec</div></div></div></div>'

const items = [
    item, item, item, item, item, item, item, item
];

let visibleItemCount = 3; // Số phần tử hiển thị ban đầu

let flag = 0;

function renderItems(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = items[i];
        container.appendChild(itemDiv);
    }
}

function toggleVisibility() {
    if (!flag) {
        container.innerHTML = "";
        setTimeout(() => {
            renderItems(0, items.length);
            const targetElement = document.getElementById('pillar__dot');
            if (targetElement) {
                const yOffset = window.pageYOffset + targetElement.getBoundingClientRect().top;
                window.scrollTo({ top: yOffset / 2, behavior: "smooth" });
            }
            addCssToList();
        }, 200);
        flag++
    }
}

loadMoreButton.addEventListener("click", toggleVisibility);


renderItems(0, visibleItemCount);

function addCssToList() {
    const listItem = document.querySelectorAll('.list__item');

    listItem.forEach((item, index) => {
        if (index % 3 === 0) {
            item.classList.add('order-1');
        } else if (index % 3 === 1) {
            item.classList.add('order-2');
        } else {
            item.classList.add('order-3');
        }
    });
}

addCssToList();
