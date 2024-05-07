import bannerImg1 from "../../assets/images/thumb/PromoBanner-1.png";
import bannerImg2 from "../../assets/images/thumb/PromoBanner-2.png";
import { Link } from "react-router-dom";

function PromotionsV2() {
  return (
    <section className="promotions s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="promotions-head mb-48px">
              <h2>Explore Our Irresistible Promotions!</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="promotions-img">
              <Link to="/foods-details">
                <img src={bannerImg1} className="w-100" alt="thumb" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="promotions-img">
              <Link to="/foods-details">
                <img src={bannerImg2} className="w-100" alt="thumb" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionsV2;
