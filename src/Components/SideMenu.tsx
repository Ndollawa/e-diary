import React from 'react'
import MenuSearch from './SideMenu/MenuSearch';
import Menu from './SideMenu/Menu';
import MenuUserProfile from './SideMenu/MenuUserProfile';

function SideMenu() {
  return (
    <aside className="absolute md:relative w-64 transform -translate-x-full md:translate-x-0 h-screen overflow-y-scroll bg-black transition-all duration-300" >
        <div className="flex flex-col justify-between h-full">
                <div className="p-4">
                    {/* <!-- LOGO --> */}
                    <a className="flex items-center text-white space-x-4" href="#">
                        <svg className="w-7 h-7 bg-indigo-600 rounded-lg p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        <span className="text-2xl font-bold">Better Code</span>
                    </a>

                    {/* <!-- SEARCH BAR --> */}
                        <MenuSearch />
                    {/* <!-- SEARCH RESULT --> */}
                    

                    {/* <!-- NAV LINKS --> */}
                         <Menu />
                </div>

                {/* <!-- PROFILE --> */}
                    <MenuUserProfile />
             </div>
    </aside>
  )
}

export default SideMenu
