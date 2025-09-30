import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const Legal = () => {
  const [legalData, setLegalData] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}/legal?populate[seo][populate]=*`)
      .then((res) => {
        // console.log("-----", res);
        setLegalData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching Legal data:", error);
      });
  }, []);
  return (
    <>
    
    <title>{legalData?.seo?.metaTitle || legalData?.PageTitle}</title>
        <meta
          name="description"
          content={legalData?.seo?.metaDescription || "Default description"}
        />
        <meta name="keywords" content={legalData?.seo?.keywords || ""} />
        <link
          rel="canonical"
          href={legalData?.seo?.canonicalURL || window.location.href}
        />

        {/* OpenGraph */}
        <meta property="og:title" content={legalData?.seo?.openGraph?.ogTitle} />
        <meta
          property="og:description"
          content={legalData?.seo?.openGraph?.ogDescription}
        />
        <meta property="og:type" content={legalData?.seo?.openGraph?.ogType} />
        <meta property="og:url" content={legalData?.seo?.openGraph?.ogUrl} />
        {legalData?.seo?.metaImage?.url && (
          <meta property="og:image" content={`${baseUrl}${legalData?.seo?.metaImage?.url}`} />
        )}
      <style>{`

      .menu-line{
      background-color: #000 !important;
  }
`}</style>
      <div
        className="container privacy_container"
        dangerouslySetInnerHTML={{ __html: legalData?.legal }}
      ></div>
    </>
  );
};

export default Legal;
