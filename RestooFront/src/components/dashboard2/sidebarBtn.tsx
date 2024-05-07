import { Link, useLocation } from "react-router-dom";

function SidebarBtn({
  title,
  link,
  children,
}: {
  title: string;
  link: string;
  children: React.ReactNode;
}) {
  const userPath = useLocation();
  const userLocations = userPath.pathname.split("/");
  const isActive =
    userLocations.length > 2
      ? userLocations[2] === link
      : `/${userLocations[1]}` === link;
  return (
    <Link to={link} className={`nav-link ${isActive ? "active" : ""}`}>
      <span>{children}</span>
      {title}
    </Link>
  );
}

export default SidebarBtn;
