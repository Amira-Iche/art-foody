import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"




function CardPost({post , submitLikes}) {

  // const [likes, setLikes]  = useState(post.Likes)
  const [profileImg,setProfileImg]  = useState()


  useEffect(()=> {
    axios.get(`http://localhost:3001/auth/profile`,{
      headers:{accessToken:localStorage.getItem("SecretToken")}
  }).then(res => {
      setProfileImg(res.data.image)
  })

  },[])


  return (
    <div >
      <article className="  h-5/6 max-w-xs mb-10  rounded-lg shadow-lg">
                    
                    <a className="flex justify-center" href={`/post/${post.id}`}>
                        
                        <img alt="Placeholder" className="block rounded-lg shadow-lg w-7/12 h-4/6  mt-5  " src={post.image}/>
                    </a>

                    <header className="flex items-center justify-between leading-tight  md:p-4">
                        <h1 className="text-base"> {post.title} </h1>
                        <p className="text-grey-darker text-sm">
                            10mn
                        </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none pl-2 pb-10">
                        <div className="flex items-center no-underline hover:underline text-black" >
                        {   profileImg ? <img src={profileImg} alt="profileimg" className="block rounded-full w-1/6"/>
                         :  <img alt="profileimg" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
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