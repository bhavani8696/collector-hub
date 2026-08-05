import React from "react";
import "./Community.css";


function Community(){

  return (

    <div className="community-page">


      <h1>
        👥 Collector Community
      </h1>


      <p>
        Connect with collectors and share your rare collections.
      </p>



      <div className="post-container">


        <div className="post-card">

          <h2>
            📷 Vintage Camera Lovers
          </h2>

          <p>
            Share your vintage camera collections with other collectors.
          </p>

          <button>
            Like ❤️
          </button>

        </div>



        <div className="post-card">

          <h2>
            🪙 Coin Collectors Club
          </h2>

          <p>
            Discover rare coins and historical collections.
          </p>

          <button>
            Like ❤️
          </button>

        </div>



      </div>


    </div>

  );

}


export default Community;