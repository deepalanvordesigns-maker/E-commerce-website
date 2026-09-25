import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, updateQty, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <section className="cart-page">
      <h2 className="cart-title">🛒 My Shopping Cart</h2>

      <div className="cart-box">
        {cart.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🛒</span>
            <p>Your cart is empty</p>
            <Link to="/products" className="cart-continue">Continue shopping</Link>
          </div>
        ) : (
          <ul className="cart-list">
            {cart.map((item) => (
              <li className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">₹{item.price}</p>
                </div>

                <div className="cart-qty">
                  <button onClick={() => updateQty(item.id, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)}>+</button>
                </div>

                <p className="cart-item-total">₹{item.price * item.qty}</p>

                <button className="cart-remove" onClick={() => removeFromCart(item.id)} aria-label="Remove">
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="cart-footer">
        <p className="cart-total">
          Total Amount: <span>₹{cartTotal.toFixed(2)}</span>
        </p>
        <button className="cart-buy" disabled={cart.length === 0} onClick={() => navigate("/checkout")}>
          Buy Now
        </button>
      </div>
    </section>
  );
}