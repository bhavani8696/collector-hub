import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Marketplace from "./pages/Marketplace/Marketplace";
import Wishlist from "./pages/Wishlist";
import MyCollection from "./pages/MyCollection";
import Community from "./pages/Community";
import ProductDetails from "./pages/ProductDetails/ProductDetails";


function App(){


return(

<BrowserRouter>


<Navbar />


<Routes>


<Route
path="/"
element={<Marketplace />}
/>


<Route
path="/marketplace"
element={<Marketplace />}
/>


<Route
path="/wishlist"
element={<Wishlist />}
/>


<Route
path="/collection"
element={<MyCollection />}
/>


<Route
path="/community"
element={<Community />}
/>


<Route
path="/product/:id"
element={<ProductDetails />}
/>



</Routes>


</BrowserRouter>

);


}


export default App;