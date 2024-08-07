const carouselImages = document.querySelector('.carousel-images');
const totalImages = carouselImages.children.length;
const indicatorsContainer = document.querySelector('.carousel-indicators');
let index = 0;

// Create indicators
for (let i = 0; i < totalImages; i++) {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    if (i === 0) {
        indicator.classList.add('active');
    }
    indicator.addEventListener('click', () => {
        goToImage(i);
    });
    indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll('.carousel-indicators .indicator');

function autoScroll() {
    index = (index + 1) % totalImages;
    goToImage(index);
}

function goToImage(newIndex) {
    index = newIndex;
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
    updateIndicators();
}

function updateIndicators() {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Event listeners for buttons
document.querySelector('.prev-button').addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    goToImage(index);
});

document.querySelector('.next-button').addEventListener('click', () => {
    index = (index + 1) % totalImages;
    goToImage(index);
});

// Auto-scroll every 3 seconds
setInterval(autoScroll, 5000);

// Initial update
window.addEventListener('load', updateIndicators);
