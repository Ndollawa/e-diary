// import React, {useState} from 'react'
import {IoMdMail,IoMdNotifications} from "react-icons/io"


interface FuncProp {
  toggleMenu : () => void
}
   const MenuToggler:React.FC<FuncProp> = ({toggleMenu}:FuncProp)=> {

    // const [txt,setTxt] = useState("")

  return (
    <div className="flex justify-between items-center bg-black text-white h-16  z-10">
                <h1 className="text-2xl font-bold px-4">Better Code</h1>
                <ul className='flex w-auto h-6 justify-between'>
                  <li className="mr-4 text-xl relative"><IoMdMail/>
                  <div className="dropdown">
                    <div className="dropdown-menu-header messages">Messages</div>
                      <ul className="dropdown-menu">
                        <li className="items"></li>
                        <li className="items"></li>
                        <li className="items"></li>
                        <li className="items"></li>
                        <li className="items"></li>
                      </ul>
                      <div className="dropdown-menu-footer"><a href="">View all</a></div>
                    </div>
                  </li>
                  <li className="mr-4 text-xl relative"><IoMdNotifications/>
                    <div className="dropdown">
                      <div className="dropdown-menu-header notifications">Notifications</div>
                      <ul className="dropdown-menu">
                        <li className="items"></li>
                        <li className="items"></li>
                        <li className="items"></li>
                        <li className="items"></li>
                        <li className="items"></li>
                      </ul>
                      <div className="dropdown-menu-footer"><a href="">View all</a></div>
                    </div>
                  </li>
                  <li className="mr-4 flex items-center md:flex-no-wrap"><div className="rounded-2xl w-6 h-6 bg-slate-500"><img className="" src="" alt=""/></div>
                  Hello!<span className="font-bold"> Ndubuisi</span></li>
                </ul>
                <button type="button"  className="md:hidden btn p-4 focus:outline-none hover:bg-gray-800" onClick={()=>toggleMenu()}>
                    <svg className="w-6 h-6 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
    </div>
  )
}

export default MenuToggler
