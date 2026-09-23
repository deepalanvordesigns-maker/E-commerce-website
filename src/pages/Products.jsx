import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";
import QuickView from "../components/QuickView";
import "./Products.css";

const allProducts = [
  { id: 1, name: "Leather Sport Shoes", category: "men", price: 849.5, mrp: null, img: "/images/product/men1.jpg" },
  { id: 2, name: "Leather Sport Shoes", category: "men", price: 1199.0, mrp: null, img: "/images/product/men2.jpg" },
  { id: 3, name: "Leather Sport Shoes", category: "sports", price: 2160.0, mrp: null, img: "/images/product/sport1.jpg" },
  { id: 4, name: "Leather Sport Shoes", category: "women", price: 549.9, mrp: 210.0, img: "/images/product/women1.jpg" },
  { id: 5, name: "Leather Sport Shoes", category: "women", price: 919.9, mrp: 170.0, img: "/images/product/women2.jpg" },
  { id: 6, name: "Leather Sport Shoes", category: "kids", price: 1129.5, mrp: null, img: "/images/product/kids.jpg" },
  { id: 7, name: "Leather Sport Shoes", category: "offers", price: 2149.5, mrp: null, img: "/images/product/offers.jpg" },
  { id: 8, name: "Leather Sport Shoes", category: "sports", price: 5149.5, mrp: null, img: "/images/product/sport2.jpg" },
  { id: 9, name: "Leather Sport Shoes", category: "men", price: 3149.5, mrp: null, img: "/images/product/men3.jpg" },
];

const titles = {
  men: "Men Shoes",
  women: "Women Shoes",
  kids: "Kids Shoes",
  sports: "Sports Shoes",
  offers: "Offers",
};

export default function Products() {
  const [searchParams] = useSearchParams();
  const cat = searchParams.get("cat");
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState("default");
  const { cart } = useCart();
  const [quickView, setQuickView] = useState(null);   // ⚠️ popup-ku state

  let filtered = cat ? allProducts.filter((p) => p.category === cat) : allProducts;
  filtered = filtered.filter((p) => p.price <= maxPrice);
  if (search.trim()) {
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }
  if (sort === "low-high") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high-low") filtered = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <>
      <section className="products-page">
        <div className="pp-layout">
          {/* ---- Sidebar ---- */}
          <aside className="pp-sidebar">
            <h4>Search</h4>
            <div className="pp-search">
              <input
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>🔍</button>
            </div>

            <h4>Filter by price</h4>
            <input
              type="range"
              min="200"
              max="10000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="pp-range"
            />
            <div className="pp-range-row">
              <span>Price: $200 — ${maxPrice}</span>
            </div>

            <h4>Products</h4>
            <ul className="pp-side-list">
              {allProducts.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <img src={p.img} alt={p.name} className="pp-thumb" />
                  <div>
                    <p>{p.name}</p>
                    <span>
                      {p.mrp && <s>${p.mrp.toFixed(2)}</s>} ${p.price.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* ---- Main content ---- */}
          <main className="pp-main">
            <p className="pp-breadcrumb">Home / Shoes</p>
            <h1>{cat ? titles[cat] : "Shoes"}</h1>
            <p className="pp-desc">
              Handpicked styles for everyday comfort, built to move with you from morning to night.
            </p>

            <div className="pp-toolbar">
              <span>Showing all {filtered.length} results</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="default">Default sorting</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>

            <div className="pp-grid">
              {filtered.map((p) => {
                const inCart = cart.some((item) => item.id === p.id);
                return (
                  <div className="pp-card" key={p.id}>
                    {p.mrp && <span className="pp-sale">Sale!</span>}
                    <div className="pp-img-wrap">
                      <img src={p.img} alt={p.name} />
                    </div>
                    <h4>{p.name}</h4>
                    <p className="pp-price">
                      {p.mrp ? (
                        <>
                          <s>${p.mrp.toFixed(2)}</s> ${p.price.toFixed(2)}
                        </>
                      ) : (
                        `$${p.price.toFixed(2)}`
                      )}
                    </p>
                    <button
                      className={inCart ? "pp-btn added" : "pp-btn"}
                      onClick={() => setQuickView(p)}
                    >
                      {inCart ? "Added ✓" : "Add to cart"}
                    </button>
                  </div>
                );
              })}
            </div>

            {filtered.length === 0 && <p className="pp-empty">No products found.</p>}
          </main>
        </div>
      </section>

      <Footer />

      {quickView && <QuickView product={quickView} onClose={() => setQuickView(null)} />}
    </>
  );
}








