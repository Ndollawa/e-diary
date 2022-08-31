import Nav from './Components/Nav';
import SideMenu from './Components/SideMenu';
import Dashboard from './Dashboard';

function App() {
  return (
   
  <div className="antialiased bg-gray-100">
      <div className="flex relative" x-data="{navOpen: false}">
        <Nav />
        <SideMenu />
        <Dashboard />
      </div>
  </div>
  );
}

export default App;
