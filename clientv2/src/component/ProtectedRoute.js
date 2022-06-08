import { Navigate, useNavigate } from 'react-router-dom';



const ProtectedRoute = ({ children}) => {
    const isAuth  = localStorage.getItem('SecretToken')

    return ( isAuth ? children : <Navigate to="/login"/>)
         
       
    
}


export default ProtectedRoute
