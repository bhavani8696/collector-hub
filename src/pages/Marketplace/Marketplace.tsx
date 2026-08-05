import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./marketplace.css";


const products = [

{
id:1,
name:"Vintage Camera",
category:"Electronics",
price:"₹8600",
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600"
},

{
id:2,
name:"Rare Coin Collection",
category:"Collectibles",
price:"₹12000",
image:"https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600"
},

{
id:3,
name:"Luxury Classic Watch",
category:"Accessories",
price:"₹5200",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
},

{
id:4,
name:"Antique Books",
category:"Books",
price:"₹1299",
image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
},

{
id:5,
name:"Rare Painting Artwork",
category:"Art",
price:"₹8850",
image:"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600"
},

{
id:6,
name:"Vintage Cricket Ball",
category:"Sports",
price:"₹199",
image:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600"
},

{
id:7,
name:"Vintage Car Model",
category:"Models",
price:"₹500000",
image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600"
},

{
id:8,
name:"Vinyl Records",
category:"Music",
price:"₹6999",
image:"https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=600"
},

{
id:9,
name:"Antique Jewellery",
category:"Jewellery",
price:"₹7000",
image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600"
},

{
id:10,
name:"Rare Stamp Collection",
category:"Collectibles",
price:"₹1599",
image:"https://images.unsplash.com/photo-1584448097764-374f81551427?w=600"
},

{
id:11,
name:"Ancient Map Collection",
category:"History",
price:"₹899",
image:"https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=600"
},

{
id:12,
name:"Vintage Radio",
category:"Electronics",
price:"₹6280",
image:"https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600"
},

{
id:13,
name:"Classic Guitar",
category:"Music",
price:"₹6600",
image:"https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=600"
},

{
id:14,
name:"Antique Furniture",
category:"Furniture",
price:"₹9900",
image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
},

{
id:15,
name:"Retro Gaming Console",
category:"Gaming",
price:"₹2350",
image:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600"
},

{
id:16,
name:"Luxury Leather Bag",
category:"Fashion",
price:"₹5200",
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
},

{
id:17,
name:"Computer Motherboard",
category:"Technology",
price:"₹1300",
image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
},

{
id:18,
name:"Classic Denim Jeans",
category:"Fashion",
price:"₹980",
image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"
},

{
id:19,
name:"Vintage Flower Vase",
category:"Home Decor",
price:"₹1120",
image:"https://images.unsplash.com/photo-1618220179428-22790b461013?w=600"
},

{
id:20,
name:"Fresh Fruit Basket",
category:"Food",
price:"₹560",
image:"https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600"
}

];



function Marketplace(){

const navigate = useNavigate();


const [search,setSearch] = useState("");

const [category,setCategory] = useState("All");

const [sort,setSort] = useState("");




const saveProduct=(type:string,product:any)=>{

let data =
JSON.parse(localStorage.getItem(type) || "[]");


data.push(product);


localStorage.setItem(
type,
JSON.stringify(data)
);


alert("Added Successfully ✅");

};





const filteredProducts = products
.filter((product)=>{


const searchMatch =
product.name
.toLowerCase()
.includes(search.toLowerCase());



const categoryMatch =
category==="All" ||
product.category===category;



return searchMatch && categoryMatch;


})

.sort((a,b)=>{


if(sort==="low"){

return Number(a.price.replace("₹","")) -
Number(b.price.replace("₹",""));

}



if(sort==="high"){

return Number(b.price.replace("₹","")) -
Number(a.price.replace("₹",""));

}


return 0;


});







return(

<div className="marketplace">



<div className="hero-market">

<h1>
🛒 CollectorHub Marketplace
</h1>


<p>
Discover rare collections and unique products
</p>

</div>




<div className="marquee-box">

<div className="marquee-text">

🔥 Trending:
Vintage Camera • Rare Coins • Gaming Console • Paintings • Watches

</div>

</div>







<div className="market-tools">


<input

type="text"

placeholder="🔍 Search products..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>





<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

>

<option value="All">
All Categories
</option>


<option>
Electronics
</option>


<option>
Collectibles
</option>


<option>
Books
</option>


<option>
Art
</option>


<option>
Music
</option>


<option>
Fashion
</option>


</select>





<select

value={sort}

onChange={(e)=>setSort(e.target.value)}

>

<option value="">
Sort Price
</option>


<option value="low">
Low → High
</option>


<option value="high">
High → Low
</option>


</select>


</div>








<div className="products-grid">


{


filteredProducts.length===0 ?


<h2>
🔍 No Products Found
</h2>


:


filteredProducts.map((product)=>(


<div className="product-card" key={product.id}>


<img

src={product.image}

alt={product.name}

/>



<h2>
{product.name}
</h2>



<p>
{product.category}
</p>



<h3>
{product.price}
</h3>





<button onClick={()=>saveProduct("cart",product)}>
🛒 Add Cart
</button>




<button onClick={()=>saveProduct("wishlist",product)}>
❤️ Wishlist
</button>




<button onClick={()=>saveProduct("collection",product)}>
🏆 Collection
</button>





<button

onClick={()=>navigate(`/product/${product.id}`,{state:product})}

>

👁 View Details

</button>




</div>


))


}



</div>


</div>

);


}


export default Marketplace;