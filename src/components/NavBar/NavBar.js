import { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../../images/close.svg";

export const NavBar = () => {
  const [expandNavBar, setExpandNavBar] = useState(false);

  const expand = () => {
    setExpandNavBar(!expandNavBar);
  };
  return (
    <nav className="navigation">
      <h3 className="name-brand">plerk</h3>
      <button className="hamburger" onClick={expand}>
        {!expandNavBar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <img src={CloseIcon} alt="close" />
        )}
      </button>
      <div
        className={
          expandNavBar ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/enterpriseAnalysis">Companies Analysis</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
