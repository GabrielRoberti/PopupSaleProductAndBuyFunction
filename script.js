
let cartCount = 0;

document.getElementById('addToCartBtn').addEventListener('click', function() {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
});
