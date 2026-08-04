import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>
        Collector Hub
      </h2>

      <div className="nav-links">

        <Link to="/">
          Marketplace
        </Link>

        <Link to="/community">
          Community
        </Link>

        <Link to="/collection">
          My Collection
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;