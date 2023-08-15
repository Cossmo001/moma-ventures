const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

        addToCartButtons.forEach(button => {
            button.addEventListener("click", addToCart);
        });

        function addToCart(event) {
            const productName = event.target.getAttribute("data-name");
            const productPrice = parseFloat(event.target.getAttribute("data-price"));

            window.location.href = `cart.html?name=${encodeURIComponent(productName)}&price=${productPrice}`;
        }


