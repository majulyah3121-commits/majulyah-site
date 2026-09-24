/* ==========================================================================
MAJU'LYAH - BASE DE DONNÉES DES PRODUITS
========================================================================== */ 

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
id: 4,
name: "Stickers Jouets fille",
category: "Nouveautés",
price: 14.00,
image: "images/stickers-jouets1.jpg",
description: "Organise la chambre de ton enfant.",
variants: [
"Barbies", "Poupées", "Bébés", "Vêtements Bébé", "Vêtements Barbie", "Accessoires",
"Sacs", "Dînette", "Peluches", "Déguisements", "Puzzles",
"Figurines", "Animaux", "Dinosaures", "Licornes", "Lego", "Playmobil", "Super-héros", "Robots", "Voitures", "Coloriage"
],
colors: [
"Bleu foncé", "Bleu clair", "Bleu canard", "Vert clair", "Vert foncé",
"Orange", "Rouge clair", "Rouge foncé", "Jaune clair", "Jaune foncé",
"Gris clair", "Gris foncé", "Noir", "Blanc", "Doré", "Argenté", "Rose", "Violet clair",
"Violet foncé", "Marron"
]
}, 

{
id: 5,
name: "Stickers Jouets garçon",
category: "Nouveautés",
price: 14.00,
image: "images/52a85e9dc8144bcb86f5501f9860c99d.webp",
description: "Organise la chambre de ton enfant.",
variants: [
"Barbies", "Poupées", "Bébés", "Vêtements Bébé", "Vêtements Barbie", "Accessoires",
"Sacs", "Dînette", "Peluches", "Déguisements", "Puzzles",
"Figurines", "Animaux", "Dinosaures", "Licornes", "Lego", "Playmobil", "Super-héros", "Robots", "Voitures", "Coloriage"
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
name: 'Coffret "Le carnet intemporel" – Édition Limitée Automne 🍂✨',
category: "Maju'Club",
price: 20.00,
image: "images/file_00000000a0f8824390f2d0f16c23dfdf.png",
description: "Plonge dans une ambiance douce et réconfortante avec ce coffret idéal pour organiser tes journées. Avec notre concept unique, tu achètes la structure du carnet une seule fois et tu changes simplement la couverture au fil des saisons grâce à notre gamme interchangeable !\n\nCe que contient le coffret (20,00 €) :\n📔 Le carnet ligné et sa couverture soignée.\n🦊 Un marque-page assorti avec son ruban à carreaux.\n🎃 Un marque-page aimanté citrouille dessiné par mes soins.\n🍁 Une planche de stickers automnaux.\n🎁 Un petit cadeau surprise !\n\n📦 Livraison : Mondial Relay (+4,15 €).\n💡 Dans l'encadré \"Message\" de ta commande, pense à noter l'adresse/nom de ton Point Relais ou Locker et ton numéro de téléphone.\n\nOffre-toi une parenthèse de douceur ! ☕️🧡",
variants: ["Kit Complet Automne"],
stock: 5
},

{
id: 9,
name: "Illustration recharges saison automne",
category: "Maju'Club",
price: 5.00,
image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
description: "Recharge de pages et illustrations pour la saison d'automne.",
variants: ["Recharge Automne"]
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

if (product.id === 8) {
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

if (product.id === 8 && product.stock <= 0) {
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


/* ----------------------------------------------------------------------
STICKERS (ID 1, 2, 3, 4, 5)
---------------------------------------------------------------------- */ 

if (product.id === 1 || product.id === 2 || product.id === 3 || product.id === 4 || product.id === 5) { 

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


/* ----------------------------------------------------------------------
AUTRES PRODUITS AVEC VARIANTE
---------------------------------------------------------------------- */ 

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

if (product.id === 8) {
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

if (cart.length === 0) { 
cartItemsList.innerHTML = '<p style="text-align:center; color:var(--color-text-muted, #777); margin-top:40px;">Votre panier est vide pour le moment.</p>'; 

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
const choices = Array.isArray(item.variant) ? item.variant.join(', ') : item.variant; 
const label = (item.id >= 1 && item.id <= 5) ? 'Matières' : 'Option'; 
optionsHTML += `<div class="cart-item-variant">${label} : ${choices}</div>`;
}

if (item.color) { 
optionsHTML += `<div class="cart-item-variant">Couleur : ${item.color}</div>`;
}

itemElement.innerHTML = ` 
<img src="${item.image}" alt="${item.name}" class="cart-item-img"> 

<div class="cart-item-details"> 
    <div class="cart-item-title">${item.name}</div> 
    ${optionsHTML} 
    <div class="cart-item-price">${(item.price * item.quantity).toFixed(2).replace('.', ',')} €</div> 

    <div class="cart-item-qty"> 
        <button type="button" class="qty-btn cart-minus" data-index="${index}">-</button> 
        <span>${item.quantity}</span> 
        <button type="button" class="qty-btn cart-plus" data-index="${index}">+</button> 
    </div> 
</div> 

<button type="button" class="cart-item-remove" data-index="${index}" title="Supprimer">&times;</button>
`;

cartItemsList.appendChild(itemElement);
});
}

const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

if (cartTotalPrice) { 
cartTotalPrice.textContent = `${total.toFixed(2).replace('.', ',')} €`;
}
}


/* ==========================================================================
QUANTITÉS
========================================================================== */ 

function changeQty(index, delta) { 

if (!cart[index]) return; 

const item = cart[index];

if (item.id === 8) {
    const product = products.find(p => p.id === 8);
    if (product) {
        if (delta > 0) {
            if (product.stock < delta) {
                alert("Stock maximum atteint pour le carnet intemporel.");
                return;
            }
            product.stock -= delta;
        } else {
            product.stock += Math.abs(delta);
        }
    }
}

item.quantity += delta;

if (item.quantity <= 0) {
cart.splice(index, 1);
}

updateCartUI();
renderProducts(document.querySelector('.filter-btn.active')?.dataset.category || 'all');
}


/* ==========================================================================
SUPPRESSION PANIER
========================================================================== */ 

function removeCartItem(index) { 

if (!cart[index]) return; 

const item = cart[index];

if (item.id === 8) {
    const product = products.find(p => p.id === 8);
    if (product) {
        product.stock += item.quantity;
    }
}

cart.splice(index, 1); 

updateCartUI();
renderProducts(document.querySelector('.filter-btn.active')?.dataset.category || 'all');
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
const choices = Array.isArray(item.variant) ? item.variant.join(', ') : item.variant; 
const label = (item.id >= 1 && item.id <= 5) ? 'Matières' : 'Option'; 
summary += `  ${label} : ${choices}\n`;
}

if (item.color) { 
summary += `  Couleur : ${item.color}\n`;
}

summary += `  Quantité : ${item.quantity} x ${item.price.toFixed(2)}€ = ${itemTotal.toFixed(2)}€\n\n`;
});

summary += `TOTAL GLOBAL DE LA COMMANDE : ${total.toFixed(2)} €`;

if (hiddenOrderSummary) {
hiddenOrderSummary.value = summary;
} 

if (hiddenOrderTotal) {
hiddenOrderTotal.value = `${total.toFixed(2)} €`;
}
}


/* ==========================================================================
TOAST
========================================================================== */ 

function showToast(message) { 

const toast = document.getElementById('toastNotification'); 
if (!toast) return;

toast.textContent = message; 
toast.classList.add('show');

setTimeout(() => { 
toast.classList.remove('show'); 
}, 2500);
}


/* ==========================================================================
ÉVÉNEMENTS
========================================================================== */ 

function setupEventListeners() {

/* ----------------------------------------------------------------------
FILTRES
---------------------------------------------------------------------- */ 

if (categoryFilters) { 
categoryFilters.addEventListener('click', event => { 
const button = event.target.closest('.filter-btn'); 
if (!button) return;

document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
button.classList.add('active');

renderProducts(button.dataset.category);
});
}


/* ----------------------------------------------------------------------
BOUTONS "VOIR / COMMANDER"
---------------------------------------------------------------------- */ 

if (productsGrid) { 
productsGrid.addEventListener('click', event => { 
const orderButton = event.target.closest('.btn-order-card'); 
if (orderButton) { 
openProductModal(orderButton.dataset.productId); 
return;
}

const productImage = event.target.closest('.product-image-container'); 
if (productImage) { 
const card = productImage.closest('.product-card'); 
if (!card) return; 
const button = card.querySelector('.btn-order-card'); 
if (button) openProductModal(button.dataset.productId);
return;
}

const productName = event.target.closest('.product-name'); 
if (productName) { 
const card = productName.closest('.product-card'); 
if (!card) return; 
const button = card.querySelector('.btn-order-card'); 
if (button) openProductModal(button.dataset.productId);
}
});
}


/* ----------------------------------------------------------------------
MENU MOBILE
---------------------------------------------------------------------- */ 

if (mobileMenuBtn && navLinks) { 
mobileMenuBtn.addEventListener('click', () => {
navLinks.classList.toggle('mobile-open');
});

document.querySelectorAll('.nav-item').forEach(link => { 
link.addEventListener('click', () => {
navLinks.classList.remove('mobile-open');
});
});
}


/* ----------------------------------------------------------------------
FERMETURE MODALE
---------------------------------------------------------------------- */ 

if (closeProductModalBtn) { 
closeProductModalBtn.addEventListener('click', closeProductModal);
}

if (closeProductModalBg) { 
closeProductModalBg.addEventListener('click', closeProductModal);
}


/* ----------------------------------------------------------------------
AJOUT AU PANIER
---------------------------------------------------------------------- */ 

if (modalAddToCartBtn) { 
modalAddToCartBtn.addEventListener('click', () => { 

if (!selectedProductForModal) return;

const qty = parseInt(modalQty?.value) || 1;
let selectedVariant = null;
let selectedColor = null;

/* STICKERS */ 
if (selectedProductForModal.id >= 1 && selectedProductForModal.id <= 5) { 
selectedVariant = [];
const checkboxSelector = '.school-subject-checkbox:checked';

document.querySelectorAll(checkboxSelector).forEach(checkbox => { 
selectedVariant.push(checkbox.value);
});

const colorSelect = document.getElementById('dynamicColorSelect');
selectedColor = colorSelect ? colorSelect.value : null;

if (selectedVariant.length === 0) { 
alert("Merci de sélectionner au moins un choix."); 
return;
}

if (!selectedColor) { 
alert("Merci de choisir une couleur."); 
return;
}
}

/* AUTRES PRODUITS */ 
else if (selectedProductForModal.variants && selectedProductForModal.variants.length > 0) { 
const select = document.getElementById('dynamicVariantSelect');
if (select) selectedVariant = select.value;
}

addToCart(selectedProductForModal, qty, selectedVariant, selectedColor);
closeProductModal();
});
}


/* ----------------------------------------------------------------------
PANIER
---------------------------------------------------------------------- */ 

if (openCartBtn) { 
openCartBtn.addEventListener('click', () => { 
cartDrawer?.classList.add('active');
});
}

if (closeCartBtn) { 
closeCartBtn.addEventListener('click', () => { 
cartDrawer?.classList.remove('active');
});
}

if (closeCartBg) { 
closeCartBg.addEventListener('click', () => { 
cartDrawer?.classList.remove('active');
});
}


/* ----------------------------------------------------------------------
BOUTONS QUANTITÉ DU PANIER
---------------------------------------------------------------------- */ 

if (cartItemsList) { 
cartItemsList.addEventListener('click', event => { 
const minus = event.target.closest('.cart-minus'); 
if (minus) { 
changeQty(Number(minus.dataset.index), -1); 
return;
}

const plus = event.target.closest('.cart-plus'); 
if (plus) { 
changeQty(Number(minus.dataset.index), 1); 
return;
}

const remove = event.target.closest('.cart-item-remove'); 
if (remove) { 
removeCartItem(Number(remove.dataset.index));
}
});
}


/* ----------------------------------------------------------------------
VALIDATION COMMANDE
---------------------------------------------------------------------- */ 

if (goToCheckoutBtn) { 
goToCheckoutBtn.addEventListener('click', () => { 
if (cart.length === 0) return;
prepareOrderSummary();
cartStep1?.classList.remove('active'); 
cartStep2?.classList.add('active');
});
}


/* ----------------------------------------------------------------------
RETOUR PANIER
---------------------------------------------------------------------- */ 

if (backToCartBtn) { 
backToCartBtn.addEventListener('click', () => { 
cartStep2?.classList.remove('active'); 
cartStep1?.classList.add('active');
});
}


/* ----------------------------------------------------------------------
FORMULAIRE FORMSPREE
---------------------------------------------------------------------- */ 

if (orderForm) { 
orderForm.addEventListener('submit', async event => { 
event.preventDefault();

if (orderForm.action.includes('VOTRE_ID_FORMSPREE_ICI')) { 
if (formStatusMessage) { 
formStatusMessage.className = 'form-status-msg error'; 
formStatusMessage.textContent = "Attention : Remplacez VOTRE_ID_FORMSPREE_ICI par votre identifiant Formspree.";
} 
return;
}

const formData = new FormData(orderForm);
const submitBtn = document.getElementById('submitOrderBtn');

if (submitBtn) { 
submitBtn.disabled = true; 
submitBtn.textContent = "Envoi de la commande en cours...";
}

try { 
const response = await fetch(orderForm.action, {
method: 'POST',
body: formData,
headers: { 'Accept': 'application/json' }
});

if (response.ok) { 
if (formStatusMessage) { 
formStatusMessage.className = 'form-status-msg success'; 
formStatusMessage.textContent = "Merci ! Votre commande a été envoyée avec succès.";
}

orderForm.reset(); 
cart = []; 
updateCartUI();
renderProducts('all');

setTimeout(() => { 
cartDrawer?.classList.remove('active'); 
cartStep2?.classList.remove('active'); 
cartStep1?.classList.add('active');

if (formStatusMessage) { 
formStatusMessage.className = 'form-status-msg'; 
formStatusMessage.textContent = '';
} 
}, 4000);

} else { 
throw new Error("Erreur Formspree");
}

} catch (error) { 
console.error("Erreur d'envoi :", error);

if (formStatusMessage) { 
formStatusMessage.className = 'form-status-msg error'; 
formStatusMessage.textContent = "Une erreur est survenue lors de l'envoi. Réessayez.";
}

} finally { 
if (submitBtn) { 
submitBtn.disabled = false; 
submitBtn.textContent = "Valider et envoyer la commande";
}
}
});
}
}


/* ==========================================================================
FONCTIONS ACCESSIBLES DEPUIS LA PAGE
========================================================================== */ 

window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.changeQty = changeQty;
window.removeCartItem = removeCartItem;
