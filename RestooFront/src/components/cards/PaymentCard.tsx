function PaymentCard({
  title,
  comment,
  authorName,
  authorProfession,
  time,
}: {
  title: string;
  comment: string;
  authorName: string;
  authorImg: string;
  authorProfession: string;
  time: string;
}) {
  return (
    <div
      className="review-list-main-box-item aos-init aos-animate"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <div className="review-list-main-box-item-text">
        <h5>{title}</h5>
        <p>{comment}</p>
      </div>

      <div className="review-list-main-box-inner">
        <div className="review-list-main-box-inner-item">
          <div className="review-list-main-box-inner-item-text">
            <h5>{authorName}</h5>
            <p>{authorProfession}</p>
          </div>
        </div>

        <div className="review-list-main-box-inner-item-right">
          <div className="text">
            <a href="#">{time} ago</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
