import React, { useState } from "react";
import "./ProductCard.css";


function ProductCard({ product }: any) {

  const [liked, setLiked] = useState(false);


  const addToCart = () => {

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Added to Cart ✅");

  };



  const viewDetails = () => {

    alert(
      `${product.name}\nCategory: ${product.category}\nPrice: ${product.price}`
    );

  };



  return (

    <div className="product-card">


      <div className="image-container">

        <img
          src={product.image}
          alt={product.name}
          onError={(e)=>{
            e.currentTarget.src =
            "https://via.placeholder.com/400x300?text=No+Image"
          }}
        />


        <button
          className="like-btn"
          onClick={()=>setLiked(!liked)}
        >

          {liked ? "❤️" : "🤍"}

        </button>


        {product.featured && (
          <span className="featured">
            Featured
          </span>
        )}

      </div>



      <div className="product-info">


        <p className="category">
          {product.category}
        </p>


        <h3>
          {product.name}
        </h3>


        <h2>
          {product.price}
        </h2>



        <div className="buttons">


          <button
            className="details-btn"
            onClick={viewDetails}
          >
            View Details
          </button>



          <button
            className="cart-btn"
            onClick={addToCart}
          >
            Add Cart
          </button>


        </div>


      </div>


    </div>

  );

}


export default ProductCard;