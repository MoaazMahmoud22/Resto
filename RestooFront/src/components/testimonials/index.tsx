import TestimonialCard from "../cards/testimonialCard";
import customerImg1 from "../../assets/images/small/customer-1.png";
import customerImg2 from "../../assets/images/small/customer-2.png";
import customerImg3 from "../../assets/images/small/customer-3.png";

function Testimonials() {
  return (
    <section className="customer s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="customer-head mb-48px">
              <h2>What’s Our Customer Say</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <TestimonialCard
            img={customerImg1}
            review={`"An absolute foodie's paradise! The flavors at ReservQ are a
                  symphony of delight. Every bite tells a story of passion and
                  skill. A must-visit for anyone seeking beyond compare."`}
            customerName="Jonson Roy"
            customerProfession="Job Holder"
          />
          <TestimonialCard
            img={customerImg2}
            review={`"An absolute foodie's paradise! The flavors at ReservQ are a
                  symphony of delight. Every bite tells a story of passion and
                  skill. A must-visit for anyone seeking beyond compare."`}
            customerName="David Ethic"
            customerProfession="Dog Trainer"
          />
          <TestimonialCard
            img={customerImg3}
            review={`"An absolute foodie's paradise! The flavors at ReservQ are a
                  symphony of delight. Every bite tells a story of passion and
                  skill. A must-visit for anyone seeking beyond compare."`}
            customerName="Robert Fox"
            customerProfession="Bike Trainer"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
