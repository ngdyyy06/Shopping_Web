import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
    adapter,
});

const products = [
    {
        name: "Men's GORE-TEX Mountain Jacket",
        description:
            "A waterproof and breathable GORE-TEX shell designed for demanding outdoor conditions.",
        price: "2990000",
        category: "MEN",
        subcategory: "JACKETS",
        image: "/images/products/mens-gore-tex-mountain-jacket.jpg",
        rating: "4.8",
    },
    {
        name: "Men's Denali Jacket",
        description:
            "An iconic fleece jacket designed for warmth and outdoor activities.",
        price: "2590000",
        category: "MEN",
        subcategory: "FLEECE",
        image: "/images/products/mens-denali-jacket.jpg",
        rating: "4.8",
    },
    {
        name: "Men's Adventure Sun Hoodie",
        description:
            "A lightweight hoodie designed for outdoor activities and sun protection.",
        price: "1690000",
        category: "MEN",
        subcategory: "TOPS",
        image: "/images/products/mens-adventure-sun-hoodie.jpg",
        rating: "4.7",
    },
    {
        name: "Men's Basin 7 Shorts",
        description:
            "Lightweight outdoor shorts designed for hiking and warm-weather adventures.",
        price: "1990000",
        category: "MEN",
        subcategory: "BOTTOMS",
        image: "/images/products/mens-basin-7-shorts.jpg",
        rating: "4.6",
    },
    {
        name: "Women's Antora Jacket",
        description:
            "A waterproof outdoor jacket designed to provide protection in changing weather.",
        price: "2790000",
        category: "WOMEN",
        subcategory: "JACKETS",
        image: "/images/products/womens-antora-jacket.jpg",
        rating: "4.8",
    },
    {
        name: "Women's Osito Evolve Jacket",
        description:
            "A soft fleece jacket providing warmth and comfort for outdoor and everyday wear.",
        price: "2390000",
        category: "WOMEN",
        subcategory: "FLEECE",
        image: "/images/products/womens-osito-evolve-jacket.jpg",
        rating: "4.7",
    },
    {
        name: "Women's Adventure Sun Hoodie",
        description:
            "A lightweight outdoor top designed for comfortable movement and sun protection.",
        price: "1690000",
        category: "WOMEN",
        subcategory: "TOPS",
        image: "/images/products/womens-adventure-sun-hoodie.jpg",
        rating: "4.6",
    },
    {
        name: "Borealis Backpack 28L",
        description:
            "A versatile backpack designed for commuting, travel and outdoor adventures.",
        price: "2990000",
        category: "GEAR",
        subcategory: "BACKPACKS",
        image: "/images/products/borealis-backpack-28l.jpg",
        rating: "4.9",
    },
    {
        name: "Kids' Glacier Full-Zip Hoodie",
        description:
            "A lightweight fleece hoodie designed to keep kids warm during outdoor activities.",
        price: "1390000",
        category: "KIDS",
        subcategory: "FLEECE",
        image: "/images/products/kids-glacier-full-zip-hoodie.jpg",
        rating: "4.7",
    },
    {
        name: "Kids' Reversible Perrito Hooded Jacket",
        description:
            "A reversible insulated jacket designed to provide warmth for outdoor adventures.",
        price: "2190000",
        category: "KIDS",
        subcategory: "JACKETS",
        image: "/images/products/kids-reversible-perrito-jacket.jpg",
        rating: "4.8",
    },
];

async function main() {
    await prisma.product.deleteMany();

    await prisma.product.createMany({
        data: products,
    });

    console.log(`Inserted ${products.length} products.`);
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });