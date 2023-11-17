import { createContext, useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "./useAdmin";


const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    console.log(loading,isAdminLoading)
    console.log(user,isAdmin)

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }
return <Navigate to='/' state={{from: location}} replace></Navigate>
    
};

export default AdminRoute;