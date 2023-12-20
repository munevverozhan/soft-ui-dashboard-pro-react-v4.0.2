import {useNavigate} from "react-router-dom"
import SoftButton from "./SoftButton";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goLogin = () => navigate('/login');
    const goHome = () => navigate('/');

    return (
        <section>
            <h1>Unauthorized</h1>
            <br/>
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <SoftButton onClick={goLogin}>Go login</SoftButton>
                <br/>
                <SoftButton onClick={goHome}>Go home</SoftButton>

            </div>
        </section>
    )
}

export default Unauthorized