import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;
const TalentOnDemand = () => {
  const [talentDemandData, setTalentDemandData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/talent-on-demand?populate[Services][populate][ServicesName][populate]=*&populate[FAQs][populate]=*&populate[Section5][populate]=*&populate[Brands_Images][populate]=*&populate[Testimonials][populate]=*&populate[Stories][populate][All_Stories][populate]=*`
      )
      .then((res) => {
        // console.log("-----", res);
        setTalentDemandData(res.data.data);

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
              center: true,
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
        }, 150);
      })
      .catch((error) => {
        console.error("Error fetching header data:", error);
      });
  }, []);
  console.log(talentDemandData);

  return (
    <>
      <style>{`
  .hamburger i {
    color: #fff !important;
  }
    .navbar-brand p{
      color:#fff !important;
    }
      .nav-btn .btn_primary{
      color:#000;
      background-color:#fff;
      }
      .nav-btn .btn_primary:hover{
        background-color:var(--primary_color) !important;
        color:#fff !important;

      }
`}</style>

      {/* Popups Loop */}
      {talentDemandData?.Services?.ServicesName?.map((service) => (
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
      <div className="container-fluid executive_banner On-Demand-banner">
        <div className="container">
          <div className="executive_col">
            <h2
              className="large_heading_2  text-center text-white"
              dangerouslySetInnerHTML={{
                __html: talentDemandData?.BannerHeading || "",
              }}
            ></h2>
          </div>
        </div>
      </div>

      <div className="container-fluid impact_section d-flex align-items-center px-0 flexible_part executive_impact_section">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col">
            <div className="px-5 content mx-5">
              <div
                dangerouslySetInnerHTML={{
                  __html: talentDemandData?.Section2Heading || "",
                }}
              ></div>
              <h3
                className="font_40 fw-bold color_teal wow multi_heading animate__slideInLeft text-start"
                style={{ fontSize: "27px" }}
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                dangerouslySetInnerHTML={{
                  __html: talentDemandData?.Section2Description || "",
                }}
              ></h3>
            </div>
          </div>
          <div className="px-5 col-md-6 d-flex right-img-2 align-items-center"></div>
        </div>
      </div>

      {/* <!-- start services section --> */}
      <section className="services_section bg_cover sec_py on_demand_services_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <h3 className="color_black fw-bold">
                {talentDemandData?.Services?.Heading}
              </h3>
              <p className="font_20">
                {talentDemandData?.Services?.Description}
              </p>
            </div>
          </div>
        </div>
        <div className="overflow_slider py-5">
          <div className="owl-carousel owl-theme strategy_slider">
            {talentDemandData?.Services?.ServicesName?.map((service) => (
              <div key={service.id} className="item">
                <div className="item_inner">
                  <div className="strategy_wrap">
                    <div className="inner_wrap">
                      <div>
                        <p className="text-dark">{service.description}</p>
                        <a
                          href="javascript:void(0)"
                          className="btn btn_primary btn_dark d-none"
                          data-bs-toggle="modal"
                          data-bs-target={`#team${service.id}`}
                        >
                          {service.buttonLabel || "Learn More"}
                        </a>
                      </div>
                    </div>
                    <p className="text-dark fw-bold pt-3 font_18 px-4">
                      {service.name}
                    </p>
                  </div>
                  <div className="before_hover_content">
                    <img
                      src={`${baseUrl}${service.image?.url}`}
                      alt={service.image?.alternativeText || ""}
                    />
                    <p className="text-white fw-bold font_18 pt-3 fade_text">
                      {service.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!------FAQ's Section------> */}

      <div className="container-fluid faqs_section d-flex bg_cover px-0">
        <div className="row mx-0 d-flex">
          <div className="heading_col d-flex align-items-center px-5 team_col pt-5 pb-5">
            <div className="px-5 content">
              <div
                dangerouslySetInnerHTML={{
                  __html: talentDemandData?.FAQs.Heading || "",
                }}
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: talentDemandData?.FAQs.Description || "",
                }}
              ></div>
            </div>

            <div className="accordion-part px-5 ">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {talentDemandData?.FAQs?.FAQ?.map((faq, index) => {
                  const collapseId = `flush-collapse-${index}`;
                  const headingId = `flush-heading-${index}`;

                  return (
                    <div className="accordion-item mb-2" key={faq.id || index}>
                      <h2 className="accordion-header" id={headingId}>
                        <button
                          className={`accordion-button font_20 color_teal fw-semibold ${
                            index !== 0 ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={collapseId}
                          dangerouslySetInnerHTML={{ __html: faq.Heading }}
                        />
                      </h2>
                      <div
                        id={collapseId}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          className="accordion-body"
                          dangerouslySetInnerHTML={{ __html: faq.Description }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="px-5 col-md-6 d-flex align-items-center"></div>
        </div>
      </div>

      {/* <!-- join-section --> */}

      <div className="container-fluid bg_cover px-0 join-section justify-content-center d-flex align-items-center">
        <div className="row mx-0">
          <div className="col-md-6 d-flex px-5 align-items-center content-col-1 dif-col">
            <div className="content-outer-div">
              <div className="px-5 content mx-5">
                <h3 className="fw_600 text-start" style={{ fontSize: "38px" }}>
                  {talentDemandData?.Section5?.Column1_Heading}
                </h3>
                <div
                  className="pt-3"
                  dangerouslySetInnerHTML={{
                    __html:
                      talentDemandData?.Section5?.Column1_Description || "",
                  }}
                ></div>
                <div className="text-center btn_div mt-5">
                  <a
                    href={talentDemandData?.Section5?.Column1_Button_URL}
                    className="btn_light color_black"
                  >
                    {talentDemandData?.Section5?.Column1_Button_Label}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex px-5 align-items-center content-col-1">
            <div className="content-outer-div">
              <div className="px-5 content mx-5">
                <h3
                  className="fw_600  text-start"
                  style={{ fontSize: "38px" }}
                  dangerouslySetInnerHTML={{
                    __html: talentDemandData?.Section5?.Column2_Heading || "",
                  }}
                ></h3>
                <div
                  className="pt-3"
                  dangerouslySetInnerHTML={{
                    __html:
                      talentDemandData?.Section5?.Column2_Description || "",
                  }}
                ></div>
                <div className="text-center btn_div mt-5">
                  <a
                    href={talentDemandData?.Section5?.Column2_Button_URL}
                    className="btn_light color_black"
                    target="_blank"
                  >
                    {talentDemandData?.Section5?.Column2_Button_Label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!----companies-logo-section-----> */}

      <div className="container-fluid companies_section bg_cover pt-5 pb-5 ">
        <div className="container mt-4 mb-4">
          <div className="row">
            <h3
              className="font_40 fw-bold companies_section_heading  wow animate__slideInLeft text-start"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              {talentDemandData?.Brand_Section_Heading}
            </h3>
            <p className="font_28 text-dark companies_section_para">
              {talentDemandData?.Brand_Section_Description}
            </p>
          </div>
          <div className="row d-flex justify-content-center mt-4 first-logo-row">
            {talentDemandData?.Brands_Images?.map((brand, index) => (
              <div className="logo_col" key={`brand1-${index}`}>
                <div className="logo_col_inner">
                  <img src={`${baseUrl}${brand?.url}`} alt={`brand-${index}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- testimonials-section --> */}
      <div className="container-fluid bg_cover testimonials_part px-0">
        <div className="container">
          <div className="row mx-0">
            <div className="testimonials-heading mt-5 pt-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: talentDemandData?.Testimonials?.Heading || "",
                }}
              ></div>
            </div>
            <div className="testimonials d-flex justify-content-end">
              <div className="testimonials-inner">
                {/* <!-- Carousel --> */}
                <div
                  id="demo"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  {/* <!-- Indicators/dots --> */}
                  <div className="carousel-indicators">
                    {talentDemandData?.Testimonials?.Testimonial?.map(
                      (_, index) => (
                        <button
                          key={index}
                          type="button"
                          data-bs-target="#demo"
                          data-bs-slide-to={index}
                          className={index === 0 ? "active" : ""}
                          aria-current={index === 0 ? "true" : undefined}
                          aria-label={`Slide ${index + 1}`}
                        ></button>
                      )
                    )}
                  </div>

                  {/* <!-- The slideshow/carousel --> */}
                  <div className="carousel-inner">
                    {talentDemandData?.Testimonials?.Testimonial?.map(
                      (item, index) => (
                        <div
                          key={item.id || index}
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                        >
                          <div
                            dangerouslySetInnerHTML={{ __html: item.Review }}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid faqs_section stories-section d-flex bg_cover px-0 sec_py align-items-center"
        id="fractional-contractors"
      >
        <div className="container py-4">
          <div className="row mx-0 d-flex">
            <h3
              className="font_40 fw-bold  stories-section-heading wow animate__slideInLeft text-start"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              {talentDemandData?.Stories?.Heading}
            </h3>
            <p className="font_28  stories-section-para">
              {talentDemandData?.Stories?.Description}
            </p>
          </div>
          <div className="row d-flex justify-content-between pt-5 mx-0">
            {talentDemandData?.Stories?.All_Stories?.map((story) => (
              <div key={story.id} className="circle-container my-3">
                <img
                  src={`${baseUrl}${story?.image?.url}`} // Replace with story.image if available
                  alt={`Story ${story.id}`}
                  className="circle-image"
                />
                <div
                  className="circle-overlay"
                  dangerouslySetInnerHTML={{ __html: story.Description_1 }}
                />
                <div className="circle-hover text-white">
                  <div
                    dangerouslySetInnerHTML={{ __html: story.Description_2 }}
                  />
                  <a href={story.Link_URL} className="text-white">
                    {story.Link_label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentOnDemand;
