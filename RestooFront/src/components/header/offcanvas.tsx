import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo-header.svg";

function Offcanvas({
  isActive,
  close,
}: {
  isActive: boolean;
  close: () => void;
}) {
  return (
    <aside id="offcanvas-nav" className={isActive ? "open" : ""}>
      <nav className="m-nav">
        <button id="nav-cls-btn" onClick={close}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="dropdown">
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/all-food">Menu</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/food-details">Food Details</Link>
          </li>
          <li>
            <Link to="/shopping-cart">Shopping Cart</Link>
          </li>
          <li>
            <Link to="/Reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/contact">Feedback</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Offcanvas;
