import { useState, useEffect } from "react";
import "./HeroSlider.css";

const slides = [
  { img: "/images/babyshoes.jpeg", title: "Step into comfort", text: "Shoes picked for how they feel, not just how they look." },
  { img: "/images/shoesback.webp", title: "New arrivals", text: "Fresh styles for every day." },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];
  return (
    <section className="hero" style={{ backgroundImage: `url(${s.img})` }}>
      <div className="hero-text">
        <span className="tag">— New arrivals</span>
        <h1>{s.title}</h1>
        <p>{s.text}</p>
        <div className="hero-btns">
          <button>Shop the collection</button>
          <button className="outline">View lookbook</button>
        </div>
      </div>
    </section>
  );
}