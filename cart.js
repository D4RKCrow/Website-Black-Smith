// Load Cart Items
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items"); // correct container
    const totalPriceElement = document.getElementById("total-price");

    cartContainer.innerHTML = ""; // use cartContainer instead of container
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" class="cart-img">

                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.qty}</p>
                </div>

                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

// Remove specific item
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // remove item
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Checkout button
function checkout() {
    alert("Proceeding to checkout...");
}

// Load cart on page load
loadCart();
