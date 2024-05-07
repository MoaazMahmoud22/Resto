import { Link } from "react-router-dom";

interface subNav {
  title: string;
  link: string;
}

interface navButtonProps {
  title: string;
  link: string;
  subMenu?: subNav[];
}

function NavButton({ title, link, subMenu }: navButtonProps) {
  return (
    <li>
      <Link to={link}>
        {title}
        {subMenu && (
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        )}
      </Link>
      {subMenu && (
        <ul>
          {subMenu?.map((menu) => (
            <li key={menu.title}>
              <Link to={menu.link}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavButton;
