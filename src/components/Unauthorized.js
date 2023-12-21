import {useNavigate} from "react-router-dom"
import SoftButton from "./SoftButton";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goHome = () => navigate('/');
    const goLogin=()=>navigate('/login');

    return (
        <section>
            <h1>Unauthorized</h1>
            <br/>
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
               
                <br/>
                <SoftButton onClick={goHome}>Go home</SoftButton>
                <SoftButton onClick={goLogin}>Go login</SoftButton>

            </div>
        </section>
    )
}

export default Unauthorized