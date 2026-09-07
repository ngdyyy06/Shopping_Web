export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    category: string;
    subcategory: string;
    image: string;
    rating: number;
}