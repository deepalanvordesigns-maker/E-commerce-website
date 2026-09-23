

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


  const placeOrder = async (customerInfo, addressInfo, totalAmount) => {
    setOrderPlacing(true);
    try {
      const order = await placeOrderAPI({
        customer: customerInfo,
        address: addressInfo,
        items: cart,
        totalAmount,
      });
      setCart([]);
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
