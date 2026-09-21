/* =========================================================
   FOODKART - FOOD DELIVERY WEBSITE
   PART 3 : JAVASCRIPT
========================================================= */


/* =========================================================
   1. PRODUCT DATABASE
========================================================= */

const PRODUCTS = [

    {
        id: 1,
        name: "Margherita Pizza",
        cat: "Pizza",
        restaurant: "La Pino's Kitchen",
        price: 249,
        oldprice: 349,
        rating: 4.7,
        reviews: 321,
        emoji: "🍕",
        badge: "Popular",
        veg: true,
        desc: "Classic hand-tossed pizza with mozzarella, tomato sauce and fresh basil."
    },

    {
        id: 2,
        name: "Classic Cheese Burger",
        cat: "Burger",
        restaurant: "Burger House",
        price: 179,
        oldprice: 149,
        rating: 4.6,
        reviews: 214,
        emoji: "🍔",
        badge: "Best Seller",
        veg: false,
        desc: "Juicy grilled patty with cheddar, lettuce, tomato and signature sauce."
    },

    {
        id: 3,
        name: "Chicken Biryani",
        cat: "Indian",
        restaurant: "Kolkata Biryani Co.",
        price: 299,
        oldprice: 399,
        rating: 4.8,
        reviews: 876,
        emoji: "🍛",
        badge: "20% Off",
        veg: false,
        desc: "Aromatic basmati rice layered with tender chicken and fragrant spices."
    },

    {
        id: 4,
        name: "Paneer Butter Masala",
        cat: "Indian",
        restaurant: "Spice Garden",
        price: 229,
        oldprice: 349,
        rating: 4.5,
        reviews: 188,
        emoji: "🫕",
        badge: "Best Seller",
        veg: true,
        desc: "Soft paneer cubes cooked in a rich and creamy tomato gravy."
    },

    {
        id: 5,
        name: "Hakka Noodles",
        cat: "Chinese",
        restaurant: "Dragon Bowl",
        price: 199,
        oldprice: 249,
        rating: 4.4,
        reviews: 142,
        emoji: "🍜",
        badge: "Popular",
        veg: true,
        desc: "Wok-tossed noodles with crunchy vegetables and Chinese-style seasoning."
    },

    {
        id: 6,
        name: "Momos Platter",
        cat: "Chinese",
        restaurant: "Momo Nation",
        price: 159,
        oldprice: 279,
        rating: 4.6,
        reviews: 401,
        emoji: "🥟",
        badge: "10% OFF",
        veg: true,
        desc: "Steamed dumplings served with spicy red chutney."
    },

    {
        id: 7,
        name: "Chocolate Cake",
        cat: "Dessert",
        restaurant: "Sweet Slice",
        price: 149,
        oldprice: 220,
        rating: 4.9,
        reviews: 503,
        emoji: "🍰",
        badge: "10% OFF",
        veg: true,
        desc: "Moist chocolate cake layered with smooth chocolate cream."
    },

    {
        id: 8,
        name: "Cold Coffee",
        cat: "Drinks",
        restaurant: "Cafe 24",
        price: 119,
        oldprice: 210,
        rating: 4.5,
        reviews: 109,
        emoji: "🥤",
        badge: "Popular",
        veg: true,
        desc: "Chilled creamy coffee topped with a light foam."
    },

    {
        id: 9,
        name: "Masala Dosa",
        cat: "Indian",
        restaurant: "South Express",
        price: 139,
        oldprice: 220,
        rating: 4.7,
        reviews: 293,
        emoji: "🥞",
        badge: "Best Seller",
        veg: true,
        desc: "Crispy dosa with spiced potato filling, sambar and chutney."
    },

    {
        id: 10,
        name: "Farmhouse Pizza",
        cat: "Pizza",
        restaurant: "Oven Story",
        price: 329,
        oldprice: 499,
        rating: 4.6,
        reviews: 251,
        emoji: "🍕",
        badge: "30% OFF",
        veg: true,
        desc: "Loaded pizza with onion, capsicum, corn, mushrooms and cheese."
    },

    {
        id: 11,
        name: "Double Chicken Burger",
        cat: "Burger",
        restaurant: "Burger House",
        price: 299,
        oldprice: 349,
        rating: 4.7,
        reviews: 177,
        emoji: "🍔",
        badge: "25% OFF",
        veg: false,
        desc: "Double chicken patties, cheese and smoky house sauce."
    },

    {
        id: 12,
        name: "Gulab Jamun",
        cat: "Dessert",
        restaurant: "Sweet Slice",
        price: 99,
        oldprice: 149,
        rating: 4.8,
        reviews: 342,
        emoji: "🍮",
        badge: "10% OFF",
        veg: true,
        desc: "Soft milk-solid dumplings soaked in warm cardamom sugar syrup."
    }

];



/* =========================================================
   2. LOCAL STORAGE DATA
========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("foodkart_cart")
    ) || {};


let orders =
    JSON.parse(
        localStorage.getItem("foodkart_orders")
    ) || [];


let addresses =
    JSON.parse(
        localStorage.getItem("foodkart_addresses")
    ) || [];


let user =
    JSON.parse(
        localStorage.getItem("foodkart_user")
    ) || null;


let upi =
    localStorage.getItem("foodkart_upi")
    || "yourname@upi";


let activeCategory = "all";


let detailProduct = null;



/* =========================================================
   3. SHORT SELECTOR FUNCTIONS
========================================================= */

const $ = selector =>
    document.querySelector(selector);


const $$ = selector =>
    document.querySelectorAll(selector);



/* =========================================================
   4. MONEY FORMAT
========================================================= */

function money(amount) {

    return "₹" +
        amount.toLocaleString("en-IN");

}



/* =========================================================
   5. SAVE DATA
========================================================= */

function saveData() {

    localStorage.setItem(
        "foodkart_cart",
        JSON.stringify(cart)
    );


    localStorage.setItem(
        "foodkart_orders",
        JSON.stringify(orders)
    );


    localStorage.setItem(
        "foodkart_addresses",
        JSON.stringify(addresses)
    );

}



/* =========================================================
   6. TOAST MESSAGE
========================================================= */

function toast(message) {

    const toastBox =
        $("#toast");


    toastBox.textContent =
        message;


    toastBox.classList.add("show");


    setTimeout(() => {

        toastBox.classList.remove("show");

    }, 2200);

}



/* =========================================================
   7. OPEN MODAL
========================================================= */

function openModal(id) {

    const modal =
        document.getElementById(id);


    if (modal) {

        modal.classList.add("show");

    }

}



/* =========================================================
   8. CLOSE MODAL
========================================================= */

function closeModal(id) {

    const modal =
        document.getElementById(id);


    if (modal) {

        modal.classList.remove("show");

    }

}



/* =========================================================
   9. GET PRODUCT
========================================================= */

function getProduct(id) {

    return PRODUCTS.find(
        product =>
            product.id === Number(id)
    );

}



/* =========================================================
   10. CART COUNT
========================================================= */

function cartCount() {

    return Object
        .values(cart)
        .reduce(
            (total, quantity) =>
                total + quantity,
            0
        );

}



/* =========================================================
   11. UPDATE CART BADGE
========================================================= */

function updateCartBadge() {

    $("#cartCount").textContent =
        cartCount();

}



/* =========================================================
   12. DISPLAY PRODUCTS
========================================================= */

function renderProducts() {

    const searchText =
        $("#searchInput")
            .value
            .trim()
            .toLowerCase();


    const filteredProducts =
        PRODUCTS.filter(product => {

            const categoryMatch =
                activeCategory === "all"
                ||
                product.cat === activeCategory;


            const searchMatch =
                !searchText
                ||
                (
                    product.name +
                    " " +
                    product.restaurant +
                    " " +
                    product.cat
                )
                    .toLowerCase()
                    .includes(searchText);


            return (
                categoryMatch &&
                searchMatch
            );

        });


    const productGrid =
        $("#productGrid");


    productGrid.innerHTML = "";


    filteredProducts.forEach(product => {

        const card =
            document.createElement("article");


        card.className =
            "product";


        card.innerHTML = `

            <div class="food-img">

    <span class="veg">
        ${product.veg
            ? "VEG"
            : "NON-VEG"}
    </span>

    ${
        product.badge
        ? `
            <span class="food-badge">
                ${product.badge}
            </span>
        `
        : ""
    }

    ${product.emoji}

</div>


            <div class="product-body">

                <h3>
                    ${product.name}
                </h3>


                <div class="restaurant">

                    ${product.restaurant}

                    • 30 min

                </div>


                <div class="meta">

                    <span class="rating">

                        ★ ${product.rating}

                    </span>


                    <span class="price">

                        ${money(product.price)}

                    </span>

                </div>


                <div class="product-actions">

                    <button
                        class="add-btn"
                        data-add="${product.id}">

                        + Add

                    </button>


                    <button
                        class="details-btn"
                        data-detail="${product.id}">

                        View

                    </button>

                </div>

            </div>

        `;


        productGrid.appendChild(card);

    });


    $("#emptyState")
        .classList
        .toggle(
            "hidden",
            filteredProducts.length > 0
        );


    $("#resultCount").textContent =
        filteredProducts.length +
        " items";

}



/* =========================================================
   13. ADD PRODUCT TO CART
========================================================= */

function addToCart(id) {

    id = Number(id);


    if (!cart[id]) {

        cart[id] = 0;

    }


    cart[id]++;


    saveData();


    updateCartBadge();


    toast(
        "Food added to cart ✓"
    );

}



/* =========================================================
   14. REMOVE PRODUCT FROM CART
========================================================= */

function removeFromCart(id) {

    id = Number(id);


    if (!cart[id]) {

        return;

    }


    cart[id]--;


    if (cart[id] <= 0) {

        delete cart[id];

    }


    saveData();


    updateCartBadge();


    renderCart();

}



/* =========================================================
   15. CART MODAL
========================================================= */

function showCart() {

    renderCart();

    openModal("cartModal");

}



/* =========================================================
   16. RENDER CART
========================================================= */

function renderCart() {

    const cartItems =
        $("#cartItems");


    const ids =
        Object.keys(cart)
            .filter(
                id => cart[id] > 0
            );


    if (ids.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                🛒

                <br><br>

                Your cart is empty.

                <br>

                Add something delicious!

            </div>

        `;


        $("#cartSummary").innerHTML =
            "";


        $("#checkoutBtn").disabled =
            true;


        return;

    }


    let subtotal = 0;


    cartItems.innerHTML = "";


    ids.forEach(id => {

        const product =
            getProduct(id);


        const quantity =
            cart[id];


        subtotal +=
            product.price *
            quantity;


        const row =
            document.createElement("div");


        row.className =
            "cart-row";


        row.innerHTML = `

            <div class="cart-emoji">

                ${product.emoji}

            </div>


            <div>

                <h4>
                    ${product.name}
                </h4>

                <small>

                    ${money(product.price)}
                    × ${quantity}

                </small>

            </div>


            <div class="cart-controls">

                <button
                    data-cart-minus="${product.id}">

                    −

                </button>


                <b>
                    ${quantity}
                </b>


                <button
                    data-cart-plus="${product.id}">

                    +

                </button>

            </div>

        `;


        cartItems.appendChild(row);

    });


    $("#cartSummary").innerHTML = `

        <div class="summary">

            <span>
                Total
            </span>

            <span>
                ${money(subtotal)}
            </span>

        </div>

    `;


    $("#checkoutBtn").disabled =
        false;

}



/* =========================================================
   17. PRODUCT DETAILS
========================================================= */

function showDetails(id) {

    detailProduct =
        getProduct(id);


    const product =
        detailProduct;


    $("#productDetail").innerHTML = `

        <div class="product-detail">


            <div class="detail-img">

                ${product.emoji}

            </div>


            <div class="detail-info">

                <span class="eyebrow">

                    ${product.cat.toUpperCase()}

                </span>


                <h2>

                    ${product.name}

                </h2>


                <div class="stars">

                    ★★★★★

                    <span class="muted">

                        ${product.rating}

                        (${product.reviews}
                        reviews)

                    </span>

                </div>


                <p>

                    ${product.desc}

                </p>


                <p>

                    <b>
                        ${money(product.price)}
                    </b>

                    • Free delivery

                </p>


                <div class="qty">

                    <button
                        data-detail-minus>

                        −

                    </button>


                    <b id="detailQty">
                        1
                    </b>


                    <button
                        data-detail-plus>

                        +

                    </button>

                </div>


                <button
                    class="primary full"
                    id="detailAdd">

                    Add to Cart

                </button>

            </div>

        </div>

    `;


    openModal(
        "productModal"
    );

}



/* =========================================================
   18. LOGIN REQUIREMENT
========================================================= */

function requireLogin() {

    if (user) {

        return true;

    }


    openModal(
        "loginModal"
    );


    toast(
        "Please login before ordering"
    );


    return false;

}



/* =========================================================
   19. CHECKOUT
========================================================= */

function openCheckout() {

    if (!requireLogin()) {

        return;

    }


    if (!cartCount()) {

        toast(
            "Your cart is empty"
        );

        return;

    }


    $("#orderName").value =
        user.name || "";


    $("#orderAddress").value =
        addresses[0] || "";


    $("#upiId").textContent =
        upi;


    renderSavedAddresses();


    calculateCheckoutTotal();


    closeModal(
        "cartModal"
    );


    openModal(
        "checkoutModal"
    );

}



/* =========================================================
   20. CALCULATE CHECKOUT TOTAL
========================================================= */

function calculateCheckoutTotal() {

    let total = 0;


    Object.entries(cart)
        .forEach(
            ([id, quantity]) => {

                const product =
                    getProduct(id);


                total +=
                    product.price *
                    quantity;

            }
        );


    $("#checkoutTotal").innerHTML = `

        <span>
            Order total
        </span>


        <span>
            ${money(total)}
        </span>

    `;

}



/* =========================================================
   21. SAVED ADDRESSES
========================================================= */

function renderSavedAddresses() {

    const box =
        $("#savedAddresses");


    if (!addresses.length) {

        box.innerHTML = "";

        return;

    }


    box.innerHTML = `

        <small class="muted">

            Saved addresses

        </small>

    `;


    addresses.forEach(
        (address, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "address-chip";


            item.innerHTML = `

                <span>

                    ${address}

                </span>


                <button
                    class="text-btn"
                    data-use-address="${index}">

                    Use

                </button>

            `;


            box.appendChild(item);

        }
    );

}



/* =========================================================
   22. SAVE ADDRESS
========================================================= */

function saveAddress() {

    const address =
        $("#orderAddress")
            .value
            .trim();


    if (!address) {

        toast(
            "Enter an address first"
        );

        return;

    }


    if (!addresses.includes(address)) {

        addresses.unshift(
            address
        );

    }


    saveData();


    renderSavedAddresses();


    toast(
        "Address saved ✓"
    );

}



/* =========================================================
   23. ORDER HISTORY
========================================================= */

function renderOrders() {

    const orderList =
        $("#ordersList");


    if (!orders.length) {

        orderList.innerHTML = `

            <div class="empty-cart">

                📦

                <br><br>

                No orders yet.

                <br>

                Place your first order
                to see your history.

            </div>

        `;

        return;

    }


    orderList.innerHTML = "";


    orders.forEach(
        (order, index) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "order-card";


            const currentStep =
                order.step || 0;

                const isCancelled =
    order.status === "Cancelled";


            const steps = [

                "Order placed",

                "Preparing",

                "Out for delivery",

                "Delivered"

            ];


            const itemText =
                order.items
                    .map(
                        item =>
                            `${item.name} × ${item.qty}`
                    )
                    .join(" • ");


            card.innerHTML = `

                <div class="order-head">


                    <div>

                        <b>
                            ${order.id}
                        </b>


                        <div class="muted">

                            ${order.date}

                        </div>

                    </div>


                    <span class="status ${
    isCancelled
        ? "cancelled-status"
        : ""
}">

    ${
        isCancelled
            ? "❌ Cancelled"
            : steps[currentStep]
    }

</span>

                </div>


                <div class="order-items">

                    ${itemText}

                    <br>

                    <b>
                        ${money(order.total)}
                    </b>

                    • ${order.payment}

                </div>


                <div class="tracker">


                    ${steps.map(
                        (step, i) => `

                            <div
                                class="step
                                ${i <= currentStep
                                    ? "done"
                                    : ""}">

                                <div class="dot">

                                    ${
                                        i <= currentStep
                                            ? "✓"
                                            : i + 1
                                    }

                                </div>

                                ${step}

                            </div>

                        `
                    ).join("")}

                </div>


                ${
    currentStep < 3 && !isCancelled
   
        ? `
            <button
                class="secondary full"
                data-advance="${index}">

                Simulate Next
                Tracking Step

            </button>

            <button
                class="cancel-order-btn full"
                data-cancel-order="${index}">

                ❌ Cancel Order

            </button>
        `
        : ""
}
            `;


function cancelOrder(index) {

    const reason =
        prompt(
            "Why do you want to cancel this order?\n\n" +
            "Example: Ordered by mistake, " +
            "delivery time is too long, " +
            "changed my mind..."
        );

    if (!reason) {

        toast(
            "Please enter a cancellation reason."
        );

        return;

    }


    orders[index].status =
        "Cancelled";

    orders[index].cancelReason =
        reason;

    saveData();

    renderOrders();

    toast(
        "❌ Order cancelled successfully."
    );

}

            orderList.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   24. PROFILE
========================================================= */

function renderProfile() {

    const profile =
        $("#profileContent");


    if (!user) {

        profile.innerHTML = `

            <div class="profile-top">


                <div class="avatar">

                    👤

                </div>


                <h2>
                    Guest User
                </h2>


                <p class="muted">

                    Login to manage
                    your profile and orders.

                </p>


                <button
                    class="primary full"
                    id="profileLogin">

                    Login

                </button>

            </div>

        `;

        return;

    }


    profile.innerHTML = `

        <div class="profile-top">


            <div class="avatar">

                👨‍💻

            </div>


            <span class="eyebrow">

                MY PROFILE

            </span>


            <h2>

                ${user.name}

            </h2>


            <p class="muted">

                ${user.email}

            </p>

        </div>


        <div class="profile-grid">


            <div>

                <small>
                    Mobile
                </small>

                Not added

            </div>


            <div>

                <small>
                    Orders
                </small>

                ${orders.length}

            </div>


            <div>

                <small>
                    Saved addresses
                </small>

                ${addresses.length}

            </div>


            <div>

                <small>
                    UPI ID
                </small>

                ${upi}

            </div>


        </div>


        <button
            class="secondary full"
            id="logoutBtn">

            Logout

        </button>

    `;

}



/* =========================================================
   25. PROFILE BUTTON
========================================================= */

function updateProfileButton() {

    const button =
        $("#profileBtn");


    if (user) {

        const firstName =
            user.name
                .split(" ")[0];


        button.textContent =
            "Hi, " +
            firstName;


        button.classList.add(
            "logged"
        );

    } else {

        button.textContent =
            "Login";


        button.classList.remove(
            "logged"
        );

    }

}



/* =========================================================
   26. OPEN DIFFERENT VIEWS
========================================================= */

function openView(view) {

    if (view === "cart") {

        showCart();

    }


    if (view === "orders") {

        renderOrders();

        openModal(
            "ordersModal"
        );

    }


    if (view === "profile") {

        renderProfile();

        openModal(
            "profileModal"
        );

    }

}



/* =========================================================
   27. CATEGORY BUTTONS
========================================================= */

$$(".cat").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                $$(".cat")
                    .forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                button.classList.add(
                    "active"
                );


                activeCategory =
                    button.dataset.cat;


                $("#foodTitle").textContent =
                    activeCategory === "all"

                        ? "Popular near you"

                        : activeCategory +
                          " favourites";


                renderProducts();

            }
        );

    }
);



/* =========================================================
   28. SEARCH
========================================================= */

$("#searchInput")
    .addEventListener(
        "input",
        () => {

            renderProducts();

        }
    );



/* =========================================================
   29. CLEAR SEARCH
========================================================= */

$("#clearSearch")
    .addEventListener(
        "click",
        () => {

            $("#searchInput").value =
                "";


            renderProducts();


            $("#searchInput").focus();

        }
    );



/* =========================================================
   30. EXPLORE FOOD BUTTON
========================================================= */

$("#browseBtn")
    .addEventListener(
        "click",
        () => {

            $("#food")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );



/* =========================================================
   31. NAVIGATION BUTTONS
========================================================= */

$$("[data-view]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    openView(
                        button.dataset.view
                    );

                }
            );

        }
    );



/* =========================================================
   32. GLOBAL CLICK EVENTS
========================================================= */

document.addEventListener(
    "click",
    event => {


        /* -----------------------------------------
           ADD TO CART
        ----------------------------------------- */

        const addButton =
            event.target.closest(
                "[data-add]"
            );


        if (addButton) {

            addToCart(
                addButton.dataset.add
            );

        }



        /* -----------------------------------------
           PRODUCT DETAILS
        ----------------------------------------- */

        const detailButton =
            event.target.closest(
                "[data-detail]"
            );


        if (detailButton) {

            showDetails(
                detailButton.dataset.detail
            );

        }



        /* -----------------------------------------
           CLOSE MODAL
        ----------------------------------------- */

        if (
            event.target.matches(
                "[data-close]"
            )
        ) {

            closeModal(
                event.target.dataset.close
            );

        }



        /* -----------------------------------------
           CART PLUS
        ----------------------------------------- */

        const plusButton =
            event.target.closest(
                "[data-cart-plus]"
            );


        if (plusButton) {

            const id =
                plusButton.dataset.cartPlus;


            cart[id] =
                (cart[id] || 0) + 1;


            saveData();


            updateCartBadge();


            renderCart();

        }



        /* -----------------------------------------
           CART MINUS
        ----------------------------------------- */

        const minusButton =
            event.target.closest(
                "[data-cart-minus]"
            );


        if (minusButton) {

            removeFromCart(
                minusButton.dataset.cartMinus
            );

        }



        /* -----------------------------------------
           USE SAVED ADDRESS
        ----------------------------------------- */

        const addressButton =
            event.target.closest(
                "[data-use-address]"
            );


        if (addressButton) {

            const index =
                Number(
                    addressButton
                        .dataset
                        .useAddress
                );


            $("#orderAddress").value =
                addresses[index];


            toast(
                "Address selected ✓"
            );

        }

        /* -----------------------------------------
   CANCEL ORDER
----------------------------------------- */

const cancelButton =
    event.target.closest(
        "[data-cancel-order]"
    );

if (cancelButton) {

    const index =
        Number(
            cancelButton.dataset.cancelOrder
        );

    cancelOrder(index);

}



        /* -----------------------------------------
           TRACKING
        ----------------------------------------- */

        const trackingButton =
            event.target.closest(
                "[data-advance]"
            );


        if (trackingButton) {

            const index =
                Number(
                    trackingButton
                        .dataset
                        .advance
                );


            if (
                orders[index].step < 3
            ) {

                orders[index].step++;

            }


            saveData();


            renderOrders();


            toast(
                "Tracking updated ✓"
            );

        }

    }
);



/* =========================================================
   33. CLICK OUTSIDE MODAL
========================================================= */

$$(".modal")
    .forEach(
        modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === modal
                    ) {

                        modal.classList.remove(
                            "show"
                        );

                    }

                }
            );

        }
    );



/* =========================================================
   34. PROFILE BUTTON
========================================================= */

$("#profileBtn")
    .addEventListener(
        "click",
        () => {

            renderProfile();

            openModal(
                "profileModal"
            );

        }
    );



/* =========================================================
   35. THEME TOGGLE
========================================================= */

$("#themeToggle")
    .addEventListener(
        "click",
        () => {

            document.body
                .classList
                .toggle("dark");


            const dark =
                document.body
                    .classList
                    .contains("dark");


            localStorage.setItem(
                "foodkart_theme",
                dark
                    ? "dark"
                    : "light"
            );


            $("#themeToggle")
                .textContent =
                    dark
                        ? "☀️"
                        : "🌙";

        }
    );



/* =========================================================
   36. LOGIN FORM
========================================================= */

$("#loginForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                $("#loginName")
                    .value
                    .trim();


            const email =
                $("#loginEmail")
                    .value
                    .trim();


            const password =
                $("#loginPassword")
                    .value
                    .trim();


            if (!name) {

                toast(
                    "Please enter your name"
                );

                return;

            }


            if (!email) {

                toast(
                    "Please enter your email"
                );

                return;

            }


            if (password.length < 4) {

                toast(
                    "Password must contain at least 4 characters"
                );

                return;

            }


            user = {

                name: name,

                email: email

            };


            localStorage.setItem(
                "foodkart_user",
                JSON.stringify(user)
            );


            updateProfileButton();


            closeModal(
                "loginModal"
            );


            toast(
                "Welcome, " +
                name +
                "! 🎉"
            );

        }
    );



/* =========================================================
   37. CHECKOUT BUTTON
========================================================= */

$("#checkoutBtn")
    .addEventListener(
        "click",
        () => {

            openCheckout();

        }
    );



/* =========================================================
   38. SAVE ADDRESS BUTTON
========================================================= */

$("#saveAddress")
    .addEventListener(
        "click",
        () => {

            saveAddress();

        }
    );



/* =========================================================
   39. EDIT UPI ID
========================================================= */

$("#editUpi")
    .addEventListener(
        "click",
        () => {

            const newUpi =
                prompt(
                    "Enter your UPI ID:",
                    upi
                );


            if (
                newUpi &&
                newUpi.trim()
            ) {

                upi =
                    newUpi.trim();


                localStorage.setItem(
                    "foodkart_upi",
                    upi
                );


                $("#upiId")
                    .textContent =
                    upi;


                toast(
                    "UPI ID updated ✓"
                );

                function copyOffer(code) {

    navigator.clipboard
        .writeText(code)
        .then(() => {

            toast(
                "🏷️ Coupon " +
                code +
                " copied!"
            );

        })
        .catch(() => {

            toast(
                "Coupon Code: " +
                code
            );

        });
}

            }

        }
    );



/* =========================================================
   40. PAYMENT METHOD
========================================================= */

$$(
    'input[name="payment"]'
)
.forEach(
    radio => {

        radio.addEventListener(
            "change",
            () => {

                const qrArea =
                    $("#qrArea");


                if (
                    radio.value === "UPI" &&
                    radio.checked
                ) {

                    qrArea.style.display =
                        "flex";

                }


                if (
                    radio.value === "COD" &&
                    radio.checked
                ) {

                    qrArea.style.display =
                        "none";

                }

            }
        );

    }
);



/* =========================================================
   41. ORDER FORM
========================================================= */

$("#orderForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (!requireLogin()) {

                return;

            }


            const name =
                $("#orderName")
                    .value
                    .trim();


            const phone =
                $("#orderPhone")
                    .value
                    .trim();


            const address =
                $("#orderAddress")
                    .value
                    .trim();


            if (!name) {

                toast(
                    "Enter your name"
                );

                return;

            }


            if (
                !/^[0-9]{10}$/
                    .test(phone)
            ) {

                toast(
                    "Enter a valid 10 digit mobile number"
                );

                return;

            }


            if (!address) {

                toast(
                    "Enter delivery address"
                );

                return;

            }


            const payment =
                document.querySelector(
                    'input[name="payment"]:checked'
                ).value;


            const items =
                Object.entries(cart)
                    .map(
                        ([id, quantity]) => {

                            const product =
                                getProduct(id);


                            return {

                                name:
                                    product.name,

                                qty:
                                    quantity

                            };

                        }
                    );


            let total = 0;


            Object.entries(cart)
                .forEach(
                    ([id, quantity]) => {

                        const product =
                            getProduct(id);


                        total +=
                            product.price *
                            quantity;

                    }
                );


            const order = {

                id:
                    "FK" +
                    Date.now()
                        .toString()
                        .slice(-7),

                date:
                    new Date()
                        .toLocaleString(
                            "en-IN"
                        ),

                items:
                    items,

                total:
                    total,

                payment:
                    payment,

                address:
                    address,

                phone:
                    phone,

                step:
                    0

            };


            orders.unshift(
                order
            );


            if (
                !addresses.includes(
                    address
                )
            ) {

                addresses.unshift(
                    address
                );

            }


            cart = {};


            saveData();


            updateCartBadge();


            closeModal(
                "checkoutModal"
            );


            renderOrders();


            openModal(
                "ordersModal"
            );


            showOrderSuccess(order);
            function showOrderSuccess(order) {

    const modal =
        document.createElement("div");

    modal.className =
        "modal show";

    modal.innerHTML = `

        <div class="modal-card success-card">

            <div class="success-animation">
                ✓
            </div>

            <h2>
                Order Confirmed! 🎉
            </h2>

            <p class="muted">
                Your delicious food is
                being prepared.
            </p>

            <div class="success-order">

                <span>
                    Order ID
                </span>

                <strong>
                    #${order.id}
                </strong>

                <span>
                    Total
                </span>

                <strong>
                    ${money(order.total)}
                </strong>

            </div>

            <button
                class="primary full"
                id="successTrackBtn">

                🚴 Track Order

            </button>

            <button
                class="secondary full"
                id="successCloseBtn">

                Continue Shopping

            </button>

        </div>
    `;

    document.body.appendChild(modal);


    modal.querySelector(
        "#successCloseBtn"
    ).onclick = () => {

        modal.remove();

    };


    modal.querySelector(
        "#successTrackBtn"
    ).onclick = () => {

        modal.remove();

        renderOrders();

        openModal(
            "ordersModal"
        );

    };


    createConfetti();

}

function createConfetti() {

    const emojis = [
        "🎉",
        "✨",
        "❤️",
        "🍕",
        "🍔"
    ];

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const item =
            document.createElement("span");

        item.className =
            "confetti";

        item.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.animationDelay =
            Math.random() * 1 + "s";

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 3500);
    }
}

        }
    );



/* =========================================================
   42. PROFILE LOGIN BUTTON
========================================================= */

$("#profileContent")
    .addEventListener(
        "click",
        event => {


            if (
                event.target.id ===
                "profileLogin"
            ) {

                closeModal(
                    "profileModal"
                );


                openModal(
                    "loginModal"
                );

            }


            if (
                event.target.id ===
                "logoutBtn"
            ) {

                user = null;


                localStorage.removeItem(
                    "foodkart_user"
                );


                updateProfileButton();


                renderProfile();


                toast(
                    "Logged out successfully"
                );

            }

        }
    );



/* =========================================================
   43. PRODUCT DETAILS QUANTITY
========================================================= */

$("#productDetail")
    .addEventListener(
        "click",
        event => {

            if (!detailProduct) {

                return;

            }


            const quantityElement =
                $("#detailQty");


            if (!quantityElement) {

                return;

            }


            let quantity =
                Number(
                    quantityElement.textContent
                );


            /* PLUS */

            if (
                event.target.matches(
                    "[data-detail-plus]"
                )
            ) {

                quantity++;

                quantityElement.textContent =
                    quantity;

            }


            /* MINUS */

            if (
                event.target.matches(
                    "[data-detail-minus]"
                )
            ) {

                quantity =
                    Math.max(
                        1,
                        quantity - 1
                    );


                quantityElement.textContent =
                    quantity;

            }


            /* ADD */

            if (
                event.target.id ===
                "detailAdd"
            ) {

                const id =
                    detailProduct.id;


                cart[id] =
                    (cart[id] || 0)
                    +
                    quantity;


                saveData();


                updateCartBadge();


                closeModal(
                    "productModal"
                );


                toast(
                    "Added to cart ✓"
                );

            }

        }
    );



/* =========================================================
   44. LOAD DARK MODE
========================================================= */

if (
    localStorage.getItem(
        "foodkart_theme"
    ) === "dark"
) {

    document.body
        .classList
        .add("dark");


    $("#themeToggle")
        .textContent =
        "☀️";

}



/* =========================================================
   45. INITIALIZE WEBSITE
========================================================= */

updateProfileButton();

updateCartBadge();

renderProducts();


console.log(
    "FoodKart website loaded successfully!"
);