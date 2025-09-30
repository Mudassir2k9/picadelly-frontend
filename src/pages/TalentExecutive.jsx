import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const TalentExecutive = () => {
  const [talentExectiveData, setTalentExectiveData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/talent-executive?populate[Section5][populate]=*&populate[Testimonial][populate]=*&populate[seo][populate]=*`
      )
      .then((res) => {
        // console.log("-----", res);
        setTalentExectiveData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching header data:", error);
      });
  }, []);
     
  console.log(talentExectiveData);
  
  return (
    <>

    <title>{talentExectiveData?.seo?.metaTitle || talentExectiveData?.PageTitle}</title>
        <meta
          name="description"
          content={talentExectiveData?.seo?.metaDescription || "Default description"}
        />
        <meta name="keywords" content={talentExectiveData?.seo?.keywords || ""} />
        <link
          rel="canonical"
          href={talentExectiveData?.seo?.canonicalURL || window.location.href}
        />

        {/* OpenGraph */}
        <meta property="og:title" content={talentExectiveData?.seo?.openGraph?.ogTitle} />
        <meta
          property="og:description"
          content={talentExectiveData?.seo?.openGraph?.ogDescription}
        />
        <meta property="og:type" content={talentExectiveData?.seo?.openGraph?.ogType} />
        <meta property="og:url" content={talentExectiveData?.seo?.openGraph?.ogUrl} />
        {talentExectiveData?.seo?.metaImage?.url && (
          <meta property="og:image" content={`${baseUrl}${talentExectiveData?.seo?.metaImage?.url}`} />
        )}
      <style>{`
              body .nav-btn .btn_primary{
    background-color: #fff !important;
    color: #000 !important;
    }
// .executive_banner{
//           margin-bottom: 80vh; 
// }
            .split_parent{
      position: relative;
    }
    .cc-image, .cc-text{
      width: 50%;
          height: 100svh;
    }
    .cc-text{
      height: 100svh;
      background-color: #e9e9e9;
      position: sticky !important;
      top: 0;
          // margin-top: -50svh;
          display: flex;
          align-items: center;
          padding: 10px 5%
    }
    .cc-image{
      position: sticky !important;
      top: 0;
          height: 100svh;
    }
    .cc-image img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .img_1{
      margin-right: auto;
    }
    .img_3{
      margin-left: auto;
    }
        .cc-text{
        overflow: hidden
        }
          .img_2{
          margin-left: auto
          }
    .cc-text-1{
      margin-left: auto;
        margin-top: 0px;
    }
           .cc-text-3{
          margin-right: auto
           }
    .split_image-parent{
      height: 100%;
    }
    // .cc-text-1{
    //       margin-top: -20svh;
    // }
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
      .unordered li span{
       color:#000 !important;
      }
     .nav-btn .btn_primary:hover{
        background-color:var(--primary_color) !important;
        color:#fff !important;

      }
          .executive_impact_section{
            background-attachment: fixed;
        background-image: none !important;
          }
        .impact_section_2{
        background-image: url("images/impact_bg.png") !important;
        position: sticky !important;
        top: 0 !important
        }
        .orange_right_col{
         background-image: url("images/orange-bg.jpg") !important;
            background-size: cover;
    background-position: center;
        overflow: hidden
        }
        .impact_section h3.font_40 p, .impact_section h3.font_40{
        font-size: 48pt !important;
        }
        .impact_section_2 .team_col::after{
    left: auto !important;
    right: -290px !important;
        }
    .scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.scroll-reveal.show {
  opacity: 1;
  transform: translateY(0);
}


`}</style>
      <div className=" inner_page_section container-fluid executive_banner">
        <div className="container">
          <div className="executive_col">
            <h1
              className="large_heading_2 fw-semibold text-center text-white woww aanimate__fadeInDownBig"
              dangerouslySetInnerHTML={{
                __html: talentExectiveData?.BannerHeading || "",
              }}
            ></h1>
          </div>
        </div>
      </div>
      {/* <!-- Impact-section --> */}
  <div className="inner_page_section container-fluid impact_section impact_section_2 d-flex align-items-center px-0">
        <div className="row mx-0">
               <div className=" heading_col col-md-6 d-flex align-items-center px-5 team_col">
          <div className="px-5 content">
            <h3
              className="font_40 fw-semibold color_primary impact_section_heading woww aanimate__slideInLeft text-start"
              data-woww-duration="1s"
              data-woww-delay="0.3s"
              dangerouslySetInnerHTML={{
                __html: talentExectiveData?.Section2Heading || "",
              }}
            ></h3>
            <div
              dangerouslySetInnerHTML={{
                __html: talentExectiveData?.Section2Description || "",
              }}
            ></div>
          </div>
        </div>
        <div className="empty_col col-md-6 d-flex align-items-center position-relative">
          
        </div>
        </div>
    </div>

    {/*end first section*/}
      <div className="inner_page_section container-fluid impact_section  px-0 executive_impact_section split_impact-section position-relative">
        {/*<div className="row mx-0">*/}
  
        <div className=" cc-text split_col cc-text-1 team_col">
          <div className="px-5 content">
            <h3
              className="font_40 fw-semibold color_primary  woww aanimate__slideInLeft text-start"
              data-woww-duration="1s"
              data-woww-delay="0.3s"
              dangerouslySetInnerHTML={{
                __html: talentExectiveData?.Section5?.Column1_Heading || "",
              }}
            ></h3>
            <div
              dangerouslySetInnerHTML={{
                __html: talentExectiveData?.Section5?.Column1_Description || "",
              }}
            ></div>
          </div>
        </div>




        <div className=" cc-image split_col img_1 d-flex justify-content-center  align-items-center">
          <img src="images/left-impact-bg.jpg" className="img-fluid"></img>
        </div>
        {/*     </div>
      </div>*/}

        {/* <!-- Impact-section-2 --> */}
        {/* <div className="container-fluid impact_section impact_section_2 d-flex align-items-center px-0">
        <div className="row mx-0">*/}
        <div className="col-md-6 px-5 d-flex align-items-center content_inner cc-image split_col img_3  orange_right_col">
           <div className="px-5 content ">
            <h3
              className="font_40 fw-semibold color_black woww aanimate__slideInLeft text-start"
              data-woww-duration="1s"
              data-woww-delay="0.3s"
              dangerouslySetInnerHTML={{
                __html: talentExectiveData?.Section5?.Column2_Heading || "",
              }}
            ></h3>
            <div
              dangerouslySetInnerHTML={{
                __html: talentExectiveData?.Section5?.Column2_Description || "",
              }}
            ></div>
            <a
              href={talentExectiveData?.Section5?.Column2_Button_URL}
              className="btn_light mt-4 color_black"
            >
              {talentExectiveData?.Section5?.Column2_Button_Label}
            </a>
          </div>        </div>

        {/*   </div>
      </div>*/}

        {/* <!-- Leader-section --> */}

        {/* <div className="container-fluid leader_section bg_cover only_content px-0">
        <div className="row mx-0">*/}
        <div className=" cc-text split_col cc-text-3 impact split_last_col d-flex align-items-center">
          <div className="px-5 content">
            <h3
              className="font_40 fw-semibold color_primary impact_section_heading woww aanimate__slideInLeft text-start"
              data-woww-duration="1s"
              data-woww-delay="0.3s"
              dangerouslySetInnerHTML={{
                __html: talentExectiveData?.Section3Heading || "",
              }}
            ></h3>
            <div
              dangerouslySetInnerHTML={{
                __html: talentExectiveData?.Section3Description || "",
              }}
            ></div>
          </div>
        </div>
        

        {/* <div className=" cc-image split_col img_2">
          <img src="images/impact_bg.png" className="img-fluid"></img>
        </div> */}
        {/*<div className="col-md-6 px-5 d-flex align-items-center content_inner cc-image split_col img_3 o_bg_primary">
         
        </div>*/}
      </div>
      {/*</div>*/}

      {/* <!-- Content-section --> */}
      <div className="inner_page_section container-fluid only_content bg_cover d-flex  align-items-center px-0">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center mx-0">
            <div
              className="col-md-10 content_inner"
              dangerouslySetInnerHTML={{
                __html: talentExectiveData?.Section4 || "",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* <!-- testimonials-section --> */}
      <div className="inner_page_section container-fluid bg_cover testimonials_part px-0">
        <div className="container">
          <div className="row mx-0">
            <div className="testimonials-heading mt-5 pt-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: talentExectiveData?.Testimonial?.Heading || "",
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
                  data-bs-interval="8000"
                >
                  {/* <!-- Indicators/dots --> */}
                  <div className="carousel-indicators">
                    {talentExectiveData?.Testimonial?.Testimonial?.map(
                      (item, index) => (
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
                    {talentExectiveData?.Testimonial?.Testimonial?.map(
                      (item, index) => (
                        <div
                          key={index}
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.Review || "",
                            }}
                          ></div>
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
    </>
  );
};

export default TalentExecutive;
