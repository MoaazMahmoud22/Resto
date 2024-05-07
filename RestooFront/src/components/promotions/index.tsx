import { Link } from "react-router-dom";
import img1 from "../../assets/images/thumb/PromoBanner-1.png";
import img2 from "../../assets/images/thumb/PromoBanner-2.png";

function Promotions() {
  return (
    <div className="promotions promotions-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="promotions-img promotions-img-two">
              <Link to="/foods-details">
                <img src={img2} className="w-100" alt="thumb" />
              </Link>
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className="promotions-img">
              <Link to="/foods-details">
                <img src={img1} className="w-100" alt="thumb" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotions;
