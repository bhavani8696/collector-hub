import camera from "../assets/products/camera.webp";
import coin from "../assets/products/rare-coin.webp";
import watch from "../assets/products/antique-watch.webp";
import painting from "../assets/products/painting.webp";
import radio from "../assets/products/vintage-radio.webp";
import books from "../assets/products/classic-books.webp";
import modelCar from "../assets/products/model-car.webp";
import jewellery from "../assets/products/jewellery.webp";
import medal from "../assets/products/silver-medal.webp";
import map from "../assets/products/ancient-map.webp";
import consoleImg from "../assets/products/retro-console.webp";
import telescope from "../assets/products/telescope.webp";
import stamp from "../assets/products/stamp-collection.webp";
import furniture from "../assets/products/antique-furniture.webp";
import vinyl from "../assets/products/vinyl-record.webp";

export interface Product {
  id: number;
  title: string;
  category: string;
  condition: string;
  price: number;
  seller: string;
  location: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Vintage Camera",
    category: "Camera",
    condition: "Excellent",
    price: 15000,
    seller: "Rahul",
    location: "Hyderabad",
    image: camera,
  },
  {
    id: 2,
    title: "Rare Coin",
    category: "Coins",
    condition: "Very Good",
    price: 5000,
    seller: "Priya",
    location: "Chennai",
    image: coin,
  },
  {
    id: 3,
    title: "Antique Watch",
    category: "Watch",
    condition: "Premium",
    price: 12000,
    seller: "Arjun",
    location: "Bangalore",
    image: watch,
  },
  {
    id: 4,
    title: "Vintage Painting",
    category: "Painting",
    condition: "Excellent",
    price: 18000,
    seller: "Meera",
    location: "Mumbai",
    image: painting,
  },
  {
    id: 5,
    title: "Vintage Radio",
    category: "Electronics",
    condition: "Good",
    price: 9000,
    seller: "Kiran",
    location: "Pune",
    image: radio,
  },
  {
    id: 6,
    title: "Classic Books",
    category: "Books",
    condition: "Excellent",
    price: 3500,
    seller: "Anjali",
    location: "Delhi",
    image: books,
  },
  {
    id: 7,
    title: "Model Car",
    category: "Toys",
    condition: "Mint",
    price: 7000,
    seller: "Suresh",
    location: "Kolkata",
    image: modelCar,
  },
  {
    id: 8,
    title: "Vintage Jewellery",
    category: "Jewellery",
    condition: "Premium",
    price: 25000,
    seller: "Divya",
    location: "Jaipur",
    image: jewellery,
  },
    {
    id: 9,
    title: "Silver Medal",
    category: "Medals",
    condition: "Excellent",
    price: 4500,
    seller: "Rohit",
    location: "Ahmedabad",
    image: medal,
  },
  {
    id: 10,
    title: "Ancient Map",
    category: "Maps",
    condition: "Very Good",
    price: 14000,
    seller: "Sneha",
    location: "Kochi",
    image: map,
  },
  {
    id: 11,
    title: "Retro Console",
    category: "Gaming",
    condition: "Good",
    price: 11000,
    seller: "Varun",
    location: "Chandigarh",
    image: consoleImg,
  },
  {
    id: 12,
    title: "Vintage Telescope",
    category: "Scientific",
    condition: "Excellent",
    price: 21000,
    seller: "Akhil",
    location: "Mysuru",
    image: telescope,
  },
  {
    id: 13,
    title: "Stamp Collection",
    category: "Stamps",
    condition: "Mint",
    price: 6500,
    seller: "Neha",
    location: "Lucknow",
    image: stamp,
  },
  {
    id: 14,
    title: "Antique Furniture",
    category: "Furniture",
    condition: "Premium",
    price: 32000,
    seller: "Harish",
    location: "Jaipur",
    image: furniture,
  },
  {
    id: 15,
    title: "Vinyl Record",
    category: "Music",
    condition: "Excellent",
    price: 4800,
    seller: "Karthik",
    location: "Visakhapatnam",
    image: vinyl,
  },
];

export default products;