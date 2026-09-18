/* ==========================================================================
   MAJU'LYAH - BASE DE DONNÉES DES PRODUITS
   ========================================================================== */

const products = [
    {
        id: 1,
        name: "Stickers 6ème",
        category: "Organisation",
        price: 12.00,
        image: "images/Ecriture%20TEEBRUSH_20260918_144804_0001.png",
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
        image: "images/Ecriture%20KARLEY_20260918_144803_0000.png",
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
        image: "images/Ecriture%20MOCHIY_20260918_144804_0002.png",
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
