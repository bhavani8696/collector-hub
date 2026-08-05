import { useState } from "react";
import "./Community.css";


const posts = [

{
id:1,
title:"📷 Vintage Camera Lovers",
text:"Share your vintage camera collections with other collectors.",
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
likes:20
},


{
id:2,
title:"🪙 Coin Collectors Club",
text:"Discover rare coins and historical collections.",
image:"https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600",
likes:35
},


{
id:3,
title:"📚 Rare Book Collectors",
text:"Share your antique and first edition books.",
image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
likes:18
}

];



function Community(){


const [search,setSearch]=useState("");

const [liked,setLiked]=useState<number[]>([]);



const filteredPosts = posts.filter((post)=>

post.title
.toLowerCase()
.includes(search.toLowerCase())

);




function likePost(id:number){

if(liked.includes(id)){

setLiked(
liked.filter(item=>item!==id)
);

}

else{

setLiked(
[...liked,id]
);

}

}



return(

<div className="community-page">


<h1>
👥 Collector Community
</h1>


<p>
Connect with collectors and share your rare collections.
</p>




<input

className="community-search"

placeholder="🔍 Search posts..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>





<div className="post-container">



{

filteredPosts.length===0 ?


<h2>
No Posts Found 🔍
</h2>


:


filteredPosts.map((post)=>(


<div className="post-card" key={post.id}>


<img

src={post.image}

alt={post.title}

/>



<h2>
{post.title}
</h2>



<p>
{post.text}
</p>



<button onClick={()=>likePost(post.id)}>

❤️ {post.likes + (liked.includes(post.id)?1:0)}

</button>



</div>


))


}



</div>



</div>

);


}


export default Community;