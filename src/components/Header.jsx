import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const Header = () => {
  const [headerData, setHeaderData] = useState(null);

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
      <header id="header">
        <nav className="navbar navbar-custom d-flex justify-content-between align-items-center flex-nowrap">
          <div className="navbar-brand">
            <a href={headerData?.logoLink} >
            <img src={`${baseUrl}${headerData?.logo.url}`} alt="Logo" />
            </a>
            {/* <p className="mb-0 ms-3">Formerly AMF Media Group</p> */}
          </div>
          <div className="nav-btn">
            <a href={headerData?.buttonUrl}  className="btn_primary d-none d-md-inline-block">{headerData?.buttonLabel}</a>
            
            <button className="hamburger" onClick={navBar}>
              {/*<i className="fa-regular fa-bars hamburger-icon text-dark"></i>*/}
               <span className="menu-icon">
      <span className="menu-line menu-line-1"></span>
      <span className="menu-line menu-line-2"></span>
      <span className="menu-line menu-line-3"></span>
    </span>
            </button>
          </div>
        </nav>
        <div id="myNav" className="overlay">
    {/*      <a href="/contact-us" className="btn_light inner-nav-btn">
            Let's Connect
          </a>*/}
        {/*  <button className="closebtn" onClick={navBarClose}>
            &times;
          </button>*/}
          <ul className="nav-items">
            {headerData?.menuItems?.map((menuItem, index) => (
              <li key={menuItem.id}>
                <a href={menuItem.url} onClick={navBar}>{menuItem.title}</a>

                {menuItem.submenuItems?.length > 0 && (
                  <ul className={index === 0 ? "visible" : ""}>
                    {menuItem.submenuItems.map((subItem) => (
                      <li key={subItem.id}>
                        <a href={subItem.url} onClick={navBar}>{subItem.title}</a>
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
