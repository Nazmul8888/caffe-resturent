import axios from "axios";

 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000' 
})

const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors',token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      
    });
    axiosSecure.interceptors.request.use(function(response){
        return response;


    }, (error)=> {
        const status = error.response.status;
       console.log('status error in the interceptors', status)
        return Promise.reject(error);
    })
       

    return axiosSecure
    
};

export default useAxiosSecure;