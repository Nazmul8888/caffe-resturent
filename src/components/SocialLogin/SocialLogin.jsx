import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Provider/Hoks/UseAuth";


const SocialLogin = () => {
    const {googleSignIn}= UseAuth();

    const handelGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)

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