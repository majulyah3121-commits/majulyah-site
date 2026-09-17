// LISTE DE TES PRODUITS MAJU'LYAH
// Tu peux ajouter, modifier le nom, le prix, la catégorie ou l'image de tes articles ici !
const products = [
    {
        id: 1,
        title: "Carnet d'Organisation Douce",
        category: "Organisation",
        price: 14.90,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        description: "Un carnet de haute qualité aux teintes douces pour planifier vos semaines avec sérénité."
    },
    {
        id: 2,
        title: "Planche de Stickers Terracotta",
        category: "Stickers",
        price: 4.50,
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80",
        description: "Des illustrations faites main imprimées sur du papier sticker résistant aux couleurs chaleureuses."
    },
    {
        id: 3,
        title: "Bloc-Notes Semainier Minimaliste",
        category: "Organisation",
        price: 9.90,
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
        description: "Idéal pour poser sur le bureau et garder un œil sur les priorités de la semaine."
    },
    {
        id: 4,
        title: "Marque-Page Poétique Doré",
        category: "Papeterie",
        price: 3.50,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        description: "Un délicat marque-page imprimé sur papier création texturé avec détails dorés."
    },
    {
        id: 5,
        title: "Box Exclusive Mailow Club",
        category: "Mailow Club",
        price: 24.90,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
        description: "La sélection mensuelle réservée au club avec des articles inédits et des surprises artisanales."
    },
    {
        id: 6,
        title: "Kit Nouveautés Printemps",
        category: "Nouveautés",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
        description: "Les toutes dernières créations rassemblées dans un coffret prêt à offrir."
    }
];

let cart = [];
let currentSelectedProduct = null;

document.addEventListener("DOMContentLoaded", () => {
    // Année automatique dans le footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Initialisation
    renderProducts(products);
    initFilters();
    initModal();
    initCartDrawer();
});

// AFFICHER LES PRODUITS DANS LA GRILLE
function renderProducts(items) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `<p class="text-center" style="grid-column: 1/-1; padding: 20px;">Aucun article disponible dans cette catégorie pour le moment.</p>`;
        return;
    }

    grid.innerHTML = items.map(product => `
        <div class="product-card">
            <div class="product-img-wrapper" onclick="openProductModal(${product.id})">
                <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80'">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title" onclick="openProductModal(${product.id})">${product.title}</h3>
                <div class="product-price">${product.price.toFixed(2)} €</div>
                <button class="btn btn-outline" onclick="addToCart(${product.id}, 1)">Ajouter au panier</button>
            </div>
        </div>
    `).join("");
}

// FILTRES PAR CATÉGORIE
function initFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.getAttribute("data-category");
            if (category === "all") {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });
}

// MODALE PRODUIT
function initModal() {
    const closeBtn = document.getElementById("closeProductModalBtn");
    const backdrop = document.getElementById("closeProductModalBg");
    const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (backdrop) backdrop.addEventListener("click", closeModal);

    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener("click", () => {
            if (currentSelectedProduct) {
                const qtyInput = document.getElementById("modalQty");
                const qty = parseInt(qtyInput.value) || 1;
                addToCart(currentSelectedProduct.id, qty);
                closeModal();
            }
        });
    }
}

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    currentSelectedProduct = product;

    document.getElementById("modalImg").src = product.image;
    document.getElementById("modalCategory").textContent = product.category;
    document.getElementById("modalTitle").textContent = product.title;
    document.getElementById("modalPrice").textContent = `${product.price.toFixed(2)} €`;
    document.getElementById("modalDescription").textContent = product.description;
    document.getElementById("modalQty").value = 1;

    document.getElementById("productModal").classList.add("active");
    document.getElementById("closeProductModalBg").classList.add("active");
}

function closeModal() {
    document.getElementById("productModal").classList.remove("active");
    document.getElementById("closeProductModalBg").classList.remove("active");
}

// PANIER
function initCartDrawer() {
    const openBtn = document.getElementById("openCartBtn");
    const closeBtn = document.getElementById("closeCartBtn");
    const backdrop = document.getElementById("closeCartBg");

    if (openBtn) openBtn.addEventListener("click", openCart);
    if (closeBtn) closeBtn.addEventListener("click", closeCart);
    if (backdrop) backdrop.addEventListener("click", closeCart);
}

function openCart() {
    document.getElementById("cartDrawer").classList.add("active");
    document.getElementById("closeCartBg").classList.add("active");
}

function closeCart() {
    document.getElementById("cartDrawer").classList.remove("active");
    document.getElementById("closeCartBg").classList.remove("active");
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    updateCartUI();
    showToast(`"${product.title}" ajouté au panier !`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    const cartItemsList = document.getElementById("cartItemsList");
    const cartTotalPrice = document.getElementById("cartTotalPrice");
    const mailToCheckout = document.getElementById("mailToCheckout");

    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartCount) cartCount.textContent = totalQty;
    if (cartTotalPrice) cartTotalPrice.textContent = `${totalPrice.toFixed(2)} €`;

    if (cartItemsList) {
        if (cart.length === 0) {
            cartItemsList.innerHTML = `<p class="empty-cart-msg text-center" style="padding: 20px;">Votre panier est vide pour le moment.</p>`;
        } else {
            cartItemsList.innerHTML = cart.map(item => `
                <div class="cart-item" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
                    <img src="${item.image}" alt="${item.title}" style="width:50px; height:50px; object-fit:cover; border-radius:6px;">
                    <div class="cart-item-details" style="flex:1; margin-left:10px;">
                        <div style="font-weight:600; font-size:14px;">${item.title}</div>
                        <div style="font-size:13px; color:#666;">${item.price.toFixed(2)} € x ${item.quantity}</div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" style="background:none; border:none; font-size:18px; cursor:pointer; color:#999;">&times;</button>
                </div>
            `).join("");
        }
    }

    // Génération du lien mailto automatique
    if (mailToCheckout) {
        if (cart.length === 0) {
            mailToCheckout.style.pointerEvents = "none";
            mailToCheckout.style.opacity = "0.5";
            mailToCheckout.href = "#";
        } else {
            mailToCheckout.style.pointerEvents = "auto";
            mailToCheckout.style.opacity = "1";
            
            const summary = cart.map(item => `- ${item.title} (x${item.quantity}) : ${(item.price * item.quantity).toFixed(2)}€`).join('%0D%0A');
            const mailBody = `Bonjour Maju'Lyah,%0D%0A%0D%0AJe souhaite passer commande pour les articles suivants :%0D%0A${summary}%0D%0A%0D%0ATotal : ${totalPrice.toFixed(2)} €%0D%0A%0D%0AMerci !`;
            
            mailToCheckout.href = `mailto:majulyah3121@gmail.com?subject=Nouvelle Commande Maju'Lyah&body=${mailBody}`;
        }
    }
}

// TOAST NOTIFICATION
function showToast(message) {
    const toast = document.getElementById("toastNotification");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}
