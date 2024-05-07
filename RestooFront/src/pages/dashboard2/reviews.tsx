import authorImg from "../../assets/images/small/review.png";
import ReviewCardListView from "../../components/cards/reviewCardListView";

function Reviews() {
  return (
    <div className="col-lg-12">
      <div className="review-list-main-box">
        <div className="review-list-main-box-text">
          <h3>Review List</h3>
        </div>
        <ReviewCardListView
          title="Eggplant Baked with Cheese"
          comment="“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
          time="2 days"
          authorImg={authorImg}
          authorName="Jerome Bell"
          authorProfession="Dog Trainer"
        />
        <ReviewCardListView
          title="Eggplant Baked with Cheese"
          comment="“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
          time="2 days"
          authorImg={authorImg}
          authorName="Jerome Bell"
          authorProfession="Dog Trainer"
        />
        <ReviewCardListView
          title="Eggplant Baked with Cheese"
          comment="“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
          time="2 days"
          authorImg={authorImg}
          authorName="Jerome Bell"
          authorProfession="Dog Trainer"
        />
        <div className="review-list-main-box-item-btn">
          <a href="#" className="main-btn-four">
            See all
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 16L18 12M18 12L14 8M18 12L6 12"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
