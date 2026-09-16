/* ==========================================================================
   MAJU'LYAH - PRODUITS
   Produits chargés automatiquement depuis Google Sheets
   ========================================================================== */

const PRODUCTS_API_URL =
    "https://script.google.com/macros/s/AKfycbx1-1iM9zdrZRtq-A47-WxpzX3YVLbHW6fRzmtXEOEmhcc-TRZTTWB24yGPrjY78k0D/exec";


/* ==========================================================================
   OPTIONS SPÉCIALES DES STICKERS
   ========================================================================== */

const stickers6emeVariants = [
    "Français",
    "Anglais",
    "Espagnol",
    "Allemand",
    "Latin",
    "Mathématiques",
    "Physique-Chimie",
    "Sciences physiques",
    "Physique",
    "SVT",
    "Arts plastiques",
    "Musique",
    "Sport",
    "EMC",
    "Histoire-Géographie",
    "Technologie",
    "Vie de classe",
    "CDI",
    "Fournitures scolaires",
    "Divers"
];

const stickersEnfantsVariants = [
    "Poupée",
    "Bébé",
    "Barbie",
    "Dînette",
    "Princesse",
    "Déguisement",
    "Coiffure",
    "Peluche",
    "Super-héros",
    "Dinosaure",
    "Bricolage",
    "Figurine",
    "Voiture",
    "Jeux de société",
    "Puzzle",
    "Lego",
    "Playmobil",
    "Train",
    "Avion",
    "Robot",
    "Marionnettes",
    "Instruments de musique",
    "Licorne",
    "Animaux"
];

const stickerColors = [
    "Bleu foncé",
    "Bleu clair",
    "Bleu canard",
    "Vert clair",
    "Vert foncé",
    "Orange",
    "Rouge clair",
    "Rouge foncé",
    "Jaune clair",
    "Jaune foncé",
    "Gris clair",
    "Gris foncé",
    "Noir",
    "Blanc",
    "Rose",
    "Violet clair",
    "Violet foncé",
    "Marron"
];


/* ==========================================================================
   PRODUITS
   ========================================================================== */

let products = [];


/* ==========================================================================
   ÉTAT DU PANIER
   ========================================================================== */

let cart = [];
let selectedProductForModal = null;


/* ==========================================================================
   ÉLÉMENTS DU DOM
   ========================================================================== */

const productsGrid =
    document.getElementById('productsGrid');

const categoryFilters =
    document.getElementById('categoryFilters');

const cartCount =
    document.getElementById('cartCount');

const cartDrawer =
    document.getElementById('cartDrawer');

const openCartBtn =
    document.getElementById('openCartBtn');

const closeCartBtn =
    document.getElementById('closeCartBtn');

const closeCartBg =
    document.getElementById('closeCartBg');

const cartItemsList =
    document.getElementById('cartItemsList');

const cartTotalPrice =
    document.getElementById('cartTotalPrice');

const goToCheckoutBtn =
    document.getElementById('goToCheckoutBtn');

const cartStep1 =
    document.getElementById('cartStep1');

const cartStep2 =
    document.getElementById('cartStep2');

const backToCartBtn =
    document.getElementById('backToCartBtn');


/* ==========================================================================
   MODALE PRODUIT
   ========================================================================== */

const productModal =
    document.getElementById('productModal');

const closeProductModalBtn =
    document.getElementById('closeProductModalBtn');

const closeProductModalBg =
    document.getElementById('closeProductModalBg');

const modalImg =
    document.getElementById('modalImg');

const modalCategory =
    document.getElementById('modalCategory');

const modalTitle =
    document.getElementById('modalTitle');

const modalPrice =
    document.getElementById('modalPrice');

const modalDescription =
    document.getElementById('modalDescription');

const variantGroup =
    document.getElementById('variantGroup');

const modalVariantSelect =
    document.getElementById('modalVariantSelect');

const modalQty =
    document.getElementById('modalQty');

const modalAddToCartBtn =
    document.getElementById('modalAddToCartBtn');


/* ==========================================================================
   FORMULAIRE
   ========================================================================== */

const orderForm =
    document.getElementById('orderForm');

const hiddenOrderSummary =
    document.getElementById('hiddenOrderSummary');

const hiddenOrderTotal =
    document.getElementById('hiddenOrderTotal');

const formStatusMessage =
    document.getElementById('formStatusMessage');


/* ==========================================================================
   MENU MOBILE
   ========================================================================== */

const mobileMenuBtn =
    document.getElementById('mobileMenuBtn');

const navLinks =
    document.getElementById('navLinks');


/* ==========================================================================
   INITIALISATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', async () => {

    /*
     * On attend que Google Sheets nous donne les produits
     * avant de construire la boutique.
     */

    await loadProductsFromGoogle();

    renderProducts('all');

    setupEventListeners();

    const yearElement =
        document.getElementById('year');

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});


/* ==========================================================================
   CHARGEMENT DES PRODUITS DEPUIS GOOGLE SHEETS
   ========================================================================== */

async function loadProductsFromGoogle() {

    try {

        const response =
            await fetch(
                PRODUCTS_API_URL + "?t=" + Date.now()
            );

        if (!response.ok) {

            throw new Error(
                "Erreur lors du chargement des produits."
            );

        }

        const data =
            await response.json();


        if (!Array.isArray(data)) {

            throw new Error(
                "Les données reçues sont invalides."
            );

        }


        products =
            data
                .filter(product => {

                    const visible =
                        String(
                            product.Visible || ""
                        )
                            .trim()
                            .toLowerCase();

                    return (
                        visible === "oui" ||
                        visible === "true" ||
                        visible === "1"
                    );

                })
                .map((product, index) => {

                    const name =
                        String(
                            product.Nom || ""
                        ).trim();


                    const nameLower =
                        name.toLowerCase();


                    /*
                     * Prix : accepte 10, 10.00 ou 10 €
                     */

                    let price =
                        String(
                            product.Prix || "0"
                        )
                            .replace("€", "")
                            .replace(",", ".")
                            .trim();


                    price =
                        parseFloat(price) || 0;


                    /*
                     * Options enregistrées dans la colonne
                     * "Options".
                     */

                    let variants = [];


                    if (product.Options) {

                        variants =
                            String(
                                product.Options
                            )
                                .split(
                                    /[,;\n|]+/
                                )
                                .map(
                                    option =>
                                        option.trim()
                                )
                                .filter(
                                    option =>
                                        option !== ""
                                );

                    }


                    /*
                     * Les stickers gardent leurs options
                     * spéciales comme dans l'ancien site.
                     */

                    let colors = [];


                    if (
                        nameLower.includes(
                            "stickers 6ème"
                        ) ||
                        nameLower.includes(
                            "stickers 6eme"
                        )
                    ) {

                        variants =
                            stickers6emeVariants.slice();

                        colors =
                            stickerColors.slice();

                    }


                    if (
                        nameLower.includes(
                            "stickers enfants"
                        )
                    ) {

                        variants =
                            stickersEnfantsVariants.slice();

                        colors =
                            stickerColors.slice();

                    }


                    return {

                        /*
                         * On crée un identifiant numérique
                         * pour conserver le fonctionnement
                         * du panier et des modales.
                         */

                        id:
                            index + 1,

                        name:
                            name,

                        category:
                            product.Catégorie ||
                            "Autres",

                        price:
                            price,

                        image:
                            product.Photo ||
                            "",

                        description:
                            product.Description ||
                            "",

                        variants:
                            variants,

                        colors:
                            colors

                    };

                });


        /*
         * Si la feuille ne contient aucun produit visible,
         * on affiche un message plutôt que de remettre les
         * anciens produits automatiquement.
         */

        if (products.length === 0) {

            productsGrid.innerHTML = `
                <p style="text-align:center;">
                    Aucun produit disponible pour le moment.
                </p>
            `;

        }

    } catch (error) {

        console.error(
            "Erreur produits Google Sheets :",
            error
        );


        /*
         * En cas de problème temporaire avec Google,
         * on ne détruit pas la boutique.
         */

        products = [];

        productsGrid.innerHTML = `
            <p style="text-align:center;">
                Les produits sont momentanément indisponibles.
                Merci de réessayer dans quelques instants.
            </p>
        `;

    }

}


/* ==========================================================================
   AFFICHAGE DES PRODUITS
   ========================================================================== */

function renderProducts(filterCategory) {

    productsGrid.innerHTML = '';

    const filtered =
        filterCategory === 'all'
            ? products
            : products.filter(
                p =>
                    p.category.toLowerCase() ===
                    filterCategory.toLowerCase()
            );


    filtered.forEach(product => {

        const card =
            document.createElement('div');

        card.className =
            'product-card';


        /*
         * IMPORTANT :
         * Cette structure est exactement celle
         * de ton ancien script.
         *
         * On ne touche donc pas à la taille des photos.
         */

        card.innerHTML = `

            <div
                class="product-image-container"
                onclick="openProductModal(${product.id})"
            >

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

                <h3
                    class="product-name"
                    onclick="openProductModal(${product.id})"
                >
                    ${product.name}
                </h3>

                <p class="product-desc-short">
                    ${product.description.substring(0, 65)}...
                </p>

                <div class="product-bottom">

                    <span class="product-price">
                        ${product.price
                            .toFixed(2)
                            .replace('.', ',')} €
                    </span>

                    <button
                        class="btn-order-card"
                        type="button"
                        onclick="openProductModal(${product.id})"
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
   MODALE PRODUIT
   ========================================================================== */

function openProductModal(productId) {

    const product =
        products.find(
            p => p.id === productId
        );

    if (!product) return;

    selectedProductForModal =
        product;


    modalImg.src =
        product.image;

    modalCategory.textContent =
        product.category;

    modalTitle.textContent =
        product.name;

    modalPrice.textContent =
        `${product.price
            .toFixed(2)
            .replace('.', ',')} €`;

    modalDescription.textContent =
        product.description;

    modalQty.value =
        1;

    variantGroup.innerHTML =
        '';


    if (
        product.name.toLowerCase().includes(
            "stickers 6ème"
        ) ||
        product.name.toLowerCase().includes(
            "stickers 6eme"
        )
    ) {

        const title =
            document.createElement('label');

        title.textContent =
            "Choisis tes matières :";

        title.style.display =
            'block';

        title.style.marginBottom =
            '12px';

        title.style.fontWeight =
            '600';

        variantGroup.appendChild(
            title
        );


        product.variants.forEach(
            variant => {

                const label =
                    document.createElement('label');

                label.style.display =
                    'block';

                label.style.marginBottom =
                    '7px';

                label.style.cursor =
                    'pointer';


                const checkbox =
                    document.createElement('input');

                checkbox.type =
                    'checkbox';

                checkbox.value =
                    variant;

                checkbox.className =
                    'school-subject-checkbox';


                label.appendChild(
                    checkbox
                );

                label.appendChild(
                    document.createTextNode(
                        ` ${variant}`
                    )
                );


                variantGroup.appendChild(
                    label
                );

            }
        );


        const spacer =
            document.createElement('div');

        spacer.style.height =
            '15px';

        variantGroup.appendChild(
            spacer
        );


        const colorTitle =
            document.createElement('label');

        colorTitle.textContent =
            "Choisis ta couleur :";

        colorTitle.style.display =
            'block';

        colorTitle.style.marginBottom =
            '8px';

        colorTitle.style.fontWeight =
            '600';


        const colorSelect =
            document.createElement('select');

        colorSelect.id =
            'dynamicColorSelect';

        colorSelect.style.width =
            '100%';


        const defaultColor =
            document.createElement('option');

        defaultColor.value =
            '';

        defaultColor.textContent =
            '-- Choisir une couleur --';

        colorSelect.appendChild(
            defaultColor
        );


        product.colors.forEach(
            color => {

                const option =
                    document.createElement(
                        'option'
                    );

                option.value =
                    color;

                option.textContent =
                    color;

                colorSelect.appendChild(
                    option
                );

            }
        );


        variantGroup.appendChild(
            colorTitle
        );

        variantGroup.appendChild(
            colorSelect
        );

        variantGroup.style.display =
            'block';


    } else if (
        product.name.toLowerCase().includes(
            "stickers enfants"
        )
    ) {

        const title =
            document.createElement('label');

        title.textContent =
            "Quels stickers souhaitez-vous ?";

        title.style.display =
            'block';

        title.style.marginBottom =
            '12px';

        title.style.fontWeight =
            '600';

        variantGroup.appendChild(
            title
        );


        product.variants.forEach(
            variant => {

                const label =
                    document.createElement('label');

                label.style.display =
                    'block';

                label.style.marginBottom =
                    '7px';

                label.style.cursor =
                    'pointer';


                const checkbox =
                    document.createElement('input');

                checkbox.type =
                    'checkbox';

                checkbox.value =
                    variant;

                checkbox.className =
                    'model-checkbox';


                label.appendChild(
                    checkbox
                );

                label.appendChild(
                    document.createTextNode(
                        ` ${variant}`
                    )
                );


                variantGroup.appendChild(
                    label
                );

            }
        );


        const spacer =
            document.createElement('div');

        spacer.style.height =
            '15px';

        variantGroup.appendChild(
            spacer
        );


        const colorTitle =
            document.createElement('label');

        colorTitle.textContent =
            "Choisis ta couleur :";

        colorTitle.style.display =
            'block';

        colorTitle.style.marginBottom =
            '8px';

        colorTitle.style.fontWeight =
            '600';


        const colorSelect =
            document.createElement('select');

        colorSelect.id =
            'dynamicColorSelect';

        colorSelect.style.width =
            '100%';


        const defaultColor =
            document.createElement('option');

        defaultColor.value =
            '';

        defaultColor.textContent =
            '-- Choisir une couleur --';

        colorSelect.appendChild(
            defaultColor
        );


        product.colors.forEach(
            color => {

                const option =
                    document.createElement(
                        'option'
                    );

                option.value =
                    color;

                option.textContent =
                    color;

                colorSelect.appendChild(
                    option
                );

            }
        );


        variantGroup.appendChild(
            colorTitle
        );

        variantGroup.appendChild(
            colorSelect
        );

        variantGroup.style.display =
            'block';


    } else if (
        product.variants &&
        product.variants.length > 0
    ) {

        const title =
            document.createElement('label');

        title.textContent =
            "Choisis une option :";

        title.style.display =
            'block';

        title.style.marginBottom =
            '8px';

        title.style.fontWeight =
            '600';


        modalVariantSelect.innerHTML =
            '';


        product.variants.forEach(
            variant => {

                const option =
                    document.createElement(
                        'option'
                    );

                option.value =
                    variant;

                option.textContent =
                    variant;

                modalVariantSelect.appendChild(
                    option
                );

            }
        );


        variantGroup.appendChild(
            title
        );

        variantGroup.appendChild(
            modalVariantSelect
        );

        variantGroup.style.display =
            'block';


    } else {

        variantGroup.style.display =
            'none';

    }


    productModal.classList.add(
        'active'
    );

}


/* ==========================================================================
   FERMER LA MODALE
   ========================================================================== */

function closeProductModal() {

    productModal.classList.remove(
        'active'
    );

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

    const variantKey =
        Array.isArray(selectedVariant)
            ? selectedVariant.join('|')
            : (
                selectedVariant ||
                'default'
            );


    const colorKey =
        selectedColor ||
        'default';


    const cartItemId =
        `${product.id}-${variantKey}-${colorKey}`;


    const existingIndex =
        cart.findIndex(
            item =>
                item.cartItemId ===
                cartItemId
        );


    if (existingIndex > -1) {

        cart[existingIndex].quantity +=
            quantity;

    } else {

        cart.push({

            cartItemId:
                cartItemId,

            id:
                product.id,

            name:
                product.name,

            price:
                product.price,

            image:
                product.image,

            variant:
                selectedVariant || null,

            color:
                selectedColor || null,

            quantity:
                quantity

        });

    }


    updateCartUI();


    showToast(
        `${product.name} ajouté à votre panier !`
    );

}


/* ==========================================================================
   AFFICHAGE DU PANIER
   ========================================================================== */

function updateCartUI() {

    const totalQty =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent =
        totalQty;

    cartItemsList.innerHTML =
        '';


    if (cart.length === 0) {

        cartItemsList.innerHTML = `
            <p
                style="
                    text-align:center;
                    color:var(--color-text-muted);
                    margin-top:40px;
                "
            >
                Votre panier est vide pour le moment.
            </p>
        `;

        goToCheckoutBtn.disabled =
            true;


    } else {

        goToCheckoutBtn.disabled =
            false;


        cart.forEach(
            (item, index) => {

                const itemElement =
                    document.createElement(
                        'div'
                    );

                itemElement.className =
                    'cart-item';


                let optionsHTML =
                    '';


                if (item.variant) {

                    const choices =
                        Array.isArray(
                            item.variant
                        )
                            ? item.variant.join(
                                ', '
                            )
                            : item.variant;


                    optionsHTML += `
                        <div class="cart-item-variant">
                            ${item.id === 1
                                ? 'Matières'
                                : 'Modèles'} :
                            ${choices}
                        </div>
                    `;

                }


                if (item.color) {

                    optionsHTML += `
                        <div class="cart-item-variant">
                            Couleur :
                            ${item.color}
                        </div>
                    `;

                }


                itemElement.innerHTML = `

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        class="cart-item-img"
                    >

                    <div
                        class="cart-item-details"
                    >

                        <div
                            class="cart-item-title"
                        >
                            ${item.name}
                        </div>

                        ${optionsHTML}

                        <div
                            class="cart-item-price"
                        >
                            ${(item.price *
                                item.quantity)
                                .toFixed(2)
                                .replace(
                                    '.',
                                    ','
                                )} €
                        </div>

                        <div
                            class="cart-item-qty"
                        >

                            <button
                                type="button"
                                class="qty-btn"
                                onclick="changeQty(${index}, -1)"
                            >
                                -
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                type="button"
                                class="qty-btn"
                                onclick="changeQty(${index}, 1)"
                            >
                                +
                            </button>

                        </div>

                    </div>

                    <button
                        type="button"
                        class="cart-item-remove"
                        onclick="removeCartItem(${index})"
                        title="Supprimer"
                    >
                        &times;
                    </button>

                `;


                cartItemsList.appendChild(
                    itemElement
                );

            }
        );

    }


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                (
                    item.price *
                    item.quantity
                ),
            0
        );


    cartTotalPrice.textContent =
        `${total
            .toFixed(2)
            .replace('.', ',')} €`;

}


/* ==========================================================================
   MODIFICATION QUANTITÉ
   ========================================================================== */

function changeQty(
    index,
    delta
) {

    cart[index].quantity +=
        delta;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(
            index,
            1
        );

    }


    updateCartUI();

}


/* ==========================================================================
   SUPPRIMER DU PANIER
   ========================================================================== */

function removeCartItem(index) {

    cart.splice(
        index,
        1
    );

    updateCartUI();

}


/* ==========================================================================
   PRÉPARATION DU BON DE COMMANDE
   ========================================================================== */

function prepareOrderSummary() {

    let summary =
        "DÉTAIL DE LA COMMANDE MAJU'LYAH :\n\n";

    let total =
        0;


    cart.forEach(item => {

        const itemTotal =
            item.price *
            item.quantity;


        total +=
            itemTotal;


        summary +=
            `- ${item.name}\n`;


        if (item.variant) {

            const choices =
                Array.isArray(
                    item.variant
                )
                    ? item.variant.join(
                        ', '
                    )
                    : item.variant;


            summary +=
                `  ${item.id === 1 ? 'Matières' : 'Modèles'} : ${choices}\n`;

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


    hiddenOrderSummary.value =
        summary;

    hiddenOrderTotal.value =
        `${total.toFixed(2)} €`;

}


/* ==========================================================================
   ÉVÉNEMENTS
   ========================================================================== */

function setupEventListeners() {

    categoryFilters.addEventListener(
        'click',
        (e) => {

            if (
                e.target.classList.contains(
                    'filter-btn'
                )
            ) {

                document
                    .querySelectorAll(
                        '.filter-btn'
                    )
                    .forEach(
                        btn =>
                            btn.classList.remove(
                                'active'
                            )
                    );


                e.target.classList.add(
                    'active'
                );


                renderProducts(
                    e.target.dataset.category
                );

            }

        }
    );


    mobileMenuBtn.addEventListener(
        'click',
        () => {

            navLinks.classList.toggle(
                'mobile-open'
            );

        }
    );


    document
        .querySelectorAll(
            '.nav-item'
        )
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


    closeProductModalBtn.addEventListener(
        'click',
        closeProductModal
    );


    closeProductModalBg.addEventListener(
        'click',
        closeProductModal
    );


    modalAddToCartBtn.addEventListener(
        'click',
        () => {

            if (
                !selectedProductForModal
            ) return;


            const qty =
                parseInt(
                    modalQty.value
                ) || 1;


            let selectedVariant =
                null;

            let selectedColor =
                null;


            const productName =
                selectedProductForModal
                    .name
                    .toLowerCase();


            if (
                productName.includes(
                    "stickers 6ème"
                ) ||
                productName.includes(
                    "stickers 6eme"
                )
            ) {

                selectedVariant =
                    [];


                document
                    .querySelectorAll(
                        '.school-subject-checkbox:checked'
                    )
                    .forEach(
                        checkbox => {

                            selectedVariant.push(
                                checkbox.value
                            );

                        }
                    );


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
                        "Merci de sélectionner au moins une matière."
                    );

                    return;

                }


                if (
                    !selectedColor
                ) {

                    alert(
                        "Merci de choisir une couleur."
                    );

                    return;

                }


            } else if (
                productName.includes(
                    "stickers enfants"
                )
            ) {

                selectedVariant =
                    [];


                document
                    .querySelectorAll(
                        '.model-checkbox:checked'
                    )
                    .forEach(
                        checkbox => {

                            selectedVariant.push(
                                checkbox.value
                            );

                        }
                    );


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
                        "Merci de sélectionner au moins un type de sticker."
                    );

                    return;

                }


                if (
                    !selectedColor
                ) {

                    alert(
                        "Merci de choisir une couleur."
                    );

                    return;

                }


            } else if (
                selectedProductForModal.variants &&
                selectedProductForModal.variants.length > 0
            ) {

                selectedVariant =
                    modalVariantSelect.value;

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


    openCartBtn.addEventListener(
        'click',
        () =>
            cartDrawer.classList.add(
                'active'
            )
    );


    closeCartBtn.addEventListener(
        'click',
        () =>
            cartDrawer.classList.remove(
                'active'
            )
    );


    closeCartBg.addEventListener(
        'click',
        () =>
            cartDrawer.classList.remove(
                'active'
            )
    );


    goToCheckoutBtn.addEventListener(
        'click',
        () => {

            if (
                cart.length === 0
            ) return;


            prepareOrderSummary();


            cartStep1.classList.remove(
                'active'
            );


            cartStep2.classList.add(
                'active'
            );


            cartStep2.style.display =
                'block';

        }
    );


    backToCartBtn.addEventListener(
        'click',
        () => {

            cartStep2.classList.remove(
                'active'
            );


            cartStep1.classList.add(
                'active'
            );

        }
    );


    /* ======================================================================
       ENVOI FORMSPREE
       ====================================================================== */

    orderForm.addEventListener(
        'submit',
        (e) => {

            e.preventDefault();


            const requiredFields =
                orderForm.querySelectorAll(
                    '[required]'
                );


            for (
                const field of requiredFields
            ) {

                if (
                    !field.checkValidity()
                ) {

                    formStatusMessage.className =
                        'form-status-msg error';

                    formStatusMessage.textContent =
                        "Merci de remplir tous les champs obligatoires et d'accepter les conditions.";

                    field.focus();

                    return;

                }

            }


            prepareOrderSummary();


            const submitBtn =
                document.getElementById(
                    'submitOrderBtn'
                );


            submitBtn.disabled =
                true;


            submitBtn.textContent =
                "Envoi de la commande en cours...";


            HTMLFormElement.prototype.submit.call(
                orderForm
            );

        }
    );

}


/* ==========================================================================
   NOTIFICATION
   ========================================================================== */

function showToast(message) {

    const toast =
        document.getElementById(
            'toastNotification'
        );


    toast.textContent =
        message;


    toast.classList.add(
        'show'
    );


    setTimeout(
        () => {

            toast.classList.remove(
                'show'
            );

        },
        2500
    );

                       }
