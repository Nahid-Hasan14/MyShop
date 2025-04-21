import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      {/* Navbar and Sidebar in a single container */}
      <section style={{ marginBottom: "20px !important" }}>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container d-flex justify-content-between align-items-center">
            {/* Left Part: Links and Sidebar Toggle */}
            <div className="navbar-section d-flex align-items-center">
              {/* Sidebar Toggle (Visible in Mobile Only) */}
              <button
                className="navbar-toggler d-lg-none me-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileSidebar"
                aria-controls="mobileSidebar"
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* Menu Links (Visible in Desktop Only) */}

              <div className="navbar-section middle navbar-logo">
                <NavLink to={"/"} className="navbar-brand" href="#">
                  Softssit
                </NavLink>
              </div>

              <div className="collapse navbar-collapse d-none d-lg-block ">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-light"
                      role="button"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu custom-dropdown">
                      <li>
                        <Link to={"/"} className="dropdown-item " >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to={"/about-us"} className="dropdown-item ">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to={"/contact-us"} className="dropdown-item ">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li> */}
                </ul>
              </div>
            </div>
            {/* Middle Part: Logo */}
            <div className="d-none d-lg-block w-75 ms-5">
              <form className="d-flex align-items-center 75">
                <input
                  type="text"
                  className="form-control me-2 w-75"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>

            {/* Right Part: Icons */}
            <div className="navbar-section d-flex justify-content-end">
              <div className="nav-icons me-lg-3 d-flex gap-3">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle text-light"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bi bi-person" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to={'/dashboard'} className="dropdown-item">
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
                <a href="#">
                  <i className="bi bi-cart" />
                </a>
                <a href="#">
                  <i className="bi bi-heart" />
                </a>
              </div>
            </div>
          </div>
          {/* Search Bar (Visible in Mobile Only) */}
          <div className="search-bar d-lg-none p-2 w-100">
            <form className="d-flex w-100">
              <input
                className="form-control me-2 w-100"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          {/* Offcanvas Sidebar (Hidden on Desktop, Visible on Mobile) */}
          <div
            className="offcanvas offcanvas-start bg-dark text-white d-lg-none"
            tabIndex={-1}
            id="mobileSidebar"
            aria-labelledby="mobileSidebarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="mobileSidebarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink onClick={()=> navigate('/')} className="nav-link text-white" data-bs-dismiss="offcanvas">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onClick={()=> navigate('/about-us')} className="nav-link text-white" data-bs-dismiss="offcanvas">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onClick={()=> navigate('/contact-us')} className="nav-link text-white" data-bs-dismiss="offcanvas">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" data-bs-dismiss="offcanvas">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
