import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import SoftButton from "./SoftButton";
import axios from "api/axios";
import useAuth from "hooks/useAuth";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();
    // const { requireAuthorization } = useAuth();
    // useEffect(() => {
    //     requireAuthorization(['ROLE_ADMIN', 'ROLE_CLIENT']);
    // }, []);

    const signOut = async () => {
        await logout();
        localStorage.removeItem('token');
        navigate('/authentication/sign-in');
    }
    const getCurrentUser = async () => {
        const response = await axios.get('/getUser/test');
        console.log(response.data);
    }

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>

            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <br />
            <Link to='/order-list'>Todo List </Link>
            <br />

            <div >
                <SoftButton onClick={signOut}>Sign Out</SoftButton>
            </div>
            <div >
                <SoftButton onClick={getCurrentUser}>current user</SoftButton>
            </div>
        </section>
    )
}

//export default RequireAuth(['ROLE_ADMIN,ROLE_USER'])(Home)
export default Home;