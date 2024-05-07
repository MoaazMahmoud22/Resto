import logo from "../assets/images/logo/footer-logo.svg";
import Header from "../components/header";
import Breadcrumbs from "../components/breadcrumbs";
import AppPart from "../components/app-part";
import Footer from "../components/footer";

function TermsService() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="Terms & Service" address="Terms & Service" />
        <section className="privacy s-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="privacy-text">
                  <h4>
                    At ReservQ, we are committed to protecting the privacy and
                    security of your personal information. This Privacy & Policy
                    outlines how we collect, use, and safeguard your data when
                    you interact with our website, services, and dining
                    experiences. By using our services, you consent to the
                    practices described below.
                  </h4>
                </div>

                <div className="privacy-text-main">
                  <div className="privacy-text-main-text">
                    <h3>Information Collection and Use:</h3>

                    <ul>
                      <li>
                        Personal Information: We may collect personal
                        information such as your name, email address, phone
                        number, and reservation details when you interact with
                        our website or make a reservation.
                      </li>
                      <li>
                        Payment Information: For online orders or reservations,
                        we may collect payment information, including credit
                        card details, to process transactions securely.
                      </li>
                      <li>
                        Usage Data: We may automatically collect information
                        about your interaction with our website, including your
                        IP address, browser type, and device information.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="privacy-text-main">
                  <div className="privacy-text-main-text">
                    <h3>Use of Information:</h3>

                    <ul>
                      <li>
                        We use your personal information to process
                        reservations, orders, and payments, and to communicate
                        with you about your dining experiences and promotions.
                      </li>
                      <li>
                        We may use your information to improve our services,
                        personalize your experience, and conduct analytics to
                        understand user behavior and preferences.
                      </li>
                      <li>
                        We may send you promotional emails or messages if you
                        opt to receive them, and you can opt out at any time.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="privacy-text-main">
                  <div className="privacy-text-main-text">
                    <h3>Data Security: </h3>

                    <ul>
                      <li>
                        We implement security measures to protect your personal
                        information, including encryption, firewalls, and secure
                        payment gateways.
                      </li>
                      <li>
                        While we strive to protect your data, no method of
                        transmission over the internet is completely secure, and
                        we cannot guarantee absolute security.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="privacy-text-main">
                  <div className="privacy-text-main-text">
                    <h3>Sharing of Information: </h3>

                    <ul>
                      <li>
                        We may share your information with third-party service
                        providers who assist us in delivering our services, such
                        as reservation platforms, payment processors, and email
                        marketing providers.
                      </li>
                      <li>
                        While we strive to protect your data, no method of
                        transmission over the internet is completely secure, and
                        we cannot guarantee absolute security.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="privacy-text-main privacy-text-main-two ">
                  <div className="privacy-text-main-text">
                    <h3>Links to Other Sites: </h3>

                    <ul>
                      <li>
                        Our website may contain links to external sites. We are
                        not responsible for the privacy practices of these
                        sites. We encourage you to review their privacy policies
                        before providing any personal information.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="privacy-text-main privacy-text-main-two ">
                  <div className="privacy-text-main-text">
                    <h3>Changes to Privacy & Policy: </h3>

                    <ul>
                      <li>
                        We may update this Privacy & Policy from time to time to
                        reflect changes in our practices or legal requirements.
                        The updated version will be posted on our website, and
                        your continued use of our services after such changes
                        implies your acceptance of the updated policy.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="privacy-text-main privacy-text-main-two ">
                  <div className="privacy-text-main-text">
                    <h3>Contact Us: </h3>

                    <ul>
                      <li>
                        If you have any questions, concerns, or requests related
                        to your privacy or personal information, please contact
                        us at [contact email/phone number]. This Privacy &
                        Policy statement is intended as a sample and should be
                        tailored to the specific practices and needs of your
                        restaurant. It's recommended to seek legal advice to
                        ensure compliance with relevant laws and regulations.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default TermsService;
