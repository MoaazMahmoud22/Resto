import CartSummary from "./cartSummary";

function ShoppingCartV2() {
  return (
    <section className="shopping-cart-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 ">
            <div className="delivery-time">
              <div className="delivery-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.095111337159!2d90.36396657592897!3d23.81521668628379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1cad41818e3%3A0x1dea3ec2f7a32054!2sQuomodoSoft!5e0!3m2!1sen!2sbd!4v1695898211446!5m2!1sen!2sbd"
                  width="380"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="delivery-from">
                <div className="delivery-text">
                  <h4>Perfect Time for Delivery</h4>
                </div>
                <div className="delivery-from-item">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Today</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="delivery-from-item delivery-from-item-two ">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Time Schedule
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>03:30 PM - 04:00 PM</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <CartSummary />
        </div>
      </div>
    </section>
  );
}

export default ShoppingCartV2;
