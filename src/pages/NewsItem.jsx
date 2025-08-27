import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const NewsItem = () => {
  const [newsItemData, setNewsItemData] = useState(null);
  const { id } = useParams();
  console.log("ajfajk", id);

  useEffect(() => {
    if (!id) return;

    axios
      .get(
        `${apiUrl}/news/${id}?populate[News][populate][Feature_Image][populate]=*&populate[News][populate]=category&populate[News][populate][Banner_Image][populate]=*`
      )
      .then((res) => {
        setNewsItemData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching news item:", error);
      });
  }, [id]);

  console.log("newsItemData", newsItemData);
  return (
    <>
      <style>{`
     body header{
     background-color: #fff;
    }
      .menu-line{
      background-color: #000 !important;
}
     .nav-btn .btn_primary:hover{
        background-color:#000 !important;
        color:#fff !important;
        transition:all 0.3s !important;

      }
      }
`}</style>
      <div className="container-fluid news_item_banner separate px-0 blog_detail_banner">
        <div className="row banner-row mx-0">
          <div className="col-md-8 case_study-col-1 heading_part separate_col_1 blog_col-1 px-0 pb-5">
            <div className="inner-div">
              <p className="font_20">{newsItemData?.News?.category?.name}</p>
              <h2
                className="color_primary fw_600"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <span className="text-dark fw_500">
                  {newsItemData?.News?.Title}
                </span>
                <br /> {newsItemData?.News?.Tag_Line}
              </h2>
            </div>
          </div>
          <div className="col-md-4 banner-col blog_col-1 blog_col_2 separate_col_1 case_study-col-1 px-0 px-md-5 pb-5">
            <div className="inner-div d-flex">
              <div className=" d-flex justify-content-center">
                <div className="list-inner">
                  <p className="fw_600">SHARE THIS:</p>
                  <ul className="blog_icon_col d-flex justify-content-between">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-----News-banner-section----> */}

      <div className="container-fluid news_banner-img bg_cover" style={{backgroundImage: `url(${baseUrl}${newsItemData?.News?.Banner_Image?.url})`}}>
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

      {/* <!-----blog-detail-----> */}

      <div
        className="container-fluid px-0"
        data-bs-spy="scroll"
        data-bs-target="#sidebar"
        data-bs-offset="100"
        tabindex="0"
      >
        <div className="row mx-0">
          {/* <!-- Sticky Left Column --> */}
          <div className="col-md-4 left-sidebar px-5 pt-5 pb-5">
            <div class="search-box">
              <i class="fa fa-search search-icon"></i>
              <input type="text" placeholder="Search" />
              <i class="fa fa-times clear-icon"></i>
            </div>
          </div>

          {/* <!-- Scrollable Content Right Column --> */}
          <div className="col-md-8 px-5 pt-5 right-sidebar pb-5">
            <section id="approach">
              <div dangerouslySetInnerHTML={{ __html: newsItemData?.News?.Description_Title }}
               ></div>
              <div dangerouslySetInnerHTML={{ __html: newsItemData?.News?.Description }} ></div>
            </section>
          </div>
        </div>
      </div>
      {/* <!-----project-section-----> */}

      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-md-6 project-col px-0">
            <a href="#">
              <div className="overlay-div text-end">
                <div className="project-inner-col">
                  <span className="mb-5"> ⟵</span>
                  <br />
                  <h5 className="text-white mb-3 font_18 fw_600">ARTICLES :</h5>
                  <h3 className="text-white font_40 fw_600">
                    Mastering Omnichannel Communications: A Q&A with Seasoned
                    Marketing Leader, Luke Sinclair
                  </h3>
                </div>
              </div>
              <img src="images/previous-blog.png" />
            </a>
          </div>
          <div className="col-md-6 project-col px-0">
            <a href="#">
              <div className="overlay-div text-start">
                <div className="project-inner-col">
                  <span className="mb-5"> ⟶</span>
                  <br />
                  <h5 className="text-white mb-3 font_18 fw_600">
                    HEALTHCARE ARTICLES :
                  </h5>
                  <h3 className="text-white fw_600">
                    Healthcare Labor Shortage Predicted By 2028, With Uneven
                    State Impacts: Report
                  </h3>
                </div>
              </div>
              <img src="images/next-blog.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
