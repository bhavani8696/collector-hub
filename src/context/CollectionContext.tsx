import {
  createContext,
  useContext,
  useState
} from "react";


export interface Product {

  id:number;
  title:string;
  category:string;
  condition:string;
  price:number;
  seller:string;
  location:string;
  image:string;

}



interface CollectionContextType {

  collection:Product[];

  wishlist:Product[];

  addToCollection:(product:Product)=>void;

  removeFromCollection:(id:number)=>void;

  addToWishlist:(product:Product)=>void;

}



const CollectionContext =
createContext<CollectionContextType | null>(null);



export function CollectionProvider({
  children
}:{
  children:React.ReactNode
}) {



const [collection,setCollection] =
useState<Product[]>(()=>{

  const saved =
  localStorage.getItem("collection");


  return saved
  ? JSON.parse(saved)
  : [];

});




const [wishlist,setWishlist] =
useState<Product[]>(()=>{

  const saved =
  localStorage.getItem("wishlist");


  return saved
  ? JSON.parse(saved)
  : [];

});





const addToCollection =
(product:Product)=>{


const exists =
collection.some(
(item)=>item.id===product.id
);



if(exists){

alert(
"Already added to Collection"
);

return;

}



const updated=[
...collection,
product
];


setCollection(updated);


localStorage.setItem(
"collection",
JSON.stringify(updated)
);



alert(
"Added to Collection ❤️"
);


};






const removeFromCollection =
(id:number)=>{


const updated =
collection.filter(
(item)=>item.id!==id
);



setCollection(updated);



localStorage.setItem(
"collection",
JSON.stringify(updated)
);



};







const addToWishlist =
(product:Product)=>{


const exists =
wishlist.some(
(item)=>item.id===product.id
);



if(exists){

alert(
"Already added to Wishlist"
);

return;

}




const updated=[
...wishlist,
product
];



setWishlist(updated);



localStorage.setItem(
"wishlist",
JSON.stringify(updated)
);



alert(
"Added to Wishlist ⭐"
);



};





return (

<CollectionContext.Provider

value={{

collection,

wishlist,

addToCollection,

removeFromCollection,

addToWishlist

}}

>


{children}


</CollectionContext.Provider>


);


}





export function useCollection(){


const context =
useContext(CollectionContext);



if(!context){

throw new Error(
"Context error"
);

}


return context;


}