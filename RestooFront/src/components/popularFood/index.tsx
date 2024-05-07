import { popularFoods } from "../../data/food";
import PopularFoodCard from "../cards/popularFoodCard";

import MealItem from '../MealItem.tsx'; // Update MealItem import to .tsx
import  useHttp  from '../../hooks/useHttp'; // No change needed
import Error from '../Error.tsx'; // Update Error import to .tsx

interface Meal {
  foodId: string;
  foodName: string;
  image: string;
  description: string;
  price: number;
}

interface HttpResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}
const requestConfig: {} = {};

function PopularFood() {
  const { data: loadedMeals, isLoading, error }: HttpResult<Meal[]> = useHttp<Meal[]>(
    'http://localhost:9090/auth/food/all',
    requestConfig,
    []
  );

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <section className="popular s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="popular-head">
              <h2>Our Food</h2>
            </div>
          </div>
        </div>

        <div className="row popular-item-box-mt">
          {/* {popularFoods?.map((food) => (
            <PopularFoodCard key={food.id} food={food} />
          ))} */}
          {loadedMeals?.map((food) => (
            <PopularFoodCard key={food.foodId} food={food} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularFood;
