import googlePlay from "../../assets/images/icon/Google_Play.png";
import appStore from "../../assets/images/icon/apple.png";
import restaurantImg from "../../assets/images/thumb/restaurant.png";

function AppPart() {
  return (
    <section className="restaurant">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="restaurant-taitel">
              <h2>Find out Better Restaurant Food Experience</h2>

              <h4>
                We've done it carefully and simply. Combined with the
                ingredients makes for beautiful landings.
              </h4>
            </div>

            <div className="restaurant-taitel-btn">
              <a href="#">
                <span>
                  <img src={googlePlay} alt="icon" />
                </span>
                Google Play
              </a>
              <a href="#" className=" restaurant-taitel-btn-two">
                <span>
                  <img src={appStore} alt="icon" />
                </span>
                App Store
              </a>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="restaurant-img-main">
              <div className="restaurant-img">
                <img src={restaurantImg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppPart;
