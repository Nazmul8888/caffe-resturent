import useAuth from "../../../../Provider/Hoks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className="3xl">
                <span>Hi Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;