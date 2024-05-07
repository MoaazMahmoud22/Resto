import Header from "../../components/header/index";
import AppPart from "../../components/app-part";
import Footer from "../../components/footer";
import logo from "../../assets/images/logo/footer-logo.svg";
import Breadcrumbs from "../../components/breadcrumbs";
import Layout from "../../components/dashboard2/layout";

function Dashboard2({ children }: { children?: React.ReactElement }) {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="User Dashboard" address="User Dashboard" />
        <Layout children={children} />
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard2;
