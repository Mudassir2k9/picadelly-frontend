import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const NewsItem = () => {
  const [newsItemData, setNewsItemData] = useState(null);
  const [newsData, setNewsData] = useState(null);
   const [query, setQuery] = useState("");
  const [matches, setMatches] = useState([]);
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

  useEffect(() => {
      axios
        .get(
          `${apiUrl}/news?populate[News][populate]=*`
        )
        .then((res) => {
          setNewsData(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching landing data:", error);
        });
    }, []);
  console.log("newsData", newsData);
  console.log("newsItemData", newsItemData);
  console.log("matches", matches);

   const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value) {
      const results = newsData.filter((item) => {
        return (
          item.News.Title.toLowerCase().includes(value) ||
          item.News.Tag_Line.toLowerCase().includes(value)
        );
      });
      setMatches(results);
    } else {
      setMatches([]);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setMatches([]);
  };


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
        .search-box .search-icon{
        left: auto !important;
        right: 0px !important;
        margin-right: 10px;
        }
      .search-box {
        position: relative;
        width: 250px;
      }
        #suggestions{

    background-color: #ffffff99;
    border-radius: 8px;
    margin-top: 5px;
    padding: 10px 20px;

        }
#suggestions li{
        list-style: none;
        margin: 10px 0px;
        transition: all 0.3s
}
        #suggestions li:hover{
        color: #f2682a !important;
        transition: all 0.3s
        }
        .search-box input {
          width: 100%;
          padding: 6px 15px !important;
        border-radius: 8px !important;
        overflow: hidden !important;
        border: 0px !important;
        height: 50px;

        }

        .search-icon,
        .clear-icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }

        .search-icon {
          left: 8px;
        }

        .clear-icon {
          right: 8px;
          display: none;
        }

        .suggestions {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #fff;
          border: 1px solid #ddd;
          max-height: 200px;
          overflow-y: auto;
          z-index: 10;
        }

        .suggestions li {
          padding: 6px 10px;
          cursor: pointer;
        }

        .suggestions li:hover {
          background: #f0f0f0;
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
            <div className="search-box">
            <div className="search_input input-group">
              
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleSearch}
              />
              <i className="fa fa-search search-icon input-group-text bg-transparent border-0"></i>
              {query && (
                <i
                  className="fa fa-times clear-icon"
                  onClick={clearSearch}
                  style={{ cursor: "pointer" }}
                ></i>
              )}
              </div>
              {matches.length > 0 && (
                <ul id="suggestions">
                  {matches.map((item) => (
                    <li
                      key={item.News.id}
                      onClick={() => (window.location.href = `/news-item/${item.documentId}`)}
                      style={{ cursor: "pointer" }}
                    >
                      <strong>{item.News.Title}</strong>
                      <br />
                      <small>{item.News.Tag_Line}</small>
                    </li>
                  ))}
                </ul>
              )}
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

      {/* <div className="container-fluid px-0">
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
      </div> */}
    </>
  );
};

export default NewsItem;
