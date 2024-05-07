function Pagination() {
  return (
    <div className="row blog-mt-48px">
      <div className="col-lg-7 col-md-6 ">
        <div className="next-prev-btn">
          <ul>
            <li>
              <a href="#">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 8L6 12M6 12L10 16M6 12L18 12"
                      stroke="#F01543"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="active">
                Next Page
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
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-lg-5 col-md-6">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Page
              </a>
            </li>
            <li className="page-item active " aria-current="page">
              <span className="page-link">2</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                of 10
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
