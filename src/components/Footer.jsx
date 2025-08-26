import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;
const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/footer?populate[footerLinks][populate]=subTitle&populate[location][populate]=address&populate[copyright][populate]=pages&populate[socialLink]=true&populate=footerLogo`
      )
      .then((res) => {
        setFooterData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching footer data:", error);
      });
  }, []);
console.log("footer",footerData);
  return (
    <>
      <div className="container-fluid footer-section footer_light pt-5 pb-5">
        <div className="container">
          <div className="row footer-row-1">
            {footerData?.footerLinks?.map((linkGroup) => (
              <div key={linkGroup.id} className="footer-col">
                <h5><a href={linkGroup.url} className="nav-link">{linkGroup.title}</a></h5>
                <ul>
                  {linkGroup.subTitle?.map((item) => (
                    <li key={item.id}>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer-col">
              <a href={footerData?.buttonUrl} className="btn_primary">
                {footerData?.buttonLabel}
              </a>
              <ul className="pt-3">
                <li>{footerData?.email}</li>
                <li>{footerData?.phone}</li>
              </ul>
              <ul className="pt-3 icon-col">
                <li>
                  <a href={footerData?.socialLink[0].url}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href={footerData?.socialLink[2].url}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href={footerData?.socialLink[1].url}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={footerData?.socialLink[3].url}>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row footer-row-2 pt-5 pb-3">
            {footerData?.location?.map((loc) => (
              <div key={`location-${loc.id}`} className="col-md-2 footer-col">
                <h5>{loc.name}</h5>
                <ul>
                  {loc.address?.map((addr) => (
                    <li key={`address-${addr.id}`}>
                      {addr.street}
                      <br />
                      {addr.officeLocation}
                      <br />
                      {addr.city}
                      <br />
                      {addr.state}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-md-12 copyright-col mt-5">
              <p>
                {footerData?.copyright?.[0]?.copyright}
                {footerData?.copyright?.[0]?.pages?.map((page) => (
                  <span key={page.id}>
                    {" │ "}
                    <a href={page.url}>{page.title}</a>
                  </span>
                ))}
              </p>
            </div>
            <div className="col-md-12 pt-5">
              <img
                src={`${baseUrl}${footerData?.footerLogo?.url}`}
                alt="Piccadilly Logo"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
