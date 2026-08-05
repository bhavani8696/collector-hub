import React, { useEffect, useState } from "react";
import "./Wishlist.css";


function Wishlist() {


  const [items, setItems] = useState<any[]>([]);



  useEffect(() => {


    const savedItems =
      JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );


    setItems(savedItems);


  }, []);




  return (


    <div className="wishlist-page">


      <h1>
        ❤️ My Wishlist
      </h1>



      <p>
        Your favourite collectible items
      </p>




      {
        items.length === 0 ?


        <div className="empty-wishlist">


          <h2>
            Wishlist is Empty
          </h2>


          <p>
            Add your favourite products here.
          </p>


        </div>



        :



        <div className="wishlist-grid">


          {
            items.map((item,index)=>(


              <div 
                className="wishlist-card"
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


export default Wishlist;