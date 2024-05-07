import logo from "../assets/images/logo/footer-logo.svg";
import Header from "../components/header/index";
import Breadcrumbs from "../components/breadcrumbs";
import AppPart from "../components/app-part";
import Footer from "../components/footer";
import AddNewAddress from "../components/address/addNewAddress";
import CartSummary from "../components/shoppingCart/cartSummary";

function ShoppingCartNewAddress() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs
          title="Shopping Cart New Address"
          address="Shopping Cart New Address"
        />
        <section className="shopping-cart-two shopping-cart-new-address  ">
          <div className="container">
            <div className="row">
              <AddNewAddress />
              <CartSummary />
            </div>
          </div>
        </section>
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default ShoppingCartNewAddress;
