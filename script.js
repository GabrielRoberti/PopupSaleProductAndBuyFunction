
let cartCount = 0;

document.getElementById('addToCartBtn').addEventListener('click', function() {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
});

    const carouselImages = document.querySelector('.carousel-images');
    const carouselControls = document.getElementById('carouselControls');
    const images = document.querySelectorAll('.carousel-image');

    let currentIndex = 0;

    images.forEach((_, index) => {

        const dot = document.createElement('button');
        dot.classList.add('carousel-btn');

        if (index === currentIndex) {
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });

        carouselControls.appendChild(dot);
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;

        carouselImages.style.transform = `translateX(${offset}%)`;
        
        document.querySelectorAll('.carousel-btn').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }