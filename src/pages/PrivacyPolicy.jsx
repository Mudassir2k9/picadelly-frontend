import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const PrivacyPolicy = () => {
  const [privacyPolicyData, setPrivacyPolicyData] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}/privacy-policy?populate[seo][populate]=*`)
      .then((res) => {
        // console.log("-----", res);
        setPrivacyPolicyData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching Privacy Policy data:", error);
      });
  }, []);
  return (
    <>
    
    <title>{privacyPolicyData?.seo?.metaTitle || privacyPolicyData?.PageTitle}</title>
        <meta
          name="description"
          content={privacyPolicyData?.seo?.metaDescription || "Default description"}
        />
        <meta name="keywords" content={privacyPolicyData?.seo?.keywords || ""} />
        <link
          rel="canonical"
          href={privacyPolicyData?.seo?.canonicalURL || window.location.href}
        />

        {/* OpenGraph */}
        <meta property="og:title" content={privacyPolicyData?.seo?.openGraph?.ogTitle} />
        <meta
          property="og:description"
          content={privacyPolicyData?.seo?.openGraph?.ogDescription}
        />
        <meta property="og:type" content={privacyPolicyData?.seo?.openGraph?.ogType} />
        <meta property="og:url" content={privacyPolicyData?.seo?.openGraph?.ogUrl} />
        {privacyPolicyData?.seo?.metaImage?.url && (
          <meta property="og:image" content={`${baseUrl}${privacyPolicyData?.seo?.metaImage?.url}`} />
        )}
      <style>{`

      .menu-line{
      background-color: #000 !important;
  }
`}</style>
      <div
        className="container privacy_container"
        dangerouslySetInnerHTML={{ __html: privacyPolicyData?.privacy_policy }}
      ></div>
    </>
  );
};

export default PrivacyPolicy;
