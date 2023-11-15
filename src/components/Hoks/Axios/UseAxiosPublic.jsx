import axios from "axios";


const axiosPublic = axios.create({
    baseUrl: 'http://localhost:5000'
})
const UseAxiosPublic = () => {
  return axiosPublic;
    
};

export default UseAxiosPublic;