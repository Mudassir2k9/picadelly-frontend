import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const PrivacyPolicy = () => {
  const [privacyPolicyData, setPrivacyPolicyData] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}/privacy-policy`)
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
