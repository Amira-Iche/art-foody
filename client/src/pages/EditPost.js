import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router'
import Nav from "../component/Nav";

function EditPost() {
    const {postId} = useParams()
    const navigate = useNavigate();

    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")
    const [image, setImage] = useState()
   

    useEffect(() => {
        axios.get( `https://art-foody.herokuapp.com/posts/byId/${postId}`).then(res => {
            setTitle(res.data.title)
            setPostText(res.data.postText)
            setImage(res.data.image)
            
        })
        },[])

    const postEdit = (e) => {
        e.preventDefault(); 
        const formData = new FormData();
        formData.append("image", image)
        formData.append("title", title)
        formData.append("postText", postText)
       axios.put(`https://art-foody.herokuapp.com/posts/byId/${postId}`,formData , {
        headers: {accessToken:localStorage.getItem("SecretToken")}
       }).then(res => {
           console.log("working");
     })
     
     setTitle("")
     setPostText("")
     setImage('')
     navigate("/")
   }


   return (
     <div> 
       <Nav/>
       <div className='flex justify-center'>
       <form  id="form" onSubmit={postEdit} method='POST' encType='multipart/form-data'>
          <div className="shadow sm:rounded-md sm:overflow-hidden mt-10">
            <div className="px-4 py-5  bg-slate-100 space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                    TITLE
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                  <input autoFocus className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="Your Title..." required 
                        onChange={(e) => { setTitle(e.target.value)}} 
                        type="text"value={title}/> 
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  Tell us Your Story
                </label>
                <div className="mt-1">
                  <textarea className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                   placeholder="Whats New ?" required 
                   onChange={(e) => {setPostText(e.target.value)}}
                   rows={3}
                   value={postText}/>
                </div>         
              </div>

              <div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                     <div className="flex text-sm text-gray-600">
                    <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload an Image</span>
                        <input id="file-upload" onChange={(e) => { setImage(e.target.files[0])}}  name='image' type="file" className="sr-only" />
                      </label>
                     </div>
                  </div>
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

     </div>
   )
}


  


export default EditPost
