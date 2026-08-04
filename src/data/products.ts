import { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Vintage Camera",
    category: "Camera",
    price: 15000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Classic vintage camera for collectors",
  },
  {
    id: 2,
    name: "Rare Coin",
    category: "Coins",
    price: 5000,
    image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6",
    description: "Rare collectible coin",
  },
  {
    id: 3,
    name: "Antique Watch",
    category: "Watch",
    price: 12000,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    description: "Premium antique watch",
  },
];