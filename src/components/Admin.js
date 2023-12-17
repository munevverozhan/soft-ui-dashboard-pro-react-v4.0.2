import { Link, useLocation } from "react-router-dom"

const Admin = () => {
    const location = useLocation();
    console.log('lokasyon : ', location.pathname);

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

export default Admin