import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from '../hooks/useAuth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { auth } = useAuth();

    useEffect(() => {
        if (!auth?.token) {
            setIsLoading(false);
        }
    }, [])


    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth?.token)}`)
    }, [isLoading])

    return (
        <>
          { isLoading
            ? <p>Loading...</p>
            : <Outlet />
            } 
        </>
    )
}

export default PersistLogin