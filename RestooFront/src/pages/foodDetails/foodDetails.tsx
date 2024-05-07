import logo from "../../assets/images/logo/footer-logo.svg";
import Header from "../../components/header/index";
import Breadcrumbs from "../../components/breadcrumbs";
import AppPart from "../../components/app-part";
import Footer from "../../components/footer";
import FoodDescriptionSec from "../../components/foodDetails";
import RecentFood from "../../components/foodDetails/recentFood";

function FoodDetails() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="Food Details" address="Food Details" />
        <FoodDescriptionSec />
        <RecentFood />
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default FoodDetails;
