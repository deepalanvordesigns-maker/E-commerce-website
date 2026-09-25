import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div style={{ padding: "60px 6%", minHeight: "60vh", textAlign: "center" }}>
        <h2 style={{ color: "#3b1a4a" }}>My Wishlist</h2>
        <p style={{ color: "#888" }}>You haven't added anything to your wishlist yet.</p>
      </div>
    );
  }

  return (
        <>
    <div style={{ padding: "40px 6%", minHeight: "60vh" }}>
      <h2 style={{ color: "#3b1a4a", marginBottom: 24 }}>My Wishlist</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {wishlist.map((p) => (
          <div key={p.id} style={{ background: "#fff", borderRadius: 12, padding: 14 }}>
            <img src={p.img} alt={p.name} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8 }} />
            <h4 style={{ margin: "10px 0 4px" }}>{p.name}</h4>
            <p style={{ color: "#3b1a4a", fontWeight: 700 }}>₹{p.price}</p>
            <button onClick={() => addToCart(p)} style={{ width: "100%", padding: 10, marginBottom: 8, background: "#3b1a4a", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}>
              Add to Cart
            </button>
            <button onClick={() => toggleWishlist(p)} style={{ width: "100%", padding: 8, background: "#fff", color: "#e63946", border: "1px solid #e63946", borderRadius: 6, cursor: "pointer" }}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}