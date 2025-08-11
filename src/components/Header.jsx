import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const Header = () => {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/header?populate[menuItems][populate][submenuItems]=*&populate=logo`
      )
      .then((res) => {
        setHeaderData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching header data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const navBar = () => {
    openNav();
  };
  const navBarClose = () => {
    closeNav();
  };
  return (
    <>
      {loading && (
        <div className="fullpage-loader">
          <div className="spinner"></div>
        </div>
      )}
      <header>
        <nav className="navbar navbar-custom d-flex justify-content-between align-items-center flex-nowrap">
          <div className="navbar-brand">
            <Link to={headerData?.logoLink} >
            <img src={`${baseUrl}${headerData?.logo.url}`} alt="Logo" />
            </Link>
          </div>
          <div className="nav-btn">
            <Link to={headerData?.buttonUrl}  className="btn_primary d-none d-md-inline-block">{headerData?.buttonLabel}</Link>
            
            <button className="hamburger" onClick={navBar}>
              <i className="fa-regular fa-bars hamburger-icon text-dark"></i>
            </button>
          </div>
        </nav>
        <div id="myNav" className="overlay">
          <a href="#" className="btn_light inner-nav-btn">
            Let's Connect
          </a>
          <button className="closebtn" onClick={navBarClose}>
            &times;
          </button>
          <ul className="nav-items">
            {headerData?.menuItems?.map((menuItem, index) => (
              <li key={menuItem.id}>
                <a href={menuItem.url}>{menuItem.title}</a>

                {menuItem.submenuItems?.length > 0 && (
                  <ul className={index === 0 ? "visible" : ""}>
                    {menuItem.submenuItems.map((subItem) => (
                      <li key={subItem.id}>
                        <Link to={subItem.url}>{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
