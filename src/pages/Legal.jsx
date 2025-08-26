import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const Legal = () => {
  const [legalData, setLegalData] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}/legal`)
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
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: legalData?.legal }}
      ></div>
    </>
  );
};

export default Legal;
