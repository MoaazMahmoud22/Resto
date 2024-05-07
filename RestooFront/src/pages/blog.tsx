import Header from "../components/header/index";
import Breadcrumbs from "../components/breadcrumbs";
import AppPart from "../components/app-part";
import Footer from "../components/footer";
import logo from "../assets/images/logo/footer-logo.svg";
import Faq from "../components/faq";
import BlogSec from "../components/blog/blogSec";

function Blog() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="Blogs" address="Blogs" />
        <BlogSec />
        <Faq />
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
