import Header from "../components/header/index";
import Breadcrumbs from "../components/breadcrumbs";
import AppPart from "../components/app-part";
import Footer from "../components/footer";
import logo from "../assets/images/logo/footer-logo.svg";
import Faq from "../components/faq";
import BlogCom from "../components/blogDetails";

function BlogDetails() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="Blog Details" address="Blog Details" />
        <BlogCom />
        <Faq />
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default BlogDetails;
