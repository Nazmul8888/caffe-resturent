import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Provider/Hoks/useAuth";
import UseAxiosPublic from "../Hoks/Axios/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hoks/Axios/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn}= UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handelGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            navigate('/')
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })

        })
    }
    return (
        <div className="p-8" >
            <div className="divider"></div>
            <div>
                <button onClick={handelGoogleSignIn} className="btn" >
                    <FaGoogle className="mr-4"></FaGoogle>
                    Google
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;