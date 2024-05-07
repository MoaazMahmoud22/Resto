import star from "../../assets/images/icon/star.svg";
import customerIcon from "../../assets/images/icon/customer-icon.png";

function TestimonialCard({
  img,
  review,
  customerName,
  customerProfession,
}: {
  img: string;
  review: string;
  customerName: string;
  customerProfession: string;
}) {
  return (
    <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up">
      <div className="customer-item">
        <div className="customer-img">
          <img src={customerIcon} alt="icon" />
        </div>
        <div className="customer-item-text">
          <p>{review}</p>
        </div>
      </div>

      <div className="customer-inner">
        <div className="customer-inner-img">
          <img src={img} alt="img" />
        </div>

        <div className="customer-inner-text">
          <div className="icon">
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
            <img src={star} alt="img" />
          </div>

          <h3>{customerName}</h3>
          <h5>{customerProfession}</h5>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
