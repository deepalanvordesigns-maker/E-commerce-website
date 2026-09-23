import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import PaymentModal from "../components/PaymentModal";
import "./Checkout.css";

export default function Checkout() {
  const { cart, cartTotal, placeOrder } = useCart();
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);

  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    country: "India", street: "", city: "", state: "Tamil Nadu", pin: "",
    notes: "",
  });
  const [delivery, setDelivery] = useState("shipping");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const deliveryCharge = delivery === "shipping" ? 120 : 0;
  const discount = cart.reduce((sum, item) => sum + ((item.mrp || item.price) - item.price) * item.qty, 0);
  const total = cartTotal + deliveryCharge;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handlePaymentSuccess = async () => {
    try {
      await placeOrder(
        { firstName: form.firstName, lastName: form.lastName, phone: form.phone, email: form.email },
        { street: form.street, city: form.city, state: form.state, pin: form.pin },
        total
      );
      setShowPayment(false);
      alert("Payment successful! Order placed and saved. 🎉");
      navigate("/");
    } catch (err) {
      alert("Something went wrong placing your order. Please try again.");
    }
  };

  return (
    <section className="checkout-page">
      <div className="checkout-steps">
        <span>Cart</span> → <span>Information</span> → <strong>Payment</strong>
      </div>
      <p className="checkout-secure">🛡️ Complete your order securely in less than 2 mins.</p>

      <form className="checkout-body" onSubmit={handlePlaceOrder}>
        <div className="checkout-form">
          <h3><span className="step-num">1</span> Contact Information</h3>
          <div className="form-row">
            <input name="firstName" placeholder="First name *" value={form.firstName} onChange={handleChange} required />
            <input name="lastName" placeholder="Last name *" value={form.lastName} onChange={handleChange} required />
          </div>
          <input name="phone" placeholder="Phone *" value={form.phone} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email address *" value={form.email} onChange={handleChange} required />

          <h3><span className="step-num">2</span> Delivery Address</h3>
          <select name="country" value={form.country} onChange={handleChange}>
            <option>India</option>
          </select>
          <input name="street" placeholder="House number and street name *" value={form.street} onChange={handleChange} required />
          <input name="city" placeholder="Town / City *" value={form.city} onChange={handleChange} required />
          <div className="form-row">
            <select name="state" value={form.state} onChange={handleChange}>
              <option>Tamil Nadu</option>
              <option>Kerala</option>
              <option>Karnataka</option>
              <option>Andhra Pradesh</option>
            </select>
            <input name="pin" placeholder="PIN Code *" value={form.pin} onChange={handleChange} required />
          </div>

          <h3><span className="step-num">3</span> Additional Information</h3>
          <textarea name="notes" placeholder="Notes about your order, e.g. special notes for delivery" value={form.notes} onChange={handleChange} />
        </div>

        <div className="checkout-summary">
          <p className="summary-label">ORDER SUMMARY</p>
          <div className="summary-head">
            <h3>Your order</h3>
            <span>{cart.length} items</span>
          </div>

          <div className="summary-items">
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="summary-item-info">
                  <p>{item.name}{item.color ? ` - ${item.color}` : ""}{item.size ? `, ${item.size}` : ""}</p>
                  {item.mrp && <span className="summary-save">You save ₹{(item.mrp - item.price) * item.qty}</span>}
                </div>
                <span className="summary-qty">×{item.qty}</span>
                <span className="summary-price">₹{(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <h4>Price Details</h4>
          <div className="price-row"><span>Price ({cart.length} items)</span><span>₹{cartTotal.toFixed(2)}</span></div>
          {discount > 0 && <div className="price-row discount"><span>Discount</span><span>−₹{discount.toFixed(2)}</span></div>}
          <div className="price-row"><span>Delivery Charges</span><span>{deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}</span></div>

          <p className="delivery-label">DELIVERY & PICKUP OPTIONS</p>
          <label className={delivery === "shipping" ? "delivery-opt active" : "delivery-opt"}>
            <input type="radio" name="delivery" checked={delivery === "shipping"} onChange={() => setDelivery("shipping")} />
            🚚 Shipping Charges <span>₹120.00</span>
          </label>
          <label className={delivery === "pickup" ? "delivery-opt active" : "delivery-opt"}>
            <input type="radio" name="delivery" checked={delivery === "pickup"} onChange={() => setDelivery("pickup")} />
            🏠 Pickup from Store <span>Free</span>
          </label>

          <div className="total-row">
            <span>Total Amount</span>
            <strong>₹{total.toFixed(2)}</strong>
          </div>
          {discount > 0 && <p className="total-saved">💚 You Saved ₹{discount.toFixed(2)}</p>}

          <div className="payment-box">
            <label className="payment-opt active">
              <input type="radio" checked readOnly />
              UPI, Cards, NetBanking <span className="pay-by">Pay by Razorpay</span>
            </label>
            <p>Pay securely via UPI, Credit/Debit Card, or Internet Banking through Razorpay</p>
          </div>

          <button type="submit" className="place-order-btn" disabled={cart.length === 0}>
            PLACE ORDER
          </button>

          <div className="trust-row">
            <span>🛡️ Secure Payments</span>
            <span>🔁 Easy Exchange</span>
            <span>🚚 Fast Delivery</span>
          </div>
        </div>
      </form>

      {showPayment && (
        <PaymentModal
          total={total}
          phone={form.phone}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </section>
  );
}