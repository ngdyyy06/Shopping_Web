import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            orderBy: {
                id: "asc",
            },
        });

        const formattedProducts = products.map((product) => ({
            ...product,
            price: Number(product.price),
            rating: Number(product.rating),
        }));

        return Response.json(formattedProducts);
    } catch (error) {
        console.error("Failed to fetch products:", error);

        return Response.json(
            {
                message: "Failed to fetch products",
            },
            {
                status: 500,
            }
        );
    }
}