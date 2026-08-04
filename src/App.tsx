import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Marketplace from "./pages/Marketplace/Marketplace";
import Collection from "./pages/Collection/Collection";
import Community from "./pages/Community/Community";
import ProductDetails from "./pages/ProductDetails/ProductDetails";


function App() {

  return (

    <BrowserRouter>

      <Navbar />


      <Routes>


        <Route
          path="/"
          element={<Marketplace />}
        />


        <Route
          path="/collection"
          element={<Collection />}
        />


        <Route
          path="/community"
          element={<Community />}
        />


        <Route
          path="/product"
          element={<ProductDetails />}
        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;