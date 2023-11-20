import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Provider/Hoks/useAuth";
import useAxiosSecure from "../../../Hoks/Axios/useAxiosSecure";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-2xl ">Payment History: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>transaction </th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index)=> <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>$ {payment.price}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.status}</td>
                        </tr>
                        )}
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;