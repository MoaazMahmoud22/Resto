import { cartInfo } from "../../data/shoppingCarts";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

interface Meal {
  foodId: string;
  foodName: string;
  image: string;
  price: number;
  qyt: number;
  totalPrice: number;
}

function ShoppingCartSec() {
  const [userCart, setUserCart] = useLocalStorage<String>("userCart", "[]");

  return (
    <section className="shopping-cart">
      <div className="container">
        <div className="row ">
          <div className="col-lg-12">
            <div className="tabel-main">
              <table className="table  ">
                <thead>
                  <tr className="tabel-main-top">
                    <td className="details-control">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkboxNoLabel"
                        value=""
                        aria-label="..."
                      />
                    </td>
                    <th>
                      Food Image
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.332 2.31567V14.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M4.66602 14.3157V2.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </th>
                    <th>
                      Details
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.332 2.31567V14.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M4.66602 14.3157V2.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </th>
                    <th>
                      Price
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.332 2.31567V14.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M4.66602 14.3157V2.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </th>
                    <th>
                      Quantity
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.332 2.31567V14.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M4.66602 14.3157V2.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </th>
                    <th>
                      Total
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.332 2.31567V14.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M4.66602 14.3157V2.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </th>
                    <th className="details-control-two">
                      Action
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.332 2.31567V14.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M4.66602 14.3157V2.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {(JSON.parse(userCart as any) || [])?.map(
                    (cartItem: Meal, i: number) => (
                      <CartItem
                        key={i}
                        {...cartItem}
                        userCart={userCart}
                        setUserCart={setUserCart}
                        i={i}
                      />
                    )
                  )}
                </tbody>
              </table>

              {/* <!-- modal  --> */}
            </div>

            <div className="tabel-main-btn">
              <Link to="/shopping-cart-02" className="main-btn-six">
                Process to Checkout
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 16L18 12M18 12L14 8M18 12L6 12"
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
    </section>
  );
}

export default ShoppingCartSec;
