import { RotatingLines } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoutes = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useAuth();
    if (loading) {
        return <div className="flex flex-col justify-center items-center">
            <RotatingLines
                visible={true}
                height="100"
                width="200"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

        </div>
    }


    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default ProtectedRoutes;