import { useEffect, useState, useRef } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const Services = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/service?populate[AllServices][populate][Services][populate][FAQs][populate]=*&populate[Slider][populate]=*&populate[AllServices][populate][Services][populate][image][populate]=*&populate[seo][populate]=*`
      )
      .then((res) => {
        // console.log("-----", res);
        setServiceData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching header data:", error);
      });
  }, []);

  console.log("serviceData", serviceData);

  setTimeout(() => {
    if (window.$) {
      const $cSlider = window.$(".strategy_slider");

      if ($cSlider.hasClass("owl-loaded")) {
        $cSlider.trigger("destroy.owl.carousel");
        $cSlider.removeClass("owl-loaded");
        $cSlider.find(".owl-stage-outer").children().unwrap();
        $cSlider.find(".owl-item").children().unwrap();
        $cSlider.find(".owl-dots.disabled").removeClass("disabled");
      }

      $cSlider.owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        // center: true,
        // autoWidth: true, // ❌ commented to match strategy_slider
        autoplayTimeout: 5000,
        autoplaySpeed: 800,
        margin: 10,
        responsive: {
          0: {
            items: 1,
          },
          1200: {
            items: 5,
          },
        },
      });
    }
  }, 1000);
  setTimeout(() => {
    if (window.$) {
      const $cSlider = window.$(".c_slider");

      if ($cSlider.hasClass("owl-loaded")) {
        $cSlider.trigger("destroy.owl.carousel");
        $cSlider.removeClass("owl-loaded");
        $cSlider.find(".owl-stage-outer").children().unwrap();
        $cSlider.find(".owl-item").children().unwrap();
        $cSlider.find(".owl-dots.disabled").removeClass("disabled");
      }

      $cSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoWidth: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 800,
        margin: 10,
        responsive: {
          0: { items: 2 },
          1200: { items: 4 },
        },
      });
    }
  }, 1000); // small delay to allow DOM to render
  const headingClassMap = {
    "b2c935": "healthcare_col",
    "72c9d4": "education_col",
    "f5b816": "tourism_col",
    "f18857": "non-profit_col",
    "f28452": "financial_col",
  };
  const headingRightClassMap = {
    "b2c935": "team_right_col",
    "72c9d4": "education_right_col",
    "f5b816": "tourism_right_col",
    "f18857": "non-stop_right_col",
    "f28452": "financial_right_col",
  };
  return (
    <>
    
    <title>{serviceData?.seo?.metaTitle || serviceData?.PageTitle}</title>
        <meta
          name="description"
          content={serviceData?.seo?.metaDescription || "Default description"}
        />
        <meta name="keywords" content={serviceData?.seo?.keywords || ""} />
        <link
          rel="canonical"
          href={serviceData?.seo?.canonicalURL || window.location.href}
        />

        {/* OpenGraph */}
        <meta property="og:title" content={serviceData?.seo?.openGraph?.ogTitle} />
        <meta
          property="og:description"
          content={serviceData?.seo?.openGraph?.ogDescription}
        />
        <meta property="og:type" content={serviceData?.seo?.openGraph?.ogType} />
        <meta property="og:url" content={serviceData?.seo?.openGraph?.ogUrl} />
        {serviceData?.seo?.metaImage?.url && (
          <meta property="og:image" content={`${baseUrl}${serviceData?.seo?.metaImage?.url}`} />
        )}
      {/* <!-- team modals --> */}
      <style>{`
              body .nav-btn .btn_primary{
    background-color: #fff !important;
    color: #000 !important;
    }
  .hamburger i {
    color: #fff !important;
  }
    .navbar-brand p{
      color:#fff !important;
    }

`}</style>

      {/* Popups Loop */}
      {serviceData?.AllServices?.Services?.map((service) => (
        <div
          key={service.id}
          className="modal fade team_popup service_modal"
          id={`team${service.id}`}
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable shadow radius-0">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn-close text-dark"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body px-5 pb-5">
                <div className="row px-0">
                  <div className="col-md-4">
                    <img
                      src={`${baseUrl}${service.image?.url}`}
                      alt={service.image?.alternativeText || ""}
                    />
                    <h5 className="text-dark fw_600 font_28 pt-3">
                      {service.name}
                    </h5>
                  </div>
                  <div className="col-md-8">
                    <div
                      className="font_14"
                      dangerouslySetInnerHTML={{
                        __html: service.DetailDescription,
                      }}
                    />

                    {/* Accordion for FAQs */}
                    <div
                      className="accordion accordion-flush"
                      id={`accordion${service.id}`}
                    >
                      {service.FAQs?.map((faq, i) => (
                        <div className="accordion-item mb-2" key={i}>
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button font_20 color_teal collapsed fw-semibold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapse${service.id}-${i}`}
                              aria-expanded="false"
                              aria-controls={`flush-collapse${service.id}-${i}`}
                            >
                              {faq.Title}
                            </button>
                          </h2>
                          <div
                            id={`flush-collapse${service.id}-${i}`}
                            className="accordion-collapse collapse"
                            data-bs-parent={`#accordion${service.id}`}
                          >
                            <div className="accordion-body">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: faq.Description,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <section className="inner_page_section container-fluid executive_banner services_banner">
        <div className="container">
          <div
            className="executive_col"
            dangerouslySetInnerHTML={{
              __html: serviceData?.BannerHeading || "",
            }}
          ></div>
        </div>
      </section>

      <section
        className="inner_page_section services_section bg_cover sec_py"
        id="marketing-services"
      >
        <div className="container">
          <div className="row">
            <div className="fix_width_content mx-auto text-center">
              <h3 className="large_heading color_black">
                {serviceData?.AllServices?.Heading1}{" "}
                <strong>{serviceData?.AllServices?.Heading2}</strong>
              </h3>
            </div>
          </div>
        </div>
        <div className="overflow_slider py-5">
          <div className="strategy_row">
            {serviceData?.AllServices?.Services?.map((service) => (
              <div key={service.id} className="service_1" id={service.name.replace(/[,&.]/g,"").replace(/\s+/g,"-").toLowerCase()}>
                <div className="item_inner">
                  <div className="strategy_wrap">
                    <div className="inner_wrap">
                      <div>
                        <p className="color_black">{service.description}</p>
                        <a
                          href="javascript:void(0)"
                          className="btn btn_primary btn_dark"
                          data-bs-toggle="modal"
                          data-bs-target={`#team${service.id}`}
                        >
                          {service.buttonLabel || "Learn More"}
                        </a>
                      </div>
                    </div>
                  
                  </div>
                  <div className="before_hover_content">
                    <img
                      src={`${baseUrl}${service.image?.url}`}
                      alt={service.image?.alternativeText || ""}
                    />
                    
                  </div>
                  <p className="text-white fw-bold font_18 pt-3 fade_text">
                      {service.name}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- start team section --> */}
      <div className="inner_page_section container-fluid px-0 team-section services_team_slider d-flex justify-content-center align-items-center">
        {/* Carousel */}
        <div
          id="demo"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-touch="true"
        >
          {/* Indicators/dots */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="3"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="4"
            ></button>
          </div>

          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            {/* Healthcare */}

            {serviceData?.Slider?.slice(0, 6)?.map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <div className="row mx-0">
                  {/* Left Column */}
                  <div
                    className={`heading_col d-flex align-items-center px-5 team_col bg_primary ${
                      headingClassMap[item.Slider_Color_Code] || "financial_col"
                    }`}
                  >
                    <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
                      <h3 className="font_40 fw-semibold color_black">
                        {item.Heading}
                      </h3>
                      <p className="font_18 color_black py-4">
                        {item.Description}
                      </p>
                      <a
                        href={item.ButtonUrl}
                        className="btn btn_light color_black"
                      >
                        {item.ButtonLabel}
                      </a>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div
                    className={`right_content_col px-0 d-flex align-items-center team_right_col ${
                      headingRightClassMap[item.Slider_Color_Code] || "financial_right_col"
                    }`}
                  >
                    <img
                      src={`${baseUrl}${item.image?.url}`}
                      className="img-fluid w-100 h-100 object_cover"
                      alt={item.image?.alternativeText || item.Heading}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls (optional) */}
          {/*
    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
    */}
        </div>
      </div>

      {/* <!-- start culture section --> */}
    </>
  );
};

export default Services;
