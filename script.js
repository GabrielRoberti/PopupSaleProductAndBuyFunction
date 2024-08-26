let cartCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.getElementById('cartBtn');
    const closeModal = document.getElementById('closeModal-cart');
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const trashModal = document.getElementById('trashModal');
    const productValueModal = document.getElementById('productValueModal');
    const cartCountElem = document.getElementById('cartCount');
    const noProductShop = document.getElementById('noProductShop');
    const closeModalBtn = document.querySelector('.close-modal');
    const stickyPopup = document.getElementById('stickyPopup');
    const bellIcon = document.querySelector('.bell-icon');
    const quantitySpan = document.querySelector('.quantity-item');
    const addToCartBtn = document.getElementById('addToCartBtn');
    const btnMinus = document.getElementById('btnMinus');
    const btnPlus = document.getElementById('btnPlus');
    const carouselImages = document.querySelector('.carousel-images');
    const carouselControls = document.getElementById('carouselControls');
    const images = document.querySelectorAll('.carousel-image');

    // Add to Cart button click handler
    addToCartBtn.addEventListener('click', function() {
        const quantityValue = parseInt(quantitySpan.textContent);

        if (quantityValue > 0) {
            cartCount += quantityValue;
            document.getElementById('productValueModal').textContent = cartCount;
            cartCountElem.textContent = cartCount;
            modalContent.style.display = 'block';
            noProductShop.style.display = 'none';
        } else {
            alert('Please select quantity');
        }
    });

    // Minus button click handler
    btnMinus.addEventListener('click', function() {
        let quantityValue = parseInt(quantitySpan.textContent);
        if (quantityValue > 1) {
            quantitySpan.textContent = quantityValue - 1;
        }
    });

    // Plus button click handler
    btnPlus.addEventListener('click', function() {
        let quantityValue = parseInt(quantitySpan.textContent);
        quantitySpan.textContent = quantityValue + 1;
    });

    // Carousel setup
    let currentIndex = 0;

    images.forEach((image, index) => {
        const btnEl = document.createElement('button');
        btnEl.classList.add('carousel-btn');
        if (index === currentIndex) {
            btnEl.classList.add('active');
        }

        btnEl.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });

        carouselControls.appendChild(btnEl);
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;

        document.querySelectorAll('.carousel-btn').forEach((btnEl, index) => {
            btnEl.classList.toggle('active', index === currentIndex);
        });
    }

    // Cart button with ternary operator to show/hide modal
    cartBtn.addEventListener('click', function() {
        modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
    });

    // Cross button with ternary operator to show/hide modal
    closeModal.addEventListener('click', function() {
        modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
    });

    
    // Trash button click
    trashModal.addEventListener('click', function() {
        let currentQuantity = parseInt(productValueModal.textContent);

        if (currentQuantity > 0) {
            currentQuantity--;
            cartCount--;

            productValueModal.textContent = currentQuantity;
            cartCountElem.textContent = cartCount;

            if (currentQuantity === 0) {
                noProductShop.style.display = 'block';
                modalContent.style.display = 'none';
            }
        }
    });

    // Close sticky popup and show bell icon
    closeModalBtn.addEventListener('click', function() {
        stickyPopup.style.display = 'none';
        bellIcon.style.display = 'flex';
    });

    // Open sticky popup and hide bell icon
    bellIcon.addEventListener('click', function() {
        stickyPopup.style.display = 'block';
        bellIcon.style.display = 'none';
    });
});
