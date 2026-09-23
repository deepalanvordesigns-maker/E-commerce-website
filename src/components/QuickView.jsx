import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./QuickView.css";

export default function QuickView({ product, onClose }) {
  const { addToCart } = useCart();
    const navigate = useNavigate();  
  const [imgIdx, setImgIdx] = useState(0);
  const [color, setColor] = useState(product.colors?.[0]?.name ?? null);
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);


 

 
  if (!product) return null;

  const images = product.images ?? [product.img];
  const off = product.mrp ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;
  const total = product.price * qty;

  const handleAddToCart = () => {
    addToCart({ ...product, color, size, qty });
    onClose();
  };

  const handleBuyNow = () => {         
    addToCart({ ...product, color, size, qty });
    onClose();
    navigate("/checkout");
  };
  return (
    <div className="qv-overlay" onClick={onClose}>
      <div className="qv-modal" onClick={(e) => e.stopPropagation()}>
        <button className="qv-close" onClick={onClose}>✕</button>

        <div className="qv-body">
       
          <div className="qv-gallery">
            <button className="qv-nav left" onClick={() => setImgIdx((i) => (i === 0 ? images.length - 1 : i - 1))}>‹</button>
            <div className="qv-main-img">
              <img src={images[imgIdx]} alt={product.name} />
            </div>
            <button className="qv-nav right" onClick={() => setImgIdx((i) => (i + 1) % images.length)}>›</button>

            <div className="qv-thumbs">
              {images.map((img, i) => (
                <button
                  key={img}
                  className={imgIdx === i ? "qv-thumb active" : "qv-thumb"}
                  onClick={() => setImgIdx(i)}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          </div>

         
          <div className="qv-details">
            <div className="qv-top-row">
              <h2>{product.name}</h2>
              <button className="qv-wish">♡</button>
            </div>

            <div className="qv-price-row">
              <span className="qv-now">₹{product.price}</span>
              {product.mrp && <span className="qv-mrp">MRP <s>₹{product.mrp}</s></span>}
              {off > 0 && <span className="qv-save">Save ₹{product.mrp - product.price} ({off}% OFF)</span>}
            </div>
            <p className="qv-tax">(Inclusive of all taxes)</p>

            {product.colors && (
              <div className="qv-section">
                <p className="qv-label">Choose color:</p>
                <div className="qv-colors">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      className={color === c.name ? "qv-color active" : "qv-color"}
                      onClick={() => setColor(c.name)}
                    >
                      <span className="qv-swatch" style={{ background: c.code }}></span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="qv-section">
              <p className="qv-label">Choose size:</p>
              <div className="qv-sizes">
                {[6, 7, 8, 9, 10].map((s) => (
                  <button
                    key={s}
                    className={size === s ? "qv-size active" : "qv-size"}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="qv-section">
              <p className="qv-label">Quantity:</p>
              <div className="qv-qty">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)}>+</button>
              </div>
              <p className="qv-total">Total Price: <strong>₹{total}</strong></p>
            </div>

         

            <div className="qv-actions">
  <button className="qv-add" onClick={handleAddToCart}>🛒 Add to Cart</button>
  <button className="qv-buy" onClick={handleBuyNow}>⚡ Buy It Now</button>
</div>

            <div className="qv-trust">
              <span>🛡️ 100% Original</span>
              <span>🔒 Secure Payments</span>
              <span>🚚 On Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}