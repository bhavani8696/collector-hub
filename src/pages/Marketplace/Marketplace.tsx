import "./Marketplace.css";
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";

function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  let filteredProducts = products.filter((product) => {
    const searchMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || product.category === category;

    return searchMatch && categoryMatch;
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="marketplace">
      <h1>🏪 Collector Marketplace</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Camera">Camera</option>
          <option value="Coins">Coins</option>
          <option value="Watch">Watch</option>
          <option value="Painting">Painting</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Toys">Toys</option>
          <option value="Jewellery">Jewellery</option>
          <option value="Medals">Medals</option>
          <option value="Maps">Maps</option>
          <option value="Gaming">Gaming</option>
          <option value="Scientific">Scientific</option>
          <option value="Stamps">Stamps</option>
          <option value="Furniture">Furniture</option>
          <option value="Music">Music</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort Price</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <h2>No products found</h2>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Marketplace;