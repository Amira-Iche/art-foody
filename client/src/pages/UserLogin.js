import {  useState ,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../helpers/AuthContext';
import Nav from '../component/Nav';

const UserLogin =() => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { setIsAuth} = useContext(AuthContext)

    const navigate = useNavigate();

const Login =(e) => {
    e.preventDefault()
    const userData = {username:username,password:password}
    axios.post('http://localhost:3001/auth/login',userData).then(res => {
      console.log(res.data);
        if(res.data.error) {
           console.log(res.data.error)
        }else {
            localStorage.setItem("SecretToken",res.data)
            localStorage.setItem("UserProfile",userData.username)
            setIsAuth({status:true})
            navigate('/')
        }
    })
}

    return (

        <>
     <Nav/>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
           
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
           
          </div>
          <form className="mt-8 space-y-6" >
           
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
               
                <input
                  type="text"
                  className=" rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={(e)=>{setUsername(e.target.value)}}
                />
              </div>
              <div>
               
                <input
                  type="password"
                  className=" rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
            </div>

            <div>

              <button
              onClick={Login}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                
                Login
              </button>
            </div>
          </form>
        </div>
        </div>
       


        {/* <div className="container">
             <Nav/>
        <div className="screen">
            <div className="screen__content">
                <form className="login">
                <h1>S'inscrire</h1>
                    <div className="login__field">
                    <FaUserAlt/>
                        <input onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" className="login__input" placeholder="Username" required/>
                    </div>
                    <div className="login__field">
                    <FaLock/>
                        <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" className="login__input" placeholder="Password" required/>
                    </div>
                        <button onClick={Login} type='button' className="button login__submit">S'inscrire</button>         
                </form>
            </div>
            <div className="screen__background">
                <span className="screen_backgroundshape screen_background_shape3"></span>		
                <span className="screen_backgroundshape screen_background_shape1"></span>
            </div>		
        </div>
    </div> */}
    </>
    )
}

export default UserLogin
