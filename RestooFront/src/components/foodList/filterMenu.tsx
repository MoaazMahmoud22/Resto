import Dropdown from "./dropdown";
import TabBtn from "./tabBtn";

function FilterMenu() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="food-details-btn-box">
          <div className="food-details-btn-box-item">
            <div className="food-details-btn-item">
              <Dropdown
                title="All Category"
                link="#"
                options={[
                  { title: "Action", link: "#" },
                  { title: "Another action", link: "#" },
                  { title: "Something else here", link: "#" },
                ]}
              />
              <Dropdown
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_304_36238)">
                      <path
                        d="M6.68919 2.17964C7.22565 1.0495 8.77565 1.04949 9.31211 2.17964L10.2392 4.13282C10.4523 4.5816 10.8641 4.89266 11.3404 4.96462L13.4135 5.27783C14.6131 5.45905 15.0921 6.99173 14.2241 7.87142L12.7239 9.39176C12.3792 9.74109 12.222 10.2444 12.3033 10.7376L12.6575 12.8844C12.8624 14.1265 11.6084 15.0738 10.5355 14.4873L8.6812 13.4738C8.25515 13.2409 7.74615 13.2409 7.3201 13.4738L5.46583 14.4873C4.39291 15.0738 3.13893 14.1265 3.34384 12.8844L3.69798 10.7376C3.77935 10.2444 3.62206 9.74109 3.27737 9.39176L1.77723 7.87142C0.909228 6.99173 1.3882 5.45905 2.58776 5.27783L4.6609 4.96462C5.13724 4.89266 5.54903 4.5816 5.76206 4.13282L6.68919 2.17964Z"
                        stroke="#28303F"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                }
                title="Star Rating"
                link="#"
                options={[
                  { title: "Action", link: "#" },
                  { title: "Another action", link: "#" },
                  { title: "Something else here", link: "#" },
                ]}
              />
              <Dropdown
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_304_36238)">
                      <path
                        d="M6.68919 2.17964C7.22565 1.0495 8.77565 1.04949 9.31211 2.17964L10.2392 4.13282C10.4523 4.5816 10.8641 4.89266 11.3404 4.96462L13.4135 5.27783C14.6131 5.45905 15.0921 6.99173 14.2241 7.87142L12.7239 9.39176C12.3792 9.74109 12.222 10.2444 12.3033 10.7376L12.6575 12.8844C12.8624 14.1265 11.6084 15.0738 10.5355 14.4873L8.6812 13.4738C8.25515 13.2409 7.74615 13.2409 7.3201 13.4738L5.46583 14.4873C4.39291 15.0738 3.13893 14.1265 3.34384 12.8844L3.69798 10.7376C3.77935 10.2444 3.62206 9.74109 3.27737 9.39176L1.77723 7.87142C0.909228 6.99173 1.3882 5.45905 2.58776 5.27783L4.6609 4.96462C5.13724 4.89266 5.54903 4.5816 5.76206 4.13282L6.68919 2.17964Z"
                        stroke="#28303F"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                }
                title="Price Range"
                link="#"
                options={[
                  { title: "Action", link: "#" },
                  { title: "Another action", link: "#" },
                  { title: "Something else here", link: "#" },
                ]}
              />
              <Dropdown
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.75"
                      y="3.75"
                      width="10.5"
                      height="10.5"
                      rx="4"
                      stroke="#28303F"
                    />
                    <path
                      d="M9 6.75V9L7.5 9.75"
                      stroke="#28303F"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.75 14.25L12.75 14.5C12.75 15.6046 11.8546 16.5 10.75 16.5L7.25 16.5C6.14543 16.5 5.25 15.6046 5.25 14.5L5.25 14.25"
                      stroke="#28303F"
                      strokeLinecap="square"
                    />
                    <path
                      d="M12.75 3.75L12.75 3.5C12.75 2.39543 11.8546 1.5 10.75 1.5L7.25 1.5C6.14543 1.5 5.25 2.39543 5.25 3.5L5.25 3.75"
                      stroke="#28303F"
                      strokeLinecap="square"
                    />
                  </svg>
                }
                title="Meal Type"
                link="#"
                options={[
                  { title: "Action", link: "#" },
                  { title: "Another action", link: "#" },
                  { title: "Something else here", link: "#" },
                ]}
              />
            </div>
            <div className="food-details-btn-search-box">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput7"
                placeholder="Enter keyword here"
              />

              <div className="food-details-btn-search-btn">
                <a href="#" className="icon">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="food-details-btn-box-right-btn">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <TabBtn
                link="/all-food"
                icon={
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.34857 0H2.96329C1.32953 0 0 1.32953 0 2.96329V8.34791C0 9.98167 1.32953 11.3112 2.96329 11.3112H8.34791C9.98167 11.3112 11.3112 9.98167 11.3112 8.34791V2.96329C11.3119 1.32953 9.98233 0 8.34857 0ZM9.33633 8.34857C9.33633 8.89316 8.89316 9.33633 8.34857 9.33633H2.96329C2.4187 9.33633 1.97553 8.89316 1.97553 8.34857V2.96395C1.97553 2.41936 2.4187 1.97618 2.96329 1.97618H8.34791C8.8925 1.97618 9.33567 2.41936 9.33567 2.96395L9.33633 8.34857ZM21.6715 0H16.2862C14.6525 0 13.3229 1.32953 13.3229 2.96329V8.34791C13.3229 9.98167 14.6525 11.3112 16.2862 11.3112H21.6715C23.3053 11.3112 24.6348 9.98167 24.6348 8.34791V2.96329C24.6348 1.32953 23.3059 0 21.6715 0ZM22.6593 8.34857C22.6593 8.89316 22.2161 9.33633 21.6715 9.33633H16.2862C15.7416 9.33633 15.2985 8.89316 15.2985 8.34857V2.96395C15.2985 2.41936 15.7416 1.97618 16.2862 1.97618H21.6715C22.2161 1.97618 22.6593 2.41936 22.6593 2.96395V8.34857ZM8.34857 12.6888H2.96329C1.32953 12.6888 0 14.0183 0 15.6521V21.0367C0 22.6705 1.32953 24 2.96329 24H8.34791C9.98167 24 11.3112 22.6705 11.3112 21.0367V15.6521C11.3119 14.0177 9.98233 12.6888 8.34857 12.6888ZM9.33633 21.0367C9.33633 21.5813 8.89316 22.0245 8.34857 22.0245H2.96329C2.4187 22.0245 1.97553 21.5813 1.97553 21.0367V15.6521C1.97553 15.1075 2.4187 14.6643 2.96329 14.6643H8.34791C8.8925 14.6643 9.33567 15.1075 9.33567 15.6521L9.33633 21.0367ZM21.6715 12.6888H16.2862C14.6525 12.6888 13.3229 14.0183 13.3229 15.6521V21.0367C13.3229 22.6705 14.6525 24 16.2862 24H20.3097C20.855 24 21.2975 23.5575 21.2975 23.0122C21.2975 22.467 20.855 22.0245 20.3097 22.0245H16.2862C15.7416 22.0245 15.2985 21.5813 15.2985 21.0367V15.6521C15.2985 15.1075 15.7416 14.6643 16.2862 14.6643H21.6715C22.2161 14.6643 22.6593 15.1075 22.6593 15.6521V20.1655C22.6593 20.7108 23.1018 21.1533 23.647 21.1533C24.1923 21.1533 24.6348 20.7108 24.6348 20.1655V15.6521C24.6348 14.0177 23.3059 12.6888 21.6715 12.6888Z" />
                  </svg>
                }
              />
              <TabBtn
                link="/all-food/list"
                icon={<i className="fa-solid fa-bars"></i>}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMenu;
