import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";


const products = [
  {
    id: 1,
    title: "Vintage Camera",
    category: "Camera",
    condition: "Excellent",
    price: 15000,
    seller: "Rahul",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },

  {
    id: 2,
    title: "Rare Coin",
    category: "Coins",
    condition: "Good",
    price: 5000,
    seller: "Priya",
    location: "Chennai",
    image:
      "https://images.unsplash.com/photo-1621360841013-c7683c659ec6",
  },

  {
    id: 3,
    title: "Antique Watch",
    category: "Watch",
    condition: "Premium",
    price: 12000,
    seller: "Arjun",
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  },
];


function Marketplace() {

  const [search,setSearch] =
    useState("");

  const [category,setCategory] =
    useState("All");

  const [condition,setCondition] =
    useState("All");

  const [sort,setSort] =
    useState("default");


  let filteredProducts =
    products.filter((product)=>{


      const searchMatch =
        product.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );


      const categoryMatch =
        category==="All" ||
        product.category===category;


      const conditionMatch =
        condition==="All" ||
        product.condition===condition;


      return (
        searchMatch &&
        categoryMatch &&
        conditionMatch
      );

    });


  if(sort==="low"){

    filteredProducts.sort(
      (a,b)=>a.price-b.price
    );

  }


  if(sort==="high"){

    filteredProducts.sort(
      (a,b)=>b.price-a.price
    );

  }


  return (

    <div>

      <h1>
        Collector Marketplace
      </h1>


      <input
        placeholder="Search products..."
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



      <select
        onChange={(e)=>
          setCondition(e.target.value)
        }
      >

        <option>
          All
        </option>

        <option>
          Excellent
        </option>

        <option>
          Good
        </option>

        <option>
          Premium
        </option>

      </select>



      <select
        onChange={(e)=>
          setSort(e.target.value)
        }
      >

        <option value="default">
          Sort Price
        </option>

        <option value="low">
          Low to High
        </option>

        <option value="high">
          High to Low
        </option>


      </select>



      <div>

        {
          filteredProducts.map(
            (product)=>(
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )
        }

      </div>


    </div>

  );

}


export default Marketplace;