import { Link } from "react-router-dom"
import useAuth from "hooks/useAuth";
import { useEffect } from "react";

const Admin = () => {
    const {requireAuthorization} = useAuth();
    useEffect(() => {
        requireAuthorization(['ROLE_ADMIN']);
    }, []);

    return (
        <section>
            <h1>Admins Page</h1>
            <br />
            <p>You must have been assigned an Admin role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Admin;