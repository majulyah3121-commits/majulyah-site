
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
"Gris clair", "Gris foncé", "Noir", "Blanc", "Doré", "Argenté", "Rose",
"Violet clair", "Violet foncé", "Marron"
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
"Gris clair", "Gris foncé", "Noir", "Blanc", "Doré", "Argenté", "Rose",
"Violet clair", "Violet foncé", "Marron"
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
"Gris clair", "Gris foncé", "Noir", "Blanc", "Doré", "Argenté", "Rose",
"Violet clair", "Violet foncé", "Marron"
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
variants: [
"Recharge Automne", "Recharge Hiver", "Recharge Printemps", "Recharge été"
]
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
ÉTAT (avec chargement et sauvegarde dans localStorage)
========================================================================== */

let cart = JSON.parse(localStorage.getItem('majulyah_cart')) || [];
let selectedProductForModal = null;

// Gestion du retour Formspree ou chargement initial
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (
        urlParams.get("commande") === "envoyee" ||
        localStorage.getItem('clear_cart_pending') === 'true'
    ) {
        cart = [];
        localStorage.removeItem('majulyah_cart');
        localStorage.removeItem('clear_cart_pending');

        window.history.replaceState(
            {},
            document.title,
            window.location.pathname
        );
    }
});

// Fonction utilitaire pour sauvegarder le panier
function saveCartToLocalStorage() {
    localStorage.setItem('majulyah_cart', JSON.stringify(cart));
}


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

    // Initialise le nœud ruban volumineux sous la photo
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

        let buttonHtml = `
            <button type="button" class="btn-order-card"
                data-product-id="${product.id}">
                Voir / Commander
            </button>
        `;

        let stockInfoHtml = '';

        if (product.id === 6) {
            let qtyInCart = 0;

            cart.forEach(item => {
                if (item.id === 6) qtyInCart += item.quantity;
            });

            let currentStock = product.stock - qtyInCart;

            if (currentStock > 0) {
                stockInfoHtml = `
                    <p style="font-size:0.85rem;color:#666;margin:5px 0;">
                        Stock : ${currentStock} disponibles
                    </p>
                `;
            } else {
                stockInfoHtml = `
                    <p style="font-size:0.85rem;color:#d9534f;
                        font-weight:bold;margin:5px 0;">
                        Rupture de stock
                    </p>
                `;

                buttonHtml = `
                    <button type="button"
                        class="btn-order-card disabled"
                        disabled
                        style="background-color:#e0e0e0;color:#888;
                        border:none;cursor:not-allowed;">
                        Épuisé
                    </button>
                `;
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
                    <span class="product-price">
                        ${product.price.toFixed(2).replace('.', ',')} €
                    </span>
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

    if (product.id === 6) {
        let qtyInCart = 0;

        cart.forEach(item => {
            if (item.id === 6) qtyInCart += item.quantity;
        });

        if ((product.stock - qtyInCart) <= 0) {
            alert("Désolé, cet article est en rupture de stock.");
            return;
        }
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
        modalPrice.textContent =
            `${product.price.toFixed(2).replace('.', ',')} €`;
    }

    if (modalDescription) {
        modalDescription.textContent = product.description;
    }

    if (modalQty) {
        modalQty.value = 1;
    }

    // Nettoyage complet des variantes
    if (variantGroup) {
        variantGroup.innerHTML = '';
        variantGroup.style.display = 'none';
    }

    if (modalVariantSelect) {
        modalVariantSelect.innerHTML = '';
        modalVariantSelect.style.display = 'none';
    }

    // STICKERS (ID 1, 2, 3)
    if (product.id >= 1 && product.id <= 3) {

        const title = document.createElement('div');
        title.textContent = "Choisis tes matières :";
        title.style.cssText =
            'display:block;margin-bottom:12px;font-weight:600;';

        variantGroup.appendChild(title);

        const checkboxClass = 'school-subject-checkbox';

        product.variants.forEach(variant => {

            const label = document.createElement('label');
            label.style.cssText =
                'display:block;margin-bottom:7px;cursor:pointer;';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = variant;
            checkbox.className = checkboxClass;

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${variant}`));

            variantGroup.appendChild(label);
        });

        // Couleur
        const colorTitle = document.createElement('div');
        colorTitle.textContent = "Choisis ta couleur :";
        colorTitle.style.cssText =
            'display:block;margin-top:15px;margin-bottom:8px;font-weight:600;';

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

    // AUTRES PRODUITS AVEC VARIANTE
    else if (product.variants && product.variants.length > 0) {

        const title = document.createElement('div');
        title.textContent = "Choisis une option :";
        title.style.cssText =
            'display:block;margin-bottom:8px;font-weight:600;';

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

    // Affichage de la modale
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
        let qtyInCart = 0;

        cart.forEach(item => {
            if (item.id === 6) qtyInCart += item.quantity;
        });

        if (product.stock < (qtyInCart + quantity)) {
            alert(
                `Désolé, il ne reste que ${product.stock - qtyInCart} ` +
                `exemplaire(s) disponible(s) du carnet intemporel en stock.`
            );
            return;
        }
    }

    const colorKey = selectedColor || 'default';

    const variantKey = Array.isArray(selectedVariant)
        ? [...selectedVariant].sort().join('-')
        : (selectedVariant || 'default');

    const cartItemId = `${product.id}-${colorKey}-${variantKey}`;

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

    saveCartToLocalStorage();
    updateCartUI();

    renderProducts(
        document.querySelector('.filter-btn.active')?.dataset.category || 'all'
    );

    showToast(`${product.name} ajouté à votre panier !`);
}


/* ==========================================================================
MISE À JOUR DU PANIER
========================================================================== */

function updateCartUI() {

    if (!cartCount || !cartItemsList) return;

    const totalQty = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    cartCount.textContent = totalQty;
    cartItemsList.innerHTML = '';

    const total = cart.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
    );

    // Gestion du bandeau dynamique de livraison offerte
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

            notice.innerHTML =
                '🎁 <strong>Félicitations !</strong> Vous bénéficiez de la ' +
                '<strong>livraison offerte</strong> !';

        } else {

            const missing = (FREE_SHIPPING_THRESHOLD - total)
                .toFixed(2)
                .replace('.', ',');

            notice.style.display = 'block';
            notice.style.backgroundColor = '#fdf8f5';
            notice.style.color = '#8a5340';
            notice.style.border = '1px dashed #dcae96';

            notice.innerHTML =
                `🚚 Plus que <strong>${missing} €</strong> pour avoir la ` +
                '<strong>livraison offerte</strong> !';
        }
    }

    if (totalLabel) {
        if (total >= FREE_SHIPPING_THRESHOLD) {
            totalLabel.textContent = "Total (livraison offerte) :";
        } else {
            totalLabel.textContent = "Total (hors frais de livraison) :";
        }
    }

    if (cart.length === 0) {

        cartItemsList.innerHTML =
            '<p style="text-align:center;color:var(--color-text-muted, #777);' +
            'margin-top:40px;">Votre panier est vide pour le moment.</p>';

        if (goToCheckoutBtn) {
            goToCheckoutBtn.disabled = true;
        }

    } else {

        if (goToCheckoutBtn) {
            goToCheckoutBtn.disabled = false;
        }

        cart.forEach((item, index) => {

            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';

            let optionsHTML = '';

            if (item.variant) {

                const choices = Array.isArray(item.variant)
                    ? item.variant.join(', ')
                    : item.variant;

                const label = (item.id >= 1 && item.id <= 3)
                    ? 'Matières'
                    : 'Option';

                optionsHTML +=
                    `<div class="cart-item-variant">${label} : ${choices}</div>`;
            }

            if (item.color) {
                optionsHTML +=
                    `<div class="cart-item-variant">Couleur : ${item.color}</div>`;
            }

            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">

                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    ${optionsHTML}

                    <div class="cart-item-price">
                        ${(item.price * item.quantity).toFixed(2).replace('.', ',')} €
                    </div>

                    <div class="cart-item-qty">
                        <button type="button" class="qty-btn cart-minus"
                            data-index="${index}">-</button>

                        <span>${item.quantity}</span>

                        <button type="button" class="qty-btn cart-plus"
                            data-index="${index}">+</button>
                    </div>
                </div>

                <button type="button" class="cart-item-remove"
                    data-index="${index}" title="Supprimer">&times;</button>
            `;

            cartItemsList.appendChild(itemElement);
        });
    }

    if (cartTotalPrice) {
        cartTotalPrice.textContent =
            `${total.toFixed(2).replace('.', ',')} €`;
    }
}


/* ==========================================================================
QUANTITÉS
========================================================================== */

function changeQty(index, delta) {

    if (!cart[index]) return;

    const item = cart[index];

    if (item.id === 6 && delta > 0) {

        const product = products.find(p => p.id === 6);
        let qtyInCart = 0;

        cart.forEach((cartItem, idx) => {
            if (cartItem.id === 6 && idx !== index) {
                qtyInCart += cartItem.quantity;
            }
        });

        if (
            product &&
            product.stock < (qtyInCart + item.quantity + delta)
        ) {
            alert("Stock maximum atteint pour le carnet intemporel.");
            return;
        }
    }

    item.quantity += delta;

    if (item.quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCartToLocalStorage();
    updateCartUI();

    renderProducts(
        document.querySelector('.filter-btn.active')?.dataset.category || 'all'
    );
}


/* ==========================================================================
SUPPRESSION PANIER
========================================================================== */

function removeCartItem(index) {

    if (!cart[index]) return;

    cart.splice(index, 1);

    saveCartToLocalStorage();
    updateCartUI();

    renderProducts(
        document.querySelector('.filter-btn.active')?.dataset.category || 'all'
    );
}


/* ==========================================================================
RÉSUMÉ DE COMMANDE
========================================================================== */

function prepareOrderSummary() {

    let summary = "DÉTAIL DE LA COMMANDE MAJU'LYAH :\n\n";
    let total = 0;

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        summary += `- ${item.name}\n`;

        if (item.variant) {

            const choices = Array.isArray(item.variant)
                ? item.variant.join(', ')
                : item.variant;

            const label = (item.id >= 1 && item.id <= 3)
                ? 'Matières'
                : 'Option';

            summary += `  ${label} : ${choices}\n`;
        }

        if (item.color) {
            summary += `  Couleur : ${item.color}\n`;
        }

        summary +=
            `  Quantité : ${item.quantity} x ${item.price.toFixed(2)}€ ` +
            `= ${itemTotal.toFixed(2)}€\n\n`;
    });

    const isFreeShipping = total >= FREE_SHIPPING_THRESHOLD;

    summary += `TOTAL GLOBAL DE LA COMMANDE : ${total.toFixed(2)} €\n`;

    summary += isFreeShipping
        ? "LIVRAISON : OFFERTE (>= 35€)"
        : "LIVRAISON : Hors frais de livraison";

    if (hiddenOrderSummary) {
        hiddenOrderSummary.value = summary;
    }

    if (hiddenOrderTotal) {
        hiddenOrderTotal.value =
            `${total.toFixed(2)} € ${isFreeShipping ? '(Livraison offerte)' : ''}`;
    }
}


/* ==========================================================================
TOAST / NOTIFICATIONS
========================================================================== */

function showToast(message) {

    let toast = document.getElementById('toastNotification');

    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotification';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}


/* ==========================================================================
COMPTEUR DE VUES
========================================================================== */

function updateVisitCount() {

    fetch('https://abacus.jasoncameron.dev/hit/majulyah-boutique-site/visits')
        .then(response => response.json())
        .then(data => {

            const countElement = document.getElementById('visitCount');

            if (countElement) {
                countElement.textContent =
                    data.value.toLocaleString('fr-FR');
            }
        })
        .catch(error => {

            console.error(
                'Erreur lors du chargement du compteur de vues:',
                error
            );

            const countElement = document.getElementById('visitCount');

            if (countElement && countElement.parentElement) {
                countElement.parentElement.style.display = 'none';
            }
        });
}


/* ==========================================================================
RUBAN ROUGE DE LANCEMENT (Gros Nœud Volumineux sous la photo)
========================================================================== */

function initLaunchRibbon() {

    const oldRibbon = document.getElementById('launchRibbonOverlay');

    if (oldRibbon) oldRibbon.remove();

    const introSection = document.querySelector('.intro-section .container');

    if (!introSection) return;

    const ribbon = document.createElement('div');

    ribbon.id = 'launchRibbonOverlay';

    ribbon.style.cssText =
        'margin:10px auto 30px auto;width:100%;max-width:650px;' +
        'cursor:pointer;user-select:none;position:relative;' +
        'transition:all 0.5s ease-in-out;text-align:center;';

    ribbon.innerHTML = '<div style="position:relative;display:flex;align-items:center;justify-content:center;width:100%;min-height:90px;"><div style="position:absolute;width:100%;height:35px;background:linear-gradient(180deg,#d92525 0%,#b01818 100%);top:50%;transform:translateY(-50%);box-shadow:0 4px 10px rgba(0,0,0,0.15);border-radius:4px;"></div><svg id="bigGiftBow" viewBox="0 0 500 400" style="width:140px;height:auto;position:relative;z-index:2;filter:drop-shadow(0 6px 12px rgba(0,0,0,0.3));transition:transform 0.4s ease;"><path d="M 180 230 Q 130 330 110 370 Q 150 350 200 290 Q 220 250 210 230 Z" fill="#9e0c0c"/><path d="M 320 230 Q 370 330 390 370 Q 350 350 300 290 Q 280 250 290 230 Z" fill="#9e0c0c"/><path d="M 190 230 Q 120 330 90 380 Q 140 350 210 280 Z" fill="#c91818"/><path d="M 310 230 Q 380 330 410 380 Q 360 350 290 280 Z" fill="#c91818"/><path d="M 230 200 C 120 80 40 180 200 220 C 230 225 240 210 230 200 Z" fill="#d92525"/><path d="M 225 190 C 130 100 70 170 195 210 Z" fill="#ff4d4d"/><path d="M 270 200 C 380 80 460 180 300 220 C 270 225 260 210 270 200 Z" fill="#d92525"/><path d="M 275 190 C 370 100 430 170 305 210 Z" fill="#ff4d4d"/><rect x="225" y="180" width="50" height="45" rx="12" fill="#a81111"/><rect x="230" y="183" width="40" height="39" rx="10" fill="#e62e2e"/></svg></div>';

    introSection.insertBefore(ribbon, introSection.firstChild);

    const unwrapRibbon = () => {

        if (ribbon.dataset.dismissed) return;

        ribbon.dataset.dismissed = "true";

        const bow = document.getElementById('bigGiftBow');

        if (bow) {
            bow.style.transform = 'scale(1.3) rotate(-10deg)';
        }

        setTimeout(() => {

            ribbon.style.transform = 'scale(0.8)';
            ribbon.style.opacity = '0';
            ribbon.style.height = '0px';
            ribbon.style.margin = '0 auto';

        }, 200);

        setTimeout(() => {

            if (ribbon && ribbon.parentNode) {
                ribbon.parentNode.removeChild(ribbon);
            }

        }, 600);

        window.removeEventListener('click', unwrapRibbon, true);
        window.removeEventListener('touchstart', unwrapRibbon, true);
    };

    setTimeout(() => {

        ribbon.addEventListener('click', unwrapRibbon);

        ribbon.addEventListener(
            'touchstart',
            unwrapRibbon,
            { passive: true }
        );

        window.addEventListener(
            'click',
            unwrapRibbon,
            { capture: true, once: true }
        );

        window.addEventListener(
            'touchstart',
            unwrapRibbon,
            { capture: true, once: true, passive: true }
        );

    }, 150);
}


/* ==========================================================================
ÉCOUTEURS D'ÉVÉNEMENTS (EVENT LISTENERS)
========================================================================== */

function setupEventListeners() {

    if (categoryFilters) {

        categoryFilters.addEventListener('click', (e) => {

            if (e.target.classList.contains('filter-btn')) {

                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });

                e.target.classList.add('active');

                renderProducts(e.target.dataset.category);
            }
        });
    }

    if (productsGrid) {

        productsGrid.addEventListener('click', (e) => {

            const btn = e.target.closest('.btn-order-card');

            if (btn && !btn.disabled) {
                openProductModal(btn.dataset.productId);
            }
        });
    }

    if (closeProductModalBtn) {
        closeProductModalBtn.addEventListener('click', closeProductModal);
    }

    if (closeProductModalBg) {
        closeProductModalBg.addEventListener('click', closeProductModal);
    }

    if (modalAddToCartBtn) {

        modalAddToCartBtn.addEventListener('click', () => {

            if (!selectedProductForModal) return;

            const quantity = modalQty
                ? parseInt(modalQty.value, 10) || 1
                : 1;

            let selectedVariants = [];
            let selectedColor = null;

            if (
                selectedProductForModal.id >= 1 &&
                selectedProductForModal.id <= 3
            ) {

                const checkboxes = document.querySelectorAll(
                    '.school-subject-checkbox:checked'
                );

                selectedVariants = Array.from(checkboxes).map(
                    cb => cb.value
                );

                const colorSelect =
                    document.getElementById('dynamicColorSelect');

                if (colorSelect) {
                    selectedColor = colorSelect.value;
                }

                if (selectedVariants.length === 0) {
                    alert("Veuillez sélectionner au moins une matière.");
                    return;
                }

                if (!selectedColor) {
                    alert("Veuillez choisir une couleur.");
                    return;
                }

            } else if (
                selectedProductForModal.variants &&
                selectedProductForModal.variants.length > 0
            ) {

                const select =
                    document.getElementById('dynamicVariantSelect');

                if (select) {
                    selectedVariants = [select.value];
                }
            }

            addToCart(
                selectedProductForModal,
                quantity,
                selectedVariants,
                selectedColor
            );

            closeProductModal();
        });
    }

    if (openCartBtn) {

        openCartBtn.addEventListener('click', () => {

            if (cartDrawer) {
                cartDrawer.classList.add('active');
            }
        });
    }

    if (closeCartBtn) {

        closeCartBtn.addEventListener('click', () => {

            if (cartDrawer) {
                cartDrawer.classList.remove('active');
            }
        });
    }

    if (closeCartBg) {

        closeCartBg.addEventListener('click', () => {

            if (cartDrawer) {
                cartDrawer.classList.remove('active');
            }
        });
    }

    if (cartItemsList) {

        cartItemsList.addEventListener('click', (e) => {

            const index = e.target.dataset.index;

            if (e.target.classList.contains('cart-plus')) {

                changeQty(Number(index), 1);

            } else if (e.target.classList.contains('cart-minus')) {

                changeQty(Number(index), -1);

            } else if (e.target.classList.contains('cart-item-remove')) {

                removeCartItem(Number(index));
            }
        });
    }

    if (goToCheckoutBtn) {

        goToCheckoutBtn.addEventListener('click', () => {

            if (cart.length === 0) return;

            if (cartStep1 && cartStep2) {
                cartStep1.style.display = 'none';
                cartStep2.style.display = 'block';
            }
        });
    }

    if (backToCartBtn) {

        backToCartBtn.addEventListener('click', () => {

            if (cartStep1 && cartStep2) {
                cartStep1.style.display = 'block';
                cartStep2.style.display = 'none';
            }
        });
    }


    /* ======================================================================
    ENVOI FORMSPREE
    Le panier est vidé uniquement si Formspree confirme l'envoi.
    ====================================================================== */

    if (orderForm) {

        orderForm.addEventListener('submit', async (e) => {

            e.preventDefault();

            if (!orderForm.reportValidity()) return;

            if (cart.length === 0) {

                if (formStatusMessage) {
                    formStatusMessage.style.display = 'block';
                    formStatusMessage.textContent = "Votre panier est vide.";
                }

                return;
            }

            // Préparer le récapitulatif avant l'envoi
            prepareOrderSummary();

            const originalButtonText = submitOrderBtn
                ? submitOrderBtn.textContent
                : '';

            if (submitOrderBtn) {
                submitOrderBtn.disabled = true;
                submitOrderBtn.textContent = "Envoi en cours...";
            }

            if (formStatusMessage) {
                formStatusMessage.style.display = 'block';
                formStatusMessage.textContent =
                    "Envoi de votre commande en cours...";
            }

            try {

                const response = await fetch(orderForm.action, {
                    method: 'POST',
                    body: new FormData(orderForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error("L'envoi de la commande a échoué.");
                }

                /* ==========================================================
                CONFIRMATION REÇUE :
                1. Vider le panier.
                2. Supprimer les données locales du panier.
                3. Effacer les champs du bon de commande.
                4. Afficher le message de confirmation durable.
                ========================================================== */

                cart = [];

                localStorage.removeItem('majulyah_cart');
                localStorage.removeItem('clear_cart_pending');

                // Actualiser l'affichage du panier vide
                updateCartUI();

                renderProducts(
                    document.querySelector('.filter-btn.active')
                        ?.dataset.category || 'all'
                );

                // Effacer les informations saisies dans le formulaire
                orderForm.reset();

                // Effacer les champs cachés du récapitulatif
                if (hiddenOrderSummary) {
                    hiddenOrderSummary.value = '';
                }

                if (hiddenOrderTotal) {
                    hiddenOrderTotal.value = '';
                }

                // Afficher le message de confirmation sans délai de disparition
                if (formStatusMessage) {
                    formStatusMessage.style.display = 'block';
                    formStatusMessage.textContent =
                        "Merci pour ta commande, elle a bien été envoyée !";
                }

                // Notification temporaire
                showToast("Commande envoyée avec succès !");

                // Revenir à l'étape du panier pour une prochaine commande
                if (cartStep1 && cartStep2) {
                    cartStep1.style.display = 'block';
                    cartStep2.style.display = 'none';
                }

            } catch (error) {

                console.error(
                    "Erreur lors de l'envoi de la commande :",
                    error
                );

                // En cas d'échec, conserver le panier et les informations
                if (formStatusMessage) {
                    formStatusMessage.style.display = 'block';
                    formStatusMessage.textContent =
                        "L'envoi a échoué. Votre panier a été conservé. " +
                        "Vérifie ta connexion puis réessaie.";
                }

            } finally {

                if (submitOrderBtn) {
                    submitOrderBtn.disabled = false;
                    submitOrderBtn.textContent = originalButtonText;
                }
            }
        });
    }

    // Navigation mobile
    if (mobileMenuBtn && navLinks) {

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}
