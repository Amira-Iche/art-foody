import  { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Comments = () => {
    const {postId} = useParams()

    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")
    


    ////// GET All Comments
    useEffect(() => {
        axios.get( `https://art-foody.herokuapp.com/comments/${postId}`).then(res => {
            setComments(res.data)
            console.log(res.data);
        })  
    }, [])
   
    const userComment = localStorage.getItem("UserProfile")
    ////////// Send comment
     const SendComment = (e) => {
        e.preventDefault()
         const postComment = {commentContent:newComment ,PostId :postId}
        axios.post("https://art-foody.herokuapp.com/comments",postComment,{
            headers:{accessToken:localStorage.getItem("SecretToken")}
        }).then(res => {
            try {
                console.log("res data",res);
                const commentToAdd = {
                    commentContent : res.data.commentContent,
                     username : res.data.username,
                     id : res.data.id
                }
                setComments([...comments,commentToAdd])
                 setNewComment("")
            } catch (error) {
                console.log(error);
            }
      })
     }

     const DeleteComment = (commentId) => {
          console.log("comment",commentId);
         axios.delete(`https://art-foody.herokuapp.com/comments/${commentId}`,{ 
             headers:{accessToken:localStorage.getItem("SecretToken")} 
            }).then(res => {
               
             setComments(comments.filter(comment => {
                 return comment.id !== commentId
             }))
         })
     }
    
    return (
        <div>
        <div className='SendComment bg-slate-100 rounded-lg shadow-lg p-6'>
             <textarea type="text" value={newComment} onChange={event => setNewComment(event.target.value)} className="w-full bg-white border-2 border-gray-300 shadow-lg px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500" rows="5" placeholder="Type a comment" ></textarea>
             <button onClick={SendComment}  className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:bg-gray-100 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700">Post</button>

        </div>

        <div className='DisplayComments'>
            <h1>All comments</h1>
            
            {comments.map((comment,key) => {  
                return (
                        <div className="h-90 bg-gradient-to-r  from-purple-600 to-indigo-300  rounded-lg shadow-lg my-3 px-2 py-1">
                            <div className="flex items-center mt-2 space-x-2">
                                <img className="w-8 h-8 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                <div >
                                    <h3 className="text-indigo-50 font-semibold cursor-pointer">{comment.username}</h3>
                                    <p className="text-indigo-50 text-xs font-thin"> 2 weeks ago</p>
                                </div>
                            </div>
                            <p className="text-base font-thin mt-2 text-indigo-50 cursor-pointer">{comment.commentContent} </p>


                        {userComment === comment.username && (
                        <button  onClick={() => {DeleteComment(comment.id)} } className="mx-1 mt-6 bg-red-800 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-2 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600 ">D</button>
                        )}  
				        </div>

              )      
            })} 

        </div>


       </div> 
    ) 
}

export default Comments
