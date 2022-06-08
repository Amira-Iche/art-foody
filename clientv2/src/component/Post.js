import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { useNavigate ,Link } from "react-router-dom";
import { useParams } from 'react-router'
import axios from 'axios';
import Comments from './Comments';
import { useContext  } from 'react';
import { AuthContext } from '../helpers/AuthContext';
import CardPost from './CardPost';

const Post = () => {
   const {isAuth } = useContext(AuthContext)
    const [postData, setPostData] = useState({})
   const {postId} = useParams()

   const navigate = useNavigate();

    
   useEffect(() => {
    axios.get( `http://localhost:3001/posts/byId/${postId}`).then(res => {
        setPostData(res.data)
        console.log("post content",res.data);
        console.log(isAuth);
    })
    },[])

    const deleteOne = () => {
        axios.delete( `http://localhost:3001/posts/byId/${postId}`).then(res => {
        navigate("/")
        console.log("deleted");
    })
    }

    return (
        <div>
            <Nav/>
            <div className=" lg:flex justify-between mr-20 ml-20 "> 

            <div className=" mt-10  lg:mx-4 "> 
                <CardPost  post ={postData}  />

            <div className='flex mb-4 '>
                 { isAuth.username === postData.username && (
                    <> 
                     <button className="mx-1 mt-6 bg-red-800 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-2 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600 " onClick={()=> {deleteOne()}} >Delete</button> 
                      <button className="mx-1 mt-6 bg-violet-400 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-2 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600 " onClick={()=> {navigate(`/edit_post/${postData.id}`)}} >Edit</button>  
                    </>
                 ) }
             </div>
            </div>

            <div  className=" mr-10 md:mt-10 ">
            <Comments/>
            </div>
             

             </div>

                        
        </div>
    )
}

export default Post
