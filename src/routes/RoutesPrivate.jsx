
import { useSelector } from 'react-redux';
import { Login } from '../components/Login';


export const RoutesPrivate = ({ children }) => {
    const { token } = useSelector((state) => state.auth)

    if (!token) {
        return (
            <Login />
        )
    }
    return (
        <>
            {children}
        </>

    )
}
