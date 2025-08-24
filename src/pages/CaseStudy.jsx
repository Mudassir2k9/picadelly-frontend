import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const CaseStudy = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${apiUrl}/case-studies?populate[CaseStudy][populate][Channels][populate]=*&populate[CaseStudy][populate][Integrated_Services][populate]=*&populate[CaseStudy][populate][Projects][populate]=*&populate[CaseStudy][populate][Content][populate]=*&populate[CaseStudy][populate][Case_Study_Media][populate]=Media&populate[CaseStudy][populate]=BannerImage
`)
      .then((res) => {
        setCaseStudies(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching caseStudies:", error);
      });
  }, []);
  console.log(caseStudies);
  if (caseStudies.length === 0) {
    return <div>Loading...</div>;
  }

  const currentCase = caseStudies[currentIndex]?.CaseStudy;
  const prevCase =
    currentIndex > 0 ? caseStudies[currentIndex - 1].CaseStudy : null;
  const nextCase =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1].CaseStudy
      : null;

  // Helper to get full image URL for Strapi images
  const getImageUrl = (image) => {
    if (!image || !image.url) return "";
    return apiUrl.replace("/api", "") + image.url;
  };

  console.log("0-00-0-", currentCase);
  return (
    <>
      <style>{`
    body header{
     position:relative !important;
    }
      }
`}</style>
      <div className="container-fluid case_study_banner separate px-0">
        <div className="row banner-row mx-0">
          <div className="col-md-6 case_study-col-1 heading_part separate_col_1 px-0 blog_col-2">
            <div className="inner-div">
              <p className="font_20">{currentCase?.Heading1}</p>
              <div
                  dangerouslySetInnerHTML={{ __html: currentCase?.Heading2 }}
                />
            </div>
          </div>
          <div className="col-md-6 banner-col blog_col-2 separate_col_1 case_study-col-1">
            <div className="inner-div d-flex" style={{ width: "100%" }}>
              <div
                className="list-col d-flex justify-content-center"
                style={{ width: "40%" }}
              >
                <div className="list-inner">
                  <h5 className="fw_600">Channels</h5>
                  <ul style={{ paddingLeft: "26px" }}>
                    {currentCase?.Channels.map((channel, index) => (
                      <li key={index} className="font_18 mb-1">
                        {channel.Channel}
                      </li>
                    ))}
                    
                  </ul>
                </div>
              </div>
              <div
                className="list-col d-flex justify-content-center"
                style={{ width: "60%" }}
              >
                <div className="list-inner">
                  <h5 className="fw_600">Integrated Services</h5>
                  <ul style={{ paddingLeft: "26px" }}>
                    {currentCase?.Integrated_Services.map((channel, index) => (
                      <li key={index} className="font_18 mb-1">
                        {channel.Service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!------case-study-faqs------> */}

      <div className="container-fluid case-study-faqs bg-cover px-0">
        <div className="row mx-0 d-flex">
          <div className="heading_col d-flex align-items-center px-5 team_col pt-5 pb-5">
            <div className="px-5 content"
                  dangerouslySetInnerHTML={{ __html: currentCase?.Content?.Title }}
                >
            </div>

            <div className="accordion-part px-5 ">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item  mb-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button font_20 color_teal collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      {currentCase?.Content?.situationTitle}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body"
                  dangerouslySetInnerHTML={{ __html: currentCase?.Content?.situationText }}
               
                    >
                      
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button font_20 color_teal collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      {currentCase?.Content?.approachTitle}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body"
                    dangerouslySetInnerHTML={{ __html: currentCase?.Content?.approachText }}>
                     
                    </div>
                  </div>
                </div>
                <div className="accordion-item  mb-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button font_20 collapsed color_teal fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      {currentCase?.Content?.outcomeTitle}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body"
                    
                    dangerouslySetInnerHTML={{ __html: currentCase?.Content?.outcomeText }}>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 case-study-col-2 pb-5">
            <div className="circle-1 circle-one"
                  dangerouslySetInnerHTML={{ __html: currentCase?.Content?.Stats[0].value }}>
              
            </div>
            <div className="circle-1 circle-two"
            dangerouslySetInnerHTML={{ __html: currentCase?.Content?.Stats[1].value }}>
            </div>
            <div className="circle-1 circle-three"
            dangerouslySetInnerHTML={{ __html: currentCase?.Content?.Stats[2].value }}>
            </div>
          </div>
        </div>
      </div>

      {/* <!-----case-study-posts-----> */}

      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-1.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-2.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-3.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-4.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-6.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-5.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <!------video-section------> */}

      <div className="container-fluid d-flex justify-content-center align-items-center bg-cover video-section px-0">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center mx-0">
            <div className="col-md-8">
              <video controls autoPlay muted loop playsInline key={currentCase?.Case_Study_Media?.Media?.url}>
                  <source 
                    src={`${baseUrl}${currentCase?.Case_Study_Media?.Media?.url}`} 
                    type={currentCase?.Case_Study_Media?.Media?.mime || "video/mp4"} 
                  />
                </video>
              {/* <video controls muted="" loop="">
                <source src="images/home-banner-video.mp4" type="video/mp4" />
              </video> */}
              <h5 className="Video-title text-white mt-2">{currentCase?.Case_Study_Media?.Title}</h5>
            </div>
          </div>
        </div>
      </div>
      {/* <!-----project-section-----> */}

      <div className="container-fluid px-0">
  <div className="row mx-0">
    {/* Previous Project */}
    <div className="col-md-6 project-col px-0">
      {prevCase ? (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentIndex(currentIndex - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="overlay-div overlay-div-left text-end">
            <div className="project-inner-col">
              <span
                className="mb-5"
                style={{
                  fontSize: "32px",
                  color: "#ffffffad",
                  display: "inline-block",
                }}
              >
                ⟵
              </span>
              <br />
              <h5 className="text-white mb-3 font_18 fw_600">
                Previous Project :
              </h5>
              <h3 className="text-white font_40 fw_600">
                {prevCase?.Heading1}
              </h3>
            </div>
          </div>
          <img
            src={getImageUrl(prevCase?.BannerImage)}
            width="100%"
            alt={prevCase?.Heading1}
          />
        </a>
      ) : (
        <a href="#">
          <div className="overlay-div overlay-div-left text-end">
            <div className="project-inner-col">
              <span
                className="mb-5"
                style={{
                  fontSize: "32px",
                  color: "#ffffffad",
                  display: "inline-block",
                }}
              >
                ⟵
              </span>
              <br />
              <h5 className="text-white mb-3 font_18 fw_600">
                Previous Project :
              </h5>
              <h3 className="text-white font_40 fw_600">No Previous Project</h3>
            </div>
          </div>
          <img src="images/previous-project.png" width="100%" alt="No Previous Project" />
        </a>
      )}
    </div>

    {/* Next Project */}
    <div className="col-md-6 project-col px-0">
      {nextCase ? (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentIndex(currentIndex + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="overlay-div text-start">
            <div className="project-inner-col">
              <span
                className="mb-5"
                style={{
                  fontSize: "32px",
                  color: "#ffffffad",
                  display: "inline-block",
                }}
              >
                ⟶
              </span>
              <br />
              <h5 className="text-white mb-3 font_18 fw_600">Next Project :</h5>
              <h3 className="text-white font_40 fw_600">
                {nextCase?.Heading1}
              </h3>
            </div>
          </div>
          <img
            src={getImageUrl(nextCase?.BannerImage)}
            width="100%"
            alt={nextCase?.Heading1}
          />
        </a>
      ) : (
        <a href="#">
          <div className="overlay-div text-start">
            <div className="project-inner-col">
              <span
                className="mb-5"
                style={{
                  fontSize: "32px",
                  color: "#ffffffad",
                  display: "inline-block",
                }}
              >
                ⟶
              </span>
              <br />
              <h5 className="text-white mb-3 font_18 fw_600">Next Project :</h5>
              <h3 className="text-white font_40 fw_600">No Next Project</h3>
            </div>
          </div>
          <img src="images/next-project.png" width="100%" alt="No Next Project" />
        </a>
      )}
    </div>
  </div>
</div>

    </>
  );
};

export default CaseStudy;
