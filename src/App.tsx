import {useState} from 'react'
import Nav from './Components/Nav';
import MenuToggler from './Components/MenuToggler';
// import Dashboard from './Dashboard';
import CreatePost from './Pages/CreatePost';

function App() {

const [isToggle, setisToggle] = useState(false) 
  const toggleMenu = () => setisToggle(prevVal =>  !prevVal )
  
  return (
   
  <div className="antialiased bg-gray-100">
      <div className="flex relative">
        <Nav isToggle={isToggle} />
        <main className="flex-1 h-screen overflow-y-scroll overflow-x-hidden">
          <MenuToggler  toggleMenu={toggleMenu}/>
           
          <section className="max-w-7xl mx-auto py-4 px-5">
                <div className="flex justify-between items-center border-b border-gray-300">
                    <h1 className="text-2xl font-semibold pt-2 pb-6">Dashboard</h1>
                </div>
          {/* <Dashboard /> */}
          <CreatePost/>
               
          </section>

{/*<!-- END OF PAGE CONTENT -->*/}
        </main>
      </div>
  </div>
  );
}

export default App;
