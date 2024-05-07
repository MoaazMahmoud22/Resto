
import NavButton from "./navButton";
import { Link } from "react-router-dom";
import HeaderCart from "./cart";
// import Loggedin from "./loggedin";
import logoImg from "../../assets/images/logo/logo-header.svg";
import useSticky from "../../hooks/useSticky";
import MobileNav from "./mobileNav";

function Header({ className, logo }: { className?: string; logo?: string }) {
  const isSticky = useSticky();
  const isLoggedIn = sessionStorage.getItem("token") !== null;
  return (
    <>
      <header className={`header ${className ? className : ""}`}>
        {/* <TopBar /> */}

        {/* menu part start */}

        <nav className={`menu-bg ${isSticky ? "nav-bg" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="nav-main">
                  <div className="nav-main">
                    <div className="logo">
                      <Link to="/">
                        <img src={logo ? logo : logoImg} alt="logo" />
                      </Link>
                    </div>

                    <div className="menu">
                      <ul>
                        <NavButton title="Home" link="/" />
                        <NavButton title="Menu" link="/all-food" />
                        <NavButton title="Order" link="/shopping-cart" />
                        <NavButton title="Reservation" link="/Reservation" />

                        {/* <NavButton title="Food Details" link="/food-details" /> */}
                        <NavButton title="About Us" link="/about" />

                        <NavButton title="Feedback" link="/contact" />

                        {/* <NavButton
                          title="Pages"
                          link="#"
                          subMenu={[
                            { link: "/about", title: "About Us" },
                            { link: "/contact", title: "Feedback" },

                            {
                              link: "/food-details",
                              title: "Food Details",
                            },
                            {
                              link: "/shopping-cart",
                              title: "Shopping Cart",
                            },

                            {
                              link: "/Reservation",
                              title: "Reservation",
                            },
                          ]}
                        /> */}
                        {/* <NavButton title="user dashboard" link="/dashboard" /> */}
                      </ul>
                    </div>
                  </div>
                  {isLoggedIn && (<div className="nav-btn-main">
                    {/* <NavSearch /> */}
                      
                    <div className="nav-btn-two">
                      <Link to="/dashboard2">
                        <div className="love">
                          <span>
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.833 7.584C21.1216 7.584 22.1663 8.62867 22.1663 9.91733M13.9997 6.65363L14.7989 5.834C17.285 3.2845 21.3157 3.2845 23.8018 5.834C26.2211 8.31503 26.2954 12.3134 23.9701 14.8872L17.2893 22.2819C15.5145 24.2463 12.4848 24.2463 10.71 22.2819L4.02926 14.8873C1.70392 12.3135 1.77826 8.31506 4.19757 5.83402C6.68365 3.28451 10.7144 3.28452 13.2005 5.83402L13.9997 6.65363Z"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                      </Link>
                      {/* <HeaderCart /> */}
                      {/* if user logged in show this  */}
                      {/* <Loggedin /> */}
                    </div>
                  </div>)}
                  

                  <div className="nav-login-btn-main">
                    {/* Conditionally render login and sign up links */}
                    {!isLoggedIn && (
                      <>
                        <Link to="/login" className="main-btn-four">
                          Log In
                        </Link>
                        <Link to="/sign-up" className="main-btn">
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNav />
    </>
  );
}

export default Header;
