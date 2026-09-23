

import { createContext, useContext, useState } from "react";
import { placeOrderAPI } from "../api";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orderPlacing, setOrderPlacing] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // ⚠️ backend-ku order anுppுra function
  const placeOrder = async (customerInfo, addressInfo, totalAmount) => {
    setOrderPlacing(true);
    try {
      const order = await placeOrderAPI({
        customer: customerInfo,
        address: addressInfo,
        items: cart,
        totalAmount,
      });
      setCart([]); // order success aana cart clear pannunga
      return order;
    } catch (err) {
      console.error("Order error:", err);
      throw err;
    } finally {
      setOrderPlacing(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart, addToCart, updateQty, removeFromCart,
        cartCount, cartTotal, placeOrder, orderPlacing,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const token = localStorage.getItem("token");

//   // Page load-la backend cart fetch pண்ணுறோm (login iருந்தா)
//   useEffect(() => {
//     if (token) {
//       fetchCart();
//     }
//   }, [token]);

//   const fetchCart = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("http://localhost:5000/api/cart", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const items = (res.data.items || []).map((i) => ({
//         id: i.product._id,
//         name: i.product.name,
//         price: i.product.price,
//         img: i.product.image || i.product.colors?.[0]?.img,
//         quantity: i.quantity,
//       }));
//       setCart(items);
//     } catch (err) {
//       console.error("Cart fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addToCart = async (product) => {
//     if (!token) {
//       alert("Please login to add items to cart");
//       return;
//     }

//     try {
//       await axios.post(
//         "http://localhost:5000/api/cart/add",
//         { productId: product.id, quantity: 1 },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       await fetchCart(); // backend-la irundhu latest cart eduthu refresh pண்ணுறோm
//     } catch (err) {
//       console.error("Add to cart error:", err);
//       alert("Cart-la add pண்ண முடியலை");
//     }
//   };

//   const removeFromCart = async (productId) => {
//     if (!token) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/cart/remove/${productId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       await fetchCart();
//     } catch (err) {
//       console.error("Remove from cart error:", err);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, loading, fetchCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }