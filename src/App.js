import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import ProductList from "./components/poductList/ProductList";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import ProductDetail from "./components/productDetail/ProductDetail";
import Cart from "./components/cart/Cart"
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductList />} />
        <Route path="/Products/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
