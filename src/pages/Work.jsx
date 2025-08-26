import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const Work = () => {
  const [workData, setWorkData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/work?populate[Work_History][populate]=*&populate[Testimonials][populate]=*`
      )
      .then((res) => {
        setWorkData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching header data:", error);
      });
  }, []);
  console.log(workData);
  const imageData = useMemo(() => {
    return (
      workData?.Work_History?.map((item) => ({
        src: item.image?.url ? baseUrl + item.image.url : "/images/default.jpg",
        lines: [
          `Category: ${item.Category || ""}`,
          item.Title || "",
          item.Company_Tagline || "",
          item.ButtonLabel || "",
          item.ButtonUrl || "",
        ],
      })) || []
    );
  }, [workData]);

  // Default index, change if needed
  const [currentIndex, setCurrentIndex] = useState(3);

  const updateIndex = (index) => {
    if (index >= 0 && index < imageData.length) {
      setCurrentIndex(index);
    }
  };

  const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
  const nextIndex =
    currentIndex < imageData.length - 1 ? currentIndex + 1 : null;

  const generateOverlayHTML = (lines = []) =>
    lines.map((line, i) =>
  i === 3
    ? (
      <p key={i}>
        <a href={lines[4]}>{line}</a>
      </p>
    )
    : i !== 4 && <p key={i}>{line}</p>
);



  return (
    <>
    <style>{`
    .navbar-brand p{
      color:#fff !important;
    }
      @media only screen and (max-width: 576px) {
       .hamburger i {
    color: #fff !important;
  }
  }
`}</style>
      <div className="container-fluid executive_banner work_banner">
        <div className="container">
           <div className="executive_col">
          <h2
            className="large_heading_2 text-center fw_300 text-white wow animate__fadeInDownBig"
            dangerouslySetInnerHTML={{
              __html: workData?.BannerHeading || "",
            }}
          ></h2>
        </div>
        </div>
       
      </div>

      <div className="portfolio_row" id="client-results">
        <div className="links_col">
          {workData?.Work_History?.map((item, index) => (
            <div
              key={item.id || index}
              className={`item_link ${index === currentIndex ? "default" : ""}`}
              onMouseEnter={() => updateIndex(index)}
            >
              {item.Title}
            </div>
          ))}
        </div>

        <div className="links_img_col">
          {/* Prev Thumb */}
          <div
            className="img_wrapper"
            onClick={() => prevIndex !== null && updateIndex(prevIndex)}
            style={{ cursor: prevIndex !== null ? "pointer" : "default" }}
          >
            {prevIndex !== null && imageData[prevIndex] ? (
              <>
                <img
                  id="prevThumb"
                  className="img_thumbnail"
                  src={imageData[prevIndex].src}
                  alt="Previous Thumbnail"
                />
                <div className="overlay_text" id="prevText">
                  {generateOverlayHTML(imageData[prevIndex].lines)}
                </div>
              </>
            ) : (
              <div className="img_thumbnail img-hidden"></div>
            )}
          </div>

          {/* Main Image */}
          <div className="img_wrapper main">
            <img
              id="mainImage"
              className="main-image"
              src={imageData[currentIndex]?.src}
              alt="Main Image"
            />
            <div className="overlay_text" id="mainText">
              {generateOverlayHTML(imageData[currentIndex]?.lines)}
            </div>
          </div>

          {/* Next Thumb */}
          <div
            className="img_wrapper"
            onClick={() => nextIndex !== null && updateIndex(nextIndex)}
            style={{ cursor: nextIndex !== null ? "pointer" : "default" }}
          >
            {nextIndex !== null ? (
              <>
                <img
                  id="nextThumb"
                  className="img_thumbnail"
                  src={imageData[nextIndex].src}
                  alt="Next Thumbnail"
                />
                <div className="overlay_text" id="nextText">
                  {generateOverlayHTML(imageData[nextIndex].lines)}
                </div>
              </>
            ) : (
              <div className="img_thumbnail img-hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* <!-- start team section --> */}
<div className="container-fluid px-0 team-section d-flex justify-content-center align-items-center">
  {/* Carousel */}
  <div id="demo" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-touch="true">
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
    </div>

    {/* The slideshow/carousel */}
    <div className="carousel-inner">
      {/* Healthcare */}
      <div className="carousel-item active" data-bs-interval="10000">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col bg_primary healthcare_col">
            <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
              <h3 className="font_40 fw-bold color_black">Healthcare</h3>
              <p className="font_18 color_black py-4">
                Named one of America's top marketing agencies in healthcare, Piccadilly’s deep knowledge generates measurable results and impact for your organization.
              </p>
              <a href="#" className="btn btn_light color_black">View the Work</a>
            </div>
          </div>
          <div className="right_content_col px-0 d-flex align-items-center team_right_col">
            <img src="images/healthcare-img.jpg" className="img-fluid w-100 h-100 object_cover" alt="Healthcare" />
          </div>
        </div>
      </div>

      {/* Financial Services */}
      <div className="carousel-item" data-bs-interval="10000">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col bg_primary financial_col">
            <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
              <h3 className="font_40 fw-bold color_black">Financial Services</h3>
              <p className="font_18 color_black py-4">
                Our strategic planning and results-driven marketing capabilities spark engagement and foster long-term customer growth, maximizing your ROI.
              </p>
              <a href="#" className="btn btn_light color_black">View the Work</a>
            </div>
          </div>
          <div className="right_content_col px-0 d-flex align-items-center team_right_col financial_right_col">
            <img src="images/financial-img.jpg" className="img-fluid w-100 h-100 object_cover" alt="Financial Services" />
          </div>
        </div>
      </div>

      {/* Tourism */}
      <div className="carousel-item" data-bs-interval="10000">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col bg_primary tourism_col">
            <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
              <h3 className="font_40 fw-bold color_black">Tourism</h3>
              <p className="font_18 color_black py-4">
                Our award-winning travel and tourism experience grabs your audience's attention, increases visitor spending, and boosts transient occupancy tax revenue.
              </p>
              <a href="#" className="btn btn_light color_black">View the Work</a>
            </div>
          </div>
          <div className="right_content_col px-0 d-flex align-items-center team_right_col tourism_right_col">
            <img src="images/tourism_img.jpg" className="img-fluid w-100 h-100 object_cover" alt="Tourism" />
          </div>
        </div>
      </div>

      {/* Non-Profit */}
      <div className="carousel-item" data-bs-interval="10000">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col bg_primary non-profit_col">
            <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
              <h3 className="font_40 fw-bold color_black">Non-Profit</h3>
              <p className="font_18 color_black py-4">
                Piccadilly has a proven track record of leveraging nonprofit marketing dollars to produce measurable impact and raise awareness of your mission.
              </p>
              <a href="#" className="btn btn_light color_black">View the Work</a>
            </div>
          </div>
          <div className="right_content_col px-0 d-flex align-items-center team_right_col non-stop_right_col">
            <img src="images/non-profit_img.jpg" className="img-fluid w-100 h-100 object_cover" alt="Non-Profit" />
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="carousel-item" data-bs-interval="10000">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col bg_primary education_col mx-0">
            <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
              <h3 className="font_40 fw-bold color_black">Education</h3>
              <p className="font_18 color_black py-4">
                Piccadilly's team of marketing experts craft campaigns and messaging designed to increase brand visibility and differentiation, and to catapult enrollment.
              </p>
              <a href="#" className="btn btn_light color_black">View the Work</a>
            </div>
          </div>
          <div className="right_content_col d-flex align-items-center justify-content-center px-0 mx-0 right_member_col financial_right_col education_right_col position-relative">
            <img src="images/education_img.jpg" className="img-fluid w-100 h-100 object_cover" alt="Education" />
          </div>
        </div>
      </div>
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

      {/* Testimonials Section */}
      <div className="container-fluid bg_cover testimonials_part px-0" id="testimonials">
        <div className="container">
          <div className="row mx-0">
            <div className="testimonials-heading mt-5 pt-3">
              <h3
                className="fw_600 text-light wow animate__slideInLeft text-start"
                style={{ fontSize: "36px" }}
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                dangerouslySetInnerHTML={{
                  __html: workData?.Testimonials?.Heading || "",
                }}
              ></h3>
            </div>
            <div className="testimonials d-flex justify-content-end">
              <div className="testimonials-inner">
                {/* Carousel */}
                <div
                  id="testimonial_slider"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  {/* Indicators/dots */}
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#testimonial_slider"
                      data-bs-slide-to="0"
                      className="active"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#testimonial_slider"
                      data-bs-slide-to="1"
                    ></button>
                  </div>

                  {/* Slideshow */}
                  <div className="carousel-inner">
                    {workData?.Testimonials?.Testimonial?.map((item, index) => (
                      <div
                        key={item.id || index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                        dangerouslySetInnerHTML={{ __html: item.Review }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
