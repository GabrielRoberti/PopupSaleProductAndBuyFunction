
let cartCount = 0;
let addBtn = 0;

    document.getElementById('addToCartBtn').addEventListener('click', function() {
        var quantitySpan = document.querySelector('.quantityItem');
        var quantityValue = quantitySpan.textContent;
        var modalContent = document.querySelector('.modal-content');
        var noProductShop = document.getElementById('noProductShop');

        if(quantityValue > 0){
            cartCount += parseInt(quantityValue);
            document.getElementById('productValueModal').textContent = cartCount;
            document.getElementById('cartCount').textContent = cartCount;   
            modalContent.style.display = 'block';
            noProductShop.style.display = 'none';
            
        }else{
            alert('Please select quantity');
        }
        
    });

    document.getElementById('btnMinus').addEventListener('click', function() {
        
        var quantitySpan = document.querySelector('.quantityItem');
        var quantityValue = quantitySpan.textContent;
        
        if(quantityValue > 1){
            quantityValue--;
            quantitySpan.textContent = quantityValue;
        }
    });

    document.getElementById('btnPlus').addEventListener('click', function() {
      
        var quantitySpan = document.querySelector('.quantityItem');
        var quantityValue = quantitySpan.textContent;
        
        quantityValue++;
        quantitySpan.textContent = quantityValue;
      
    });

    const carouselImages = document.querySelector('.carousel-images');
    const carouselControls = document.getElementById('carouselControls');
    const images = document.querySelectorAll('.carousel-image');

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

    document.addEventListener('DOMContentLoaded', function() {
        const cartBtn = document.getElementById('cartBtn');
        const modal = document.getElementById('modal');
    
        cartBtn.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    