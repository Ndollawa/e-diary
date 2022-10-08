import {useState} from 'react'
import { BrowserRouter as Router, Routes,Link,Route, useNavigate } from 'react-router-dom';
import Nav from './Components/Nav';
import MenuToggler from './Components/MenuToggler';
import Dashboard from './Pages/Dashboard';
import CreatePost from './Pages/CreatePost';
import EditPost from './Pages/EditPost';
import RecycledPosts from './Pages/RecycledPosts';
import RecycledCategories from './Pages/RecycledCategories';
import Category from './Pages/Category';
import SiteSettings from './Pages/SiteSettings';
import AllPosts from './Pages/AllPosts';
import UserProfile from './Pages/UserProfile';
import CreateUser from './Pages/CreateUser';
import EditUser from './Pages/EditUser';
import AllUsers from './Pages/AllUsers';
import RecycledUsers from './Pages/RecycledUsers';
import ProfileSettings from './Pages/ProfileSettings';
import Footer from './Components/Footer';

interface pageProps{
  pageTitle:String
}

function App(){
  
const [isToggle, setisToggle] = useState(false) 
  const toggleMenu = () => setisToggle(prevVal =>  !prevVal )
 
  return (
   
    <Router>
    {/* <Routes> */}
                <div className="antialiased bg-gray-100">
                    <div className="flex relative">
                      <Nav isToggle={isToggle} />
                      <div className='flex-1 h-screen overflow-x-hidden overflow-y-scroll'>
                      <main className="pb-20 pt-20">
                        <MenuToggler  toggleMenu={toggleMenu}/>
                       
                              <Routes>
                                <Route path="/" element={<Dashboard pageProps={{pageTitle:"Dashboard"}}/>} />
                                <Route path="/posts/create" element={<CreatePost pageProps={{pageTitle:"Create Post"}}/>} />
                                <Route path="/posts/:id/edit" element={<EditPost pageProps={{pageTitle:"Edit Post"}}/>} />
                                <Route path="/posts" element={<AllPosts pageProps={{pageTitle:"All Posts"}}/>} />
                                <Route path="/posts/recyclebin" element={<RecycledPosts pageProps={{pageTitle:"Deleted Posts"}}/>} />
                                <Route path="/category" element={<Category pageProps={{pageTitle:"Category"}}/>} />
                                <Route path="/category/recyclebin" element={<RecycledCategories pageProps={{pageTitle:"Deleted Categories"}}/>} />
                                <Route path="/users/create" element={<CreateUser pageProps={{pageTitle:"Create User"}}/>} />
                                <Route path="/users/:id/edit" element={<EditUser pageProps={{pageTitle:"Edit User"}}/>} />
                                <Route path="/users/recyclebin" element={<RecycledUsers pageProps={{pageTitle:"Deleted Users"}}/>} />
                                <Route path="/users/" element={<AllUsers pageProps={{pageTitle:"All Users"}}/>} />
                                <Route path="/profile" element={<UserProfile pageProps={{pageTitle:"My Profile"}}/>} />
                                <Route path="/profile/settings" element={<ProfileSettings pageProps={{pageTitle:"Profile Settings"}}/>} />
                                <Route path="/site/settings" element={<SiteSettings pageProps={{pageTitle:"App Settings"}}/>} />

                          </Routes>

              {/*<!-- END OF PAGE CONTENT -->*/}
                      </main>
                        <Footer/>
                        </div>
                      </div>
                    </div>
            {/* </Routes> */}
       </Router>
  );
}

export default App;
