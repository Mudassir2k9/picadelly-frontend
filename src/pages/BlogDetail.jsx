import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const BlogDetail = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${apiUrl}/blogs?populate[Blogs][populate]=*`)
      .then((res) => {
        setBlogs(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  if (blogs.length === 0) {
    return <div>Loading...</div>;
  }

  const currentBlog = blogs[currentIndex]?.Blogs?.[0];
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1].Blogs?.[0] : null;
  const nextBlog =
    currentIndex < blogs.length - 1 ? blogs[currentIndex + 1].Blogs?.[0] : null;

  // Helper to get full image URL for Strapi images
  const getImageUrl = (image) => {
    if (!image || !image.url) return "";
    return apiUrl.replace("/api", "") + image.url;
  };

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row banner-row mx-0">
          <div className="col-md-8 case_study-col-1 blog_col-1 px-5 pb-5">
            <div className="inner-div px-4">
              <p className="font_20">BLOG POST</p>
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
          <div className="col-md-4 banner-col blog_col-1 case_study-col-1 px-5 pb-5">
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

      {/* Blog Banner with Header Image */}
      <div
        className="container-fluid blog_banner bg_cover px-0"
        style={{
          backgroundImage: `url(${getImageUrl(currentBlog?.Header_Image)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "430px",
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
            <div className="sticky-sidebar" id="sidebar">
              {/* Dynamically generate links based on Blog_Content Titles */}
              {currentBlog?.Blog_Content?.map((section, idx) => (
                <a
                  key={section.id}
                  href={`#section-${idx}`}
                  className="heading-link"
                >
                  {section.Title || `Section ${idx + 1}`}
                </a>
              ))}
            </div>
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
                }}
              >
                <div className="overlay-div text-end">
                  <span className="mb-5"> ⟵</span>
                  <br />
                  <h5 className="text-white mb-3 font_18 fw_500">
                    Category : {/* If you have category, put here */}
                  </h5>
                  <h3 className="text-white fw_600">{prevBlog.Blog_Title_1}</h3>
                </div>
                <img
                  src={getImageUrl(prevBlog.Header_Image)}
                  alt={prevBlog.Blog_Title_1}
                />
              </a>
            ) : (
              <div className="overlay-div text-end">
                <span className="mb-5"> ⟵</span>
                <br />
                <h5 className="text-white mb-3 font_18 fw_500">Category :</h5>
                <h3 className="text-white fw_600">No Previous Blog</h3>
                <img src="images/previous-blog.png" alt="No previous blog" />
              </div>
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
                }}
              >
                <div className="overlay-div text-start">
                  <span className="mb-5"> ⟶</span>
                  <br />
                  <h5 className="text-white mb-3 font_18 fw_500">
                    Category : {/* If you have category, put here */}
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
              <div className="overlay-div text-start">
                <span className="mb-5"> ⟶</span>
                <br />
                <h5 className="text-white mb-3 font_18 fw_500">Category :</h5>
                <h3 className="text-white font_40 fw_600">No Next Blog</h3>
                <img src="images/next-blog.png" alt="No next blog" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
