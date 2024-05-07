function ReservationForm() {
  return (
    <div className="col-lg-7 col-md-6">
      <div className="contact-us-from">
        <form className="from">
          <div className="from-item">
            <div className="from-inner">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div className="from-inner">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="from-item from-item-two">
            <div className="from-inner">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="from-inner">
              <label className="form-label">Telephone</label>
              <input
                type="tel"
                className="form-control"
                id="telephone"
                placeholder="Enter your telephone number"
              />
            </div>
          </div>
          <div className="from-item from-item-two">
            <div className="from-inner">
              <label className="form-label">Date</label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="from-inner">
              <label className="form-label">Time</label>
              <input type="time" className="form-control" id="time" />
            </div>
          </div>
          <div className="from-item from-item-two">
            <div className="from-inner">
              <label htmlFor="guests" className="form-label">
                Number of Guests
              </label>
              <input
                type="number"
                className="form-control"
                id="guests"
                min="1"
                placeholder="Enter number of guests"
              />
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
          </div>
          <div className="check-btn-two">
            <a href="#" className="main-btn-four">
              Reserve Table
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
