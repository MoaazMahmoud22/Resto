import { Link } from "react-router-dom";

function Breadcrumbs({ title, address }: { title: string; address: string }) {
  return (
    <div className="inner-banner">
      <div className="container">
        <div className="row  ">
          <div className="col-lg-12">
            <div className="inner-banner-head">
              <h1>{title}</h1>
            </div>

            <div className="inner-banner-item">
              <div className="left">
                <Link to="/">Home</Link>
              </div>
              <div className="icon">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 7L14 12L10 17"
                      stroke="#E5E6EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="left">
                <span>{address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
