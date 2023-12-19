
import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Component } from 'react';

const RequireAuth = (userTypes) => (ChildComponent) => {
    class ComposedComponent extends Component {
        render() {
            const { auth } = useAuth();
            if (auth && auth.id > 0) {
                if (userTypes.includes(auth.rol)) {
                    return < ChildComponent {...auth} />
                }
                return <Navigate to='/unauthorized' />
            }
            return (
                <Navigate to='/login' />
            );
        }
    }
    return ComposedComponent;
}

export default RequireAuth;