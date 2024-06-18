import { useEffect, useState } from "react";
import { REVENUE_API } from "../utils/constants";

const useRevenueDetails = () => {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(REVENUE_API);
        const jsonData = await response.json();
        setDetails(jsonData);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return [details,error];
};

export default useRevenueDetails;
