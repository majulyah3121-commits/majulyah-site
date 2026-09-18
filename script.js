/* ==========================================================================
   MAJU'LYAH - BASE DE DONNÉES DES PRODUITS
   ========================================================================== */

const products = [
    {
        id: 1,
        name: "Stickers 6ème",
        category: "Organisation",
        price: 12.00,
        image: "https://raw.githubusercontent.com/majulyah3121-commits/majulyah-site/main/images/Ecriture%20%20TEEBRUSH_20260918_144804_0001.png",
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
        name: "Stickers enfants",
        category: "Organisation",
        price: 10.00,
        image: "https://raw.githubusercontent.com/majulyah3121-commits/majulyah-site/main/images/20260913_154315.jpg",
        description: "Des stickers personnalisés pour que chaque jouet trouve sa place !",
        variants: [
            "Poupée", "Bébé", "Barbie", "Dînette", "Princesse", "Déguisement",
            "Coiffure", "Peluche", "Super-héros", "Dinosaure", "Bricolage", "Figurine",
            "Voiture", "Jeux de société", "Puzzle", "Lego", "Playmobil", "Train",
            "Avion", "Robot", "Marionnettes", "Instruments de musique", "Licorne", "Animaux"
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

        card.innerHTML = `
            <div class="product-image-container">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >
            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-desc-short">
                    ${product.description.substring(0, 65)}...
                </p>

                <div class="product-bottom">

                    <span class="product-price">
                        ${product.price.toFixed(2).replace('.', ',')} €
                    </span>

                    <button
                        type="button"
                        class="btn-order-card"
                        data-product-id="${product.id}"
                    >
                        Voir / Commander
                    </button>

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

    /* Nettoyage complet des variantes */
    if (variantGroup) {
        variantGroup.innerHTML = '';
        variantGroup.style.display = 'none';
    }

    /*
       On cache le select présent dans index.html.
       Pour les produits simples, on en crée un nouveau uniquement
       lorsque cela est nécessaire.
    */
    if (modalVariantSelect) {
        modalVariantSelect.innerHTML = '';
        modalVariantSelect.style.display = 'none';
    }


    /* ----------------------------------------------------------------------
       STICKERS 6ÈME / STICKERS ENFANTS
       ---------------------------------------------------------------------- */

    if (product.id === 1 || product.id === 2) {

        const labelText = product.id === 1
            ? "Choisis tes matières :"
            : "Quels stickers souhaitez-vous ?";

        const title = document.createElement('div');

        title.textContent = labelText;

        title.style.cssText =
            'display:block; margin-bottom:12px; font-weight:600;';

        variantGroup.appendChild(title);


        const checkboxClass = product.id === 1
            ? 'school-subject-checkbox'
            : 'model-checkbox';


        product.variants.forEach(variant => {

            const label = document.createElement('label');

            label.style.cssText =
                'display:block; margin-bottom:7px; cursor:pointer;';


            const checkbox = document.createElement('input');

            checkbox.type = 'checkbox';
            checkbox.value = variant;
            checkbox.className = checkboxClass;


            label.appendChild(checkbox);
            label.appendChild(
                document.createTextNode(` ${variant}`)
            );


            variantGroup.appendChild(label);
        });


        /* Couleur */

        const colorTitle = document.createElement('div');

        colorTitle.textContent = "Choisis ta couleur :";

        colorTitle.style.cssText =
            'display:block; margin-top:15px; margin-bottom:8px; font-weight:600;';

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

    else if (
        product.variants &&
        product.variants.length > 0
    ) {

        const title = document.createElement('div');

        title.textContent = "Choisis une option :";

        title.style.cssText =
            'display:block; margin-bottom:8px; font-weight:600;';


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

    const variantKey = Array.isArray(selectedVariant)
        ? selectedVariant.join('|')
        : (selectedVariant || 'default');

    const colorKey = selectedColor || 'default';

    const cartItemId =
        `${product.id}-${variantKey}-${colorKey}`;


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

    showToast(
        `${product.name} ajouté à votre panier !`
    );
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


    if (cart.length === 0) {

        cartItemsList.innerHTML = `
            <p style="
                text-align:center;
                color:var(--color-text-muted, #777);
                margin-top:40px;
            ">
                Votre panier est vide pour le moment.
            </p>
        `;

        if (goToCheckoutBtn) {
            goToCheckoutBtn.disabled = true;
        }

    } else {

        if (goToCheckoutBtn) {
            goToCheckoutBtn.disabled = false;
        }


        cart.forEach((item, index) => {

            const itemElement =
                document.createElement('div');

            itemElement.className = 'cart-item';


            let optionsHTML = '';


            if (item.variant) {

                const choices =
                    Array.isArray(item.variant)
                        ? item.variant.join(', ')
                        : item.variant;

                const label =
                    item.id === 1
                        ? 'Matières'
                        : item.id === 2
                            ? 'Modèles'
                            : 'Option';

                optionsHTML += `
                    <div class="cart-item-variant">
                        ${label} : ${choices}
                    </div>
                `;
            }


            if (item.color) {

                optionsHTML += `
                    <div class="cart-item-variant">
                        Couleur : ${item.color}
                    </div>
                `;
            }


            itemElement.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="cart-item-img"
                >

                <div class="cart-item-details">

                    <div class="cart-item-title">
                        ${item.name}
                    </div>

                    ${optionsHTML}

                    <div class="cart-item-price">
                        ${(item.price * item.quantity)
                            .toFixed(2)
                            .replace('.', ',')} €
                    </div>

                    <div class="cart-item-qty">

                        <button
                            type="button"
                            class="qty-btn cart-minus"
                            data-index="${index}"
                        >
                            -
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            type="button"
                            class="qty-btn cart-plus"
                            data-index="${index}"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    type="button"
                    class="cart-item-remove"
                    data-index="${index}"
                    title="Supprimer"
                >
                    &times;
                </button>
            `;


            cartItemsList.appendChild(itemElement);
        });
    }


    const total = cart.reduce(
        (sum, item) =>
            sum + (item.price * item.quantity),
        0
    );


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

    cart[index].quantity += delta;


    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }


    updateCartUI();
}


/* ==========================================================================
   SUPPRESSION PANIER
   ========================================================================== */

function removeCartItem(index) {

    if (!cart[index]) return;

    cart.splice(index, 1);

    updateCartUI();
}


/* ==========================================================================
   RÉSUMÉ DE COMMANDE
   ========================================================================== */

function prepareOrderSummary() {

    let summary =
        "DÉTAIL DE LA COMMANDE MAJU'LYAH :\n\n";

    let total = 0;


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        summary += `- ${item.name}\n`;


        if (item.variant) {

            const choices =
                Array.isArray(item.variant)
                    ? item.variant.join(', ')
                    : item.variant;

            const label =
                item.id === 1
                    ? 'Matières'
                    : item.id === 2
                        ? 'Modèles'
                        : 'Option';

            summary +=
                `  ${label} : ${choices}\n`;
        }


        if (item.color) {

            summary +=
                `  Couleur : ${item.color}\n`;
        }


        summary +=
            `  Quantité : ${item.quantity} x ${item.price.toFixed(2)}€ = ${itemTotal.toFixed(2)}€\n\n`;
    });


    summary +=
        `TOTAL GLOBAL DE LA COMMANDE : ${total.toFixed(2)} €`;


    if (hiddenOrderSummary) {
        hiddenOrderSummary.value = summary;
    }

    if (hiddenOrderTotal) {
        hiddenOrderTotal.value =
            `${total.toFixed(2)} €`;
    }
}


/* ==========================================================================
   TOAST
   ========================================================================== */

function showToast(message) {

    const toast =
        document.getElementById('toastNotification');

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

            const button =
                event.target.closest('.filter-btn');

            if (!button) return;


            document
                .querySelectorAll('.filter-btn')
                .forEach(btn =>
                    btn.classList.remove('active')
                );


            button.classList.add('active');


            renderProducts(
                button.dataset.category
            );
        });
    }


    /* ----------------------------------------------------------------------
       BOUTONS "VOIR / COMMANDER"
       ---------------------------------------------------------------------- */

    if (productsGrid) {

        productsGrid.addEventListener('click', event => {

            const orderButton =
                event.target.closest('.btn-order-card');

            if (orderButton) {

                const productId =
                    orderButton.dataset.productId;

                openProductModal(productId);

                return;
            }


            const productImage =
                event.target.closest('.product-image-container');

            if (productImage) {

                const card =
                    productImage.closest('.product-card');

                if (!card) return;

                const button =
                    card.querySelector('.btn-order-card');

                if (button) {
                    openProductModal(
                        button.dataset.productId
                    );
                }

                return;
            }


            const productName =
                event.target.closest('.product-name');

            if (productName) {

                const card =
                    productName.closest('.product-card');

                if (!card) return;

                const button =
                    card.querySelector('.btn-order-card');

                if (button) {
                    openProductModal(
                        button.dataset.productId
                    );
                }
            }
        });
    }


    /* ----------------------------------------------------------------------
       MENU MOBILE
       ---------------------------------------------------------------------- */

    if (mobileMenuBtn && navLinks) {

        mobileMenuBtn.addEventListener(
            'click',
            () => {
                navLinks.classList.toggle(
                    'mobile-open'
                );
            }
        );


        document
            .querySelectorAll('.nav-item')
            .forEach(link => {

                link.addEventListener(
                    'click',
                    () => {
                        navLinks.classList.remove(
                            'mobile-open'
                        );
                    }
                );
            });
    }


    /* ----------------------------------------------------------------------
       FERMETURE MODALE
       ---------------------------------------------------------------------- */

    if (closeProductModalBtn) {

        closeProductModalBtn.addEventListener(
            'click',
            closeProductModal
        );
    }


    if (closeProductModalBg) {

        closeProductModalBg.addEventListener(
            'click',
            closeProductModal
        );
    }


    /* ----------------------------------------------------------------------
       AJOUT AU PANIER
       ---------------------------------------------------------------------- */

    if (modalAddToCartBtn) {

        modalAddToCartBtn.addEventListener(
            'click',
            () => {

                if (!selectedProductForModal) {
                    return;
                }


                const qty =
                    parseInt(modalQty?.value) || 1;


                let selectedVariant = null;
                let selectedColor = null;


                /* STICKERS */

                if (
                    selectedProductForModal.id === 1 ||
                    selectedProductForModal.id === 2
                ) {

                    selectedVariant = [];


                    const checkboxSelector =
                        selectedProductForModal.id === 1
                            ? '.school-subject-checkbox:checked'
                            : '.model-checkbox:checked';


                    document
                        .querySelectorAll(checkboxSelector)
                        .forEach(checkbox => {

                            selectedVariant.push(
                                checkbox.value
                            );
                        });


                    const colorSelect =
                        document.getElementById(
                            'dynamicColorSelect'
                        );


                    selectedColor =
                        colorSelect
                            ? colorSelect.value
                            : null;


                    if (
                        selectedVariant.length === 0
                    ) {

                        alert(
                            "Merci de sélectionner au moins un choix."
                        );

                        return;
                    }


                    if (!selectedColor) {

                        alert(
                            "Merci de choisir une couleur."
                        );

                        return;
                    }
                }


                /* AUTRES PRODUITS */

                else if (
                    selectedProductForModal.variants &&
                    selectedProductForModal.variants.length > 0
                ) {

                    const select =
                        document.getElementById(
                            'dynamicVariantSelect'
                        );


                    if (select) {
                        selectedVariant =
                            select.value;
                    }
                }


                addToCart(
                    selectedProductForModal,
                    qty,
                    selectedVariant,
                    selectedColor
                );


                closeProductModal();
            }
        );
    }


    /* ----------------------------------------------------------------------
       PANIER
       ---------------------------------------------------------------------- */

    if (openCartBtn) {

        openCartBtn.addEventListener(
            'click',
            () => {

                cartDrawer?.classList.add(
                    'active'
                );
            }
        );
    }


    if (closeCartBtn) {

        closeCartBtn.addEventListener(
            'click',
            () => {

                cartDrawer?.classList.remove(
                    'active'
                );
            }
        );
    }


    if (closeCartBg) {

        closeCartBg.addEventListener(
            'click',
            () => {

                cartDrawer?.classList.remove(
                    'active'
                );
            }
        );
    }


    /* ----------------------------------------------------------------------
       BOUTONS QUANTITÉ DU PANIER
       ---------------------------------------------------------------------- */

    if (cartItemsList) {

        cartItemsList.addEventListener(
            'click',
            event => {

                const minus =
                    event.target.closest('.cart-minus');

                if (minus) {

                    changeQty(
                        Number(minus.dataset.index),
                        -1
                    );

                    return;
                }


                const plus =
                    event.target.closest('.cart-plus');

                if (plus) {

                    changeQty(
                        Number(plus.dataset.index),
                        1
                    );

                    return;
                }


                const remove =
                    event.target.closest(
                        '.cart-item-remove'
                    );

                if (remove) {

                    removeCartItem(
                        Number(remove.dataset.index)
                    );
                }
            }
        );
    }


    /* ----------------------------------------------------------------------
       VALIDATION COMMANDE
       ---------------------------------------------------------------------- */

    if (goToCheckoutBtn) {

        goToCheckoutBtn.addEventListener(
            'click',
            () => {

                if (cart.length === 0) {
                    return;
                }


                prepareOrderSummary();


                cartStep1?.classList.remove(
                    'active'
                );

                cartStep2?.classList.add(
                    'active'
                );
            }
        );
    }


    /* ----------------------------------------------------------------------
       RETOUR PANIER
       ---------------------------------------------------------------------- */

    if (backToCartBtn) {

        backToCartBtn.addEventListener(
            'click',
            () => {

                cartStep2?.classList.remove(
                    'active'
                );

                cartStep1?.classList.add(
                    'active'
                );
            }
        );
    }


    /* ----------------------------------------------------------------------
       FORMULAIRE FORMSPREE
       ---------------------------------------------------------------------- */

    if (orderForm) {

        orderForm.addEventListener(
            'submit',
            async event => {

                event.preventDefault();


                if (
                    orderForm.action.includes(
                        'VOTRE_ID_FORMSPREE_ICI'
                    )
                ) {

                    if (formStatusMessage) {

                        formStatusMessage.className =
                            'form-status-msg error';

                        formStatusMessage.textContent =
                            "Attention : Remplacez VOTRE_ID_FORMSPREE_ICI par votre identifiant Formspree.";
                    }

                    return;
                }


                const formData =
                    new FormData(orderForm);


                const submitBtn =
                    document.getElementById(
                        'submitOrderBtn'
                    );


                if (submitBtn) {

                    submitBtn.disabled = true;

                    submitBtn.textContent =
                        "Envoi de la commande en cours...";
                }


                try {

                    const response =
                        await fetch(
                            orderForm.action,
                            {
                                method: 'POST',
                                body: formData,
                                headers: {
                                    'Accept':
                                        'application/json'
                                }
                            }
                        );


                    if (response.ok) {

                        if (formStatusMessage) {

                            formStatusMessage.className =
                                'form-status-msg success';

                            formStatusMessage.textContent =
                                "Merci ! Votre commande a été envoyée avec succès.";
                        }


                        orderForm.reset();

                        cart = [];

                        updateCartUI();


                        setTimeout(
                            () => {

                                cartDrawer?.classList.remove(
                                    'active'
                                );

                                cartStep2?.classList.remove(
                                    'active'
                                );

                                cartStep1?.classList.add(
                                    'active'
                                );


                                if (formStatusMessage) {

                                    formStatusMessage.className =
                                        'form-status-msg';

                                    formStatusMessage.textContent =
                                        '';
                                }

                            },
                            4000
                        );


                    } else {

                        throw new Error(
                            "Erreur Formspree"
                        );
                    }


                } catch (error) {

                    console.error(
                        "Erreur d'envoi :",
                        error
                    );


                    if (formStatusMessage) {

                        formStatusMessage.className =
                            'form-status-msg error';

                        formStatusMessage.textContent =
                            "Une erreur est survenue lors de l'envoi. Réessayez.";
                    }


                } finally {

                    if (submitBtn) {

                        submitBtn.disabled = false;

                        submitBtn.textContent =
                            "Valider et envoyer la commande";
                    }
                }
            }
        );
    }
}


/* ==========================================================================
   FONCTIONS ACCESSIBLES DEPUIS LA PAGE
   ========================================================================== */

window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.changeQty = changeQty;
window.removeCartItem = removeCartItem;
