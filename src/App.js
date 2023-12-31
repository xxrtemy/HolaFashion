import Blog from "./components/blog/Blog";
import Contacts from "./components/contacts/Contacts.tsx";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Product from "./components/product/Product"
import Services from "./components/services/Services.jsx"

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
