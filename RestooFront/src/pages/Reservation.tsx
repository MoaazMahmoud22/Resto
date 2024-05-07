import logo from "../assets/images/logo/footer-logo.svg";
import Header from "../components/header/index";
import Breadcrumbs from "../components/breadcrumbs";
import AppPart from "../components/app-part";
import Footer from "../components/footer";
import ReservationInfo from "../components/Reservation/ReservationInfo";
function ShoppingCartAddress() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        {/* <Breadcrumbs
          title="Shopping Cart Address"
          address="Shopping Cart Address"
        />
        <CartAddress /> */}
        {/* <Breadcrumbs title="Feedback" address="Feedback" /> */}
        <Breadcrumbs title="Reservation" address="Reservation" />

         
        <ReservationInfo />

        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default ShoppingCartAddress;
