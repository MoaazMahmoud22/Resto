import CartSummary from "../shoppingCart/cartSummary";
import AddressCom from "../address";
import PaymentOptions from "./paymentOptions";
import { Link } from "react-router-dom";

function CartAddress() {
  return (
    <section className="shopping-cart-two shopping-cart-address ">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ">
            <div className="shopping-cart-address-taitel">
              <h4>Addresses</h4>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="shopping-cart-address-btn-main">
                  <div className="shopping-cart-address-btn-top">
                    <a href="#" className="btn btn-primary active">
                      Billing Address
                    </a>
                    <a href="#" className="btn btn-primary">
                      Shipping Address
                    </a>
                  </div>
                  <Link
                    to="/shopping-cart-new-address"
                    className="add-new-btn "
                  >
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.9974 6.66797V13.3346M13.3307 10.0013H6.66406M9.9974 18.3346C14.5998 18.3346 18.3307 14.6037 18.3307 10.0013C18.3307 5.39893 14.5998 1.66797 9.9974 1.66797C5.39502 1.66797 1.66406 5.39893 1.66406 10.0013C1.66406 14.6037 5.39502 18.3346 9.9974 18.3346Z"
                          stroke="#000929"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Add new
                  </Link>
                </div>
              </div>
            </div>

            <div className="row">
              <AddressCom />
            </div>
            <PaymentOptions />
          </div>
          <CartSummary />
        </div>
      </div>
    </section>
  );
}

export default CartAddress;
