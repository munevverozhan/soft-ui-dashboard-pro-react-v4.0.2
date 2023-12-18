import { useNavigate, Link, useLocation } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import SoftButton from "./SoftButton";
import axios from "api/axios";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const logout = useLogout();

    console.log('lokasyon : ', location.pathname);

    const signOut = async () => {
        await logout();
        localStorage.removeItem('token');
        navigate('/authentication/sign-in');
    }
    const getCurrentUser =async ()=>{
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

export default Home