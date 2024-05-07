import Header from "../components/header/index";
import Hero from "../components/heros";
import Categories from "../components/categories";
import Promotions from "../components/promotions";
import Process from "../components/Process";
import PopularFood from "../components/popularFood";

import AppPart from "../components/app-part";
import Footer from "../components/footer";
import logo from "../assets/images/logo/footer-logo.svg";



function Home() {
  return (
    <div>
      <Header className="header-two" logo={logo} />
      <main>
        <Hero />
        <Categories />
        <Promotions />
        <PopularFood />
        {/* <FoodGrid /> */}

        <Process />
        
        {/* <Testimonials /> */}

        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
