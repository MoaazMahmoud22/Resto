import { Link, useLocation } from "react-router-dom";

function TabBtn({ icon, link }: { icon: React.ReactNode; link: string }) {
  const location = useLocation();
  return (
    <li className="nav-item" role="presentation">
      <Link
        to={link}
        className={`nav-link ${location.pathname === link ? "active" : ""}`}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>{icon}</span>
      </Link>
    </li>
  );
}

export default TabBtn;
