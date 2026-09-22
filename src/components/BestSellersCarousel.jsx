import { useRef, useState } from "react";
import "./BestSellersCarousel.css";

const products = [
  {
    id: 1, category: "BOOTS", name: "Coach Chelsea Boot", price: 675, mrp: 999,
    images: ["/images/bsc/cos1.jpg", "/images/bsc/cos1.jpg", "/images/bsc/cos1.jpg"],
  },
  {
    id: 2, category: "BOOTS", name: "Alive A-1001 Chelsea", price: 689, mrp: 1080,
    images: ["/images/bsc/alive.jpg", "/images/bsc/alive.jpg"],
  },
  {
    id: 3, category: "SNEAKERS", name: "Street Runner", price: 723, mrp: 1120,
    images: ["/images/bsc/snekers.jpg", "/images/bsc/snekers.jpg"],
  },
  {
    id: 4, category: "LOAFERS", name: "Classic Loafer", price: 765, mrp: 1140,
    images: ["/images/bsc/lofer.jpg", "/images/bsc/lofer.jpg"],
  },
  {
    id: 5, category: "SPORTS", name: "Sprint Pro", price: 599, mrp: 999,
    images: ["/images/bsc/sport.jpg", "/images/bsc/sport.jpg"],
  },
   {
    id: 5, category: "SPORTS", name: "Sprint Pro", price: 599, mrp: 999,
    images: ["/images/bsc/cos1.jpg", "/images/bsc/cos1.jpg"],
  },
   {
    id: 5, category: "SPORTS", name: "Loafers by Lafattio", price: 599, mrp: 999,
    images: ["/images/bsc/Lafattio.webp", "/images/bsc/Lafattio.webp"],
  },
   {
    id: 5, category: "SPORTS", name: "Ankle Boots by Aspeerio", price: 599, mrp: 999,
    images: ["/images/bsc/aspeerio.webp", "/images/bsc/aspeerio.webp"],
  },
];

export default function BestSellersCarousel() {
  const trackRef = useRef(null);
  const [liked, setLiked] = useState([]);
  const [imgIdx, setImgIdx] = useState({}); // { productId: thumbnailIndex }

  const scroll = (dir) => {
    trackRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const toggleLike = (id) =>
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <section className="bsc">
      <div className="bsc-head">
        <h2>BEST SELLERS</h2>
        <button className="bsc-viewall">View All →</button>
      </div>

      <div className="bsc-body">
        {/* Left promo card */}
        <div className="bsc-promo">
          <span className="bsc-trending">TRENDING NOW</span>
          <h3>
            BEST
            <br />
            SELLERS
          </h3>
          <p>The styles everyone wants. Premium comfort for every step.</p>
          <button className="bsc-shop">SHOP BEST SELLERS →</button>

          <div className="bsc-promo-img">
            <span className="bsc-loved">★ MOST LOVED</span>
            <img src="/images/bestgseller.jpg" alt="Best sellers" />
          </div>
        </div>

        {/* Right carousel */}
        <div className="bsc-carousel">
          <button className="bsc-arrow left" onClick={() => scroll(-1)} aria-label="Previous">‹</button>

          <div className="bsc-track" ref={trackRef}>
            {products.map((p) => {
              const idx = imgIdx[p.id] ?? 0;
              const save = p.mrp - p.price;
              const off = Math.round((save / p.mrp) * 100);

              return (
                <div className="bsc-card" key={p.id}>
                  <button
                    className={liked.includes(p.id) ? "bsc-heart liked" : "bsc-heart"}
                    onClick={() => toggleLike(p.id)}
                    aria-label="Wishlist"
                  >
                    ♥
                  </button>

                  <div className="bsc-main-img">
                    <img key={p.images[idx]} src={p.images[idx]} alt={p.name} />
                  </div>

                  <div className="bsc-thumbs">
                    {p.images.map((img, i) => (
                      <button
                        key={img}
                        className={idx === i ? "bsc-thumb active" : "bsc-thumb"}
                        onClick={() => setImgIdx({ ...imgIdx, [p.id]: i })}
                      >
                        <img src={img} alt="" />
                      </button>
                    ))}
                  </div>

                  <span className="bsc-cat">{p.category}</span>
                  <h4>{p.name}</h4>
                  <span className="bsc-from">Starts From</span>

                  <div className="bsc-price">
                    <span className="bsc-now">₹{p.price}</span>
                    <span className="bsc-mrp">MRP <s>₹{p.mrp}</s></span>
                  </div>

                  <span className="bsc-save">Save ₹{save} ({off}% OFF)</span>
                </div>
              );
            })}
          </div>

          <button className="bsc-arrow right" onClick={() => scroll(1)} aria-label="Next">›</button>
        </div>
      </div>
    </section>
  );
}