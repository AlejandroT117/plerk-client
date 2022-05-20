import { useEffect, useState } from "react";

export const useGet = (fn) => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let response = await fn();
      setResponse(response);

     }
     fetchData();
   }, []);
 return response;
}

/*let mostSales = useGet(getEnterpriseMostSales);
  */