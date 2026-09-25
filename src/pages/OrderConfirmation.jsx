import { useLocation, Link, useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";

export default function OrderConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.order;

  if (!order) {
    return (
      <div className="oc-page">
        <div className="oc-box">
          <p>No order details found.</p>
          <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
      </div>
    );
  }

  const deliveryDate = new Date(order.estimatedDelivery || Date.now() + 4 * 86400000);

  return (
    <div className="oc-page">
      <div className="oc-box">
        <div className="oc-check">✅</div>
        <h2>Order Confirmed!</h2>
        <p className="oc-sub">Thank you, {order.customer?.firstName}. Your order has been placed successfully.</p>

        <div className="oc-section">
          <h4>Order ID</h4>
          <p>{order._id}</p>
        </div>

        <div className="oc-section">
          <h4>Delivery Address</h4>
          <p>
            {order.customer?.firstName} {order.customer?.lastName}<br />
            {order.address?.street}, {order.address?.city}<br />
            {order.address?.state} - {order.address?.pin}<br />
            📞 {order.customer?.phone}
          </p>
        </div>

        <div className="oc-section">
          <h4>Items</h4>
          {order.items?.map((item, i) => (
            <div className="oc-item" key={i}>
              <span>{item.name} × {item.qty}</span>
              <span>₹{(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="oc-total">
          <span>Total Paid</span>
          <strong>₹{order.totalAmount?.toFixed(2)}</strong>
        </div>

        <div className="oc-delivery">
          🚚 Estimated delivery by <strong>{deliveryDate.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</strong>
        </div>

        <Link to="/" className="oc-btn">Continue Shopping</Link>
      </div>
    </div>
  );
}