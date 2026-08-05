import React, { useEffect, useState } from "react";
import "./MyCollection.css";


function MyCollection(){


const [items,setItems] = useState<any[]>([]);



useEffect(()=>{

  const saved =
    JSON.parse(
      localStorage.getItem("collection") || "[]"
    );


  setItems(saved);


},[]);




return (

<div className="collection-page">


<h1>
🏆 My Collection
</h1>


<p>
Your favourite collectible items
</p>



{
items.length === 0 ?


<div className="empty-card">

<h2>
No Items Added Yet
</h2>

<p>
Add products from Marketplace and they will appear here.
</p>

</div>


:


<div className="collection-grid">


{
items.map((item,index)=>(


<div 
className="collection-item"
key={index}
>


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


</div>


))
}



</div>


}



</div>

);


}


export default MyCollection;