import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../../Provider/Hoks/useAuth";

 const axiosSecure = axios.create({
    baseURL: 'https://cafe-server-five.vercel.app/' 
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = UseAuth();
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors',token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      
    });
    axiosSecure.interceptors.request.use(function(response){
        return response;


    }, async (error)=> {
        const status = error.response.status;
    //    console.log('status error in the interceptors', status);
       if(status === 401 || status === 403){
        await logOut();

         navigate('/login')

       }
        return Promise.reject(error);
    })
       

    return axiosSecure
    
};

export default useAxiosSecure;