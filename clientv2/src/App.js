import Home from './pages/Home';
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Post from './component/Post';
import EditPost from './pages/EditPost';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import { AuthContext } from "./helpers/AuthContext";
import { useEffect, useState } from 'react';
import ErrorPage from './pages/ErrorPage';
import ProtectedRoute  from './component/ProtectedRoute';
import axios from 'axios';
import Profile from './pages/Profile';
import UpdatePassword from './pages/UpdatePassword';
import EditProfile from './pages/EditProfile';



    function App() {

     
      const [isAuth, setIsAuth] = useState({
        username:"",
        id:0,
        status:false,
      }) 

      useEffect(() => {
        axios
          .get("http://localhost:3001/auth/auth", {
            headers: {
              accessToken: localStorage.getItem("SecretToken"),
            },
          })
          .then((response) => {
            // if (response.data.error) {
            //   setIsAuth({ ...authState, status: false });
            // } else {
              setIsAuth({
                username: response.data.username,
                id: response.data.id,
                status: true,
              });
            
             
            // }
          });
      }, []);
     
      return (
        
        <>
        
          <AuthContext.Provider value= {{isAuth,setIsAuth}} > 
            <Router>
              <Routes>
                {isAuth.status === true && 
                <> 
                <Route path="/" element={<ProtectedRoute> <Home/> </ProtectedRoute>  } />
                <Route path="/post/:postId" element={<ProtectedRoute><Post/> </ProtectedRoute>  } />
                <Route path="/edit_post/:postId" element={<ProtectedRoute><EditPost/> </ProtectedRoute> } />
                <Route path="/profile/:userid" element={<ProtectedRoute><Profile/> </ProtectedRoute> } />
                <Route path="/updatepassword" element={<ProtectedRoute><UpdatePassword/></ProtectedRoute>} />
                <Route path="/editprofile/:userid" element={<ProtectedRoute><EditProfile/></ProtectedRoute>} />
                </>
                }
                <Route path="*" element={<ErrorPage/>} />
                <Route path="/login" element={ <UserLogin/>  } />
                <Route path="/Register" element={<UserRegister/>} />
                 
              </Routes>
              </Router>
        
          </AuthContext.Provider>
       
        

         </>
      
      );
    }

export default App;
