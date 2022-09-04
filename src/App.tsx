import Nav from './Components/Nav';
import MenuToggler from './Components/MenuToggler';
import Dashboard from './Dashboard';

function App() {
  return (
   
  <div className="antialiased bg-gray-100">
      <div className="flex relative">
        <Nav />
        <main className="flex-1 h-screen overflow-y-scroll overflow-x-hidden">
          <MenuToggler />
          <Dashboard />
        </main>
      </div>
  </div>
  );
}

export default App;
