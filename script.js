/* ==========================================================================
   MAJU'LYAH — SCRIPT COMPLET
   ========================================================================== */

/* =========================
   1. PRODUITS
========================= */

const products = [
    {
        id: 1,
        name: "Carnet d'Organisation Douceur",
        category: "Organisation",
        price: 18.50,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
        description: "Un magnifique carnet couverture rigide en lin couleur sauge. Idéal pour organiser vos semaines et déposer vos pensées.",
        variants: ["Lin Sauge", "Terracotta Charnelle", "Beige Sablé"]
    },
    {
        id: 2,
        name: "Planche de Stickers Botanique",
        category: "Stickers",
        price: 4.90,
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80",
        description: "Planche de stickers artisanaux aux illustrations végétales et touches dorées.",
        variants: ["Feuillage Automne", "Fleurs Séchées"]
    },
    {
        id: 3,
        name: "Bloc-notes To-Do List Automnale",
        category: "Papeterie",
        price: 8.00,
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
        description: "Bloc-notes de 50 pages détachables, idéal pour noter vos priorités quotidiennes.",
        variants: ["Standard (50 pages)", "Grand Format (100 pages)"]
    },
    {
        id: 4,
        name: "Set de Cartes Poétiques & Enveloppes",
        category: "Mailow Club",
        price: 12.00,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
        description: "Coffret de cartes accompagnées de leurs enveloppes couleur rose poudré.",
        variants: ["Lot de 5 cartes", "Lot de 10 cartes"]
    },
    {
        id: 5,
        name: "Planner Non Daté Sérénité",
        category: "Nouveautés",
        price: 24.00,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
        description: "Un planner sans dates pré-remplies, à commencer quand vous le souhaitez.",
        variants: ["Reliure Dorée", "Reliure Rose Poudré"]
    },
    {
        id: 6,
        name: "Marque-page en Laiton & Ruban",
        category: "Nouveautés",
        price: 6.50,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        description: "Élégant marque-page finition dorée avec ruban en velours terracotta.",
        variants: ["Ruban Terracotta", "Ruban Sauge"]
    },
    {
        id: 7,
        name: "Stickers Citations & Pensées",
        category: "Stickers",
        price: 5.20,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80",
        description: "Mots doux et citations motivantes pour embellir vos carnets.",
        variants: ["Finition Matte", "Finition Glossy"]
    },
    {
        id: 8,
        name: "Kit Papeterie Mailow Routine",
        category: "Mailow Club",
        price: 29.90,
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        description: "Un kit complet comprenant plusieurs éléments de papeterie.",
        variants: ["Box Complète"]
    }
];


/* =========================
   2. PANIER
========================= */

let cart = [];
let selectedProductForModal = null;


/* =========================
   3. RÉCUPÉRATION DES ÉLÉMENTS
========================= */

const productsGrid = document.getElementById("productsGrid");
const categoryFilters = document.getElementById("categoryFilters");

const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const closeCartBg = document.getElementById("closeCartBg");

const cartItemsList = document.getElementById("cartItemsList");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const goToCheckoutBtn = document.getElementById("goToCheckoutBtn");

const cartStep1 = document.getElementById("cartStep1");
const cartStep2 = document.getElementById("cartStep2");
const backToCartBtn = document.getElementById("backToCartBtn");

const productModal = document.getElementById("productModal");
const closeProductModalBtn = document.getElementById("closeProductModalBtn");
const closeProductModalBg = document.getElementById("closeProductModalBg");

const modalImg = document.getElementById("modalImg");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

const variantGroup = document.getElementById("variantGroup");
const modalVariantSelect = document.getElementById("modalVariantSelect");
const modalQty = document.getElementById("modalQty");
const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");

const orderForm = document.getElementById("orderForm");
const hiddenOrderSummary = document.getElementById("hiddenOrderSummary");
const hiddenOrderTotal = document.getElementById("hiddenOrderTotal");
const formStatusMessage = document.getElementById("formStatusMessage");

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");


/* =========================
   4. INITIALISATION
========================= */

document.addEventListener("DOMContentLoaded", function () {

    renderProducts("all");

    setupEventListeners();

    updateCartUI();

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});


/* =========================
   5. AFFICHAGE DES PRODUITS
========================= */

function renderProducts(category) {

    if (!productsGrid) return;

    productsGrid.innerHTML = "";

    const filteredProducts =
        category === "all"
            ? products
            : products.filter(
                product =>
                    product.category.toLowerCase() === category.toLowerCase()
            );

    filteredProducts.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image-container"
                 onclick="openProductModal(${product.id})">

                <img
