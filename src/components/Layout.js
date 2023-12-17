import useAuth from "hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom"

const Layout = () => {
    const { token } = useAuth();
    if (!token) {
        return <Navigate to='/login' />
    }
    return <Outlet />
}
export default Layout;