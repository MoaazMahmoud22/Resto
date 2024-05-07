import { gridFoods } from "../../data/foodView";
import FoodCard from "../../components/cards/foodCard";

function Grid() {
  return (
    <div
      className="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <div className="row">
        {gridFoods?.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            className="col-lg-4 col-md-6 featured-item-mt "
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
