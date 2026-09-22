// import { useState } from "react";
// import "./ProductGrid.css";

// const products = [
//   { id: 1, name: "Urban Runner", img: "/images/products/Urban Runner.jpg", badge: "New", rating: 4, price: 499, mrp: 1099, left: 3 },
//   { id: 2, name: "Classic Loafer", img: "/images/products/Classic Loafer.jpg", badge: "Hot", rating: 5, price: 699, mrp: 1299, left: 5 },
//   { id: 3, name: "Street Sneaker", img: "/images/products/Street Sneaker.jpg", badge: "New", rating: 4, price: 599, mrp: 999, left: 8 },
//   { id: 4, name: "Comfort Clogs", img: "/images/products/Comfort Clogs.jpg", badge: "Sale", rating: 3, price: 399, mrp: 799, left: 2 },
//   { id: 5, name: "Formal Oxford", img: "/images/products/Formal Oxford.jpg", badge: "Hot", rating: 5, price: 899, mrp: 1599, left: 6 },
//   { id: 6, name: "Sports Pro", img: "/images/products/Sports Pro.jpg", badge: "New", rating: 4, price: 799, mrp: 1399, left: 4 },
//   { id: 7, name: "Kids Play", img: "/images/products/Kids Play.jpg", badge: "Sale", rating: 4, price: 349, mrp: 699, left: 9 },
//   { id: 8, name: "Hi-Neck Boot", img: "/images/products/Hi-Neck Boot.jpg", badge: "Hot", rating: 5, price: 999, mrp: 1799, left: 3 },
// ];

// export default function ProductGrid() {
//   const [liked, setLiked] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [active, setActive] = useState(null); // click pannina card id

//   const toggle = (list, setList, id) =>
//     setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

//   const handleShare = (e, p) => {
//     e.stopPropagation();
//     if (navigator.share) {
//       navigator.share({ title: p.name, url: window.location.href });
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert("Link copied!");
//     }
//   };

//   return (
//    <section className="products">
//   <h2 className="products-title">Limited Stock, Grab Yours</h2>
//   <div className="product-grid">
//         {products.map((p) => {
//           const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
//           return (
//             <div className="product-card" key={p.id}>
//               <div
//                 className={active === p.id ? "product-img show" : "product-img"}
//                 onClick={() => setActive(active === p.id ? null : p.id)}
//               >
//                 <span className="badge">{p.badge}</span>

//                 <div className="icons">
//                   <button
//                     className={liked.includes(p.id) ? "icon liked" : "icon"}
//                     title="Wishlist"
//                     onClick={(e) => { e.stopPropagation(); toggle(liked, setLiked, p.id); }}
//                   >
//                     ♥
//                   </button>
//                   <button className="icon" title="Share" onClick={(e) => handleShare(e, p)}>
//                     ➦
//                   </button>
//                   <button
//                     className={cart.includes(p.id) ? "icon carted" : "icon"}
//                     title="Add to cart"
//                     onClick={(e) => { e.stopPropagation(); toggle(cart, setCart, p.id); }}
//                   >
//                     🛒
//                   </button>
//                 </div>

//                 <img src={p.img} alt={p.name} />
//               </div>

//               <div className="product-info">
//                 <h4>{p.name}</h4>
//                 <div className="stars">
//                   {"★".repeat(p.rating)}
//                   {"☆".repeat(5 - p.rating)}
//                 </div>
//                 <div className="price">
//                   <span className="now">₹{p.price}</span>
//                   <span className="mrp">₹{p.mrp}</span>
//                   {/* <span className="off">{off}% off</span> */}
//                 </div>
//                 <p className="left">Only {p.left} left</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


// import { useState } from "react";
// import { useCart } from "../context/CartContext";
// import "./ProductGrid.css";

// const products = [
//   { id: 1, name: "Urban Runner", img: "/images/products/Urban Runner.jpg", badge: "New", rating: 4, price: 499, mrp: 1099, left: 3 },
//   { id: 2, name: "Classic Loafer", img: "/images/products/Classic Loafer.jpg", badge: "Hot", rating: 5, price: 699, mrp: 1299, left: 5 },
//   { id: 3, name: "Street Sneaker", img: "/images/products/Street Sneaker.jpg", badge: "New", rating: 4, price: 599, mrp: 999, left: 8 },
//   { id: 4, name: "Comfort Clogs", img: "/images/products/Comfort Clogs.jpg", badge: "Sale", rating: 3, price: 399, mrp: 799, left: 2 },
//   { id: 5, name: "Formal Oxford", img: "/images/products/Formal Oxford.jpg", badge: "Hot", rating: 5, price: 899, mrp: 1599, left: 6 },
//   { id: 6, name: "Sports Pro", img: "/images/products/Sports Pro.jpg", badge: "New", rating: 4, price: 799, mrp: 1399, left: 4 },
//   { id: 7, name: "Kids Play", img: "/images/products/Kids Play.jpg", badge: "Sale", rating: 4, price: 349, mrp: 699, left: 9 },
//   { id: 8, name: "Hi-Neck Boot", img: "/images/products/Hi-Neck Boot.jpg", badge: "Hot", rating: 5, price: 999, mrp: 1799, left: 3 },
// ];

// export default function ProductGrid() {
//   const { cart, addToCart } = useCart();
//   const [liked, setLiked] = useState([]);
//   const [active, setActive] = useState(null);

//   const toggleLike = (id) =>
//     setLiked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

//   const handleShare = (e, p) => {
//     e.stopPropagation();
//     if (navigator.share) {
//       navigator.share({ title: p.name, url: window.location.href });
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert("Link copied!");
//     }
//   };

//   return (
//     <section className="products">
//       <h2 className="products-title">Limited Stock, Grab Yours</h2>
//       <div className="product-grid">
//         {products.map((p) => {
//           const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
//           const inCart = cart.some((item) => item.id === p.id);

//           return (
//             <div className="product-card" key={p.id}>
//               <div
//                 className={active === p.id ? "product-img show" : "product-img"}
//                 onClick={() => setActive(active === p.id ? null : p.id)}
//               >
//                 <span className="badge">{p.badge}</span>

//                 <div className="icons">
//                   <button
//                     className={liked.includes(p.id) ? "icon liked" : "icon"}
//                     title="Wishlist"
//                     onClick={(e) => { e.stopPropagation(); toggleLike(p.id); }}
//                   >
//                     ♥
//                   </button>
//                   <button className="icon" title="Share" onClick={(e) => handleShare(e, p)}>
//                     ➦
//                   </button>
//                   <button
//                     className={inCart ? "icon carted" : "icon"}
//                     title="Add to cart"
//                     onClick={(e) => { e.stopPropagation(); addToCart(p); }}
//                   >
//                     🛒
//                   </button>
//                 </div>

//                 <img src={p.img} alt={p.name} />
//               </div>

//               <div className="product-info">
//                 <h4>{p.name}</h4>
//                 <div className="stars">
//                   {"★".repeat(p.rating)}
//                   {"☆".repeat(5 - p.rating)}
//                 </div>
//                 <div className="price">
//                   <span className="now">₹{p.price}</span>
//                   <span className="mrp">₹{p.mrp}</span>
//                 </div>
//                 <p className="left">Only {p.left} left</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { useCart } from "../context/CartContext";
import QuickView from "./QuickView";
import "./ProductGrid.css";

const products = [
  { id: 1, name: "Urban Runner", img: "/images/products/Urban Runner.jpg", badge: "New", rating: 4, price: 499, mrp: 1099, left: 3 },
  { id: 2, name: "Classic Loafer", img: "/images/products/Classic Loafer.jpg", badge: "Hot", rating: 5, price: 699, mrp: 1299, left: 5 },
  { id: 3, name: "Street Sneaker", img: "/images/products/Street Sneaker.jpg", badge: "New", rating: 4, price: 599, mrp: 999, left: 8 },
  { id: 4, name: "Comfort Clogs", img: "/images/products/Comfort Clogs.jpg", badge: "Sale", rating: 3, price: 399, mrp: 799, left: 2 },
  { id: 5, name: "Formal Oxford", img: "/images/products/Formal Oxford.jpg", badge: "Hot", rating: 5, price: 899, mrp: 1599, left: 6 },
  { id: 6, name: "Sports Pro", img: "/images/products/Sports Pro.jpg", badge: "New", rating: 4, price: 799, mrp: 1399, left: 4 },
  { id: 7, name: "Kids Play", img: "/images/products/Kids Play.jpg", badge: "Sale", rating: 4, price: 349, mrp: 699, left: 9 },
  { id: 8, name: "Hi-Neck Boot", img: "/images/products/Hi-Neck Boot.jpg", badge: "Hot", rating: 5, price: 999, mrp: 1799, left: 3 },
];

export default function ProductGrid() {
  const { cart, addToCart } = useCart();
  const [liked, setLiked] = useState([]);
  const [active, setActive] = useState(null);
  const [quickView, setQuickView] = useState(null);

  const toggleLike = (id) =>
    setLiked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const handleShare = (e, p) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({ title: p.name, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  return (
    <section className="products">
      <h2 className="products-title">Limited Stock, Grab Yours</h2>
      <div className="product-grid">
        {products.map((p) => {
          const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
          const inCart = cart.some((item) => item.id === p.id);

          return (
            <div className="product-card" key={p.id}>
              <div
                className={active === p.id ? "product-img show" : "product-img"}
                onClick={() => setActive(active === p.id ? null : p.id)}
              >
                <span className="badge">{p.badge}</span>

                <div className="icons">
                  <button
                    className={liked.includes(p.id) ? "icon liked" : "icon"}
                    title="Wishlist"
                    onClick={(e) => { e.stopPropagation(); toggleLike(p.id); }}
                  >
                    ♥
                  </button>
                  <button className="icon" title="Share" onClick={(e) => handleShare(e, p)}>
                    ➦
                  </button>
                  <button
                    className={inCart ? "icon carted" : "icon"}
                    title="Add to cart"
                    onClick={(e) => { e.stopPropagation(); setQuickView(p); }}
                  >
                    🛒
                  </button>
                </div>

                <img src={p.img} alt={p.name} />
              </div>

              <div className="product-info">
                <h4>{p.name}</h4>
                <div className="stars">
                  {"★".repeat(p.rating)}
                  {"☆".repeat(5 - p.rating)}
                </div>
                <div className="price">
                  <span className="now">₹{p.price}</span>
                  <span className="mrp">₹{p.mrp}</span>
                </div>
                <p className="left">Only {p.left} left</p>
              </div>
            </div>
          );
        })}
      </div>

      {quickView && <QuickView product={quickView} onClose={() => setQuickView(null)} />}
    </section>
  );
}