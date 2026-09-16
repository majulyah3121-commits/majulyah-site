/* =========================================================
   MAJU'LYAH - SCRIPT PRINCIPAL
   Produits chargés automatiquement depuis Google Sheets
   ========================================================= */

const PRODUCTS_API_URL =
  "https://script.google.com/macros/s/AKfycbx1-1iM9zdrZRtq-A47-WxpzX3YVLbHW6fRzmtXEOEmhcc-TRZTTWB24yGPrjY78k0D/exec";

const FORMSPREE_URL = "https://formspree.io/f/xeaojpzq";

/* =========================================================
   DONNÉES DE SECOURS
   Si Google Sheets est momentanément inaccessible,
   le site peut quand même afficher les anciens produits.
   ========================================================= */

const fallbackProducts = [
  {
    id: 1,
    name: "Stickers 6ème",
    category: "Organisation",
    price: 12,
    description:
      "Stickers personnalisés pour organiser les affaires et espaces d’un collégien.",
    image:
      "https://raw.githubusercontent.com/majulyah3121-commits/majulyah-site/main/images/file_000000000fd081f5b6a7065f6ad5254a.png",
    variants: [
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
    ],
    colors: [
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
    ],
    visible: true,
    stock: 999
  },

  {
    id: 2,
    name: "Stickers enfants",
    category: "Organisation",
    price: 10,
    description:
      "Stickers personnalisés pour organiser les jouets et les affaires des enfants.",
    image:
      "https://raw.githubusercontent.com/majulyah3121-commits/majulyah-site/main/images/20260913_154315.jpg",
    variants: [
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
    ],
    colors: [
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
    ],
    visible: true,
    stock: 999
  },

  {
    id: 3,
    name: "Bloc-notes To-Do List Automnale",
    category: "Papeterie",
    price: 8,
    description: "Un joli bloc-notes pour organiser les tâches du quotidien.",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
    variants: [],
    visible: true,
    stock: 999
  },

  {
    id: 4,
    name: "Set de Cartes Poétiques & Enveloppes",
    category: "Mailow Club",
    price: 12,
    description:
      "Un joli set de cartes à conserver, offrir ou utiliser pour de petites attentions.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    variants: [],
    visible: true,
    stock: 999
  },

  {
    id: 5,
    name: "Planner Non Daté 'Sérénité'",
    category: "Nouveautés",
    price: 24,
    description:
      "Un planner non daté pour organiser son quotidien avec simplicité.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    variants: [],
    visible: true,
    stock: 999
  },

  {
    id: 6,
    name: "Marque-page en Laiton & Ruban",
    category: "Nouveautés",
    price: 6.5,
    description:
      "Un marque-page élégant avec finition en laiton et joli ruban.",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80",
    variants: [],
    visible: true,
    stock: 999
  },

  {
    id: 7,
    name: "Stickers Citations & Pensées",
    category: "Stickers",
    price: 5.2,
    description:
      "Une planche de stickers décoratifs autour des citations et pensées positives.",
    image:
      "https://images.unsplash.com/photo-1517842536804-bf6629e2c950?auto=format&fit=crop&w=900&q=80",
    variants: [],
    visible: true,
    stock: 999
  },

  {
    id: 8,
    name: "Kit Papeterie 'Mailow Routine'",
    category: "Mailow Club",
    price: 29.9,
    description:
      "Un joli kit de papeterie pensé pour accompagner l'organisation du quotidien.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    variants: [],
    visible: true,
    stock: 999
  }
];


/* =========================================================
   PRODUITS
   ========================================================= */

let products = [];

let cart = [];

let selectedProductForModal = null;


/* =========================================================
   ÉLÉMENTS HTML
   ========================================================= */

let productsGrid;
let categoryFilter;

let productModal;
let modalImg;
let modalCategory;
let modalTitle;
let modalPrice;
let modalDescription;

let variantGroup;
let modalVariantSelect;
let modalQty;
let modalAddToCartBtn;

let openCartBtn;
let cartCount;
let cartDrawer;
let cartItemsList;
let cartTotalPrice;

let goToCheckoutBtn;
let cartStep1;
let cartStep2;
let backToCartBtn;

let orderForm;
let hiddenOrderSummary;
let hiddenOrderTotal;
let formStatusMessage;
let submitOrderBtn;

let toastNotification;


/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", async function () {

  initialiserElements();

  await chargerProduitsDepuisGoogle();

  renderProducts("all");

  setupEventListeners();

  updateCartUI();

});


/* =========================================================
   RÉCUPÉRATION DES ÉLÉMENTS
   ========================================================= */

function initialiserElements() {

  productsGrid = document.getElementById("productsGrid");

  categoryFilter =
    document.getElementById("categoryFilter") ||
    document.getElementById("categoryFilters");

  productModal = document.getElementById("productModal");

  modalImg = document.getElementById("modalImg");
  modalCategory = document.getElementById("modalCategory");
  modalTitle = document.getElementById("modalTitle");
  modalPrice = document.getElementById("modalPrice");
  modalDescription = document.getElementById("modalDescription");

  variantGroup = document.getElementById("variantGroup");
  modalVariantSelect = document.getElementById("modalVariantSelect");
  modalQty = document.getElementById("modalQty");
  modalAddToCartBtn = document.getElementById("modalAddToCartBtn");

  openCartBtn = document.getElementById("openCartBtn");
  cartCount = document.getElementById("cartCount");
  cartDrawer = document.getElementById("cartDrawer");
  cartItemsList = document.getElementById("cartItemsList");
  cartTotalPrice = document.getElementById("cartTotalPrice");

  goToCheckoutBtn = document.getElementById("goToCheckoutBtn");
  cartStep1 = document.getElementById("cartStep1");
  cartStep2 = document.getElementById("cartStep2");
  backToCartBtn = document.getElementById("backToCartBtn");

  orderForm = document.getElementById("orderForm");
  hiddenOrderSummary = document.getElementById("hiddenOrderSummary");
  hiddenOrderTotal = document.getElementById("hiddenOrderTotal");
  formStatusMessage = document.getElementById("formStatusMessage");
  submitOrderBtn = document.getElementById("submitOrderBtn");

  toastNotification = document.getElementById("toastNotification");
}


/* =========================================================
   CHARGER LES PRODUITS DEPUIS GOOGLE SHEETS
   ========================================================= */

async function chargerProduitsDepuisGoogle() {

  try {

    const response = await fetch(PRODUCTS_API_URL, {
      method: "GET",
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Erreur API : " + response.status);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Les données reçues ne sont pas valides.");
    }

    products = data
      .filter(function (item) {

        const visible = String(item.Visible || "")
          .trim()
          .toLowerCase();

        return (
          visible === "oui" ||
          visible === "true" ||
          visible === "1" ||
          visible === ""
        );

      })
      .map(function (item, index) {

        const produit = {

          id: index + 1,

          name:
            item.Nom ||
            "Produit sans nom",

          category:
            item.Catégorie ||
            "Autres",

          price:
            parseFloat(
              String(item.Prix || 0)
                .replace(",", ".")
                .replace("€", "")
            ) || 0,

          description:
            item.Description ||
            "",

          image:
            item.Photo ||
            "",

          variants:
            convertirOptions(item.Options),

          visible: true,

          stock:
            parseInt(item.Stock, 10) || 0

        };


        /*
         * On conserve automatiquement les options
         * spéciales des deux produits de stickers.
         */

        const nom = produit.name.toLowerCase();

        if (
          nom.includes("stickers 6") ||
          nom.includes("stickers 6ème") ||
          nom.includes("stickers 6eme")
        ) {

          produit.variants = fallbackProducts[0].variants;

          produit.colors = fallbackProducts[0].colors;

        }

        if (nom.includes("stickers enfants")) {

          produit.variants = fallbackProducts[1].variants;

          produit.colors = fallbackProducts[1].colors;

        }


        return produit;

      });


    /*
     * Si Google Sheets est vide, on utilise les produits de secours.
     */

    if (products.length === 0) {

      products = fallbackProducts.slice();

      showToast("Aucun produit trouvé dans Google Sheets.");

    } else {

      showToast("Produits mis à jour automatiquement.");

    }

  } catch (error) {

    console.error(
      "Impossible de charger les produits Google :",
      error
    );

    /*
     * Sécurité :
     * le site continue à fonctionner avec les anciens produits.
     */

    products = fallbackProducts.slice();

    showToast(
      "Connexion produits temporairement indisponible."
    );

  }

}


/* =========================================================
   TRANSFORMER LES OPTIONS DU TABLEAU
   ========================================================= */

function convertirOptions(options) {

  if (!options) {
    return [];
  }

  return String(options)
    .split(/[,;\n|]+/)
    .map(function (item) {
      return item.trim();
    })
    .filter(function (item) {
      return item !== "";
    });

}


/* =========================================================
   AFFICHER LES PRODUITS
   ========================================================= */

function renderProducts(filterCategory) {

  if (!productsGrid) {
    return;
  }

  let produitsAffiches = products.slice();

  if (
    filterCategory &&
    filterCategory !== "all" &&
    filterCategory !== "Toutes"
  ) {

    produitsAffiches = produitsAffiches.filter(
      function (product) {

        return (
          String(product.category).toLowerCase() ===
          String(filterCategory).toLowerCase()
        );

      }
    );

  }


  if (produitsAffiches.length === 0) {

    productsGrid.innerHTML = `
      <div class="empty-products">
        <p>Aucun produit dans cette catégorie.</p>
      </div>
    `;

    return;

  }


  productsGrid.innerHTML = produitsAffiches
    .map(function (product) {

      const prix = Number(product.price || 0)
        .toFixed(2)
        .replace(".", ",");

      const image = product.image || "";

      return `
        <article class="product-card">

          <div
            class="product-card-image"
            onclick="openProductModal(${product.id})"
          >

            ${
              image
                ? `<img
                    src="${escapeHtml(image)}"
                    alt="${escapeHtml(product.name)}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                  >`
                : `
                  <div class="no-product-image">
                    Maju'Lyah
                  </div>
                `
            }

          </div>


          <div class="product-card-content">

            <div class="product-category">
              ${escapeHtml(product.category)}
            </div>

            <h3>
              ${escapeHtml(product.name)}
            </h3>

            <p class="product-description">
              ${escapeHtml(product.description)}
            </p>

            <div class="product-card-bottom">

              <strong class="product-price">
                ${prix} €
              </strong>

              <button
                type="button"
                class="product-button"
                onclick="openProductModal(${product.id})"
              >
                Voir le produit
              </button>

            </div>

          </div>

        </article>
      `;

    })
    .join("");

}


/* =========================================================
   FICHE PRODUIT
   ========================================================= */

function openProductModal(productId) {

  const product = products.find(function (item) {

    return Number(item.id) === Number(productId);

  });


  if (!product) {
    return;
  }


  selectedProductForModal = product;


  if (modalImg) {

    if (product.image) {

      modalImg.src = product.image;

      modalImg.alt = product.name;

      modalImg.style.display = "";

    } else {

      modalImg.style.display = "none";

    }

  }


  if (modalCategory) {

    modalCategory.textContent =
      product.category || "";

  }


  if (modalTitle) {

    modalTitle.textContent =
      product.name || "";

  }


  if (modalPrice) {

    modalPrice.textContent =
      Number(product.price || 0)
        .toFixed(2)
        .replace(".", ",") + " €";

  }


  if (modalDescription) {

    modalDescription.textContent =
      product.description || "";

  }


  /*
   * Options
   */

  if (variantGroup && modalVariantSelect) {

    const variants = Array.isArray(product.variants)
      ? product.variants
      : [];


    if (variants.length > 0) {

      variantGroup.style.display = "";

      modalVariantSelect.innerHTML = `
        <option value="">
          Choisir une option
        </option>
      `;

      variants.forEach(function (variant) {

        const option = document.createElement("option");

        option.value = variant;

        option.textContent = variant;

        modalVariantSelect.appendChild(option);

      });

    } else {

      variantGroup.style.display = "none";

      modalVariantSelect.innerHTML = "";

    }

  }


  /*
   * Quantité
   */

  if (modalQty) {

    modalQty.value = 1;

    modalQty.min = 1;

  }


  /*
   * Ouvrir
   */

  if (productModal) {

    productModal.classList.add("active");

    productModal.style.display = "flex";

  }

}


window.openProductModal = openProductModal;


/* =========================================================
   FERMER LA FICHE PRODUIT
   ========================================================= */

function closeProductModal() {

  if (!productModal) {
    return;
  }

  productModal.classList.remove("active");

  productModal.style.display = "none";

}


/* =========================================================
   AJOUTER AU PANIER
   ========================================================= */

function addToCart() {

  if (!selectedProductForModal) {
    return;
  }


  const product = selectedProductForModal;


  let variant = "";

  if (
    modalVariantSelect &&
    variantGroup &&
    variantGroup.style.display !== "none"
  ) {

    variant = modalVariantSelect.value;

    if (!variant) {

      showToast(
        "Choisis une option avant d'ajouter le produit."
      );

      return;

    }

  }


  let quantity = 1;

  if (modalQty) {

    quantity =
      parseInt(modalQty.value, 10) || 1;

  }


  /*
   * Couleur éventuelle
   */

  let color = "";

  const colorSelect =
    document.getElementById("modalColorSelect");

  if (colorSelect) {

    color = colorSelect.value || "";

  }


  const existingItem = cart.find(
    function (item) {

      return (
        item.productId === product.id &&
        item.variant === variant &&
        item.color === color
      );

    }
  );


  if (existingItem) {

    existingItem.quantity += quantity;

  } else {

    cart.push({

      productId: product.id,

      name: product.name,

      price: Number(product.price) || 0,

      image: product.image || "",

      variant: variant,

      color: color,

      quantity: quantity

    });

  }


  updateCartUI();

  closeProductModal();

  showToast("Produit ajouté au panier 🛍️");

}


window.addToCart = addToCart;


/* =========================================================
   PANIER
   ========================================================= */

function updateCartUI() {

  const totalQuantity = cart.reduce(
    function (total, item) {

      return total + item.quantity;

    },
    0
  );


  const totalPrice = cart.reduce(
    function (total, item) {

      return (
        total +
        item.price * item.quantity
      );

    },
    0
  );


  if (cartCount) {

    cartCount.textContent =
      totalQuantity;

  }


  if (cartTotalPrice) {

    cartTotalPrice.textContent =
      totalPrice
        .toFixed(2)
        .replace(".", ",") + " €";

  }


  renderCartItems();

}


/* =========================================================
   AFFICHER LE CONTENU DU PANIER
   ========================================================= */

function renderCartItems() {

  if (!cartItemsList) {
    return;
  }


  if (cart.length === 0) {

    cartItemsList.innerHTML = `
      <div class="empty-cart">
        <p>Ton panier est vide.</p>
      </div>
    `;

    return;

  }


  cartItemsList.innerHTML = cart
    .map(function (item, index) {

      const sousTotal =
        item.price * item.quantity;


      return `
        <div class="cart-item">

          ${
            item.image
              ? `
                <img
                  src="${escapeHtml(item.image)}"
                  alt="${escapeHtml(item.name)}"
                  class="cart-item-image"
                >
              `
              : ""
          }


          <div class="cart-item-info">

            <strong>
              ${escapeHtml(item.name)}
            </strong>

            ${
              item.variant
                ? `
                  <small>
                    Option : ${escapeHtml(item.variant)}
                  </small>
                `
                : ""
            }

            ${
              item.color
                ? `
                  <small>
                    Couleur : ${escapeHtml(item.color)}
                  </small>
                `
                : ""
            }


            <div class="cart-item-price">

              ${item.price
                .toFixed(2)
                .replace(".", ",")} €

            </div>


            <div class="cart-quantity">

              <button
                type="button"
                onclick="changeQty(${index}, -1)"
              >
                −
              </button>

              <span>
                ${item.quantity}
              </span>

              <button
                type="button"
                onclick="changeQty(${index}, 1)"
              >
                +
              </button>

            </div>


            <div class="cart-item-subtotal">

              Sous-total :
              ${sousTotal
                .toFixed(2)
                .replace(".", ",")} €

            </div>


            <button
              type="button"
              class="remove-cart-item"
              onclick="removeCartItem(${index})"
            >
              Supprimer
            </button>

          </div>

        </div>
      `;

    })
    .join("");

}


/* =========================================================
   MODIFIER QUANTITÉ
   ========================================================= */

function changeQty(index, amount) {

  if (!cart[index]) {
    return;
  }


  cart[index].quantity += amount;


  if (cart[index].quantity <= 0) {

    cart.splice(index, 1);

  }


  updateCartUI();

}


window.changeQty = changeQty;


/* =========================================================
   SUPPRIMER DU PANIER
   ========================================================= */

function removeCartItem(index) {

  if (!cart[index]) {
    return;
  }


  cart.splice(index, 1);

  updateCartUI();

  showToast("Produit supprimé du panier.");

}


window.removeCartItem = removeCartItem;


/* =========================================================
   OUVRIR LE PANIER
   ========================================================= */

function openCart() {

  if (!cartDrawer) {
    return;
  }

  cartDrawer.classList.add("active");

}


function closeCart() {

  if (!cartDrawer) {
    return;
  }

  cartDrawer.classList.remove("active");

}


/* =========================================================
   RÉSUMÉ DE COMMANDE
   ========================================================= */

function prepareOrderSummary() {

  if (!cart.length) {

    return "";

  }


  let summary = "";


  cart.forEach(function (item) {

    summary +=
      item.name +
      " x" +
      item.quantity;


    if (item.variant) {

      summary +=
        " | Option : " +
        item.variant;

    }


    if (item.color) {

      summary +=
        " | Couleur : " +
        item.color;

    }


    summary +=
      " | " +
      (
        item.price *
        item.quantity
      )
        .toFixed(2)
        .replace(".", ",") +
      " €";


    summary += "\n";

  });


  const total = cart.reduce(
    function (sum, item) {

      return (
        sum +
        item.price *
        item.quantity
      );

    },
    0
  );


  summary +=
    "\nTOTAL : " +
    total
      .toFixed(2)
      .replace(".", ",") +
    " €";


  return summary;

}


/* =========================================================
   ALLER AU FORMULAIRE
   ========================================================= */

function goToCheckout() {

  if (cart.length === 0) {

    showToast(
      "Ton panier est vide."
    );

    return;

  }


  const summary =
    prepareOrderSummary();


  const total =
    cart.reduce(
      function (sum, item) {

        return (
          sum +
          item.price *
          item.quantity
        );

      },
      0
    );


  if (hiddenOrderSummary) {

    hiddenOrderSummary.value =
      summary;

  }


  if (hiddenOrderTotal) {

    hiddenOrderTotal.value =
      total
        .toFixed(2)
        .replace(".", ",") +
      " €";

  }


  if (cartStep1) {

    cartStep1.style.display =
      "none";

  }


  if (cartStep2) {

    cartStep2.style.display =
      "block";

  }

}


/* =========================================================
   RETOUR AU PANIER
   ========================================================= */

function backToCart() {

  if (cartStep1) {

    cartStep1.style.display =
      "block";

  }


  if (cartStep2) {

    cartStep2.style.display =
      "none";

  }

}


/* =========================================================
   FORMULAIRE DE COMMANDE
   ========================================================= */

function submitOrder(event) {

  if (event) {

    event.preventDefault();

  }


  if (!orderForm) {
    return;
  }


  if (cart.length === 0) {

    showToast(
      "Ton panier est vide."
    );

    return;

  }


  const summary =
    prepareOrderSummary();


  const total =
    cart.reduce(
      function (sum, item) {

        return (
          sum +
          item.price *
          item.quantity
        );

      },
      0
    );


  if (hiddenOrderSummary) {

    hiddenOrderSummary.value =
      summary;

  }


  if (hiddenOrderTotal) {

    hiddenOrderTotal.value =
      total
        .toFixed(2)
        .replace(".", ",") +
      " €";

  }


  if (formStatusMessage) {

    formStatusMessage.textContent =
      "Envoi de votre commande...";

  }


  if (submitOrderBtn) {

    submitOrderBtn.disabled = true;

    submitOrderBtn.textContent =
      "Envoi...";

  }


  /*
   * On utilise l'envoi natif du formulaire.
   * Cela conserve le fonctionnement Formspree
   * déjà testé sur ton site.
   */

  HTMLFormElement.prototype.submit.call(
    orderForm
  );

}


/* =========================================================
   ÉVÉNEMENTS
   ========================================================= */

function setupEventListeners() {


  /*
   * Filtre catégorie
   */

  if (categoryFilter) {

    categoryFilter.addEventListener(
      "change",
      function () {

        renderProducts(
          categoryFilter.value
        );

      }
    );

  }


  /*
   * Bouton panier
   */

  if (openCartBtn) {

    openCartBtn.addEventListener(
      "click",
      function () {

        openCart();

      }
    );

  }


  /*
   * Bouton ajout panier
   */

  if (modalAddToCartBtn) {

    modalAddToCartBtn.addEventListener(
      "click",
      function () {

        addToCart();

      }
    );

  }


  /*
   * Bouton passer commande
   */

  if (goToCheckoutBtn) {

    goToCheckoutBtn.addEventListener(
      "click",
      function () {

        goToCheckout();

      }
    );

  }


  /*
   * Retour panier
   */

  if (backToCartBtn) {

    backToCartBtn.addEventListener(
      "click",
      function () {

        backToCart();

      }
    );

  }


  /*
   * Formulaire
   */

  if (orderForm) {

    orderForm.addEventListener(
      "submit",
      submitOrder
    );

  }


  /*
   * Fermer modal en cliquant à l'extérieur
   */

  if (productModal) {

    productModal.addEventListener(
      "click",
      function (event) {

        if (
          event.target ===
          productModal
        ) {

          closeProductModal();

        }

      }
    );

  }


  /*
   * Échap = fermer modal/panier
   */

  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {

        closeProductModal();

        closeCart();

      }

    }
  );


  /*
   * Boutons ayant une classe close-modal
   */

  document
    .querySelectorAll(
      ".close-modal, [data-close-modal]"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          closeProductModal
        );

      }
    );


  /*
   * Boutons fermeture panier
   */

  document
    .querySelectorAll(
      ".close-cart, [data-close-cart]"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          closeCart
        );

      }
    );


  /*
   * Menu mobile
   */

  const mobileMenuButton =
    document.querySelector(
      ".mobile-menu-button, #mobileMenuButton, #menuToggle"
    );

  const mobileMenu =
    document.querySelector(
      ".mobile-menu, #mobileMenu, nav"
    );


  if (mobileMenuButton && mobileMenu) {

    mobileMenuButton.addEventListener(
      "click",
      function () {

        mobileMenu.classList.toggle(
          "active"
        );

      }
    );

  }

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  if (!toastNotification) {

    /*
     * Si le site possède déjà son propre système
     * de toast, on ne bloque pas le fonctionnement.
     */

    console.log(message);

    return;

  }


  toastNotification.textContent =
    message;

  toastNotification.classList.add(
    "show"
  );


  setTimeout(
    function () {

      toastNotification.classList.remove(
        "show"
      );

    },
    3000
  );

}


/* =========================================================
   SÉCURISER L'AFFICHAGE HTML
   ========================================================= */

function escapeHtml(value) {

  if (value === null || value === undefined) {

    return "";

  }


  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   FONCTIONS ACCESSIBLES DEPUIS HTML
   ========================================================= */

window.closeProductModal =
  closeProductModal;

window.closeCart =
  closeCart;

window.goToCheckout =
  goToCheckout;

window.backToCart =
  backToCart;

window.submitOrder =
  submitOrder;
