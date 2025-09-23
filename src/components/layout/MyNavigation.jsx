import { Link } from 'react-router-dom';


function MainNavigation() {
  return (
    // Navbar
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            zalando
          </Link>
        </div>
        <div className="flex-none">

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />

          {/* Profile Icon */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <i className="fa-solid fa-user"></i>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            ></div>
          </div>

          {/* Add Icon */}
          <div className="dropdown dropdown-end">
            <Link to="/new-item" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <i className="fa-solid fa-plus"></i>
              </div>
            </Link>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          ></div>
        </div>


        {/* Bag Icon */}
        <div className="dropdown dropdown-end">
          <Link to="/cart" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <i className="fa-solid fa-bag-shopping"></i>
              {/* ekhane count add kora jabe */}
              {/* <span className="badge badge-sm indicator-item">{cartCount}</span> */}
            </div>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default MainNavigation;
