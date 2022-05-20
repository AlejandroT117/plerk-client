import { useEffect, useState } from "react";

export const useGet = (fn, param) => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let response = await fn(param);
      setResponse(response);

     }
     fetchData();
   }, []);
 return response;
}

/*let mostSales = useGet(getEnterpriseMostSales);
  */