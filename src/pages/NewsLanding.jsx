import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const NewsLanding = () => {

    const [landingData, setLandingData] = useState(null);
    const [catData, setCatData] = useState(null);
    const [newsData, setNewsData] = useState(null);
  
    useEffect(() => {
      axios
        .get(
          `${apiUrl}/news-landing`
        )
        .then((res) => {
          setLandingData(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching landing data:", error);
        });

      axios
        .get(
          `${apiUrl}/categories`
        )
        .then((res) => {
          setCatData(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching landing data:", error);
        });

        axios
        .get(
          `${apiUrl}/news?populate[News][populate][Feature_Image][populate]=*&populate[News][populate]=category`
        )
        .then((res) => {
          setNewsData(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching landing data:", error);
        });

    }, []);
    console.log("newsData", newsData);
    console.log("catData", catData);
    console.log("landingData", landingData);

  return (
    <>
      <style>{`
    .navbar-brand p{
      color:#fff !important;
    }
        .menu-line{
      background-color: #000 !important;
}
      @media only screen and (max-width: 576px) {
       .hamburger .menu-line{
    background-color: #fff !important;
  }
      }
`}</style>
      <div className="container-fluid executive_banner work_banner news_banner">
        <div className="container">
          <div className="executive_col" 
          dangerouslySetInnerHTML={{ __html: landingData?.BannerHeading }}>
           
          </div>
        </div>
      </div>

      <div
        className="container-fluid px-0 blog-spotlight d-flex justify-content-center align-items-center"
        id="blog-spotlights"
      >
        <div className="row mx-0">
          <div className="col-md-6 px-5 d-flex  justify-content-center align-items-center bg-cover bg-white">
            <div className="content px-5">
              <div 
                dangerouslySetInnerHTML={{ __html: landingData?.Section2_Left_Column_Heading }}
               ></div>
              <div
                dangerouslySetInnerHTML={{ __html: landingData?.Section2_Left_Column_Description }}
               >

              </div>

              <a
                href={landingData?.Section2_Left_Column_Button_URL}
                className="btn_light bg_teal text-white mt-3"
                style={{ display: "inline-block" }}
              >
                {landingData?.Section2_Left_Column_Button_Label}
              </a>
            </div>
          </div>
          <div className="col-md-6 blog-right-col d-flex align-items-center px-5"
            dangerouslySetInnerHTML={{ __html: landingData?.Section2_Right_Column_Heading }}
          >
            
          </div>
        </div>
      </div>

      {/* <!------Articles-section-------> */}

      <div className="container-fluid px-0 pt-5 pb-5 latest-news bg-white position-relative" id="hot-news">
        <div className="container px-0">
          <div className="row px-0 mx-0 pt-5 pb-5">
            <div className="col-md-12 px-0">
              <div className="pills-part">
                {/* <!-- Nav pills --> */}
                <ul className="nav nav-pills" role="tablist">
                  {catData?.map((cat, i) => (
                    <li className="nav-item" key={cat.id}>
                      <a
                        className={`nav-link ${i === 0 ? "active" : ""}`} // first one active
                        data-bs-toggle="pill"
                        href={`#${cat.slug}`}
                      >
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* <!-- Tab panes --> */}
                <div className="tab-content">
                  {catData?.map((cat, i) => (
                    <div
                      key={cat.id}
                      id={cat.slug}
                      className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
                    >
                      {newsData
                        ?.filter((news) => news.News.category?.id === cat.id)
                        .map((news, j) => (
                          <a key={j} href={`/news-item/${news.documentId}`}>
                            <div className="Articles_intro">
                              <div className="info">
                                <p className="text-dark">{cat.name}</p>
                                <h3
                                  className="text-dark"
                                  style={{ maxWidth: "80%" }}
                                  dangerouslySetInnerHTML={{ __html: news.News.Title }}
                                />
                              </div>
                              <div className="on_hover-img">
                                <img
                                  src={`${baseUrl}${news.News.Feature_Image?.url}`}
                                  alt={news.News.Feature_Image?.alternativeText || ""}
                                />
                              </div>
                            </div>
                          </a>
                        ))}
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLanding;
