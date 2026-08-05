import { useCollection } from "../../context/CollectionContext";


function Collection() {


  const {
    collection,
    wishlist,
    removeFromCollection
  } = useCollection();



  const [activeTab,setActiveTab] =
    useState("Owned");



  const items =
    activeTab === "Owned"
      ? collection
      : activeTab === "Wishlist"
      ? wishlist
      : [];




  return (

    <div>


      <h1>
        My Collection ❤️
      </h1>



      <div>


        <button
          onClick={() =>
            setActiveTab("Owned")
          }
        >
          Owned
        </button>



        <button
          onClick={() =>
            setActiveTab("Wishlist")
          }
        >
          Wishlist
        </button>



        <button
          onClick={() =>
            setActiveTab("Selling")
          }
        >
          Selling
        </button>



      </div>




      <h2>
        {activeTab}
      </h2>





      {
        items.length === 0 ? (

          <div>

            <h3>
              No items available
            </h3>

            <p>
              Add items from Marketplace.
            </p>

          </div>


        ) : (


          items.map((item)=>(


            <div
              className="card"
              key={item.id}
            >



              <img

                className="product-image"

                src={item.image}

                alt=""

              />



              <h2>
                {item.title}
              </h2>



              <p>
                Category: {item.category}
              </p>



              <p>
                Date Added: Today
              </p>



              <p>
                Estimated Value: ₹{item.price}
              </p>



              {
                activeTab === "Owned" && (

                  <button
                    onClick={() =>
                      removeFromCollection(item.id)
                    }
                  >
                    Remove
                  </button>

                )
              }



            </div>


          ))

        )
      }



    </div>

  );

}



export default Collection;