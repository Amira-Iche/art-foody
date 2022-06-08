import {  useState  } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Nav from '../component/Nav';




const UserRegister = () => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    const navigate = useNavigate();

const Register =(e) => {
    e.preventDefault()
    const userData = {username:username,password:password}
    axios.post('http://localhost:3001/auth/signup',userData).then(res => {
        console.log("working",res.data);
        navigate('/login')
        setUsername("")
        setPassword("")
    })
}
    return (
        <> 

        <Nav/>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
           
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
           
          </div>
          <form className="mt-8 space-y-6" onSubmit={Register} >
           
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
               type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        </div>
       </>



     
    )
}

export default UserRegister
