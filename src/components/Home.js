import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import SoftButton from "./SoftButton";

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/authentication/sign-in');
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
                <div >
                    <SoftButton onClick={signOut}>Sign Out</SoftButton>
                </div>
            </section>
    )
}

export default Home