import React, {useEffect, useState} from "react";
import "./Wishlist.css";


function Wishlist(){

const [wishlist,setWishlist] = useState<any[]>([]);


useEffect(()=>{

const data =
JSON.parse(localStorage.getItem("wishlist") || "[]");

setWishlist(data);

},[]);



const removeItem=(index:number)=>{

const updated =
wishlist.filter((_,i)=>i!==index);


setWishlist(updated);


localStorage.setItem(
"wishlist",
JSON.stringify(updated)
);

};



return(

<div className="wishlist-page">


<div className="wishlist-header">

<h1>
❤️ My Wishlist
</h1>

<p>
Your favourite collectible items
</p>

</div>



{
wishlist.length===0 ?


<div className="empty-wishlist">

<h2>
Wishlist is Empty 😔
</h2>

<p>
Add your favourite products here
</p>

</div>



:


<div className="wishlist-grid">


{
wishlist.map((item,index)=>(


<div className="wishlist-card" key={index}>


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

}



</div>

);

}


export default Wishlist;