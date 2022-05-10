import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  return (
    <div className="navPage">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/first">First</Link>
        <Link to="/second">Second</Link>
      </div>
      <h3>{pathname}</h3>
    </div>
  );
}

export default Nav;
