// import { Link } from "react-router-dom";
// import "./Navebar.css";

// export default function Navebar() {
//   return (

//     <header className="navebar">
//       <Link className="logo">YourBrand</Link>

//       <nav className="nav-links">
//         <Link to="/" >Home</Link>
//         <Link to="/products?cat=men">Men</Link>
//         <Link to="/products?cat=women">Women</Link>
//         <Link to="/products?cat=kids">Kids</Link>
//         <Link to="/products?cat=offers">Offers</Link>
//         <Link to="/products?cat=sports">Sports</Link>
//       </nav>

//       <input className="search" type="text" placeholder="Search products" />

//       <div className="nav-right">
//         <Link to="/wishlist" className="logos">❤</Link>
//        <Link to="/cart" className="logos cart-icon">
//   🛒
//   <span className="badges">0</span>
// </Link>
//         <Link to="/login" className="account-btn">My Account</Link>
//       </div>
//     </header>


//   );
// }

// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import "./Navebar.css";

// export default function Navebar() {
//   const { cart } = useCart();

//   const cartCount = cart.reduce((total, item) => total + item.qty, 0);

//   return (
//     <header className="navebar">
//       <Link className="logo">YourBrand</Link>

//       <nav className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/products?cat=men">Men</Link>
//         <Link to="/products?cat=women">Women</Link>
//         <Link to="/products?cat=kids">Kids</Link>
//         <Link to="/products?cat=offers">Offers</Link>
//         <Link to="/products?cat=sports">Sports</Link>
//       </nav>

//       <input className="search" type="text" placeholder="Search products" />

//       <div className="nav-right">
//         <Link to="/wishlist" className="logos">❤</Link>
//         <Link to="/cart" className="logos cart-icon">
//           🛒
//           <span className="badges">{cartCount}</span>
//         </Link>
//         <Link to="/login" className="account-btn">My Account</Link>
//       </div>
//     </header>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navebar.css";

export default function Navebar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <header className="navebar">
      <div className="navebar-top">
        <Link className="logo" to="/">YourBrand</Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={menuOpen ? "navebar-collapse open" : "navebar-collapse"}>
        
        <nav className="nav-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products?cat=men" onClick={() => setMenuOpen(false)}>Men</Link>
          <Link to="/products?cat=women" onClick={() => setMenuOpen(false)}>Women</Link>
          <Link to="/products?cat=kids" onClick={() => setMenuOpen(false)}>Kids</Link>
          <Link to="/products?cat=offers" onClick={() => setMenuOpen(false)}>Offers</Link>
          <Link to="/products?cat=sports" onClick={() => setMenuOpen(false)}>Sports</Link>
          <Link to="/orders">My Orders</Link>
        </nav>
        <input className="search" type="text" placeholder="Search products" />


        <div className="nav-right">
          <Link to="/wishlist" className="logos" onClick={() => setMenuOpen(false)}>❤</Link>
          <Link to="/cart" className="logos cart-icon" onClick={() => setMenuOpen(false)}>
            🛒
            <span className="badges">{cartCount}</span>
          </Link>
           <Link to="/account" className="account-btn" onClick={() => setMenuOpen(false)}>My account</Link>
          {/* <Link to="/login" className="account-btn" onClick={() => setMenuOpen(false)}>My account</Link> */}
          
        </div>
      </div>
    </header>
  );
}