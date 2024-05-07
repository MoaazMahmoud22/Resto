import { Link } from "react-router-dom";
import { blogsInit } from "../../data/blogs";
function BlogCard({
  blog,
  className,
}: {
  blog: blogsInit;
  className?: string;
}) {
  const { img, title, description, readingTime } = blog;
  return (
    <div className={` ${className ? className : ""}`}>
      <div className="news-item">
        <div className="news-img">
          <img src={img} className="w-100" alt="img" />

          <div className="news-img-overlay">
            <div className="news-img-overlay-text">
              <h5>
                {title} <span>•</span> {readingTime} min read
              </h5>

              <h3>
                <Link to="#">{description}</Link>
              </h3>
            </div>

            <div className="news-img-overlay-btn">
              <Link to="/blog">
                Read More
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
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
