import React, {useEffect, useState} from "react";
import "./Cart.css";


function Cart(){

const [cart,setCart] = useState<any[]>([]);


useEffect(()=>{

const data =
JSON.parse(localStorage.getItem("cart") || "[]");

setCart(data);

},[]);



const removeItem=(index:number)=>{

const updated =
cart.filter((_,i)=>i!==index);

setCart(updated);

localStorage.setItem(
"cart",
JSON.stringify(updated)
);

};



const total = cart.reduce(
(sum,item)=>{

let price =
Number(
item.price.replace("₹","")
);

return sum + price;

},0);



return(

<div className="cart-page">


<div className="cart-header">

<h1>
🛒 My Cart
</h1>

<p>
Your selected collectible products
</p>

</div>



{
cart.length===0 ?


<div className="empty-cart">

<h2>
Cart is Empty 😔
</h2>

<p>
Add products from Marketplace
</p>

</div>



:


<>


<div className="cart-grid">


{
cart.map((item,index)=>(


<div className="cart-card" key={index}>


<img
src={item.image}
alt={item.name}
/>



<h2>
{item.name}
</h2>


<p>
{item.category}
</p>


<h3>
{item.price}
</h3>



<button
onClick={()=>removeItem(index)}
>

❌ Remove

</button>


</div>


))
}


</div>



<div className="total-box">

<h2>
Total : ₹{total}
</h2>

<button>
Proceed To Checkout 🛍
</button>

</div>


</>

}



</div>

);

}


export default Cart;