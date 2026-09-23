import { useState } from "react";
import "./PaymentModal.css";

const methods = [
  { key: "upi", label: "UPI", offers: "4 Offers" },
  { key: "cards", label: "Cards", offers: "Get 5%* Reward P..." },
  { key: "emi", label: "EMI", offers: null },
  { key: "netbanking", label: "Netbanking", offers: null },
  { key: "wallet", label: "Wallet", offers: null },
];

export default function PaymentModal({ total, phone, onClose, onSuccess }) {
  const [active, setActive] = useState("upi");

  const upiId = "paneerselvama11-2@okaxis";
  const payeeName = "Paneer Selvam A";
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${total.toFixed(2)}&cu=INR`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;

  return (
    <div className="pm-overlay" onClick={onClose}>
      <div className="pm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pm-left">
          <div className="pm-brand">
            <span className="pm-logo">S</span>
            <strong>ZenStock</strong>
          </div>

          <div className="pm-price-box">
            <p>Price Summary</p>
            <h2>₹{total.toFixed(0)}</h2>
          </div>

          <div className="pm-user-box">
            <span>👤 Using as {phone || "+91 XXXXX XXXXX"}</span>
            <span>›</span>
          </div>

          <div className="pm-offer-box">
            <span>🏷️ Offers on UPI</span>
            <span>›</span>
          </div>

          <div className="pm-illustration">🛍️</div>
          <p className="pm-secured">Secured by <strong>Razorpay</strong></p>
        </div>

        <div className="pm-right">
          <div className="pm-header">
            <span>Payment Options</span>
            <button onClick={onClose}>✕</button>
          </div>

          <div className="pm-body">
            <div className="pm-methods">
              {methods.map((m) => (
                <button
                  key={m.key}
                  className={active === m.key ? "pm-method active" : "pm-method"}
                  onClick={() => setActive(m.key)}
                >
                  <span>{m.label}</span>
                  {m.offers && <span className="pm-tag">{m.offers}</span>}
                </button>
              ))}
            </div>

            <div className="pm-detail">
              {active === "upi" && (
                <>
                  <p className="pm-detail-title">Available Offers</p>
                  <div className="pm-offer-chip">⚡ Earn up to 5% NeuCoins</div>

                  <p className="pm-detail-title" style={{ marginTop: 20 }}>UPI QR</p>
                  <div className="pm-qr">
                    <img src={qrImageUrl} alt="UPI QR Code" className="pm-qr-img" />
                    <p>Scan the QR using any UPI App</p>
                  </div>
                </>
              )}

              {active === "cards" && (
                <>
                  <p className="pm-detail-title">Enter card details</p>
                  <input placeholder="Card number" />
                  <div className="pm-row">
                    <input placeholder="MM / YY" />
                    <input placeholder="CVV" />
                  </div>
                  <input placeholder="Name on card" />
                </>
              )}

              {active === "emi" && <p className="pm-placeholder">EMI options from your bank appear here.</p>}
              {active === "netbanking" && <p className="pm-placeholder">Select your bank to continue.</p>}
              {active === "wallet" && <p className="pm-placeholder">Choose a wallet (Paytm, Mobikwik...) to pay.</p>}
            </div>
          </div>

          <button className="pm-pay-btn" onClick={onSuccess}>
            Pay ₹{total.toFixed(0)} (Demo)
          </button>
          <p className="pm-footer-note">By proceeding, I agree to Razorpay's Privacy Notice & T&C</p>
        </div>
      </div>
    </div>
  );
}