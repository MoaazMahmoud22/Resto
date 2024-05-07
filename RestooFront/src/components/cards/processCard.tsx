import { Link } from "react-router-dom";

function ProcessCard({
  icon,
  workImg,
  title,
  description,
}: {
  icon: React.ReactNode;
  workImg: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="col-lg-3 col-md-6 res-mb-20px" data-aos="fade-right">
      <div className="work-item">
        <div className="work-item-icon">
          <div className="icon">
            <span>{icon}</span>
          </div>

          <div className="text">
            <h3>{title}</h3>
          </div>
        </div>

        <div className="work-item-text">
          <p>{description}</p>
        </div>

        <div className="work-item-btn">
          <Link to="/shopping-cart">
            Read more
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        <div className="work-item-img">
          <span>{workImg}</span>
        </div>
      </div>
    </div>
  );
}

export default ProcessCard;
