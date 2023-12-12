import { Link } from "react-router-dom"

const LinkPage = () => {
    return (
        <section>
            <h1>Links</h1>
            <br />
            <h2>Public</h2>
            <Link to="/authentication/sign-in">Giriş Yap</Link>
            <Link to="/authentication/sign-up">Kaydol</Link>
            <br />
            <h2>Private</h2>
            <Link to="/">Show</Link>
            <Link to="/admin">Admin Page</Link>
        </section>
    )
}

export default LinkPage