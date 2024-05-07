import CopyRight from "./copyRight";
import logo from "../../assets/images/logo/footer-logo.svg";
import smsIcon from "../../assets/images/icon/sms.png";
import visaIcon from "../../assets/images/small/Visa.png";
import amexIcon from "../../assets/images/small/Amex.png";
import paypalIcon from "../../assets/images/small/PayPal.png";
import mastercardIcon from "../../assets/images/small/Mastercard.png";
import googlePayIcon from "../../assets/images/small/GooglePay.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12" data-aos="fade-right">
              <div className="footer-logo">
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
              </div>

              <div className="footer-text">
                <h4>
                  At ReservQ, we invite you to embark on a journey of taste and
                  delight.Our tables are more than just places.
                </h4>
              </div>

              <div className="footer-icon">
                <div className="icon">
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/" target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mol-md-12 ">
              <div className="row">
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div className="quick-line-item">
                    <div className="quick-line-item-head">
                      <h3>Quick Link</h3>
                    </div>

                    <div className="quick-line-menu">
                      <ul>
                        <li>
                          <Link to="/dashboard">My Account</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/contact">Store Locator</Link>
                        </li>
                        <li>
                          <Link to="/contact">Delivery</Link>
                        </li>
                        <li>
                          <Link to="/contact">Pickup</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="quick-line-item">
                    <div className="quick-line-item-head">
                      <h3>Terms & Privacy</h3>
                    </div>

                    <div className="quick-line-menu">
                      <ul>
                        <li>
                          <Link to="/trust-safety">Trust & Safety</Link>
                        </li>
                        <li>
                          <Link to="/terms-service">Terms of Service</Link>
                        </li>
                        <li>
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <div className="quick-line-item">
                    <div className="quick-line-item-head">
                      <h3>Subscribe our Newsletter</h3>
                    </div>

                    <div className="quick-line-btn">
                      <div className="icon">
                        <img src={smsIcon} alt="icon" />
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput6"
                        placeholder="Your email"
                      />
                      <Link to="#" className="main-btn-four">
                        Subscribe
                      </Link>
                    </div>

                    <div className="quick-line-btn-text">
                      <h6>We accept Payment methods:</h6>
                    </div>

                    <div className="quick-line-btn-img">
                      <a href="#">
                        <img src={visaIcon} alt="img" />
                      </a>
                      <a href="#">
                        <img src={amexIcon} alt="img" />
                      </a>
                      <a href="#">
                        <img src={paypalIcon} alt="img" />
                      </a>
                      <a href="#">
                        <img src={mastercardIcon} alt="img" />
                      </a>
                      <a href="#">
                        <img src={googlePayIcon} alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CopyRight />
    </>
  );
}

export default Footer;
