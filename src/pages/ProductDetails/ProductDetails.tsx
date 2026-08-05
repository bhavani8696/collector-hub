import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetails.css";


function ProductDetails(){

const location = useLocation();

const navigate = useNavigate();


const product = location.state;



if(!product){

return(

<div className="details-card">

<h2>
Product not found
</h2>


<button onClick={()=>navigate("/marketplace")}>

Back Marketplace

</button>


</div>

);

}




return(

<div className="details-page">


<div className="details-card">


<img

src={product.image}

alt={product.name}

className="details-image"

/>



<h1>
{product.name}
</h1>



<p>
<b>Category:</b> {product.category}
</p>



<h2 className="price">

{product.price}

</h2>



<p>
<b>Description:</b>
<br/>

Rare collectible item available in CollectorHub marketplace.

</p>



<p>
<b>Condition:</b> Excellent
</p>



<p>
<b>Seller:</b> CollectorHub Seller
</p>



<div className="details-buttons">


<button>

🛒 Add Cart

</button>



<button>

❤️ Wishlist

</button>


</div>




<button 
className="back-btn"
onClick={()=>navigate("/marketplace")}
>

← Back Marketplace

</button>



</div>


</div>

);


}


export default ProductDetails;