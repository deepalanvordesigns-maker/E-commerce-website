import { useNavigate, Link } from "react-router-dom";
import "./Account.css";

export default function Account() {
  const navigate = useNavigate();

  const rawUser = localStorage.getItem("user");
  const user = rawUser && rawUser !== "undefined" ? JSON.parse(rawUser) : null;

  if (!user) {
    return (
      <div className="acc-page">
        <div className="acc-box">
          <p>You're not logged in.</p>
          <Link to="/login" className="acc-btn">Log In</Link>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="acc-page">
      <div className="acc-box">
        <div className="acc-avatar">{user.name?.charAt(0).toUpperCase()}</div>
        <h2>{user.name}</h2>
        <p className="acc-email">{user.email}</p>

        <div className="acc-links">
          <Link to="/orders" className="acc-link">📦 My Orders</Link>
          <Link to="/cart" className="acc-link">🛒 My Cart</Link>
        </div>

        <button className="acc-logout" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}