import img1 from "../../assets/images/small/address-cart-1.png";
import img2 from "../../assets/images/small/address-cart-2.png";
import img3 from "../../assets/images/small/address-cart-3.png";
import img4 from "../../assets/images/small/address-cart-4.png";
import img5 from "../../assets/images/small/address-cart-5.png";
import img6 from "../../assets/images/small/address-cart-6.png";
import img7 from "../../assets/images/small/address-cart-7.png";
import img8 from "../../assets/images/small/address-cart-8.png";

const Check = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9998 21.9997C17.0749 21.9997 21.9997 17.0749 21.9997 10.9998C21.9997 4.9248 17.0749 0 10.9998 0C4.9248 0 0 4.9248 0 10.9998C0 17.0749 4.9248 21.9997 10.9998 21.9997Z"
      fill="#F01543"
    />
    <path
      d="M10.1649 14.0454C9.87404 14.05 9.59324 13.9393 9.38386 13.7374L6.8759 11.2735C6.66731 11.0678 6.54897 10.7877 6.5469 10.4948C6.54484 10.2018 6.65923 9.92008 6.8649 9.71149C7.07057 9.5029 7.35068 9.38455 7.64361 9.38249C7.93654 9.38043 8.21829 9.49481 8.42688 9.70049L10.1649 11.4055L14.6748 7.00552C14.7781 6.90368 14.9004 6.82319 15.0348 6.76862C15.1692 6.71406 15.313 6.68651 15.4581 6.68753C15.6031 6.68855 15.7465 6.71813 15.8801 6.77458C16.0137 6.83103 16.1349 6.91324 16.2368 7.01652C16.3386 7.11981 16.4191 7.24214 16.4737 7.37653C16.5282 7.51092 16.5558 7.65475 16.5548 7.79979C16.5537 7.94483 16.5242 8.08826 16.4677 8.22187C16.4113 8.35548 16.3291 8.47666 16.2258 8.5785L10.9348 13.7814C10.7214 13.9646 10.4458 14.0591 10.1649 14.0454Z"
      fill="#EDEBEA"
    />
  </svg>
);

function PaymentOptions() {
  return (
    <div className="row shopping-payment-top ">
      <div className="col-lg-6">
        <div className="shopping-payment-btn">
          <a href="#">
            <span>
              <img src={img1} alt="img" />
            </span>
          </a>
          <div className="btn-two">
            <span>
              <Check />
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="shopping-payment-btn">
          <a href="#">
            <span>
              <img src={img2} alt="img" />
            </span>
          </a>
          <div className="btn-two">
            <span>
              <Check />
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 shopping-payment-btn-mt15px">
        <div className="shopping-payment-btn">
          <a href="#">
            <span>
              <img src={img3} alt="img" />
            </span>
          </a>
          <div className="btn-two">
            <span>
              <Check />
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 shopping-payment-btn-mt15px">
        <div className="shopping-payment-btn">
          <a href="#">
            <span>
              <img src={img4} alt="img" />
            </span>
          </a>
          <div className="btn-two">
            <span>
              <Check />
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 shopping-payment-btn-mt15px">
        <div className="shopping-payment-btn">
          <a href="#">
            <span>
              <img src={img5} alt="img" />
            </span>
          </a>
          <div className="btn-two">
            <span>
              <Check />
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 shopping-payment-btn-mt15px">
        <div className="shopping-payment-btn">
          <a href="#">
            <span>
              <img src={img6} alt="img" />
            </span>
          </a>
          <div className="btn-two">
            <span>
              <Check />
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 shopping-payment-btn-mt15px">
        <div className="shopping-payment-btn">
          <a href="#">
            <span>
              <img src={img7} alt="img" />
            </span>
          </a>
          <div className="btn-two">
            <span>
              <Check />
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 shopping-payment-btn-mt15px">
        <div className="shopping-payment-btn">
          <a href="#">
            <span>
              <img src={img8} alt="img" />
            </span>
          </a>
          <div className="btn-two">
            <span>
              <Check />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions;
