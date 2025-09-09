import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
import { useLocation } from "react-router-dom";

const BlogDetail = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const caseId = params.get("id");
  const [catData, setCatData] = useState(null);
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}/blogs?populate[Blogs][populate]=*`)
      .then((res) => {
        const data = res.data.data;
        setBlogs(data);
        if (caseId) {
          const foundIndex = data.findIndex(
            (cs) => String(cs.documentId) === String(caseId)
          );
          if (foundIndex !== -1) {
            setCurrentIndex(foundIndex);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
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


  }, [caseId]);
  console.log(blogs);
  if (blogs.length === 0) {
    return <div>Loading...</div>;
  }

  const currentBlog = blogs[currentIndex]?.Blogs;
  const currentBlogC = blogs[currentIndex];
  console.log("currentBlog",currentBlogC);
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1].Blogs : null;
  const nextBlog =
    currentIndex < blogs.length - 1 ? blogs[currentIndex + 1].Blogs : null;

  // Helper to get full image URL for Strapi images
  const getImageUrl = (image) => {
    if (!image || !image.url) return "";
    return apiUrl.replace("/api", "") + image.url;
  };

  return (
    <>
    <title>{currentBlogC?.PageTitle}</title>
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
      <div className="container-fluid  blog_detail_banner separate px-0">
        <div className="row banner-row mx-0">
          <div className="col-md-8 case_study-col-1 heading_part separate_col_1 px-0 blog_col-1  pb-5">
            <div className="inner-div ">
              <h1 className="font_20">BLOG POST</h1>
              <h2
                className="color_primary fw_600"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <span className="text-dark fw_500">
                  {currentBlog?.Blog_Title_1 || ""}
                </span>
                <br /> {currentBlog?.Blog_Title_2 || ""}
              </h2>
            </div>
          </div>
          <div className="col-md-4 banner-col blog_col-1 blog_col_2 separate_col_1 case_study-col-1 px-0 px-md-5 pb-5">
            <div className="inner-div d-flex" style={{ width: "100%" }}>
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
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Banner with Header Image */}
      <div
        className="container-fluid blog_banner bg_cover px-0"
        style={{
          backgroundImage: `url(${getImageUrl(currentBlog?.Header_Image)})`,
        }}
      >
        <div className="row mx-0">
          <div className="col-md-4 empty-overlay"></div>
          <div className="col-md-8"></div>
        </div>
      </div>

      {/* Blog Detail Content */}
      <div
        className="container-fluid px-0"
        data-bs-spy="scroll"
        data-bs-target="#sidebar"
        data-bs-offset="100"
        tabIndex="0"
      >
        <div className="row mx-0">
          {/* Sticky Left Sidebar */}
          <div className="col-md-4 left-sidebar px-5 pt-5 pb-5">
            <div class="search-box d-none">
              <i class="fa fa-search search-icon"></i>
              <input type="text" placeholder="Search" />
              <i class="fa fa-times clear-icon"></i>
            </div>
              <div class="sidebar">
               
                {catData?.map((cat) => {
                // 🔹 Count items based on category type
                const count =
                  cat.name === "Blogs"
                    ? blogs?.length || 0
                    : newsData?.filter((news) => news.News.category?.id === cat.id).length || 0;

                return (
                  <div className="dropdown" key={cat.id}>
                    {/* 🔹 Button with category name + counter */}
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-heading dropdown-heading2 d-flex justify-content-between align-items-center"
                      data-bs-toggle="dropdown"
                      style={{ minWidth: "220px" }}
                    >
                      <span>{cat.name}</span>
                      <span className="badge bg-light text-dark ms-2">{count}</span>
                    </button>

                    {/* 🔹 Dropdown items */}
                    <ul className="dropdown-menu submenu">
                      {cat.name === "Blogs" ? (
                        // ✅ Blogs loop
                        blogs?.map((blog, j) => (
                          <li key={j}>
                            <a
                              className="dropdown-item sub-item"
                              href={`/blog-detail?id=${blog?.documentId}`}
                            >
                              {blog?.Blogs?.Blog_Title_2}
                            </a>
                          </li>
                        ))
                      ) : (
                        // ✅ News loop
                        newsData
                          ?.filter((news) => news.News.category?.id === cat.id)
                          .map((news, j) => (
                            <li key={j}>
                              <a
                                className="dropdown-item sub-item"
                                href={
                                  cat.name === "Announcements"
                                    ? "/buzz#announcement"
                                    : `/news-item/${news.documentId}`
                                }
                              >
                                {news.News.Title}
                              </a>
                            </li>
                          ))
                      )}
                    </ul>
                  </div>
                );
              })}


              </div>  

            {/* <div className="sticky-sidebar" id="sidebar"> */}
            {/* Dynamically generate links based on Blog_Content Titles */}
            {/* {currentBlog?.Blog_Content?.map((section, idx) => (
                <a
                  key={section.id}
                  href={`#section-${idx}`}
                  className="heading-link"
                >
                  {section.Title || `Section ${idx + 1}`}
                </a>
              ))} */}
            {/* </div> */}
          </div>

          {/* Scrollable Content Right Column */}
          <div className="col-md-8 px-5 pt-5 right-sidebar pb-5">
            {currentBlog?.Blog_Content?.map((section, idx) => (
              <section key={section.id} id={`section-${idx}`}>
                {section.Title && <h2>{section.Title}</h2>}
                <div
                  dangerouslySetInnerHTML={{ __html: section.Description }}
                />
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* Previous and Next Blogs */}
      <div className="container-fluid px-0">
        <div className="row mx-0">
          {/* Previous Blog */}
          <div className="col-md-6 project-col px-0">
            {prevBlog ? (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(currentIndex - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="overlay-div text-end">
                  <span className=""> ⟵</span>
                  <br />
                  <h5 className="text-white mb-3 font_18 fw_500">
                    {prevBlog?.category?.name} {/* If you have category, put here */}
                  </h5>
                  <h3 className="text-white fw_600">{prevBlog.Blog_Title_1}</h3>
                </div>
                <img
                  src={getImageUrl(prevBlog.Header_Image)}
                  alt={prevBlog.Blog_Title_1}
                />
              </a>
            ) : (
              <>
                <div className="overlay-div text-end">
                  <span className=""> ⟵</span>
                  <br />
                  <h5 className="text-white mb-3 font_18 fw_500">BLOG POST</h5>
                  <h3 className="text-white fw_600">No Previous Blog</h3>
                </div>
                <img src="images/previous-blog.png" alt="No previous blog" />
              </>
            )}
          </div>

          {/* Next Blog */}
          <div className="col-md-6 project-col px-0">
            {nextBlog ? (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(currentIndex + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="overlay-div text-start">
                  <span className=""> ⟶</span>
                  <br />
                  <h5 className="text-white mb-3 font_18 fw_500">
                    {nextBlog?.category?.name} {/* If you have category, put here */}
                  </h5>
                  <h3 className="text-white font_40 fw_600">
                    {nextBlog.Blog_Title_1}
                  </h3>
                </div>
                <img
                  src={getImageUrl(nextBlog.Header_Image)}
                  alt={nextBlog.Blog_Title_1}
                />
              </a>
            ) : (
              <>
                <div className="overlay-div text-start">
                  <span className=""> ⟶</span>
                  <br />
                  <h5 className="text-white mb-3 font_18 fw_500">BLOG POST</h5>
                  <h3 className="text-white font_40 fw_600">No Next Blog</h3>
                </div>
                <img src="images/next-blog.png" alt="No next blog" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
