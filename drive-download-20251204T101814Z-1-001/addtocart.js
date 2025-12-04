document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {

        let name = this.getAttribute("data-name");
        let desc = this.getAttribute("data-desc");
        let price = parseFloat(this.getAttribute("data-price")); // FIXED → number
        let img = this.getAttribute("data-img");

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if item is already in cart
        let existing = cart.find(item => item.desc === desc);

        if (existing) {
            existing.qty += 1; // increase quantity
            existing.img = img;
        } else {
            cart.push({
                name: name,
                desc: desc,
                price: price,
                img: img,
                qty: 1                      // FIXED → quantity included
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        // Redirect to cart page
        window.location.href = "cart.html";
    });
});
