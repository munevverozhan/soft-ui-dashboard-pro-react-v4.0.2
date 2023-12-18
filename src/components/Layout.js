import useAuth from "hooks/useAuth";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom"

const Layout = () => {
    // const { auth } = useAuth();
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (auth !== null && auth !== undefined && auth.id > 0){
    //         navigate('/');
    //     }
    // }, [auth])
   
    return <Outlet />
}
export default Layout;