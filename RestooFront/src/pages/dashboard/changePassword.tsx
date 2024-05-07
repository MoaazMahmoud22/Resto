function ChangePassword() {
  return (
    <div className="col-lg-12">
      <div className="dashboard-edit-profile-from">
        <div className="shopping-cart-new-address-from">
          <div className="shopping-cart-new-address-from-item">
            <div className="shopping-cart-new-address-from-inner">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Current Password
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput06"
                placeholder="Type you password"
              />
            </div>
          </div>
          <div className="shopping-cart-new-address-from-item">
            <div className="shopping-cart-new-address-from-inner">
              <label className="form-label">New password</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput14"
                placeholder="Type you password"
              />
            </div>
            <div className="shopping-cart-new-address-from-inner">
              <label className="form-label">Confirm Password</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput08"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="change-passowerd-btn  ">
            <a href="#" className="main-btn-four">
              Save now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
