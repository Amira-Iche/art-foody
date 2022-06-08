import { useEffect, useState  } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import CardPost from './CardPost';

 
const AllPosts = () => {

    const [allPosts, setallPosts] = useState([])
    
    ////// Fetch data from 
     useEffect(() => {
        axios.get("http://localhost:3001/posts").then(res => {
           //setallPosts([...allPosts,res.data])
           setallPosts(res.data) 
           console.log("All post data",res.data);
        })
       
        }, [])
        
     

     const submitLikes = (postId)  => { 
        axios.post("http://localhost:3001/likes",{PostId : postId}, { 
            headers: {accessToken:localStorage.getItem("SecretToken")}
        }) .then((res) => {
            setallPosts(
              allPosts.map((post) => {
                if (post.id === postId) {
                  if (res.data.liked) {
                    return( { ...post, Likes: [...post.Likes, 0] } ) 
                   
                  } else {
                    const likesArray = post.Likes;
                    likesArray.pop();
                    return { ...post, Likes: likesArray };
                  }
                } else {
                  return post;
                }
              })
            );
          });
     }   

   ///////// usehistory
   const navigate = useNavigate();
    
    return (
      <div className="container my-12  px-4 ">
        <div className="flex justify-around flex-wrap  ">
  
          {/* <!-- Column --> */}
         
          {allPosts.map((post,key) => {
              
                 return (
                   <>
                     <CardPost post = {post} submitLikes = {submitLikes} />
                   
                   </>
                  )
           })}
          
          {/* <!-- END Column --> */}
  
         
  
      </div>
  </div>




 

        //  <div classNameName="App">
           
        //     {allPosts.map((post,key) => {
        //       console.log(post.image)
        //          return (
                   
        //           <section classNameName="content-post">
        //                 <div classNameName="display-flex">
        //                 <span classNameName="display-block">
        //                     <img
        //                     classNameName="image-profil"
        //                     src={
        //                         "https://static.jobat.be/uploadedImages/grandprofilfb.jpg"
        //                     }
        //                     />
        //                     <p classNameName="username-profil">
        //                     <Link to={`/profile/${post.UserId}`}> {post.username} </Link>
                            
        //                     </p>
        //                 </span>
        //                 <p> 5mn</p>
        //                 </div>

        //                 <hr />
        //                 <div classNameName="post-text">
        //                 <img src= {post.image}/>
                        
        //                 <h2 classNameName="name-profil">{post.title}</h2>
        //                 <p>{post.postText}</p>
        //                 </div> 
                        

        //                <div classNameName="like-comments-pen">
        //                     <div classNameName="buttons-like-comments">
        //                         <button classNameName="icons icon-like" onClick={()=>{submitLikes(post.id)}}><AiOutlineLike /></button>
        //                         <label>Likes: {post.Likes.length} </label>
        //                         <button
        //                         classNameName="icons icon-comments"
        //                         title="Lire ou Ajouter un commentaire...">
        //                         <BiCommentDetail />
        //                         </button>
        //                     </div>
                            
        //                     <div classNameName="MdEdit">
        //                      <button onClick={()=>{navigate(`/post/${post.id}`)}}><MdEdit /> More...</button>
        //                      </div>
        //                     </div>
                       
        //             </section>

        //             );
        //            })}
        //       </div>
               )
};

export default AllPosts;