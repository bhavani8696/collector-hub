import { useLocation, useNavigate } from "react-router-dom";


function ProductDetails() {

  const location = useLocation();

  const navigate = useNavigate();

  const product = location.state;


  if (!product) {

    return (

      <div className="card">

        <h2>
          Product not found
        </h2>


        <button
          onClick={() => navigate("/")}
        >
          Back Marketplace
        </button>

      </div>

    );

  }


  return (

    <div className="card details-card">


      <img
        className="product-image"
        src={product.image}
        alt=""
      />


      <h1>
        {product.title}
      </h1>


      <p>
        <b>Category:</b> {product.category}
      </p>


      <p>
        <b>Condition:</b> {product.condition}
      </p>


      <h2>
        ₹{product.price}
      </h2>


      <p>
        <b>Seller:</b> {product.seller}
      </p>


      <p>
        <b>Location:</b> {product.location}
      </p>



      <button
        onClick={() => navigate("/")}
      >
        ← Back to Marketplace
      </button>


    </div>

  );

}


export default ProductDetails;