import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "../../../Provider/Hoks/useAuth";



const useAdmin = () => {
//     const {user} = UseAuth();
//     const axiosSecure = useAxiosSecure();
//     const {data: isAdmin, isPending: isAdminLoading} = useQuery({
//         queryKey: [user?.email, 'isAdmin'],
//         queryFn: ()=>axiosSecure.get(`/users/admin/${user.email}`)
//     })
//     // console.log(isAdmin)
//     return [isAdmin,isAdminLoading]

// };
const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;