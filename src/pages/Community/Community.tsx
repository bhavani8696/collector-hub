import { useState } from "react";


const initialPosts = [

  {
    id:1,
    user:"Rahul",
    category:"Camera",
    image:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    caption:
    "Found this amazing vintage camera in my collection!",
    likes:120,
    comments:25,
    saved:false
  },


  {
    id:2,
    user:"Priya",
    category:"Coins",
    image:
    "https://images.unsplash.com/photo-1621360841013-c7683c659ec6",
    caption:
    "My rare coin collection from different countries.",
    likes:95,
    comments:18,
    saved:false
  },


  {
    id:3,
    user:"Arjun",
    category:"Watch",
    image:
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    caption:
    "Antique watch added to my collection.",
    likes:80,
    comments:12,
    saved:false
  }

];





function Community(){


const [posts,setPosts] =
useState(initialPosts);



const [search,setSearch] =
useState("");



const [category,setCategory] =
useState("All");





const likePost=(id:number)=>{


setPosts(

posts.map(post=>

post.id===id

?

{
...post,
likes:post.likes+1
}

:

post

)

);


};






const savePost=(id:number)=>{


setPosts(

posts.map(post=>

post.id===id

?

{
...post,
saved:true
}

:

post

)

);


};





const filteredPosts =
posts.filter(post=>{


const searchMatch =
post.caption
.toLowerCase()
.includes(
search.toLowerCase()
);



const categoryMatch =
category==="All" ||
post.category===category;



return searchMatch && categoryMatch;


});







return (

<div>


<h1>
Community Feed 👥
</h1>



<input

placeholder="Search posts..."

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

/>




<select

onChange={(e)=>
setCategory(e.target.value)
}

>


<option>
All
</option>


<option>
Camera
</option>


<option>
Coins
</option>


<option>
Watch
</option>


</select>






{

filteredPosts.length===0

?

<h3>
No posts found
</h3>


:

filteredPosts.map(post=>(



<div
className="card"
key={post.id}
>



<img

className="product-image"

src={post.image}

alt=""

/>




<h2>
{post.user}
</h2>




<p>
Category: {post.category}
</p>




<p>
{post.caption}
</p>




<p>
❤️ {post.likes} Likes
</p>



<p>
💬 {post.comments} Comments
</p>




<button

onClick={()=>
likePost(post.id)
}

>
❤️ Like
</button>





<button

onClick={()=>
savePost(post.id)
}

>

⭐ {post.saved ? "Saved":"Save"}

</button>




</div>



))


}





</div>

);


}



export default Community;