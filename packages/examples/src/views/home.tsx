import { FC } from "react";
import { Link } from "react-router-dom";

export const HomeView: FC = () => {
  return (
    <div className="container-fluid">
      <h1>@react-sigma - examples</h1>
      <ul>
        <li>
          <Link to="/complete" title="Complete">
            Complete
          </Link>
        </li>
        <li>
          <Link to="/events" title="Events">
            Events
          </Link>
        </li>
        <li>
          <Link to="/multiple" title="Multiple">
            Multiples
          </Link>
        </li>
        <li>
          <Link to="/custom-buttons" title="Custom Buttons">
            Custom Buttons
          </Link>
        </li>
      </ul>
    </div>
  );
};
