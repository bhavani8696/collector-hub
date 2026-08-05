import React, {useEffect, useState} from "react";
import "./MyCollection.css";


function MyCollection(){

const [collection,setCollection] = useState<any[]>([]);



useEffect(()=>{

const data =
JSON.parse(localStorage.getItem("collection") || "[]");

setCollection(data);

},[]);



const removeItem=(index:number)=>{

const updated =
collection.filter((_,i)=>i!==index);


setCollection(updated);


localStorage.setItem(
"collection",
JSON.stringify(updated)
);

};



return(

<div className="collection-page">


<div className="collection-header">

<h1>
🏆 My Collection
</h1>

<p>
Your favourite collectible items
</p>

</div>



{
collection.length===0 ?


<div className="empty-collection">

<h2>
No Items Added Yet 😔
</h2>

<p>
Add products to your collection and they will appear here.
</p>

</div>



:


<div className="collection-grid">


{
collection.map((item,index)=>(


<div className="collection-card" key={index}>


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


export default MyCollection;