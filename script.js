/* ==========================================================================
MAJU'LYAH - BASE DE DONNÉES DES PRODUITS
========================================================================== */

const FREE_SHIPPING_THRESHOLD = 35.00; // Seuil de livraison offerte

const products = [
{
id: 1,
name: "Stickers 6ème - Écriture TEEBRUSH",
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
"Gris clair", "Gris foncé", "Noir", "Blanc", "Doré", "Argenté", "Rose", "Violet clair",
"Violet foncé", "Marron"
]
},

{
id: 2,
name: "Stickers 6ème - Écriture KARLEY",
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
"Gris clair", "Gris foncé", "Noir", "Blanc", "Doré", "Argenté", "Rose", "Violet clair",
"Violet foncé", "Marron"
]
},

{
id: 3,
name: "Stickers 6ème - Écriture MOCHIY",
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
"Gris clair", "Gris foncé", "Noir", "Blanc", "Doré", "Argenté", "Rose", "Violet clair",
"Violet foncé", "Marron"
]
},

{
id: 6,
name: 'Coffret "Le carnet intemporel" – Édition Limitée Automne 🍂✨',
category: "Carnet",
price: 20.00,
image: "images/Design sans titre_20261001_150627_0000.png",
description: "Plonge dans une ambiance douce et réconfortante avec ce coffret idéal pour organiser tes journées. Avec notre concept unique, tu achètes la structure du carnet une seule fois et tu changes simplement la couverture au fil des saisons grâce à notre gamme interchangeable !\n\nCe que contient le coffret (20,00 €) :\n📔 Le carnet petits carreaux et sa couverture soignée.\n🦊 Un marque-page assorti avec son ruban à carreaux.\n🎃 Un marque-page aimanté citrouille dessiné par mes soins.\n🍁 Une planche de stickers automnaux.\n🎁 Un petit cadeau surprise !\n\n📦 Livraison : Mondial Relay (+4,15 €).\n💡 Dans l'encadré \"Message\" de ta commande, pense à noter l'adresse/nom de ton Point Relais ou Locker et ton numéro de téléphone.\n\nOffre-toi une parenthèse de douceur ! ☕️🧡",
variants: ["Kit Complet Automne"],
stock: 5
},

{
id: 7,
name: "Illustration recharges",
category: "Carnet",
price: 5.00,
image: "images/Design sans titre_20261001_152036_0000.png",
description: "Recharge de pages et illustrations pour la saison d'automne.",
variants: ["Recharge Automne", "Recharge Hiver", "Recharge Printemps", "Recharge été"]
},

{
id: 8,
name: "Maju'Lyah - Le petit courrier",
category: "Nouveautés",
price: 10.00,
image: "images/Hello Jolie toi, Merci infiniment d’avoir commandé le Petit Courrier de Maj_20261008_160734_0000.png",
description: "Découvrez Le petit courrier de Maju'Lyah, un retour aux sources, comme le courrier d'avant. PAS d'abonnement obligatoire : tu craques pour le mois qui te plaît et tu commandes en toute liberté. À l'intérieur : des illustrations, de l'organisation des surprises pour toi.",
variants: ["le courrier de Novembre"]
},

{
id: 9,
name: "Planche de Stickers « Douceur d’Automne »",
category: "Stickers",
price: 3.50,
image: "images/1791978392506.jpg",
description: "Apportez une touche cocooning à vos agendas et carnets ! 12 motifs chaleureux pour célébrer la saison. Seulement 3,50 € — Faites le plein de réconfort !"
}
];


/* ==========================================================================
ÉTAT
========================================================================== */

let cart = [];
let selectedProductForModal = null;


/* ==========================================================================
ÉLÉMENTS DU DOM
========================================================================== */

const productsGrid = document.getElementById('productsGrid');
const categoryFilters = document.getElementById('categoryFilters');

const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const closeCartBg = document.getElementById('closeCartBg');
const cartItemsList = document.getElementById('cartItemsList');
const cartTotalPrice = document.getElementById('cartTotalPrice');

const goToCheckoutBtn = document.getElementById('goToCheckoutBtn');
const cartStep1 = document.getElementById('cartStep1');
const cartStep2 = document.getElementById('cartStep2');
const backToCartBtn = document.getElementById('backToCartBtn');


/* ==========================================================================
MODALE PRODUIT
========================================================================== */

const productModal = document.getElementById('productModal');
const closeProductModalBtn = document.getElementById('closeProductModalBtn');
const closeProductModalBg = document.getElementById('closeProductModalBg');

const modalImg = document.getElementById('modalImg');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');

const variantGroup = document.getElementById('variantGroup');
const modalVariantSelect = document.getElementById('modalVariantSelect');
const modalQty = document.getElementById('modalQty');
const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');


/* ==========================================================================
FORMULAIRE
========================================================================== */

const orderForm = document.getElementById('orderForm');
const hiddenOrderSummary = document.getElementById('hiddenOrderSummary');
const hiddenOrderTotal = document.getElementById('hiddenOrderTotal');
const formStatusMessage = document.getElementById('formStatusMessage');
const submitOrderBtn = document.getElementById('submitOrderBtn');


/* ==========================================================================
NAVIGATION MOBILE
========================================================================== */

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');


/* ==========================================================================
INITIALISATION
========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    renderProducts('all');

    setupEventListeners();

    const yearElement = document.getElementById('year');

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    updateCartUI();
    updateVisitCount();
    
    // Initialise le ruban rouge interactif sous la photo
    initLaunchRibbon();
});


/* ==========================================================================
AFFICHAGE DES PRODUITS
========================================================================== */

function renderProducts(filterCategory) {

    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    const filteredProducts = filterCategory === 'all'
        ? products
        : products.filter(product =>
            product.category.toLowerCase() === filterCategory.toLowerCase()
        );

    filteredProducts.forEach(product => {

        const card = document.createElement('div');
        card.className = 'product-card';

        let buttonHtml = `<button type="button" class="btn-order-card" data-product-id="${product.id}">Voir / Commander</button>`;
        let stockInfoHtml = '';

        if (product.id === 6) {
            if (product.stock > 0) {
                stockInfoHtml = `<p style="font-size: 0.85rem; color: #666; margin: 5px 0;">Stock : ${product.stock} disponibles</p>`;
            } else {
                stockInfoHtml = `<p style="font-size: 0.85rem; color: #d9534f; font-weight: bold; margin: 5px 0;">Rupture de stock</p>`;
                buttonHtml = `<button type="button" class="btn-order-card disabled" disabled style="background-color: #e0e0e0; color: #888; border: none; cursor: not-allowed;">Épuisé</button>`;
            }
        }

        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>

            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc-short">${product.description.substring(0, 65)}...</p>
                ${stockInfoHtml}

                <div class="product-bottom">
                    <span class="product-price">${product.price.toFixed(2).replace('.', ',')} €</span>
                    ${buttonHtml}
                </div>
            </div>
        `;

        productsGrid.appendChild(card);
    });
}


/* ==========================================================================
OUVERTURE DE LA FICHE PRODUIT
========================================================================== */

function openProductModal(productId) {

    const product = products.find(
        product => product.id === Number(productId)
    );

    if (!product) {
        console.error("Produit introuvable :", productId);
        return;
    }

    if (product.id === 6 && product.stock <= 0) {
        alert("Désolé, cet article est en rupture de stock.");
        return;
    }

    selectedProductForModal = product;

    if (modalImg) {
        modalImg.src = product.image;
        modalImg.alt = product.name;
    }

    if (modalCategory) {
        modalCategory.textContent = product.category;
    }

    if (modalTitle) {
        modalTitle.textContent = product.name;
    }

    if (modalPrice) {
        modalPrice.textContent = `${product.price.toFixed(2).replace('.', ',')} €`;
    }

    if (modalDescription) {
        modalDescription.textContent = product.description;
    }

    if (modalQty) {
        modalQty.value = 1;
    }

    /* Nettoyage complet des variantes */
    if (variantGroup) {
        variantGroup.innerHTML = '';
        variantGroup.style.display = 'none';
    }

    if (modalVariantSelect) {
        modalVariantSelect.innerHTML = '';
        modalVariantSelect.style.display = 'none';
    }

    /* STICKERS (ID 1, 2, 3) */

    if (product.id >= 1 && product.id <= 3) {

        const title = document.createElement('div');
        title.textContent = "Choisis tes matières :";
        title.style.cssText = 'display:block; margin-bottom:12px; font-weight:600;';
        variantGroup.appendChild(title);

        const checkboxClass = 'school-subject-checkbox';

        product.variants.forEach(variant => {

            const label = document.createElement('label');
            label.style.cssText = 'display:block; margin-bottom:7px; cursor:pointer;';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = variant;
            checkbox.className = checkboxClass;

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${variant}`));

            variantGroup.appendChild(label);
        });

        /* Couleur */

        const colorTitle = document.createElement('div');
        colorTitle.textContent = "Choisis ta couleur :";
        colorTitle.style.cssText = 'display:block; margin-top:15px; margin-bottom:8px; font-weight:600;';
        variantGroup.appendChild(colorTitle);

        const colorSelect = document.createElement('select');
        colorSelect.id = 'dynamicColorSelect';
        colorSelect.style.width = '100%';

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '-- Choisir une couleur --';
        colorSelect.appendChild(defaultOption);

        product.colors.forEach(color => {

            const option = document.createElement('option');
            option.value = color;
            option.textContent = color;
            colorSelect.appendChild(option);
        });

        variantGroup.appendChild(colorSelect);
        variantGroup.style.display = 'block';
    }

    /* AUTRES PRODUITS AVEC VARIANTE */

    else if (product.variants && product.variants.length > 0) {

        const title = document.createElement('div');
        title.textContent = "Choisis une option :";
        title.style.cssText = 'display:block; margin-bottom:8px; font-weight:600;';

        const select = document.createElement('select');
        select.id = 'dynamicVariantSelect';
        select.style.width = '100%';

        product.variants.forEach(variant => {

            const option = document.createElement('option');
            option.value = variant;
            option.textContent = variant;
            select.appendChild(option);
        });

        variantGroup.appendChild(title);
        variantGroup.appendChild(select);
        variantGroup.style.display = 'block';
    }

    /* Affichage de la modale */

    if (productModal) {
        productModal.classList.add('active');
    }
}


/* ==========================================================================
FERMETURE DE LA FICHE PRODUIT
========================================================================== */

function closeProductModal() {

    if (productModal) {
        productModal.classList.remove('active');
    }

    selectedProductForModal = null;
}


/* ==========================================================================
AJOUT AU PANIER
========================================================================== */

function addToCart(
    product,
    quantity,
    selectedVariant,
    selectedColor
) {

    if (product.id === 6) {
        if (product.stock < quantity) {
            alert(`Désolé, il ne reste que ${product.stock} exemplaire(s) du carnet intemporel en stock.`);
            return;
        }

        product.stock -= quantity;
    }

    const colorKey = selectedColor || 'default';

    const cartItemId = `${product.id}-${colorKey}`;

    const existingIndex = cart.findIndex(
        item => item.cartItemId === cartItemId
    );

    if (existingIndex > -1) {

        cart[existingIndex].quantity += quantity;

    } else {

        cart.push({
            cartItemId,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            variant: selectedVariant || null,
            color: selectedColor || null,
            quantity
        });
    }

    updateCartUI();

    renderProducts(document.querySelector('.filter-btn.active')?.dataset.category || 'all');

    showToast(`${product.name} ajouté à votre panier !`);
}


/* ==========================================================================
MISE À JOUR DU PANIER
========================================================================== */

function updateCartUI() {

    if (!cartCount || !cartItemsList) return;

    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartCount.textContent = totalQty;
    cartItemsList.innerHTML = '';

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    /* Gestion du bandeau dynamique de livraison offerte */
    const notice = document.getElementById('freeShippingNotice');
    const totalLabel = document.getElementById('cartTotalLabel');

    if (notice) {
        if (total === 0) {
            notice.style.display = 'none';
        } else if (total >= FREE_SHIPPING_THRESHOLD) {
            notice.style.display = 'block';
            notice.style.backgroundColor = '#e8f5e9';
            notice.style.color = '#2e7d32';
            notice.style.border = '1px solid #c8e6c9';
            notice.innerHTML = '🎁 <strong>
