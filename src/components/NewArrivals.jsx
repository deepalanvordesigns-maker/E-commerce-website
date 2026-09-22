import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./NewArrivals.css";

const newProducts = [
  {
    id: 1, name: "Cloud Walker", rating: 4, price: 799, mrp: 1299,
    colors: [
      { code: "#222222", img: "/images/new/new1.jpg" },
      { code: "#682412", img: "/images/new/news2.jpg" },
      { code: "#d370c2", img: "/images/new/news3.jpg" },
    ],
  },
  {
    id: 2, name: "Zen Slip-On", rating: 5, price: 649, mrp: 999,
    colors: [
      { code: "#e8e0d0", img: "/images/new/new21.jpg" },
      { code: "#3b1a4a", img: "/images/new/nes3.jpg" },
      { code: "#5e5c5f", img: "/images/new/nes2.jpg" },
    ],
  },
  {
    id: 3, name: "Trail Blazer", rating: 4, price: 999, mrp: 1599,
    colors: [
      { code: "#2f4930", img: "/images/new/new3.jpg" },
      { code: "#222222", img: "/images/new/green1.jpg" },
      { code: "#8d6e63", img: "/images/new/green2.jpg" },
    ],
  },
  {
    id: 4, name: "Daily Comfort", rating: 5, price: 549, mrp: 899,
    colors: [
      { code: "#1565c0", img: "/images/new/new4.jpg" },
      { code: "#181717", img: "/images/new/tail1.jpg" },
        { code: "#db8a6a", img: "/images/new/tail.jpg" },
    ],
  },
];

export default function NewArrivals() {
  const [cart, setCart] = useState([]);
  const [picked, setPicked] = useState({}); // { productId: colorIndex }

  const toggleCart = (id) =>
    setCart((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <section className="na-section">
      <h2 className="na-title">New Arrivals</h2>
      <p className="na-sub">Fresh styles, just landed</p>

      <div className="na-grid">
        {newProducts.map((p) => {
          const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
          const idx = picked[p.id] ?? 0;      // select panna color index
          const current = p.colors[idx];      // andha color-oda code + img

          return (
            <div className="na-card" key={p.id}>
              <div className="na-img">
                <span className="na-badge">NEW</span>
                <img key={current.img} src={current.img} alt={p.name} />
              </div>

              <div className="na-info">
                <h4>{p.name}</h4>

                <div className="na-stars">
                  {"★".repeat(p.rating)}
                  {"☆".repeat(5 - p.rating)}
                </div>

                <div className="na-colors">
                  {p.colors.map((c, i) => (
                    <button
                      key={c.code}
                      className={idx === i ? "na-dot active" : "na-dot"}
                      style={{ background: c.code }}
                      onClick={() => setPicked({ ...picked, [p.id]: i })}
                      aria-label={`Color ${c.code}`}
                    />
                  ))}
                </div>

                <div className="na-price">
                  <span className="na-now">₹{p.price}</span>
                  <span className="na-mrp">₹{p.mrp}</span>
                  <span className="na-off">{off}% off</span>
                </div>

                <button
                  className={cart.includes(p.id) ? "na-btn added" : "na-btn"}
                  onClick={() => toggleCart(p.id)}
                >
                  {cart.includes(p.id) ? "Added ✓" : "Add to cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}