import { FC } from "react";
import { Link } from "react-router-dom";

export const HomeView: FC = () => {
  return (
    <div className="container-fluid">
      <h1>List of examples</h1>
      <ul>
        <li>
          <Link to="/complete" title="Complete">
            Complete
          </Link>{" "}
          A complete tour of the lib with all available features
        </li>
        <li>
          <Link to="/events" title="Events">
            Events
          </Link>{" "}
          Open the js console and see all the tracked events
        </li>
        <li>
          <Link to="/multiple" title="Multiple">
            Multiples
          </Link>{" "}
          Display multiple independant graph on the same page
        </li>
        <li>
          <Link to="/custom-render" title="Custom render">
            Custom Render
          </Link>{" "}
          Make your own style by overring the native display and labels of controllers
        </li>
        <li>
          <Link to="/multidirectedgraph" title="MultiDirectedGraph">
            Custom graph constructor
          </Link>{" "}
          Instantiate a MultiDirectedGraph on SigmaContainer
        </li>
        <li>
          <Link to="/updatedgraphreference" title="Updated graph reference">
            Updated graph reference
          </Link>{" "}
          Update graph instance during lifecycle of react-sigma
        </li>
        <li>
          <Link to="/external" title="External">
            External control
          </Link>{" "}
          Use sigma ref to control it outside the SigmaContainer
        </li>
        <li>
          <Link to="/custom-graph-external" title="Custom external">
            Custom graph with external control
          </Link>{" "}
          Use sigma ref to control a custom typed grpah outside the SigmaContainer
        </li>
      </ul>
    </div>
  );
};
