import React from "react";
import Blog from "./feature/blog/Blog";
import Contacts from "./feature/contacts/Contacts";
import { Header } from "@components/Header";
import Home from "./feature/home/Home";
import Product from "./feature/product/Product"
import Services from "./feature/services/Services.jsx"
import { useManifest } from "@hooks/use-get-manifest";


function App() {
  useManifest()
  return (
    <div className="App">
      <Header />
      <Home />
      <Product />
      <Services />
      <Blog />
      <Contacts />
    </div>
  );
}

export default App;
