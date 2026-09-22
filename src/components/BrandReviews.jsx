import { useState } from "react";
import "./BrandReviews.css";

const stats = [
  { icon: "👑", value: "27K", label: "Verified Reviews" },
  { icon: null, top: "Monthly Record", value: "366", label: "Verified Reviews" },
  { icon: null, top: "Bronze", value: "", label: "Authenticity" },
  { icon: null, top: "Top", value: "1%", label: "Stores" },
  { icon: null, top: "Top", value: "1%", label: "Trending" },
];

const allReviews = [
  { rating: 5, title: "Best", text: "This is very best and excellent quality product. Thanks Neemans", name: "Sahil paywa", product: "Breezy Fluff Sandals : Black" },
  { rating: 4, title: "Iam sooo happy", text: "Loved the comfort and design of this product.", name: "Nagaraja K M", product: "Purewhoosh Breeze : Beige" },
  { rating: 4, title: "Love it...!", text: "Perfect fit and feels good while walking", name: "Anonymous", product: "Cushers Rainscape Clogs For Men : Blue" },
  { rating: 5, title: "Super comfy", text: "Wore it all day, no pain at all.", name: "Divya R", product: "Zen Slip-On : Cream" },
  { rating: 3, title: "Decent", text: "Good but sizing runs a bit small.", name: "Arjun K", product: "Trail Blazer : Green" },
];

function Stars({ rating }) {
  return (
    <div className="br-stars">
      {"★".repeat(Math.floor(rating))}
      {rating % 1 !== 0 ? "✩" : ""}
      {"☆".repeat(5 - Math.ceil(rating))}
    </div>
  );
}

export default function BrandReviews() {
  const [start, setStart] = useState(0);
  const visible = allReviews.slice(start, start + 3);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(allReviews.length - 3, s + 1));

  return (
    <section className="br-wrap">
      <h2>Brand Reviews</h2>
      <span className="br-underline"></span>

      <div className="br-overall">
        <Stars rating={4.5} />
        <span>27084 reviews</span>
      </div>

      <div className="br-stats">
        {stats.map((s, i) => (
          <div className="br-stat" key={i}>
            {s.icon ? <span className="br-icon">{s.icon}</span> : <span className="br-top">{s.top}</span>}
            {s.value && <strong>{s.value}</strong>}
            <p>{s.label}</p>
          </div>
        ))}
      </div>

      <div className="br-reviews">
        {visible.map((r, i) => (
          <div className="br-card" key={i}>
            <Stars rating={r.rating} />
            <h4>{r.title}</h4>
            <p className="br-text">{r.text}</p>
            <p className="br-name">{r.name}</p>
            <p className="br-product">{r.product}</p>
          </div>
        ))}
      </div>

      <div className="br-nav">
        <button onClick={prev} disabled={start === 0} aria-label="Previous">‹</button>
        <button onClick={next} disabled={start >= allReviews.length - 3} aria-label="Next">›</button>
      </div>
    </section>
  );
}