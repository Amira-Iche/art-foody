import axios from 'axios'
import Nav from '../component/Nav'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {AuthContext} from '../helpers/AuthContext'
import CardPost from '../component/CardPost'
import profileImg from "../images/profile.png"
import "../App.css"

function Profile() {

    const {isAuth} = useContext(AuthContext)
    const {userid} = useParams()
    const [username, setUsername] = useState([])
    const [bio, setBio] = useState("")
    const [image, setImage] = useState("")
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`https://art-foody.herokuapp.com/auth/userinfo/${userid}`).then(res => {
            setUsername(res.data.username)
            
        })

        axios.get(`https://art-foody.herokuapp.com/auth/profile`,{
            headers:{accessToken:localStorage.getItem("SecretToken")}
        }).then(res => {
            console.log("data",res.data);
            setBio(res.data.bio)
            setImage(res.data.image)
        })

        axios.get(`https://art-foody.herokuapp.com/posts/byuserId/${userid}`).then(res => {
            setPosts(res.data)
        })
       
    }, [])


    return (
        <div>
            <Nav/>
            <div className=" flex md:flex-row sm:flex-col">
                 {/*////////////// user Info ///////////// */}
            <div className=' md:w-96 sm:w-full '>
                <div className=" px-4 sm:px-0 h-full ">

                <div className="bg-slate-100 p-3 border-t-4 border-indigo-500 h-full ">
                    <div className="image overflow-hidden">
                        {image ?  <img className=" w-1/3 h-1/3"
                            src={image}
                            alt="profile img" />:  <img className=" w-1/3 h-1/3"
                            src={profileImg}
                            alt="profile img" />}
                       
                    </div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{username} </h1>
        
                    <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{bio} </p>
                    <ul
                        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                            <span>Status</span>
                            <span className="ml-auto"><span
                                    className="bg-indigo-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li className="flex items-center py-3">
                            <span>Member since</span>
                            <span className="ml-auto">Nov 07, 2016</span>
                        </li>
                    </ul>
               
                    {isAuth.username === username &&
                        <div> 
                        <button className="bg-indigo-500 py-1 px-2 m-2 rounded text-white text-sm" onClick={() => {navigate(`/editprofile/${userid}`)}}> Edit Profile</button>
                        <button className="bg-indigo-500 py-1 px-2 m-2 rounded text-white text-sm" onClick={() => {navigate('/updatepassword')}} >Update Password</button>
                        </div>
                    }
                </div>

                
                 

             
                </div>
            </div> 

            {/*////////////// user Posts///////////// */}
            <div className=" mx-6  mt-5 ">
                <div className='flex flex-wrap justify-around'>
                     {posts.map((post,key) => {
                 return (
                    <div >
                   <CardPost post = {post} />               
                  </div>
                    );
      })} 
                </div>
          
            </div>    
            </div>   
            
           
           
            
           
        </div>
    )
}

export default Profile
