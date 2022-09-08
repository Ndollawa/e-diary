import {useState} from 'react'
import Nav from './Components/Nav';
import MenuToggler from './Components/MenuToggler';
import Dashboard from './Dashboard';

function App() {

const [isToggle, setisToggle] = useState(false) 
  const toggleMenu = () => setisToggle(prevVal =>  !prevVal )
  
  return (
   
  <div className="antialiased bg-gray-100">
      <div className="flex relative">
        <Nav isToggle={isToggle} />
        <main className="flex-1 h-screen overflow-y-scroll overflow-x-hidden">
          <MenuToggler  toggleMenu={toggleMenu}/>
          <Dashboard />
        </main>
      </div>
  </div>
  );
}

export default App;
