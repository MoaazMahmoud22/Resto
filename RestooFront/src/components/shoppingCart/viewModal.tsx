import image from "../../assets/images/thumb/featured-1.png";

function ViewModal({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  return (
    <div
      className="modal fade show modal-open-animation"
      style={{ display: isOpen ? "block" : "none" }}
      id="exampleModal"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          background: "rgba(0,0,0,0.5)",
        }}
        onClick={close}
      ></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn-close" onClick={close}></button>
          <div className="modal-body">
            <div className="featured-item  ">
              <div className="featured-item-img">
                <img src={image} className="w-100" alt="featured-thumb" />

                <div className="featured-item-img-overlay">
                  <div className="featured-item-img-over-text">
                    <div className="right-text">
                      <h5> 4.7(2.5K) </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-body-text">
              <h3>Eggplant Baked with Cheese </h3>
              <h5>$30.00</h5>
            </div>

            <div className="modal-body-item-box">
              <div className="modal-body-item-box-text">
                <p>
                  Select Addon <span>(Optional)</span>
                </p>
              </div>

              <div className="together-box-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Chicken Leg ($30.00)
                  </label>
                </div>

                <div className="form-check-btn">
                  <div className="form-check-btn">
                    <div className="grid">
                      <button className="btn btn-minus ">
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <div className="column product-qty">0</div>
                      <button className="btn btn-plus ">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="together-box-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault1"
                  >
                    Drinks ($25.00)
                  </label>
                </div>

                <div className="form-check-btn">
                  <div className="form-check-btn">
                    <div className="grid">
                      <button className="btn btn-minus ">
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <div className="column product-qty">0</div>
                      <button className="btn btn-plus ">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="together-box-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault2"
                  >
                    Nan ($10.00)
                  </label>
                </div>

                <div className="form-check-btn">
                  <div className="form-check-btn">
                    <div className="grid">
                      <button className="btn btn-minus ">
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <div className="column product-qty">0</div>
                      <button className="btn btn-plus ">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="together-box-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault3"
                  >
                    Extra Chess ($5.00)
                  </label>
                </div>

                <div className="form-check-btn">
                  <div className="form-check-btn">
                    <div className="grid">
                      <button className="btn btn-minus ">
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <div className="column product-qty">0</div>
                      <button className="btn btn-plus ">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="together-box-inner-btn">
                <div className="modal-main">
                  <div className="grid-text">
                    <p>Select Quantity</p>
                  </div>
                  <div className="grid">
                    <button className="btn btn-minus ">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <div className="column product-qty">2</div>
                    <button className="btn btn-plus ">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>

                <div className="modal-main modal-main-two ">
                  <div className="grid-text">
                    <p>Select Size</p>
                  </div>
                  <div className="together-box-inner-btn-dropdown">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Small{" "}
                        <span>
                          {" "}
                          $40
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 10L12 14L17 10"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            xl
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            xxl
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            xxxl
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="together-box-inner-btn-btm">
                <a href="#" className="main-btn-six" tabIndex={-1}>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        d="M14 8L14 13"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M16.5 10.5L11.5 10.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewModal;
