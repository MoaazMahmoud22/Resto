import thumb from "../../assets/images/thumb/about-thumb.png";
import aboutIcon1 from "../../assets/images/icon/about-icon-1.png";
import aboutIcon2 from "../../assets/images/icon/about-icon-2.png";
import btnImg from "../../assets/images/small/Button.png";

function AboutSec() {
  return (
    <section className="about-us s-padding">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-6 ">
            <div className="about-us-img">
              <img src={thumb} className="w-100" alt="thumb" />

              <div className="about-us-img-btn-img">
                <div className="about-us-img-btn-img-main">
                  <img src={btnImg} alt="img" />
                  <div className="about-us-img-btn-img-overlay">
                    <h2>50</h2>
                    <span>Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 about-pl-45px" data-aos="fade-left">
            <div className="about-us-head">
              <h2>Our Story of food Culinary Excellence at ReservQ</h2>

              <h5>
                There are many variations of passages of Lorem Ipsum available,
                but the to a majority have suffered alteration in some form, by
                injected humour, or find randomised words which don't look even
                slightly believable.{" "}
              </h5>
            </div>

            <div className="about-us-text">
              <p>
                Over 20 years’ experience providing top quality house Booking
                rant and sell for your Amazing Dream & Make you Happy
              </p>
            </div>

            <div className="row about-mt-48px">
              <div className="col-lg-6 col-md-6">
                <div className="about-us-item">
                  <div className="icon">
                    <img src={aboutIcon1} alt="icon" />
                  </div>

                  <div className="text">
                    <h3>90k+ Customers</h3>

                    <p>Believe in our service & Care</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about-us-item about-us-item-resmt ">
                  <div className="icon">
                    <img src={aboutIcon2} alt="icon" />
                  </div>

                  <div className="text">
                    <h3>100+ Branch</h3>

                    <p>Food ready for occupancy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSec;
