import { useEffect, useState } from "react";
import { PRODUCTS_API } from "../utils/constants";

const useProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(PRODUCTS_API);
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return [products, error];
};

export default useProductDetails;
