import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from '../component/Nav'



function EditProfile() {

 const navigate = useNavigate()
 const {userid} = useParams()
  const [bio ,setBio] = useState("")
  const [profileImage, setProfileImage] = useState()

 
  const saveProfileInfo = (e) => {
    e.preventDefault(); 
    const userInfo = new FormData()
    userInfo.append("image" ,profileImage)
    userInfo.append("bio" ,bio)

    axios.post(`http://localhost:3001/auth/profile`,userInfo,{
      headers:{accessToken:localStorage.getItem("SecretToken")}
  }).then(res => {
    try {
      navigate("/")
      console.log(res.data)
    } catch (error) {
      console.log("cant update");
    }
  } )

  }





  return (
    <>
      <Nav/>
      <div className='flex justify-center'>
        <form  id="form" onSubmit={saveProfileInfo} method='PUT' encType='multipart/form-data'>
          <div className="shadow sm:rounded-md sm:overflow-hidden mt-10 w-96">
            <div className="px-4 py-5 bg-slate-100 space-y-6 sm:p-6">
              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  Tell us About yourself
                </label>
                <div className="mt-1">
                  <textarea className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                   placeholder="Who are you ?" required 
                   onChange={(e) => {setBio(e.target.value)}}
                   rows={3}
                   value={bio}/>
                </div>         
              </div>

              <div>
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <input
                        type="file"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onChange={(e) => { setProfileImage(e.target.files[0])}}
                        name='image'
                        />
                     
                    </div>
                  </div>

              
            </div>
            
            <div className="px-4 py-3 bg-slate-100 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      </>
  )
}

export default EditProfile;
