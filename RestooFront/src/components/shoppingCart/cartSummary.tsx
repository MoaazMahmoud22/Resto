import foodImg1 from "../../assets/images/small/cart-1.png";
import { Link } from "react-router-dom";

function CartSummary() {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="cart-summary-box">
        <div className="cart-summary-box-text">
          <h3>Cart Summary</h3>
        </div>

        <div className="cart-summary-box-top-btn">
          <a href="#">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 19V7M14 19H16M14 19H9M14 7C14 4.79086 12.2091 3 10 3H6C3.79086 3 2 4.79086 2 7V15C2 16.8652 3.27667 18.4323 5.00384 18.875M14 7H17.2091C17.7172 7 18.2063 7.1934 18.577 7.54093L21.3679 10.1574C21.7712 10.5355 22 11.0636 22 11.6165V17C22 18.1046 21.1046 19 20 19M20 19C20 20.1046 19.1046 21 18 21C16.8954 21 16 20.1046 16 19M20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19M9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 18.958 5.00129 18.9163 5.00384 18.875M9 19C9 17.8954 8.10457 17 7 17C5.93742 17 5.06838 17.8286 5.00384 18.875"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 8L8 8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12L6 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Delivery
          </a>
          <a href="#" className="top-btn-two">
            <span>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1176 7.85603C14.1176 9.01319 13.0232 9.95126 11.6732 9.95126C10.3231 9.95126 9.22873 9.01319 9.22873 7.85603C9.22873 6.69886 10.3231 5.76079 11.6732 5.76079C13.0232 5.76079 14.1176 6.69886 14.1176 7.85603Z"
                  strokeWidth="1.5"
                />
                <path
                  d="M19.0065 7.85603C19.0065 11.3275 14.1176 16.237 11.6732 16.237C9.22873 16.237 4.33984 11.3275 4.33984 7.85603C4.33984 4.38452 7.62309 1.57031 11.6732 1.57031C15.7233 1.57031 19.0065 4.38452 19.0065 7.85603Z"
                  strokeWidth="1.5"
                />
                <path
                  d="M15.3412 14.1406H16.7181C18.169 14.1406 19.545 14.693 20.4738 15.6484L21.7779 16.9898C23.1047 18.3544 21.9725 20.4263 19.9 20.4263H3.44912C1.37662 20.4263 0.244465 18.3544 1.57124 16.9898L2.87532 15.6484C3.80418 14.693 5.18015 14.1406 6.63107 14.1406H8.0079"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Pick Up
          </a>
          <a href="#" className="top-btn-two">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.81965 22H16.1804C18.4891 22 20.3607 20.214 20.3607 18.0108V13.133C20.3607 12.4248 20.6555 11.7456 21.1803 11.2448C22.3962 10.0845 22.2381 8.16205 20.8475 7.19691L14.4588 2.763C12.9929 1.74567 11.0071 1.74567 9.54124 2.763L3.15251 7.19692C1.76187 8.16205 1.60381 10.0845 2.81969 11.2448C3.34447 11.7456 3.6393 12.4248 3.6393 13.133V18.0108C3.6393 20.214 5.5109 22 7.81965 22Z"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.3047 15.6052C16.3047 17.8875 14.1524 21.8039 12 21.8039C9.84766 21.8039 7.69531 17.8875 7.69531 15.6052C7.69531 13.3228 9.62259 11.4727 12 11.4727C14.3774 11.4727 16.3047 13.3228 16.3047 15.6052Z"
                  strokeWidth="1.5"
                />
                <path
                  d="M13.2914 15.3469C13.2914 16.0601 12.7132 16.6383 12 16.6383C11.2868 16.6383 10.7086 16.0601 10.7086 15.3469C10.7086 14.6337 11.2868 14.0555 12 14.0555C12.7132 14.0555 13.2914 14.6337 13.2914 15.3469Z"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            In Restaurant
          </a>
        </div>

        <div className="cart-summary-box-item-top">
          <div className="cart-summary-box-item">
            <a href="#">
              <div className="cart-summary-box-inner">
                <div className="cart-summary-box-img">
                  <img src={foodImg1} alt="img" />
                </div>
                <div className="cart-summary-box-text-two">
                  <h4>Eggplant Baked with Cheese</h4>
                  <h5>
                    <span>Size :</span> Small
                  </h5>
                  <p>$120</p>
                </div>
              </div>
            </a>
          </div>
          <div className="cart-summary-box-item">
            <a href="#">
              <div className="cart-summary-box-inner">
                <div className="cart-summary-box-img">
                  <img src={foodImg1} alt="img" />
                </div>
                <div className="cart-summary-box-text-two">
                  <h4>Eggplant Baked with Cheese</h4>
                  <h5>
                    <span>Size :</span> Small
                  </h5>
                  <p>$120</p>
                </div>
              </div>
            </a>
          </div>
          <div className="cart-summary-box-item">
            <a href="#">
              <div className="cart-summary-box-inner">
                <div className="cart-summary-box-img">
                  <img src={foodImg1} alt="img" />
                </div>
                <div className="cart-summary-box-text-two">
                  <h4>Eggplant Baked with Cheese</h4>
                  <h5>
                    <span>Size :</span> Small
                  </h5>
                  <p>$120</p>
                </div>
              </div>
            </a>
          </div>
          <div className="cart-summary-box-item">
            <a href="#">
              <div className="cart-summary-box-inner">
                <div className="cart-summary-box-img">
                  <img src={foodImg1} alt="img" />
                </div>
                <div className="cart-summary-box-text-two">
                  <h4>Eggplant Baked with Cheese</h4>
                  <h5>
                    <span>Size :</span> Small
                  </h5>
                  <p>$120</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="apply-coupon">
          <div className="apply-coupon-taitel">
            <h4>Apply Coupon</h4>
          </div>

          <div className="apply-coupon-btn">
            <div className="apply-coupon-form">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput6"
                placeholder="Coupon"
              />
            </div>
            <div className="apply-coupon-btn-two">
              <a href="#">Apply</a>
            </div>
          </div>

          <div className="apply-coupon-box">
            <div className="shopping-cart-list">
              <div className="shopping-cart-list-text">
                <h4>Subtotal</h4>
                <a href="#">$120</a>
              </div>
              <div className="shopping-cart-list-text">
                <h4>Discount</h4>
                <a href="#">-$12.00</a>
              </div>
              <div className="shopping-cart-list-text">
                <h4>Delivery Charges</h4>
                <a href="#">+$10.00</a>
              </div>
            </div>
            <div className="shopping-cart-list shopping-cart-list-btm ">
              <div className="shopping-cart-list-text">
                <h4>Subtotal</h4>
                <a href="#">$120</a>
              </div>
            </div>

            <div className="shopping-cart-list-btn">
              <Link to="/shopping-cart-address" className="main-btn-six">
                Place Order
                <span>
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 9L13 5M13 5L9 1M13 5L1 5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
