import React, { useState } from "react";
import { Link } from "react-router-dom";

interface dropdownProps {
  icon?: React.ReactNode;
  title: string;
  link: string;
  options: { title: string; link: string }[];
}

function Dropdown({ icon, title, link, options }: dropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const openDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="food-details-btn-btn">
      <div className="dropdown">
        <Link
          className={`btn btn-secondary dropdown-toggle ${
            showDropdown ? "show" : ""
          }`}
          to={link}
          role="button"
          title="drop"
          onClick={openDropdown}
        >
          {icon ? <span className="p-r-6px">{icon}</span> : ""}

          {title}
          <span className="pl-8px" title="drop">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_304_36234)">
                <path
                  d="M3.33398 5.66797L8.00065 10.3346L12.6673 5.66797"
                  stroke="#6C727F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </span>
        </Link>

        <ul
          className={`dropdown-menu ${showDropdown ? "show" : ""}`}
          aria-labelledby="dropdownMenuLink"
        >
          {options?.map((option) => {
            return (
              <li key={option.title} onClick={() => setShowDropdown(false)}>
                <a className="dropdown-item" href={option.link}>
                  {option.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
