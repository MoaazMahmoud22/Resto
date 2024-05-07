import Header from "../components/header/index";
import Breadcrumbs from "../components/breadcrumbs";

import Footer from "../components/footer";
import logo from "../assets/images/logo/footer-logo.svg";

import ContactInfo from "../components/contact/contactInfo";


function Contact() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="Feedback" address="Feedback" />
        <ContactInfo />
      
        
    
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
