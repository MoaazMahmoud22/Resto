import React, { useEffect, useState } from "react";
import { food, foods } from "../../data/food";
import FoodCard from "../cards/foodCard";
import { Link } from "react-router-dom";

function FoodGrid() {
  const [foodsArr, setFoodsArr] = useState(foods);
  const [activeSec, setActiveSec] = useState("All Category");
  const shuffle = (array: food[]) => {
    return array.sort(() => Math.random() - 0.5);
  };
  useEffect(() => {
    setFoodsArr((prev) => shuffle(prev));
  }, [activeSec]);

  const handleActiveSection = (e: React.MouseEvent<HTMLElement>) => {
    setActiveSec((e.target as HTMLElement)?.innerText);
  };

  return (
    <section className="traditional s-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="traditional-head">
              <h2>Some Traditional Food Based on Location</h2>
            </div>
          </div>
        </div>

        {/* <!-- Grid Tab --> */}
        <div className="tab-pane fade show in active" id="grid" role="tabpanel">
          {/* <!-- Filter Title --> */}
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <ul className="shaf-filter course-filter j ">
                <li
                  className={activeSec === "All Category" ? "active" : ""}
                  onClick={(e) => handleActiveSection(e)}
                >
                  All Category
                </li>
                <li
                  className={activeSec === "Thai Cuisine" ? "active" : ""}
                  onClick={(e) => handleActiveSection(e)}
                >
                  Thai Cuisine
                </li>
                <li
                  className={activeSec === "Mexican" ? "active" : ""}
                  onClick={(e) => handleActiveSection(e)}
                >
                  Mexican
                </li>
                <li
                  className={activeSec === "Italian" ? "active" : ""}
                  onClick={(e) => handleActiveSection(e)}
                >
                  Italian
                </li>
                <li
                  className={activeSec === "Vegetarian" ? "active" : ""}
                  onClick={(e) => handleActiveSection(e)}
                >
                  Vegetarian
                </li>
                <li
                  className={activeSec === "Junk Food" ? "active" : ""}
                  onClick={(e) => handleActiveSection(e)}
                >
                  Junk Food
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Filter Title --> */}

          {/* <!-- Filter Content --> */}
          <div className="row shafull-container">
            {foodsArr?.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                className="col-lg-4 col-md-6"
              />
            ))}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="traditional-btn">
                <Link to="/all-food" className="main-btn-four">
                  Browser All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodGrid;
