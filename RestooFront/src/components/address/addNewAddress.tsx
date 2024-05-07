
function AddNewAddress() {
  return (
    <div className="col-lg-8 col-md-6 ">
      <div className="row">
        <div className="col-lg-12">
          <div className="shopping-cart-new-address-top-item">
            <div className="shopping-cart-new-address-taitel"></div>

            <div className="shopping-cart-new-address-top-btn">
            
            </div>
          </div>

          <div className="shopping-cart-new-address-from">
            <div className="shopping-cart-new-address-from-item">
              <div className="shopping-cart-new-address-from-inner">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput9"
                  placeholder="First Name"
                />
              </div>
              <div className="shopping-cart-new-address-from-inner">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput10"
                  placeholder="Last  Name"
                />
              </div>
            </div>
            <div className="shopping-cart-new-address-from-item">
              <div className="shopping-cart-new-address-from-inner">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  email
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>mostafamahmoud@gmail.com</option>
                </select>
              </div>
              <div className="shopping-cart-new-address-from-inner">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" id="date" />
              </div>
            </div>
            <div className="shopping-cart-new-address-from-item">
              <div className="shopping-cart-new-address-from-inner">
                <label className="form-label">Time</label>
                <input type="time" className="form-control" id="time" />
              </div>

              <div className="shopping-cart-new-address-from-inner">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Number of guests
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput11"
                  placeholder="2"
                />
              </div>
            </div>
            <div className="from-inner">
              <label className="form-label">Special Requests</label>
              <textarea
                className="form-control"
                id="specialRequests"
                rows={5}
                placeholder="Enter any special requests or comments"
              ></textarea>
            </div>

            <div className="shopping-cart-new-address-from-btn">
              <div className="check-btn-two">
                <a href="#" className="main-btn-four">
                  ReserveTable
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewAddress;
