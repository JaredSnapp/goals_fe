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

import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";



// function useAxios<T>({ url, method, body = null, headers = null }) {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setloading] = useState(true);

//   const fetchData = () => {
//       axios[method](url, JSON.parse(headers), JSON.parse(body))
//           .then((res) => {
//               setResponse(res.data);
//           })
//           .catch((err) => {
//               setError(err);
//           })
//           .finally(() => {
//               setloading(false);
//           });
//   };

//   useEffect(() => {
//       fetchData();
//   }, [method, url, body, headers]);

//   return { response, error, loading };
// };



// function useAxios<T>(url: string) {
//   const [response, setResponse] = useState<T | undefined>(undefined);
//   const [error, setError] = useState("");
//   const [loading, setloading] = useState(true);

//   const fetchData = () => {
//     axios
//       .get(`/${url}`)
//       .then((res) => {
//         setResponse(res.data);
//       })
//       .catch((err) => {
//         setError(err);
//       })
//       .finally(() => {
//         setloading(false);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // custom hook returns value
//   return { response, error, loading };
// }


// function useAxiosPost<T>(url: string) {
//   axios
//   .post(`/${url}`, {
//     firstName: "Fred",
//     lastName: "Flintstone",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }


interface axiosProps {
  url: any;
  // method?: any;
  // body?: any;
  headers: any;
}

function get<T>({ url, headers = null }:axiosProps) {
    // const [response, setResponse] = useState(null);
    const [response, setResponse] = useState<T | undefined>(undefined);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios({
            method: "GET",
            url: url,
            data: {},
            headers: JSON.parse(headers),
        })
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
    }, [url, headers]);

    return { response, error, loading };
};


function post<T>({ url, headers = null }:axiosProps) {
  // const [response, setResponse] = useState(null);
  const [response, setResponse] = useState<T | undefined>(undefined);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const postData = async (body:any) => {
      axios({
          method: "POST",
          url: url,
          data: body,
          headers: headers,
      })
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

  return { response, error, loading, postData };
};

function del<T>({ url, headers = null }: axiosProps) {
  const [response, setResponse] = useState<T | undefined>(undefined);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const deleteData = async (id : string) => {
    axios({
      method: "DELETE",
      url: `${url}/${id}`,
      headers: headers,
    })
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

  return { response, error, loading, deleteData };
}

export default { get, post, del };
