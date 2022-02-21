import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className="header fixed-top ">
      <nav className="navbar container-fluid pt-0 pb-0">
        <Link to="/" title="Home" className="navbar-brand p-0">
          @react-sigma
        </Link>
      </nav>
    </header>
  );
};
