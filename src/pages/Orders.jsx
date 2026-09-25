import { useEffect, useState } from "react";
import { getAllOrdersAPI, cancelOrderAPI } from "../api";
import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const data = await getAllOrdersAPI();
      setOrders(data);
    } catch (err) {
      setError("Failed to load orders.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    if (!window.confirm("Cancel this order?")) return;
    try {
      await cancelOrderAPI(id);
      setOrders((prev) =>
        prev.map((o) => (o._id === id ? { ...o, status: "cancelled" } : o))
      );
    } catch (err) {
      alert("Could not cancel order. Please try again.");
    }
  };

  if (loading) return <p className="orders-loading">Loading orders...</p>;
  if (error) return <p className="orders-loading">{error}</p>;

  return (
    <section className="orders-page">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p className="orders-empty">No orders placed yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order._id}>
              <div className="order-head">
                <div>
                  <p className="order-id">Order #{order._id.slice(-8).toUpperCase()}</p>
                  <p className="order-date">
                    {new Date(order.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </p>
                </div>
                <span className={`order-status ${order.status}`}>
                  {order.status}
                </span>
              </div>

              <div className="order-items">
                {order.items.map((item, i) => (
                  <div className="order-item" key={i}>
                    <img src={item.img} alt={item.name} />
                    <div className="order-item-info">
                      <p>{item.name}</p>
                      <span>Qty: {item.qty} × ₹{item.price}</span>
                    </div>
                    <span className="order-item-total">₹{(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="order-foot">
                <div className="order-customer">
                  <p>{order.customer?.firstName} {order.customer?.lastName} · 📞 {order.customer?.phone}</p>
                  <p>{order.address?.street}, {order.address?.city}, {order.address?.state} - {order.address?.pin}</p>
                </div>
                <div className="order-total-cancel">
                  <strong>₹{order.totalAmount.toFixed(2)}</strong>
                  {order.status !== "cancelled" && (
                    <button className="order-cancel-btn" onClick={() => handleCancel(order._id)}>
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}