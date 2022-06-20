import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import img from "../images/profile.png"




function CardPost({post , submitLikes}) {

  // const [likes, setLikes]  = useState(post.Likes)
  const [profileImg,setProfileImg]  = useState()


  useEffect(()=> {
    axios.get(`https://art-foody.herokuapp.com/auth/profile`,{
      headers:{accessToken:localStorage.getItem("SecretToken")}
  }).then(res => {
    console.log(res.data);
      setProfileImg(res.data.image)
  })

  },[])

 


  return (
    <div >
      <article className="  md:h-5/6 md:max-w-xs sm:max-w-md mb-10  rounded-lg shadow-lg">
                    
                    <a className="flex justify-center" href={`/post/${post.id}`}>
                        
                        <img alt="Post pic" className="block rounded-lg shadow-lg md:w-7/12 sm:w-10/12 h-4/6  mt-5  " src={post.image}/>
                    </a>

                    <header className="flex sm:items-center sm:justify-between leading-tight md:p-4 sm:m-5">
                        <h1 className="text-base"> {post.title} </h1>
                        <p className="text-grey-darker text-sm">
                            10mn
                        </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none pl-2 pb-14">
                        <div className="flex items-center no-underline hover:underline text-black" >
                        {   profileImg ? <img src={profileImg} alt="profileimg" className="block rounded-full w-1/6"/>
                         :  <img alt="profile img" className="block rounded-full w-1/6" src={img} />
                        }
                            <p className="ml-2 text-sm">
                            <Link to={`/profile/${post.UserId}`}> {post.username} </Link>
                            </p>
                        </div>
                        <div className=" flex items-center  no-underline text-grey-darker " >
                          {post.Likes?.length  &&  <span className='pr-4' >{post.Likes.length}</span> }
        
                            <svg className="w-6 h-6 mr-4" fill="currentColor"
                             onClick={()=>{submitLikes(post.id)}}
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                               <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                        </div>
                    </footer>

                  </article>
    </div>
  )
}

export default CardPost