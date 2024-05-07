import { listFoods } from "../../data/foodView";
import PopularFoodCard from "../../components/cards/popularFoodCard";

function List() {
  return (
    <div
      className="tab-pane fade active show"
      id="pills-contact"
      role="tabpanel"
      aria-labelledby="pills-contact-tab"
    >
      <div className="row popular-item-box-mt">
        {listFoods?.map((food) => (
          <PopularFoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default List;
