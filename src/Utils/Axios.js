import axios from "axios"
import { useNavigate } from "react-router-dom";
import useLogout from "./useLogout";
import { clearCurrentUser } from "../componets/Info/actions/user";
import { useDispatch } from "react-redux";
import api from "../componets/ComponetApi";


const instance = axios.create({
  baseURL: api.basic,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// export const useTest =()=>{
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
  
  
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error.response.status === 401) {
     
        // useLogout();


    //     const dispatch = useDispatch();
    //   const navigate = useNavigate();

    // dispatch(clearCurrentUser());
    // navigate("/login")
      }
      return Promise.reject(error);
    }
  );


// instance.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },


//   function (error) {
//     console.log("Tosan")
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     if (error.response.status === 401) {
//       console.log("Osaige")
//       useLogout();
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;




