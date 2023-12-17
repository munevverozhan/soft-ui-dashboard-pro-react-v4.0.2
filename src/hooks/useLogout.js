import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth, setToken } = useAuth();
    const navigate = useNavigate();
    const logout = async () => {
        setAuth({});
        setToken();
        navigate('/',{replace:true});
        try {
            const response = await axios('/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout