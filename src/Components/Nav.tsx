import React from 'react'
import SideMenu from './SideMenu'

function Nav() {
  return (
    <nav className="absolute md:relative w-64 transform md:translate-x-0 h-screen overflow-y-scroll bg-black transition-all duration-300">{/*-translate-x-full*/}
       
        <SideMenu />

    </nav>
    
  )
}

export default Nav
