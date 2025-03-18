import React from "react";
import Blog from "./feature/blog/Blog";
import Contacts from "./feature/contacts/Contacts";
import { Header } from "@components/Header";
import Home from "./feature/home/Home";
import Product from "./feature/product/Product"
import Services from "./feature/services/Services.jsx"
import { useManifest } from "@hooks/use-get-manifest";
import PullToRefresh from "react-simple-pull-to-refresh";


function App() {
  useManifest()
  const handlePullDown = React.useCallback(async ()=> {
    window.location.reload()
  }, [])
  return (
    <div className="App">
      <PullToRefresh  pullingContent={''} onRefresh={handlePullDown} >  
        <>
          <Header />  
          <Home />
          <Product />
          <Services />
          <Blog />
          <Contacts />
        </>
      </PullToRefresh>
    </div>
  );
}

export default App;
