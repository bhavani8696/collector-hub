import { useNavigate } from "react-router-dom";
import { useCollection } from "../../context/CollectionContext";


interface Product {

  id: number;
  title: string;
  category: string;
  condition: string;
  price: number;
  seller: string;
  location: string;
  image: string;

}


interface Props {

  product: Product;

}



function ProductCard({ product }: Props) {


  const {
    addToCollection,
    addToWishlist
  } = useCollection();


  const navigate = useNavigate();



  return (

    <div className="card">


      <img

        className="product-image"

        src={product.image}

        alt=""

      />



      <div className="card-content">


        <h2>
          {product.title}
        </h2>



        <p>
          <b>Category:</b> {product.category}
        </p>



        <p>
          <b>Condition:</b> {product.condition}
        </p>



        <p className="price">
          ₹{product.price}
        </p>



        <p>
          <b>Seller:</b> {product.seller}
        </p>



        <p>
          <b>Location:</b> {product.location}
        </p>



        <div className="button-group">



          <button

            className="collection-btn"

            onClick={() =>
              addToCollection(product)
            }

          >

            ❤️ Add Collection

          </button>




          <button

            className="wishlist-btn"

            onClick={() =>
              addToWishlist(product)
            }

          >

            ⭐ Wishlist

          </button>




          <button

            onClick={() =>
              navigate("/product", {
                state: product
              })
            }

          >

            View Details

          </button>



        </div>



      </div>



    </div>

  );

}


export default ProductCard;