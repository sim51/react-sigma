import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <Link to="/" title="Home">
          <img style={{ maxHeight: "30px" }} src="./logo.svg" alt="React Sigma logo" />
        </Link>
      </nav>
    </header>
  );
};
