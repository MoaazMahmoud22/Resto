import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo-header.svg";
import Offcanvas from "./offcanvas";
import { useState } from "react";

function MobileNav() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <>
      <header className="mobile-header">
        <div className="container-full">
          <div className="mobile-header__container">
            <div className="p-left">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="p-right">
              <button id="nav-opn-btn" onClick={() => setOffcanvas(true)}>
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas isActive={offcanvas} close={() => setOffcanvas(false)} />
    </>
  );
}

export default MobileNav;
