/* ==========================================================================
   MAJU'LYAH - BASE DE DONNÉES PRODUITS & LOGIQUE INTERACTIVE
   ========================================================================== */

// 1. BASE DE DONNÉES DES PRODUITS (Facile à modifier et enrichir)
const products = [
    {
  id: 1,
  name: "Stickers 6ème",
  category: "Organisation",
  price: 12.00,
  image: "https://raw.githubusercontent.com/majulyah3121-commits/majulyah-site/main/images/20260821_164820.jpg",
  description: "Des stickers personnalisés pour la rentrée en 6ème", 
  colors: [
    "Bleu foncé", "Bleu clair", "Bleu canard", "Vert clair",
    "Vert foncé", "Orange", "Rouge clair", "Rouge foncé",
    "Jaune clair", "Jaune foncé", "Gris clair", "Gris foncé",
    "Noir", "Blanc", "Rose", "Violet clair", "Violet foncé", "Marron"
  ]
},
{
  id: 2,
  name: "Stickers enfants",
  category: "Organisation",
  price: 10.00,
  image: "https://raw.githubusercontent.com/majulyah3121-commits/majulyah-site/main/images/20260913_154315.jpg",
  description: "Des stickers personnalisés pour que chaque jouet trouve sa place",
  variants: [
    "Poupée", "Bébé", "Barbie", "Dînette", "Princesse", "Déguisement",
    "Coiffure", "Peluche", "Super-héros", "Dinosaure", "Bricolage",
    "Figurine", "Voiture", "Dessin", "Peinture", "Coloriage",
    "Jeux de société", "Puzzle", "Lego", "Blocs de construction",
    "Kapla", "Playmobil", "Petites voitures", "Circuit de voitures",
    "Train", "Avion", "Robot", "Marionnettes", "Instruments de musique",
    "Pâte à modeler", "Perles", "Autocollants", "Gommettes", "Origami",
    "Découpage", "Loisirs créatifs", "Matériel scolaire", "Licorne",
    "Cheval", "Animaux", "Espace", "Pirates", "Chevaliers", "Livres",
    "Doudou", "Accessoires", "Jeux de plage", "Jeux d’extérieur",
    "Mes jouets", "Mes jeux", "Mes créations", "Mes trésors"
  ],
  colors: [
    "Bleu foncé", "Bleu clair", "Bleu canard", "Vert clair",
    "Vert foncé", "Orange", "Rouge clair", "Rouge foncé",
    "Jaune clair", "Jaune foncé", "Gris clair", "Gris foncé",
    "Noir", "Blanc", "Rose", "Violet clair", "Violet foncé", "Marron"
  ]
},
    {
        id: 3,
        name: "Bloc-notes To-Do List Automnale",
        category: "Papeterie",
        price: 8.00,
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
        description: "Bloc-notes de 50 pages détachables au papier doux. Idéal pour noter vos priorités quotidiennes en toute sérénité.",
        variants: ["Standard (50 pages)", "Grand Format (100 pages)"]
    },
    {
        id: 4,
        name: "Set de Cartes Poétiques & Enveloppes",
        category: "Mailow Club",
        price: 12.00,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
        description: "Coffret de 5 cartes d'art au fini mat accompagnées de leurs enveloppes couleur rose poudré et sceaux dorés.",
        variants: ["Lot de 5 cartes", "Lot de 10 cartes"]
    },
    {
        id: 5,
        name: "Planner Non Daté 'Sérénité'",
        category: "Nouveautés",
        price: 24.00,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
        description: "Le compagnon ultime pour planifier votre année à votre rythme. Sans dates pré-remplies, commencez quand vous le souhaitez.",
        variants: ["Reliure Dorée", "Reliure Rose Poudré"]
    },
    {
        id: 6,
        name: "Marque-page en Laiton & Ruban",
        category: "Nouveautés",
        price: 6.50,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        description: "Élégant marque-page en métal finition dorée avec son ruban en velours terracotta fait main.",
        variants: ["Ruban Terracotta", "Ruban Sauge"]
    },
    {
        id: 7,
        name: "Stickers Citations & Pensées",
        category: "Stickers",
        price: 5.20,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80",
        description: "Mots doux, citations motivantes et calligraphie fine pour embellir votre bullet journal.",
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

// 2. ÉTAT DU PANIER
let cart = [];
let selectedProductForModal = null;

// 3. ÉLÉMENTS DU DOM
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

// Modale Fiche Produit
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

// Formulaire
const orderForm = document.getElementById('orderForm');
const hiddenOrderSummary = document.getElementById('hiddenOrderSummary');
const hiddenOrderTotal = document.getElementById('hiddenOrderTotal');
const formStatusMessage = document.getElementById('formStatusMessage');

// Menu Mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

// 4. INITIALISATION DU SITE
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    setupEventListeners();
    document.getElementById('year').textContent = new Date().getFullYear();
});

// 5. AFFICHAGE DES PRODUITS
function renderProducts(filterCategory) {
    productsGrid.innerHTML = '';

    const filtered = filterCategory === 'all' 
        ? products 
        : products.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase());

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container" onclick="openProductModal(${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name" onclick="openProductModal(${product.id})">${product.name}</h3>
                <p class="product-desc-short">${product.description.substring(0, 65)}...</p>
                <div class="product-bottom">
                    <span class="product-price">${product.price.toFixed(2).replace('.', ',')} €</span>
                    <button class="btn-order-card" onclick="openProductModal(${product.id})">Voir / Commander</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// 6. GESTION DE LA MODALE PRODUIT
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    selectedProductForModal = product;
    modalImg.src = product.image;
    modalCategory.textContent = product.category;
    modalTitle.textContent = product.name;
    modalPrice.textContent = `${product.price.toFixed(2).replace('.', ',')} €`;
    modalDescription.textContent = product.description;
    modalQty.value = 1;

    // Gestion des variantes
    if (product.variants && product.variants.length > 0) {
        modalVariantSelect.innerHTML = '';
        product.variants.forEach(variant => {
            const opt = document.createElement('option');
            opt.value = variant;
            opt.textContent = variant;
            modalVariantSelect.appendChild(opt);
        });
        variantGroup.style.display = 'block';
    } else {
        variantGroup.style.display = 'none';
    }

    productModal.classList.add('active');
}

function closeProductModal() {
    productModal.classList.remove('active');
}

// 7. GESTION DU PANIER & COMMANDES
function addToCart(product, quantity, selectedVariant) {
    const cartItemId = `${product.id}-${selectedVariant || 'default'}`;
    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            variant: selectedVariant || null,
            quantity: quantity
        });
    }

    updateCartUI();
    showToast(`${product.name} ajouté à votre panier !`);
}

function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQty;

    cartItemsList.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = `<p style="text-align:center; color: var(--color-text-muted); margin-top: 40px;">Votre panier est vide pour le moment.</p>`;
        goToCheckoutBtn.disabled = true;
    } else {
        goToCheckoutBtn.disabled = false;
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    ${item.variant ? `<div class="cart-item-variant">Option: ${item.variant}</div>` : ''}
                    <div class="cart-item-price">${(item.price * item.quantity).toFixed(2).replace('.', ',')} €</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Supprimer">&times;</button>
            `;
            cartItemsList.appendChild(itemElement);
        });
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalPrice.textContent = `${total.toFixed(2).replace('.', ',')} €`;
}

function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// 8. SOUMISSION DU FORMULAIRE ET PRÉPARATION DE L'EMAIL
function prepareOrderSummary() {
    let summary = "DÉTAIL DE LA COMMANDE MAJU'LYAH :\n\n";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        summary += `- ${item.name} ${item.variant ? '(' + item.variant + ')' : ''} : Quantité ${item.quantity} x ${item.price.toFixed(2)}€ = ${itemTotal.toFixed(2)}€\n`;
    });

    summary += `\nTOTAL GLOBAL DE LA COMMANDE : ${total.toFixed(2)} €`;

    hiddenOrderSummary.value = summary;
    hiddenOrderTotal.value = `${total.toFixed(2)} €`;
}

// 9. ÉVÉNEMENTS & ECOUTEURS
function setupEventListeners() {
    categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            renderProducts(e.target.dataset.category);
        }
    });

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-open');
        });
    });

    closeProductModalBtn.addEventListener('click', closeProductModal);
    closeProductModalBg.addEventListener('click', closeProductModal);

    modalAddToCartBtn.addEventListener('click', () => {
        if (!selectedProductForModal) return;
        const qty = parseInt(modalQty.value) || 1;
        const selectedVariant = variantGroup.style.display !== 'none' ? modalVariantSelect.value : null;
        addToCart(selectedProductForModal, qty, selectedVariant);
        closeProductModal();
    });

    openCartBtn.addEventListener('click', () => cartDrawer.classList.add('active'));
    closeCartBtn.addEventListener('click', () => cartDrawer.classList.remove('active'));
    closeCartBg.addEventListener('click', () => cartDrawer.classList.remove('active'));

    goToCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    prepareOrderSummary();

    cartStep1.classList.remove('active');
    cartStep2.classList.add('active');

    cartStep2.style.display = 'block';
});

    backToCartBtn.addEventListener('click', () => {
        cartStep2.classList.remove('active');
        cartStep1.classList.add('active');
    });

    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (orderForm.action.includes('VOTRE_ID_FORMSPREE_ICI')) {
            formStatusMessage.className = 'form-status-msg error';
            formStatusMessage.textContent = "Attention : Vous devez d'abord remplacer VOTRE_ID_FORMSPREE_ICI par votre vrai identifiant Formspree dans le fichier index.html.";
            return;
        }

        const formData = new FormData(orderForm);
        const submitBtn = document.getElementById('submitOrderBtn');
        submitBtn.disabled = true;
        submitBtn.textContent = "Envoi de la commande en cours...";

        try {
            const response = await fetch(orderForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatusMessage.className = 'form-status-msg success';
                formStatusMessage.textContent = "Merci ! Votre bon de commande a été envoyé avec succès à Maju’Lyah. Vous allez recevoir un accusé de réception.";
                orderForm.reset();
                cart = [];
                updateCartUI();
                setTimeout(() => {
                    cartDrawer.classList.remove('active');
                    cartStep2.classList.remove('active');
                    cartStep1.classList.add('active');
                    formStatusMessage.style.display = 'none';
                }, 4000);
            } else {
                throw new Error("Erreur lors de l'envoi");
            }
        } catch (error) {
            formStatusMessage.className = 'form-status-msg error';
            formStatusMessage.textContent = "Une erreur est survenue lors de l'envoi. Vérifiez votre connexion ou réessayez.";
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Valider et envoyer la commande";
        }
    });
}

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}
