import "./WhyZenstock.css";

const features = [
  { icon: "🛵", chip: "🛵", title: "Fast Delivery.", text: "Quick and reliable delivery straight to your doorstep." },
  { icon: "📦", chip: "🔁", title: "Easy Exchange.", text: "A simple exchange process for the right style and fit." },
  { icon: "👣", chip: "💎", title: "Premium Quality.", text: "Quality materials and refined finishing in every pair." },
];

export default function WhyZenstock() {
  return (
    <section className="wz-wrap">
      <h2>
        Why <span className="wz-brand">Zenstock</span>?
      </h2>
      <p className="wz-sub">Built for comfort, style, and confidence across every pair.</p>
      <span className="wz-underline"></span>

      <div className="wz-grid">
        {features.map((f, i) => (
          <div className="wz-card" key={i}>
            <span className="corner tl"></span>
            <span className="corner br"></span>
            <div className="wz-icon">{f.icon}</div>
            <div className="wz-chip">{f.chip}</div>
            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}