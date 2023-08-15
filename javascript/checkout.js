document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("name");
    const productPrice = parseFloat(urlParams.get("price"));

    if (productName && productPrice) {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${productName} - ₦ ${productPrice}`;
        cartItemsContainer.appendChild(cartItem);

        // Calculate and update total price
        const cartTotal = calculateTotal(cartItemsContainer);
        cartTotalElement.textContent = `Total: ₦ ${cartTotal}`;
    }
});

function calculateTotal(cartItemsContainer) {
    let total = 0;
    const cartItems = cartItemsContainer.querySelectorAll("li");

    cartItems.forEach(item => {
        const priceText = item.textContent.split(" - ")[1];
        const itemPrice = parseFloat(priceText.replace("₦", ""));
        total += itemPrice;
    });

    return total.toFixed(2);
}
