import { Link } from "react-router-dom";
import "./Navebar.css";

export default function Navebar() {
  return (
    
    <header className="navebar">
      <Link  className="logo">YourBrand</Link>

      <nav className="nav-links">
        <Link to="/" >Home</Link>
        <Link to="/products?cat=men">Men</Link>
        <Link to="/products?cat=women">Women</Link>
        <Link to="/products?cat=kids">Kids</Link>
        <Link to="/products?cat=offers">Offers</Link>
        <Link to="/products?cat=sports">Sports</Link>
      </nav>

      <input className="search" type="text" placeholder="Search products" />

      <div className="nav-right">
        <Link to="/wishlist" className="logos">❤</Link>
        <Link to="/cart" className="logos">🛒 <span className="badges">0</span></Link>
        <Link to="/login" className="account-btn">My Account</Link>
      </div>
    </header>


  );
}