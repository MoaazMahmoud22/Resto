import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./cartItem";
import cartImg from "../../assets/images/small/my-cart.png";

function HeaderCart() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="love cart">
      <div className="click" onClick={() => setIsOpen((prev) => !prev)}></div>
      <span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99967 4.66536H20.9997C23.577 4.66536 25.6663 6.7547 25.6663 9.33203V15.1654C25.6663 17.7427 23.577 19.832 20.9997 19.832H11.6663C9.08901 19.832 6.99967 17.7427 6.99967 15.1654V4.66536ZM6.99967 4.66536C6.99967 3.3767 5.95501 2.33203 4.66634 2.33203H2.33301"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.833 23.918C12.833 24.8845 12.0495 25.668 11.083 25.668C10.1165 25.668 9.33301 24.8845 9.33301 23.918C9.33301 22.9515 10.1165 22.168 11.083 22.168C12.0495 22.168 12.833 22.9515 12.833 23.918Z"
            strokeWidth="1.5"
          />
          <path
            d="M23.333 23.918C23.333 24.8845 22.5495 25.668 21.583 25.668C20.6165 25.668 19.833 24.8845 19.833 23.918C19.833 22.9515 20.6165 22.168 21.583 22.168C22.5495 22.168 23.333 22.9515 23.333 23.918Z"
            strokeWidth="1.5"
          />
          <path
            d="M16.333 9.33203L16.333 15.1654"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.2503 12.25L13.417 12.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <div
        className={`cart-dropdown header-dropdown ${
          isOpen ? "active-dropdown" : ""
        }`}
      >
        <div className="cart-dropdown-text">
          <div className="text">
            <h3>My Cart</h3>
          </div>

          <div className="cart-dropdown-btn">
            <button
              type="button"
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.24309 0.757865L0.757812 9.24315M9.24309 9.24309L0.757812 0.757812"
                    stroke="#9EA3AE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="cart-dropdown-btn-two">
          <Link to="#" className=" cart-btn-two ">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6665 15.8333V5.83333M11.6665 15.8333H13.3332M11.6665 15.8333H7.49984M11.6665 5.83333C11.6665 3.99238 10.1741 2.5 8.33317 2.5H4.99984C3.15889 2.5 1.6665 3.99238 1.6665 5.83333V12.5C1.6665 14.0544 2.73039 15.3602 4.16971 15.7291M11.6665 5.83333H14.3408C14.7642 5.83333 15.1718 5.9945 15.4807 6.2841L17.8064 8.46449C18.1425 8.77957 18.3332 9.2197 18.3332 9.68039V14.1667C18.3332 15.0871 17.587 15.8333 16.6665 15.8333M16.6665 15.8333C16.6665 16.7538 15.9203 17.5 14.9998 17.5C14.0794 17.5 13.3332 16.7538 13.3332 15.8333M16.6665 15.8333C16.6665 14.9129 15.9203 14.1667 14.9998 14.1667C14.0794 14.1667 13.3332 14.9129 13.3332 15.8333M7.49984 15.8333C7.49984 16.7538 6.75365 17.5 5.83317 17.5C4.9127 17.5 4.1665 16.7538 4.1665 15.8333C4.1665 15.7983 4.16758 15.7636 4.16971 15.7291M7.49984 15.8333C7.49984 14.9129 6.75365 14.1667 5.83317 14.1667C4.94769 14.1667 4.22349 14.8572 4.16971 15.7291"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.33317 6.66797L6.6665 6.66797"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33333 10L5 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Delivery
          </Link>
          <Link to="#" className=" cart-btn ">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6665 15.8333V5.83333M11.6665 15.8333H13.3332M11.6665 15.8333H7.49984M11.6665 5.83333C11.6665 3.99238 10.1741 2.5 8.33317 2.5H4.99984C3.15889 2.5 1.6665 3.99238 1.6665 5.83333V12.5C1.6665 14.0544 2.73039 15.3602 4.16971 15.7291M11.6665 5.83333H14.3408C14.7642 5.83333 15.1718 5.9945 15.4807 6.2841L17.8064 8.46449C18.1425 8.77957 18.3332 9.2197 18.3332 9.68039V14.1667C18.3332 15.0871 17.587 15.8333 16.6665 15.8333M16.6665 15.8333C16.6665 16.7538 15.9203 17.5 14.9998 17.5C14.0794 17.5 13.3332 16.7538 13.3332 15.8333M16.6665 15.8333C16.6665 14.9129 15.9203 14.1667 14.9998 14.1667C14.0794 14.1667 13.3332 14.9129 13.3332 15.8333M7.49984 15.8333C7.49984 16.7538 6.75365 17.5 5.83317 17.5C4.9127 17.5 4.1665 16.7538 4.1665 15.8333C4.1665 15.7983 4.16758 15.7636 4.16971 15.7291M7.49984 15.8333C7.49984 14.9129 6.75365 14.1667 5.83317 14.1667C4.94769 14.1667 4.22349 14.8572 4.16971 15.7291"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.33317 6.66797L6.6665 6.66797"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33333 10L5 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Delivery
          </Link>
          <Link to="#" className=" cart-btn ">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6665 15.8333V5.83333M11.6665 15.8333H13.3332M11.6665 15.8333H7.49984M11.6665 5.83333C11.6665 3.99238 10.1741 2.5 8.33317 2.5H4.99984C3.15889 2.5 1.6665 3.99238 1.6665 5.83333V12.5C1.6665 14.0544 2.73039 15.3602 4.16971 15.7291M11.6665 5.83333H14.3408C14.7642 5.83333 15.1718 5.9945 15.4807 6.2841L17.8064 8.46449C18.1425 8.77957 18.3332 9.2197 18.3332 9.68039V14.1667C18.3332 15.0871 17.587 15.8333 16.6665 15.8333M16.6665 15.8333C16.6665 16.7538 15.9203 17.5 14.9998 17.5C14.0794 17.5 13.3332 16.7538 13.3332 15.8333M16.6665 15.8333C16.6665 14.9129 15.9203 14.1667 14.9998 14.1667C14.0794 14.1667 13.3332 14.9129 13.3332 15.8333M7.49984 15.8333C7.49984 16.7538 6.75365 17.5 5.83317 17.5C4.9127 17.5 4.1665 16.7538 4.1665 15.8333C4.1665 15.7983 4.16758 15.7636 4.16971 15.7291M7.49984 15.8333C7.49984 14.9129 6.75365 14.1667 5.83317 14.1667C4.94769 14.1667 4.22349 14.8572 4.16971 15.7291"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.33317 6.66797L6.6665 6.66797"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33333 10L5 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Delivery
          </Link>
        </div>
        <CartItem
          img={cartImg}
          title="Baked Chicken Wings & Legs"
          price="30.00"
        />
        <CartItem
          img={cartImg}
          title="Baked Chicken Wings & Legs"
          price="30.00"
        />
        <CartItem
          img={cartImg}
          title="Baked Chicken Wings & Legs"
          price="30.00"
        />
        <CartItem
          img={cartImg}
          title="Baked Chicken Wings & Legs"
          price="30.00"
        />
        <div className="cart-dropdown-sub-total">
          <div className="cart-dropdown-sub-total-item">
            <div className="text">
              <h3>Subtotal</h3>
            </div>
            <div className="text">
              <h3>
                <a href="#">$30</a>
              </h3>
            </div>
          </div>

          <div className="cart-dropdown-sub-total-btn">
            <Link to="/shopping-cart" className="main-btn-four">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCart;
