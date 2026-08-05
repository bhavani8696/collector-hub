import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar(){


return(

<nav className="navbar">


<h2>
🏆 CollectorHub
</h2>



<div className="nav-links">


<Link to="/">
🏠 Home
</Link>


<Link to="/marketplace">
🛒 Marketplace
</Link>


<Link to="/wishlist">
❤️ Wishlist
</Link>


<Link to="/collection">
🏆 My Collection
</Link>


<Link to="/cart">
🛍 Cart
</Link>


<Link to="/community">
👥 Community
</Link>



</div>


</nav>

);

}


export default Navbar;