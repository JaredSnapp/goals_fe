// import axios from "axios";
// import { useState } from "react";

// axios.defaults.baseURL = "http://localhost:3000";

// // const createApi = (url: string) => {
// export const useApi = (url:string) => {
//     const [data, setData] = useState(undefined);
//     const [error, setError] = useState<any>("");
//     const [loading, setLoading] = useState(true);

//     const fetch = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios(`/${url}`);
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }

//       return { data, loading, error };
//     };

//     return { fetch };
//   };
//   // return useApi
// // };

// // export const goalsApi = createApi("goal");


// 

import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';


function useAxios<T> (url:string) {
  const [response, setResponse] = useState<T | undefined>(undefined);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
      axios
          .get(`/${url}`)
          .then((res) => {
              setResponse(res.data);
          })
          .catch((err) => {
              setError(err);
          })
          .finally(() => {
              setloading(false);
          });
  };

  useEffect(() => {
      fetchData();
  }, []);

  // custom hook returns value
  return { response, error, loading };
};


interface axiosProps {
  url: any,
  method: any
  body: any
  headers: any
}


// const useAxios = ({ url, method, body = null, headers = null }:axiosProps) => {
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState('');
//     const [loading, setloading] = useState(true);

//     const fetchData = () => {
//         axios[method](url, JSON.parse(headers), JSON.parse(body))
//             .then((res) => {
//                 setResponse(res.data);
//             })
//             .catch((err) => {
//                 setError(err);
//             })
//             .finally(() => {
//                 setloading(false);
//             });
//     };

//     useEffect(() => {
//         fetchData();
//     }, [method, url, body, headers]);

//     return { response, error, loading };
// };

export default useAxios;
