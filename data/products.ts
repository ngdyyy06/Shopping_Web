export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 29.99,
    image: "https://placehold.co/600x600",
    category: "Fashion",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 79.99,
    image: "https://placehold.co/600x600",
    category: "Shoes",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Face Cream",
    price: 24.99,
    image: "https://placehold.co/600x600",
    category: "Beauty",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://placehold.co/600x600",
    category: "Technology",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 69.99,
    image: "https://placehold.co/600x600",
    category: "Fashion",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Casual Sneakers",
    price: 64.99,
    image: "https://placehold.co/600x600",
    category: "Shoes",
    rating: 4.4,
  },
  {
    id: 7,
    name: "Moisturizing Lotion",
    price: 19.99,
    image: "https://placehold.co/600x600",
    category: "Beauty",
    rating: 4.6,
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 149.99,
    image: "https://placehold.co/600x600",
    category: "Technology",
    rating: 4.8,
  },
];