import FilterMenu from "./filterMenu";
import { Outlet } from "react-router-dom";
import Pagination from "./pagination";

function FoodList({ children }: { children: React.ReactNode }) {
  return (
    <section className="food-details">
      <div className="container">
        <FilterMenu />
        {children}
        <Outlet />
        <Pagination />
      </div>
    </section>
  );
}

export default FoodList;
