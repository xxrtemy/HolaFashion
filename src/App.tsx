import React from "react";
import Blog from "./feature/blog/Blog.js";
import Contacts from "./feature/contacts/Contacts.js";
import Header from "./feature/header/Header.jsx";
import Home from "./feature/home/Home.jsx";
import Product from "./feature/product/Product.jsx"
import Services from "./feature/services/Services.jsx"

function App() {
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
