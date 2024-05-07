import logo from "../assets/images/logo/footer-logo.svg";
import Header from "../components/header/index";
import Breadcrumbs from "../components/breadcrumbs";

import Footer from "../components/footer";
import ShoppingCartSec from "../components/shoppingCart";

function ShoppingCart() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="Shopping Cart" address="Shopping Cart" />
        <ShoppingCartSec />
  
      </main>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
