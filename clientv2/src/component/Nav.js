import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import { useContext  } from 'react';
import { AuthContext } from '../helpers/AuthContext';
import { Disclosure, Menu } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import logoImg from '../images/logo.png'

function Nav() {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate();


    const logout = () => {
        localStorage.removeItem('SecretToken')
        localStorage.removeItem('UserProfile')
        setIsAuth({status:false})
        navigate('/login')
      }

    return (
        <Disclosure as="nav" className="bg-slate-700">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500  hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logoImg}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8  w-36"
                    src={logoImg}
                    alt="Workflow"
                  />
                   
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        {isAuth.status ? (
                            <>
                            <Link className="text-gray-100 hover:text-indigo-500 ',
                            'px-3 py-2 rounded-md text-sm font-medium" to='/'>Home Page </Link>
                            <Link className="text-gray-100 hover:text-indigo-500 ',
                            'px-3 py-2 rounded-md text-sm font-medium" to='/login' onClick={logout}>Logout </Link>
                            
                            </>
                        )
                        :( 
                            <> 
                            <Link className="text-gray-100 hover:text-indigo-500 ',
                            'px-3 py-2 rounded-md text-sm font-medium" to='/login'>LOGIN </Link>
                            <Link className="text-gray-100 hover:text-indigo-500 ',
                            'px-3 py-2 rounded-md text-sm font-medium" to='/register'>Register </Link>
                            </>
                        )}   
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                 
  
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>       
                  </Menu>
                </div>
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
              {isAuth.status ? (
                            <>
                            <Link className="text-gray-100 hover:text-indigo-500 ',
                            'px-3 py-2 rounded-md text-sm font-medium" to='/'>Home Page </Link>
                            <Link className="text-gray-100 hover:text-indigo-500 ',
                            'px-3 py-2 rounded-md text-sm font-medium" to='/login' onClick={logout}>Logout </Link>
                            
                            </>
                        )
                        :( 
                            <> 
                            <Link className="text-gray-100 hover:text-indigo-500 ',
                            'px-3 py-2 rounded-md text-sm font-medium" to='/login'>LOGIN </Link>
                            <Link className="text-gray-100 hover:text-indigo-500 ',
                            'px-3 py-2 rounded-md text-sm font-medium" to='/register'>Register </Link>
                            </>
                        )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>









    //     <div className="bg-gray-800"> 
    //     {isAuth.status ? (
    //         <>
    //          <Link  to='/'>Home Page </Link>
    //         <Link  to='/login' onClick={logout}>Logout </Link>
            
    //         </>
    //     )
    //    :( 
    //         <> 
    //         <Link  to='/login'>LOGIN </Link>
    //         <Link  to='/register'>Register </Link>
    //         </>
    //     )}
    //  </div>
    )
}

export default Nav
