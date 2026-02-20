// Global variables
let cart = [];
let products = [];
let selectedCondition = 'Excellent';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    renderProducts();
    updateCartUI();
});

// Product data with storage-based pricing
function initializeProducts() {
    products = [
        {
            id: 1,
            name: 'iPhone 15 Pro Max',
            condition: 'New',
            storage: {
                '128GB': 17999,
            },
            colors: ['natural titanium', 'white titanium', 'blue titanium', 'black titanium'],
            colorImages: {
                'natural titanium': 'https://i.postimg.cc/fLGtPJQM/15-pro-natural-tatnium.jpg',
                'white titanium': 'https://i.postimg.cc/133tJpVp/15-White-titaniniuum.jpg',
                'blue titanium': 'https://i.postimg.cc/Gtv8ndbG/15-pro-Blue-Titanium.jpg',
                'black titanium': 'https://i.postimg.cc/DyynT7fh/15-pro-Black-Titinium.jpg'
            },
            rating: 5,
            reviews: 70
        },
        {
            id: 2,
            name: 'iPhone 15 Pro',
            condition: 'New',
            storage: {
                '128GB': 16499,
            },
            colors: ['blue titanium', 'natural titanium', 'black titanium'],
            colorImages: {
                'blue titanium': 'https://i.postimg.cc/vZt7yx8S/Blue-Titanium.jpg',
                'natural titanium': 'https://i.postimg.cc/YqVf8Bnb/Natural-titanium.jpg',
                'black titanium': 'https://i.postimg.cc/hjz7XXgn/Black-titanium.jpg',
                
            },
            rating: 5,
            reviews: 29
        },
        {
            id: 3,
            name: 'iPhone 15',
            condition: 'New',
            storage: {
                '128GB': 13999,
            },
            colors: ['blue', 'yellow', 'green', 'black', 'pink'],
            colorImages: {
                'blue': 'https://i.postimg.cc/k5Q9FGM0/15-BLUE.jpg',
                'yellow': 'https://i.postimg.cc/nhfPKksL/15-YELLOW.jpg',
                'green': 'https://i.postimg.cc/26SJbS1F/15-GREEN.jpg',
                'black': 'https://i.postimg.cc/RhVM0mBj/15-BLack.jpg',
                'pink': 'https://i.postimg.cc/Y0JysNbb/15-Pink.jpg'
            },
            rating: 5,
            reviews: 47
        },
        {
            id: 4,
            name: 'iPhone 14 Pro Max',
            condition: 'New',
            storage: {
                '128GB': 14499,
            },
            colors: ['spaceblack', 'silver', 'gold', 'deep purple'],
            colorImages: {
                'spaceblack': 'https://i.postimg.cc/fLPHVjnD/14-pro-space-Black.jpg',
                'silver': 'https://i.postimg.cc/ThMC9d3s/14-pr-Silver.jpg',
                'gold': 'https://i.postimg.cc/BQTdVkfF/14-pro-GOLD.jpg',
                'deep purple': 'https://i.postimg.cc/brQF4DWP/14-Pro-DPU.jpg'
            },
            rating: 5,
            reviews: 46
        },
        {
            id: 5,
            name: 'iPhone 14 Pro',
            condition: 'New',
            storage: {
                '128GB': 13499,
            },
            colors: ['space black', 'silver', 'gold', 'deep purple'],
            colorImages: {
                'space black': 'https://i.postimg.cc/qMNzmVnD/Space-Black.jpg',
                'silver': 'https://i.postimg.cc/ThMC9d3s/14-pr-Silver.jpg',
                'gold': 'https://i.postimg.cc/vTRSpdT7/Gold.jpg',
                'deep purple': 'https://i.postimg.cc/t4Dw7fvy/Deep-purple.jpg'
            },
            rating: 5,
            reviews: 110
        },
        {
            id: 6,
            name: 'iPhone 14',
            condition: 'New',
            storage: {
                '128GB': 10499,
               
            },
            colors: ['midnight', 'starlight', 'blue', 'purple', 'red', 'yellow'],
            colorImages: {
                'midnight': 'https://i.postimg.cc/jSWy50qw/14-Midnight.jpg',
                'starlight': 'https://i.postimg.cc/fR6mS2kH/14-Star-Light.jpg',
                'blue': 'https://i.postimg.cc/jdMh24z9/14-BLue.jpg',
                'purple': 'https://i.postimg.cc/3NMcLCL9/14-Purple.jpg',
                'red': 'https://i.postimg.cc/zfKWCCgq/14-RED.jpg',
                'yellow': 'https://i.postimg.cc/DfBGPy84/14-Yellow.jpg'
            },
            rating: 4.5,
            reviews: 86
        },
        {
            id: 7,
            name: 'iPhone 13 Pro Max',
            condition: 'New',
            storage: {
                '128GB': 12499,

            },
            colors: ['siera blue', 'silver', 'gold', 'graphite', 'green'],
            colorImages: {
                'siera blue': 'https://i.postimg.cc/VNgsP5yj/13-pro-Siera-blue.jpg',
                'graphite': 'https://i.postimg.cc/nc9L9H7J/13-pr-Graphite.jpg',
                'silver': 'https://i.postimg.cc/mgxgQ0NF/13-pro-Silver.jpg',
                'gold': 'https://i.postimg.cc/s2sfL7Lj/13-Pro-Gold.jpg',
                'graphite': 'https://i.postimg.cc/nc9L9H7J/13-pr-Graphite.jpg',
                'green': 'https://i.postimg.cc/Sstyj5xR/13-pro-alphine-green.jpg'
            },
            rating: 5,
            reviews: 59
        },
        {
            id: 8,
            name: 'iPhone 13 Pro',
            condition: 'New',
            storage: {
                '128GB': 11499,
            },
            colors: ['graphite', 'gold', 'silver', 'blue', 'green'],
            colorImages: {
                'graphite': 'https://i.postimg.cc/261Y7mLC/Graphite.jpg',
                'gold': 'https://i.postimg.cc/65yWfrRd/Gold.jpg',
                'silver': 'https://i.postimg.cc/hvwq5YxV/silver.jpg',
                'blue': 'https://i.postimg.cc/C1hYBkSn/siera-blue.jpg',
                'green': 'https://i.postimg.cc/mkrbqMnW/Alphine-green.jpg'
            },
            rating: 5,
            reviews: 68
        },
        {
            id: 9,
            name: 'iPhone 13',
            condition: 'New',
            storage: {
                '128GB': 9999,
            },
            colors: ['starlight', 'midnight', 'blue', 'pink', 'red', 'green'],
            colorImages: {
                'starlight': 'https://i.postimg.cc/5NYYg5s7/01ba5cde650477e30139ad7c459cda27.jpg',
                'midnight': 'https://i.postimg.cc/fR6qWvss/13-Midnight.jpg',
                'blue': 'https://i.postimg.cc/0QvtD2rH/13-Blue.jpg',
                'pink': 'https://i.postimg.cc/5y7phBgZ/13-Pink.jpg',
                'red': 'https://i.postimg.cc/fTPB5vJd/13-red.jpg',
                'green': 'https://i.postimg.cc/PqsKnrbr/13-Green.jpg'
            },
            rating: 4.5,
            reviews: 71
        },
        {
            id: 10,
            name: 'iPhone 12 Pro Max',
            condition: 'New',
            storage: {
                '128GB': 10499,
                '256GB': 11499,
            },
            colors: ['gold', 'black', 'silver', 'pacific blue'],
            colorImages: {
                'gold': 'https://i.postimg.cc/7LKCMKL8/12-pro-Gold.jpg',
                'black': 'https://i.postimg.cc/MHCffXpn/12-Pro-Graphite.jpg',
                'silver': 'https://i.postimg.cc/VkB05fQN/12-pro-max-silver.jpg',
                'pacific blue': 'https://i.postimg.cc/7h2f4Dnw/12-pro-pacific-blue.jpg'
            },
            rating: 4.5,
            reviews: 190
        },
        {
            id: 11,
            name: 'iPhone 12 Pro',
            condition: 'New',
            storage: {
                '128GB': 9499,
                '256GB': 9999,
                
            },
            colors: ['graphite', 'pacific blue', 'gold', 'silver'],
            colorImages: {
                'graphite': 'https://i.postimg.cc/htsdQbqV/Graphite.jpg',
                'pacific blue': 'https://i.postimg.cc/zXmWsGjH/Pacific.jpg',
                'gold': 'https://i.postimg.cc/8PWdc65b/Gold.jpg',
                'silver': 'https://i.postimg.cc/sXv7rBq7/Silver.jpg'
            },
            rating: 4.5,
            reviews: 78
        },
        {
            id: 12,
            name: 'iPhone 12',
            condition: 'New',
            storage: {
                '64GB': 7499,
                '128GB': 7999,
                
            },
            colors: ['black', 'white', 'blue', 'green', 'purple', 'red', 'yellow'],
            colorImages: {
               
                'white': 'https://i.postimg.cc/dVyKwBXR/12-White.jpg',
                 'black': 'https://i.postimg.cc/m2hs6Ry5/12-BLACK.jpg',
                'blue': 'https://i.postimg.cc/j5XbBS1G/12-Blue.jpg',
                'green': 'https://i.postimg.cc/sxHRD0sm/12-GREEN.jpg',
                'purple': 'https://i.postimg.cc/tgGGT6QK/12-Purple.jpg',
                'red': 'https://i.postimg.cc/j2FGrw4k/12-RED.jpg',
                'yellow': 'https://i.postimg.cc/wT1CQ26K/12-Yellow.jpg'
            },
            rating: 4.5,
            reviews: 92
        },
        {
            id: 13,
            name: 'iPhone 11 Pro Max',
            condition: 'Used',
            storage: {
                '64GB': 8499,
                '256GB': 8999,
               
            },
            colors: ['black', 'white', 'gold', 'green'],
            colorImages: {
                'black': 'https://i.postimg.cc/MHmgv3wN/11-pro-black.avif',
                'white': 'https://i.postimg.cc/VN7qLj2g/11-pro-max.jpg',
                'gold': 'https://i.postimg.cc/T3d5LKV4/11-pro-Gold.jpg',
                'green': 'https://i.postimg.cc/m2GH4XtR/11-pr-green.png"'
            },
            rating: 4.5,
            reviews: 108
        },
        {
            id: 14,
            name: 'iPhone 11 Pro',
            condition: 'Used',
            storage: {
                '64GB': 7499,
                '256GB': 7999,
                
            },
            colors: ['white', 'black', 'gold', 'green'],
            colorImages: {
                'white': 'https://i.postimg.cc/9MMHb2SL/White.jpg',
                'black': 'https://i.postimg.cc/QMDXpRhz/Black.jpg',
                'gold': 'https://i.postimg.cc/sxMyjz4M/Gold.jpg',
                'green': 'https://i.postimg.cc/Jz5hd168/green.jpg'
            },
            rating: 4.5,
            reviews: 128
        },
        {
            id: 15,
            name: 'iPhone 11',
            condition: 'Used',
            storage: {
                '64GB': 6499,
                '128GB': 6999,
            },
            colors: ['black', 'white', 'red', 'yellow', 'green', 'purple'],
            colorImages: {
                'black': 'https://i.postimg.cc/Xqg74gz7/11-Black.jpg',
                'white': 'https://i.postimg.cc/9FWQ1vD4/11-White.jpg',
                'red': 'https://i.postimg.cc/N0rs5tzn/11-RED.jpg',
                'yellow': 'https://i.postimg.cc/qRyvZrcK/11-Yellow.jpg',
                'green': 'https://i.postimg.cc/kGw9kg22/Green-11.jpg',
                'purple': 'https://i.postimg.cc/m2XBjhxq/Puple-11.jpg'
            },
            rating: 4.5,
            reviews: 128
        },
        {
            id: 16,
            name: 'iPhone XR',
            condition: 'Refurbished',
            storage: {
                '64GB': 4999,
                '128GB': 5499,
            },
            colors: ['black', 'white', 'blue', 'yellow', 'red', ],
            colorImages: {
                'black': 'https://i.postimg.cc/mDyGHgNm/XR-Black.jpg',
                'white': 'https://i.postimg.cc/gjcbqbgm/White-XR.jpg',
                'blue': 'https://i.postimg.cc/BZN0Ztv6/XR-BLUE.jpg',
                'yellow': 'https://i.postimg.cc/9f33g7Lx/XR-Yellow.jpg',
                'red': 'https://i.postimg.cc/mr7vvgqT/XR-RED.jpg',
                'coral': 'https://i.postimg.cc/ZKMz3gpz/XR-CCORAL.jpg'
            },
            rating: 4,
            reviews: 110
        }
    ];
}

// Render products with dynamic pricing
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const modelFilter = document.getElementById('modelFilter').value;
    const conditionFilter = document.getElementById('conditionFilter').value;

    let filteredProducts = products;

    // Apply filters
    if (modelFilter) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.includes(modelFilter)
        );
    }

    if (conditionFilter) {
        filteredProducts = filteredProducts.filter(product => 
            product.condition === conditionFilter
        );
    }

    // Render filtered products
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            ${product.condition === 'New' ? '<div class="product-badge">New</div>' : ''}
            
            <div class="product-image">
                <img src="${product.colorImages[product.colors[0]]}" 
                     alt="${product.name}" 
                     id="product-image-${product.id}" />
            </div>

            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${'⭐'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '⭐' : ''}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-colors">
                    ${product.colors.map((color, index) => `
                        <div class="color-option ${color} ${index === 0 ? 'active' : ''}" 
                             data-color="${color}"
                             data-product-id="${product.id}"
                             onclick="selectColor(this, '${color}', ${product.id})"></div>
                    `).join('')}
                </div>
                <div class="storage-options">
                    ${Object.keys(product.storage).map((storage, index) => `
                        <div class="storage-option ${index === 0 ? 'active' : ''}" 
                             data-storage="${storage}"
                             data-price="${product.storage[storage]}"
                             onclick="selectStorage(this, '${storage}', ${product.id})">
                            ${storage}
                        </div>
                    `).join('')}
                </div>
                <div class="product-price" id="price-${product.id}">
                    R${product.storage[Object.keys(product.storage)[0]].toLocaleString()}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Select color option
function selectColor(element, color, productId) {
    // Remove active class from all color options for this product
    const productCard = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    const colorOptions = productCard.querySelectorAll('.color-option');
    colorOptions.forEach(option => option.classList.remove('active'));
    
    // Add active class to selected color
    element.classList.add('active');
    
    // Update product image
    const product = products.find(p => p.id === productId);
    if (product && product.colorImages) {
        const productImage = document.getElementById(`product-image-${productId}`);
        productImage.src = product.colorImages[color];
        productImage.alt = `${product.name} (${color})`;
    }
}

// Select storage option and update price
function selectStorage(element, storage, productId) {
    // Remove active class from all storage options for this product
    const productCard = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    const storageOptions = productCard.querySelectorAll('.storage-option');
    storageOptions.forEach(option => option.classList.remove('active'));
    
    // Add active class to selected storage
    element.classList.add('active');
    
    // Update displayed price
    const price = element.dataset.price;
    document.getElementById(`price-${productId}`).textContent = `R${parseInt(price).toLocaleString()}`;
}

// Add to cart with proper image and storage price
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const productCard = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    const activeColor = productCard.querySelector('.color-option.active');
    const activeStorage = productCard.querySelector('.storage-option.active');
    
    const color = activeColor ? activeColor.dataset.color : product.colors[0];
    const storage = activeStorage ? activeStorage.dataset.storage : Object.keys(product.storage)[0];
    const price = activeStorage ? parseInt(activeStorage.dataset.price) : product.storage[Object.keys(product.storage)[0]];
    const imageSrc = product.colorImages[color];

    const existingItemIndex = cart.findIndex(item => 
        item.id === productId && 
        item.color === color && 
        item.storage === storage
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: price,
            storage: storage,
            color: color,
            quantity: 1,
            image: imageSrc
        });
    }

    updateCartUI();
    showNotification(`${product.name} (${storage}, ${color}) added to cart!`);
}

// Update cart UI with images and storage info
function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" />
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-details">
                        <span class="cart-item-storage">${item.storage}</span>
                        <span class="cart-item-color">${item.color}</span>
                    </div>
                    <div class="cart-item-price">R${(item.price * item.quantity).toLocaleString()}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1, '${item.color}', '${item.storage}')">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1, '${item.color}', '${item.storage}')">+</button>
                </div>
            </div>
        `).join('');
    }

    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString();
    
    // Update checkout totals if checkout is open
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTotal = document.getElementById('checkoutTotal');
    if (checkoutSubtotal) checkoutSubtotal.textContent = total.toLocaleString();
    if (checkoutTotal) checkoutTotal.textContent = total.toLocaleString();
}

// Update quantity with color and storage matching
function updateQuantity(productId, change, color, storage) {
    const itemIndex = cart.findIndex(item => 
        item.id === productId && 
        item.color === color && 
        item.storage === storage
    );

    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        updateCartUI();
    }
}

// Filter products
function filterProducts() {
    renderProducts();
}

// Clear filters
function clearFilters() {
    document.getElementById('modelFilter').value = '';
    document.getElementById('conditionFilter').value = '';
    renderProducts();
}

// Toggle cart drawer
function toggleCart() {
    const cartDrawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('overlay');
    
    cartDrawer.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.classList.add('open');
    toggleCart(); // Close cart drawer
}

// Close checkout
function closeCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.classList.remove('open');
}

// Process checkout
function processCheckout(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const orderData = {
        customer: {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            city: formData.get('city'),
            zip: formData.get('zip'),
            country: formData.get('country')
        },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };

    // Send order to WhatsApp
    const whatsappNumber = '+27 82 201 0534';
    const message = `New Order Alert!\n\nCustomer: ${orderData.customer.firstName} ${orderData.customer.lastName}\nEmail: ${orderData.customer.email}\nPhone: ${orderData.customer.phone}\nAddress: ${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.zip}, ${orderData.customer.country}\n\nOrder Items:\n${cart.map(item => `${item.name} (${item.storage}, ${item.color}) x${item.quantity} - R${item.price * item.quantity}`).join('\n')}\n\nTotal: R${orderData.total}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Simulate order processing
    showNotification('Order placed successfully! You will receive a confirmation on WhatsApp shortly.');
    
    // Clear cart and close checkout
    cart = [];
    updateCartUI();
    closeCheckout();
    
    console.log('Order processed:', orderData);
}

// Trade-in functionality
function selectCondition(condition) {
    selectedCondition = condition;
    
    // Update button states
    const buttons = document.querySelectorAll('.condition-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.condition === condition) {
            btn.classList.add('active');
        }
    });
}

function calculateTradeIn() {
    const model = document.getElementById('tradeModel').value;
    const storage = document.getElementById('tradeStorage').value;
    
    if (!model || !storage) {
        showNotification('Please select both model and storage capacity');
        return;
    }

    // Trade-in value calculation
    const baseValues = {
        'iPhone 15 Pro Max': 15000,
        'iPhone 15 Pro': 13000,
        'iPhone 15': 11000,
        'iPhone 14 Pro Max': 12000,
        'iPhone 14 Pro': 10000,
        'iPhone 14': 8000,
        'iPhone 13 Pro Max': 9000,
        'iPhone 13 Pro': 7500,
        'iPhone 13': 6000,
        'iPhone 12 Pro Max': 6500,
        'iPhone 12 Pro': 5500,
        'iPhone 12': 4500,
        'iPhone 11 Pro Max': 4000,
        'iPhone 11 Pro': 3500,
        'iPhone 11': 3000,
        'iPhone XR': 2000
    };

    const storageMultiplier = {
        '64GB': 1.0,
        '128GB': 1.1,
        '256GB': 1.2,
        '512GB': 1.4,
        '1TB': 1.6
    };

    const conditionMultiplier = {
        'Excellent': 1.0,
        'Good': 0.8,
        'Fair': 0.6
    };

    const baseValue = baseValues[model] || 1000;
    const storageBonus = storageMultiplier[storage] || 1.0;
    const conditionAdjustment = conditionMultiplier[selectedCondition] || 1.0;

    const tradeInValue = Math.round(baseValue * storageBonus * conditionAdjustment);

    document.getElementById('tradeValue').innerHTML = `
        <div class="estimated-value">R${tradeInValue.toLocaleString()}</div>
        <p>Estimated trade-in value for your ${model} (${storage}) in ${selectedCondition} condition.</p>
    `;
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    showNotification(`Thank you for subscribing with ${email}!`);
    event.target.reset();
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
        style.remove();
    }, 3000);
}

// Close modals when clicking overlay
document.getElementById('overlay').addEventListener('click', function() {
    const cartDrawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('overlay');
    
    cartDrawer.classList.remove('open');
    overlay.classList.remove('active');
});

// Close checkout when clicking outside
document.getElementById('checkoutModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCheckout();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature, .product-card, .review').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when page loads


document.addEventListener('DOMContentLoaded', initScrollAnimations);
