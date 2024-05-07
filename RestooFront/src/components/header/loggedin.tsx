import { Link } from "react-router-dom";

function Loggedin() {
  return (
    <div className="love user">
      <div className="click" data-name="profile-dropdown"></div>
      <span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="13.9997"
            cy="20.4154"
            rx="8.16667"
            ry="4.08333"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle
            cx="13.9997"
            cy="8.16667"
            r="4.66667"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <div className="profile-dropdown header-dropdown" id="profile-dropdown">
        <div className="profile-dropdown-img">
          <img src="./assets/images/small/profile-dropdown.png" alt="img" />
        </div>

        <div className="profile-dropdown-text">
          <Link to="#">AJOY Sarker</Link>
          <p>user id #054501</p>
        </div>

        <div className="profile-dropdown-menu">
          <ul>
            <li>
              <Link to="/dashboard-edit-profile">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="12"
                      cy="17.5"
                      rx="7"
                      ry="3.5"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Edit Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard-address-reordering">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 7L7 7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 11L7 11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15L7 15"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 2H5C3.89543 2 3 2.89543 3 4V19.1543C3 20.5396 4.37412 21.5053 5.67744 21.0361L7.2392 20.4739C7.72721 20.2982 8.26439 20.319 8.73737 20.5318L11.1793 21.6307C11.7012 21.8655 12.2988 21.8655 12.8207 21.6307L15.2626 20.5318C15.7356 20.319 16.2728 20.2982 16.7608 20.4739L18.3226 21.0361C19.6259 21.5053 21 20.5396 21 19.1543V4C21 2.89543 20.1046 2 19 2Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Order & Reordering
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3726 8.17276C20.0986 9.39695 22 12.1611 22 15.375V18.75C22 19.9926 21.0051 21 19.7778 21H13.1111C10.2084 21 7.73898 19.1217 6.82379 16.5M17.3726 8.17276C16.6711 5.20566 14.0344 3 10.8889 3H9.77778C5.48223 3 2 6.52576 2 10.875V14.25C2 15.4926 2.99492 16.5 4.22222 16.5H6.82379M17.3726 8.17276C17.4922 8.67875 17.5556 9.20688 17.5556 9.75C17.5556 13.4779 14.5708 16.5 10.8889 16.5H6.82379"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Chat
              </Link>
            </li>
            <li>
              <Link to="/dashboard-address">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="11" r="3" strokeWidth="1.5" />
                    <path
                      d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                Address
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="7"
                      width="16"
                      height="14"
                      rx="4"
                      strokeWidth="1.5"
                    />
                    <circle cx="12" cy="14" r="2" strokeWidth="1.5" />
                    <path
                      d="M16.0003 7C16.0003 4.79086 14.2095 3 12.0003 3C10.9859 3 10.0596 3.37764 9.35449 4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Change Password
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile-dropdown-menu profile-dropdown-menu-two ">
          <ul>
            <li>
              <Link to="/dashboard-edit-profile">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6831 10.0808L14.3138 10.4866L13.6831 10.0808ZM9.25 9C9.25 9.41421 9.58579 9.75 10 9.75C10.4142 9.75 10.75 9.41421 10.75 9H9.25ZM11.25 13.5C11.25 13.9142 11.5858 14.25 12 14.25C12.4142 14.25 12.75 13.9142 12.75 13.5H11.25ZM12.75 16C12.75 15.5858 12.4142 15.25 12 15.25C11.5858 15.25 11.25 15.5858 11.25 16H12.75ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM13.25 9C13.25 9.24996 13.1774 9.48068 13.0524 9.67495L14.3138 10.4866C14.5899 10.0576 14.75 9.54634 14.75 9H13.25ZM10.75 9C10.75 8.30964 11.3096 7.75 12 7.75V6.25C10.4812 6.25 9.25 7.48122 9.25 9H10.75ZM12 7.75C12.6904 7.75 13.25 8.30964 13.25 9H14.75C14.75 7.48122 13.5188 6.25 12 6.25V7.75ZM11.25 13V13.5H12.75V13H11.25ZM13.0524 9.67495C12.9265 9.87065 12.7688 10.0731 12.5836 10.3033C12.4063 10.5237 12.1979 10.7764 12.011 11.0333C11.6424 11.5398 11.25 12.2007 11.25 13H12.75C12.75 12.6947 12.9003 12.3605 13.2239 11.9158C13.383 11.697 13.558 11.4851 13.7523 11.2436C13.9387 11.0119 14.1409 10.7554 14.3138 10.4866L13.0524 9.67495ZM11.25 16V17H12.75V16H11.25Z"
                      fill="#000929"
                    />
                  </svg>
                </span>
                Edit Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard-address-reordering">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 14L21.2929 12.7071C21.6834 12.3166 21.6834 11.6834 21.2929 11.2929L20 10"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12H13M6 20C3.79086 20 2 18.2091 2 16V8C2 5.79086 3.79086 4 6 4M6 20C8.20914 20 10 18.2091 10 16V8C10 5.79086 8.20914 4 6 4M6 20H14C16.2091 20 18 18.2091 18 16M6 4H14C16.2091 4 18 5.79086 18 8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Loggedin;
