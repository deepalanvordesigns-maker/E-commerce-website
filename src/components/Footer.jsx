import { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-col brand">
          <h3>Your Brand</h3>
          <p>Shoes picked for how they feel, not just how they look.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>

        {/* Shop */}
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Men Shoes</a></li>
            <li><a href="#">Women Shoes</a></li>
            <li><a href="#">Kids Shoes</a></li>
            <li><a href="#">Sports Shoes</a></li>
            <li><a href="#">New Arrivals</a></li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns & Exchange</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col newsletter">
          <h4>Stay in the loop</h4>
          <p>Get updates on new drops and offers.</p>
          {sent ? (
            <p className="footer-thanks">Thanks for subscribing! 🎉</p>
          ) : (
            <form onSubmit={handleSubscribe} className="footer-form">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}