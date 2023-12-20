import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from '../context/AuthProvider';

const useAuth = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const { auth } = authContext;

    console.log("//////////////////////////////////")
    const requireAuthentication = () => {
        if (auth && auth.id > 0) {
            return true;
        }
            navigate('/login');
            return false;
    }


    const requireAuthorization = (userTypes) => {
        if (requireAuthentication) {
            if (userTypes.includes(auth?.rol)) {
           // console.log('user types ', userTypes.includes(auth?.rol))
            return true;

            }
            navigate('/unauthorized');
            return false;
        }

    }

    return { ...authContext, requireAuthentication, requireAuthorization };
}

export default useAuth;