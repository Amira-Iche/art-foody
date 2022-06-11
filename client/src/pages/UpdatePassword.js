import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../component/Nav';

function UpdatePassword() {

    const navigate = useNavigate()
    const [oldPassword,setOldPassword] = useState("")
    const [newPassword,setNewPassword] = useState("")

    const updatePassword = () => {
        axios.put("http://localhost:3001/auth/updatepassword",{
            oldPassword:oldPassword ,newPassword:newPassword
        }, {
         headers: {accessToken:localStorage.getItem("SecretToken")}
        }).then(res => {
            if(res.data.error){
                alert(res.data.error)
            }
            navigate('/')
        })
    }

  return (
      <> 
      <Nav/>
         <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>Update Password</h2>
       <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 "> 
      
   
      <div >
          <form className='mt-4 space-y-4 '>
            <input 
             type="text" 
             className=" rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
             placeholder='Current Password' 
             onChange={(e) => {setOldPassword(e.target.value)}} />

            <input 
            type="text" 
            className=" rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder='New Password' 
            onChange={(e) => {setNewPassword(e.target.value)}} />

            <button 
            onClick={updatePassword}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             >Save Changes</button>
          </form>
      </div>
      
       


      </div>
      </>
  )
 
}

export default UpdatePassword;
