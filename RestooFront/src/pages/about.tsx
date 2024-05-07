import Header from "../components/header/index";
import Breadcrumbs from "../components/breadcrumbs";
import Faq from "../components/faq";
import AppPart from "../components/app-part";
import Footer from "../components/footer";
import logo from "../assets/images/logo/footer-logo.svg";
import AboutSec from "../components/about/aboutSec";
import Process from "../components/Process";
import PopularFood from "../components/popularFood";
import Testimonials from "../components/testimonials";

function About() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="About us" address="About us" />
        <AboutSec />
        <Process />
        {/* <PopularFood /> */}
        <Testimonials />
        <Faq />
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default About;
