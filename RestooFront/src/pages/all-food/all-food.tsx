import Header from "../../components/header/index";

import AppPart from "../../components/app-part";
import Footer from "../../components/footer";
import logo from "../../assets/images/logo/footer-logo.svg";
import Breadcrumbs from "../../components/breadcrumbs";
import FoodList from "../../components/foodList";
import PopularFood from "../../components/popularFood";


function AllFood({ children }: { children?: React.ReactElement }) {
  return (
    
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="All Food Menu" address="Food Details" />
        {/* <FoodList children={children} /> */}
        <PopularFood/>
    
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default AllFood;
