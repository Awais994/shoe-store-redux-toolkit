import NavBar from "./components/NavBar/NavBar";
import ImgSwpr from "./components/imgSlider/ImgSwpr";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import CheckOut from "./components/checkOut/CheckOut";
import Details from "./components/details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImgSwpr />
                <Products />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Products/:id" element={<Details />} />
          <Route path="/checkout" element={<CheckOut />} />
          {/* <Route path="/checkout" element={<CheckOut />} /> */}

          {/* <Route path="/Products/:i" element={<Shoedetail />} />
          <Route path="/About" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
