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
    lines.map((line, i) => <p key={i}>{line}</p>);

  return (
    <>
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

      <div className="portfolio_row">
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

      {/* Testimonials Section */}
      <div className="container-fluid bg_cover testimonials_part px-0">
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
                  id="demo"
                  className="carousel slide"
                  data-bs-ride="carousel"
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
