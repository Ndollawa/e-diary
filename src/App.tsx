import {useState} from 'react'
import { BrowserRouter as Router, Routes,Link,Route, useNavigate } from 'react-router-dom';
import Nav from './Components/Nav';
import MenuToggler from './Components/MenuToggler';
import Dashboard from './Dashboard';
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

function App() {

const [isToggle, setisToggle] = useState(false) 
  const toggleMenu = () => setisToggle(prevVal =>  !prevVal )
  
  return (
   
    <Router>
    {/* <Routes> */}
                <div className="antialiased bg-gray-100">
                    <div className="flex relative">
                      <Nav isToggle={isToggle} />
                      <main className="flex-1 h-screen overflow-x-hidden overflow-y-scroll scroll">
                        <MenuToggler  toggleMenu={toggleMenu}/>
                        
                        <section className="max-w-7xl mx-auto py-4 px-5 h-full">
                              <div className="flex justify-between items-center border-b border-gray-300">
                                  <h1 className="text-2xl font-semibold pt-2 pb-6">Dashboard</h1>
                              </div>
                              <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/posts/create" element={<CreatePost/>} />
                                <Route path="/posts/:id/edit" element={<EditPost/>} />
                                <Route path="/posts" element={<AllPosts />} />
                                <Route path="/posts/recyclebin" element={<RecycledPosts/>} />
                                <Route path="/category" element={<Category />} />
                                <Route path="/category/recyclebin" element={<RecycledCategories/>} />
                                <Route path="/users/create" element={<CreateUser/>} />
                                <Route path="/users/:id/edit" element={<EditUser/>} />
                                <Route path="/users/recyclebin" element={<RecycledUsers/>} />
                                <Route path="/users/" element={<AllUsers/>} />
                                <Route path="/profile" element={<UserProfile />} />
                                <Route path="/profile/settings" element={<ProfileSettings />} />
                                <Route path="/site/settings" element={<SiteSettings/>} />

                          </Routes>
                        </section>

              {/*<!-- END OF PAGE CONTENT -->*/}
                <Footer/>
                      </main>
                      </div>
                    </div>
            {/* </Routes> */}
       </Router>
  );
}

export default App;
