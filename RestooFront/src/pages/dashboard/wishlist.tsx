import { popularFoods } from "../../data/food";
import PopularFoodCard from "../../components/cards/popularFoodCard";

function Wishlist() {
  return (
    <div className="row">
      {popularFoods?.map((food) => (
        <PopularFoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}

export default Wishlist;
