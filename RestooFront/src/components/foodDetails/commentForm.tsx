function CommentForm() {
  return (
    <div className="sent-review">
      <div className="comment-from-box-main">
        <div className="comment-from-box-text">
          <h3>Sent Review</h3>

          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>

        <div className="from-box">
          <div className="from-item">
            <div className="from-inner-df">
              <div className="from-inner">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput6"
                  placeholder="Don Norman"
                />
              </div>
              <div className="from-inner from-inner-rate ">
                <div className="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label htmlFor="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label htmlFor="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label htmlFor="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label htmlFor="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label htmlFor="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>
            </div>

            <div className="from-inner-two  ">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={5}
                placeholder="Write Review"
              ></textarea>
            </div>

            <div className="from-btn">
              <a href="#" className="main-btn-four">
                Submit Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
