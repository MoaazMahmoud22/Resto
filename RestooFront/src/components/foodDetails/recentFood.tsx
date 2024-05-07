import { foods } from "../../data/food";
import FoodCard from "../cards/foodCard";

function RecentFood() {
  return (
    <section className="food-details food-details-two      ">
      <div className="container">
        <div className="row responsive-df">
          <div className="col-lg-12">
            <div className="recent-order-text">
              <h5>Recent Order</h5>
            </div>
          </div>
          {foods?.map(
            (food, index) =>
              index < 3 && (
                <FoodCard
                  key={food.id}
                  food={food}
                  className="col-lg-4 col-md-6"
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}

export default RecentFood;
