/* ==========================================================================
   MAJU'LYAH - BASE DE DONNÉES DES PRODUITS
   ========================================================================== */

const products = [
    {
        id: 1,
        name: "Stickers 6ème",
        category: "Organisation",
        price: 12.00,
        image: "images/ecriture-teebrush.png",
        description: "Des stickers personnalisés pour organiser tes affaires scolaires.",
        variants: [
            "Français", "Anglais", "Espagnol", "Allemand", "Latin", "Mathématiques",
            "Physique-Chimie", "Sciences physiques", "Physique", "SVT", "Arts plastiques",
            "Musique", "Sport", "EMC", "Histoire-Géographie", "Technologie",
            "Vie de classe", "CDI", "Fournitures scolaires", "Divers"
        ],
        colors: [
            "Bleu foncé", "Bleu clair", "Bleu canard", "Vert clair", "Vert foncé",
            "Orange", "Rouge clair", "Rouge foncé", "Jaune clair", "Jaune foncé",
            "Gris clair", "Gris foncé", "Noir", "Blanc", "Rose", "Violet clair",
            "Violet foncé", "Marron"
        ]
    },

    {
        id: 2,
        name: "Stickers 6ème",
        category: "Organisation",
        price: 12.00,
        image: "images/ecriture-karley.png",
        description: "Des stickers personnalisés pour organiser tes affaires scolaires.",
        variants: [
            "Français", "Anglais", "Espagnol", "Allemand", "Latin", "Mathématiques",
            "Physique-Chimie", "Sciences physiques", "Physique", "SVT", "Arts plastiques",
            "Musique", "Sport", "EMC", "Histoire-Géographie", "Technologie",
            "Vie de classe", "CDI", "Fournitures scolaires", "Divers"
        ],
        colors: [
            "Bleu foncé", "Bleu clair", "Bleu canard", "Vert clair", "Vert foncé",
            "Orange", "Rouge clair", "Rouge foncé", "Jaune clair", "Jaune foncé",
            "Gris clair", "Gris foncé", "Noir", "Blanc", "Rose", "Violet clair",
            "Violet foncé", "Marron"
        ]
    },

    {
        id: 3,
        name: "Stickers 6ème",
        category: "Organisation",
        price: 12.00,
        image: "images/ecriture-mochiy.png",
        description: "Des stickers personnalisés pour organiser tes affaires scolaires.",
        variants: [
            "Français", "Anglais", "Espagnol", "Allemand", "Latin", "Mathématiques",
            "Physique-Chimie", "Sciences physiques", "Physique", "SVT", "Arts plastiques",
            "Musique", "Sport", "EMC", "Histoire-Géographie", "Technologie",
            "Vie de classe", "CDI", "Fournitures scolaires", "Divers"
        ],
        colors: [
            "Bleu foncé", "Bleu clair", "Bleu canard", "Vert clair", "Vert foncé",
            "Orange", "Rouge clair", "Rouge foncé", "Jaune clair", "Jaune foncé",
            "Gris clair", "Gris foncé", "Noir", "Blanc", "Rose", "Violet clair",
            "Violet foncé", "Marron"
        ]
    },

    {
        id: 4,
        name: "Set de Cartes Poétiques & Enveloppes",
        category: "Mailow Club",
        price: 12.00,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
        description: "Coffret de cartes d'art au fini mat accompagnées de leurs enveloppes.",
        variants: ["Lot de 5 cartes", "Lot de 10 cartes"]
    },

    {
        id: 5,
        name: "Planner Non Daté 'Sérénité'",
        category: "Nouveautés",
        price: 24.00,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
        description: "Le compagnon idéal pour planifier votre année à votre rythme, sans dates pré-remplies.",
        variants: ["Reliure Dorée", "Reliure Rose Poudré"]
    },

    {
        id: 6,
        name: "Marque-page en Laiton & Ruban",
        category: "Nouveautés",
        price: 6.50,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        description: "Élégant marque-page en métal finition dorée avec son ruban terracotta.",
        variants: ["Ruban Terracotta", "Ruban Sauge"]
    },

    {
        id: 7,
        name: "Stickers Citations & Pensées",
        category: "Stickers",
        price: 5.20,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80",
        description: "Mots doux, citations motivantes et calligraphie fine.",
        variants: ["Finition Matte", "Finition Glossy"]
    },

    {
        id: 8,
        name: "Kit Papeterie 'Mailow Routine'",
        category: "Mailow Club",
        price: 29.90,
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        description: "Un kit complet comprenant un bloc-notes, une planche de stickers, deux marque-pages et un carnet exclusif Mailow Club.",
        variants: ["Box Complète"]
    }
];

/* ==========================================================================
   GESTION DU PANIER & ÉTAT GLOBAL
   ========================================================================== */

let cart = JSON.parse(localStorage.getItem('majulyah_cart')) || [];
let activeCategory = 'Tous';
let selectedVariants = {};
let selectedColors = {};

/* ==========================================================================
   INITIALISATION ET ÉVÉNEMENTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initCatalog();
    initFilters();
    initModal();
    initCart();
    updateCartUI();
});

/* ==========================================================================
   CATALOGUE & AFFICHAGE PRODUITS
   ========================================================================== */

function initCatalog() {
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const filtered = activeCategory === 'Tous'
        ? products
        : products.filter(p => p.category === activeCategory);

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.price.toFixed(2)} €</p>
            </div>
        </div>
    `).join('');
}

function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.dataset.category || 'Tous';
            renderProducts();
        });
    });
}

/* ==========================================================================
   MODALE DÉTAIL PRODUIT
   ========================================================================== */

function initModal() {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
}

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    selectedVariants[id] = product.variants ? product.variants[0] : null;
    selectedColors[id] = product.colors ? product.colors[0] : null;

    const modal = document.getElementById('product-modal');
    const body = document.getElementById('modal-body');

    let variantsHTML = '';
    if (product.variants && product.variants.length > 0) {
        variantsHTML = `
            <div class="option-group">
                <label class="option-label">Option / Matière :</label>
                <div class="options-grid">
                    ${product.variants.map((v, index) => `
                        <button class="option-btn ${index === 0 ? 'active' : ''}" 
                                onclick="selectVariant(${product.id}, '${v.replace(/'/g, "\\'")}', this)">
                            ${v}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let colorsHTML = '';
    if (product.colors && product.colors.length > 0) {
        colorsHTML = `
            <div class="option-group">
                <label class="option-label">Couleur :</label>
                <div class="options-grid">
                    ${product.colors.map((c, index) => `
                        <button class="option-btn color-btn ${index === 0 ? 'active' : ''}" 
                                onclick="selectColor(${product.id}, '${c.replace(/'/g, "\\'")}', this)">
                            ${c}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    body.innerHTML = `
        <div class="modal-product-layout">
            <div class="modal-image-wrapper">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-details">
                <span class="product-category">${product.category}</span>
                <h2>${product.name}</h2>
                <p class="modal-price">${product.price.toFixed(2)} €</p>
                <p class="modal-description">${product.description}</p>
                
                ${variantsHTML}
                ${colorsHTML}

                <button class="btn-primary add-to-cart-btn" onclick="addToCartFromModal(${product.id})">
                    Ajouter au panier
                </button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.style.display = 'none';
}

function selectVariant(productId, variant, element) {
    selectedVariants[productId] = variant;
    const parent = element.closest('.options-grid');
    parent.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
    element.classList.add('active');
}

function selectColor(productId, color, element) {
    selectedColors[productId] = color;
    const parent = element.closest('.options-grid');
    parent.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
    element.classList.add('active');
}

/* ==========================================================================
   GESTION DU PANIER
   ========================================================================== */

function initCart() {
    const cartIcon = document.getElementById('cart-icon');
    const closeCart = document.getElementById('close-cart');
    const sidebar = document.getElementById('cart-sidebar');

    if (cartIcon && sidebar) {
        cartIcon.addEventListener('click', () => sidebar.classList.add('open'));
    }
    if (closeCart && sidebar) {
        closeCart.addEventListener('click', () => sidebar.classList.remove('open'));
    }
}

function addToCartFromModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const variant = selectedVariants[id] || null;
    const color = selectedColors[id] || null;

    const existingIndex = cart.findIndex(item => 
        item.id === id && item.variant === variant && item.color === color
    );

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            variant: variant,
            color: color,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    closeModal();

    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) sidebar.classList.add('open');
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('majulyah_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalCount;

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = totalPrice.toFixed(2) + ' €';

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Votre panier est vide.</p>';
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                ${item.variant ? `<p class="item-option">Option: ${item.variant}</p>` : ''}
                ${item.color ? `<p class="item-option">Couleur: ${item.color}</p>` : ''}
                <p class="item-price">${item.price.toFixed(2)} €</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
        </div>
    `).join('');
}
