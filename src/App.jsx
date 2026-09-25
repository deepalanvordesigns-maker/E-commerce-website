import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Navebar from "./components/Navebar";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
  import OrderConfirmation from "./pages/OrderConfirmation";
     import Orders from "./pages/Orders";
              import Account from "./pages/Account";
              
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "./context/WishlistContext";


export default function App() {
  return (
    <>
      <CartProvider>
        <WishlistProvider>
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />     
         <Route path="/order-confirmation" element={<OrderConfirmation />} />

<Route path="/account" element={<Account />} />
      

<Route path="/orders" element={<Orders />} />


<Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        </WishlistProvider>
      </CartProvider>
    </>
  );
}