import FoodSlider from "./foodSlider";
import FoodDescription from "./foodDescription";
import SideBar from "./sideBar";

function FoodDescriptionSec() {
  return (
    <section className="food-details-section s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="food-details-head">
              <h2>Chicken skewers with Slices of Sweet </h2>
            </div>

            <FoodSlider />
            <FoodDescription />
          </div>
          <SideBar />
        </div>
      </div>
    </section>
  );
}

export default FoodDescriptionSec;
