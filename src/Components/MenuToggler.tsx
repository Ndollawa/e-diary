// import React, {useState} from 'react'
import {Link,  useNavigate} from "react-router-dom"
import {IoMdMail,IoMdNotifications,IoMdCog,IoMdArrowDropdown,IoIosPersonAdd,IoIosContact,IoIosCog,IoIosLogOut} from "react-icons/io"
import {FaRegQuestionCircle} from "react-icons/fa"
import pic from "../logo512.png"

interface FuncProp {
  toggleMenu : () => void
}
   const MenuToggler:React.FC<FuncProp> = ({toggleMenu}:FuncProp)=> {

    // const [txt,setTxt] = useState("")

  return (
    <div className="flex justify-between items-center bg-black text-white h-16  z-2 select-none">
                <img className="rounded-full w-10 mx-5" src={pic} alt=""/>
                <div className="items-center flex md:mr-24">
                <ul className='flex w-full h-6 justify-between text-lg'>
                  <li className="mr-6 text-xl relative"> <label htmlFor="message" title="Messages"><IoMdMail/> <span className="badge bg-cyan-600"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>2</span></label>
                  <input type="checkbox" id="message" className="dropdown-checkbox" name="dropdown-menu" />
                  <div className="dropdown xs:w-72 md:w-96 message-dropdown">
                    <div className="dropdown-menu-header messages">Messages</div>
                      <ul className="dropdown-menu">
                      <li className="items p-2 text-xs"><div className="rounded-full w-9 h-9 flex-shrink-0 bg-slate-500"><img className="" src={pic} alt=""/></div>&ensp;
                            <div className="relative items-center">
                                  <p className="text-xs font-light text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
                              <span className="time">10mins ago</span>
                            </div>
                        </li>
                        <li className="items p-2 text-xs"><div className="rounded-full w-9 h-9 flex-shrink-0 bg-slate-500"><img className="" src={pic} alt=""/></div>&ensp;
                            <div className="relative items-center">
                                  <p className="text-xs font-light text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
                              <span className="time">10mins ago</span>
                            </div>
                        </li>
                        <li className="items p-2 text-xs"><div className="rounded-full w-9 h-9 flex-shrink-0 bg-slate-500"><img className="" src={pic} alt=""/></div>&ensp;
                            <div className="relative items-center">
                                  <p className="text-xs font-light text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
                              <span className="time">10mins ago</span>
                            </div>
                        </li>
                        <li className="items p-2 text-xs"><div className="rounded-full w-9 h-9 flex-shrink-0 bg-slate-500"><img className="" src={pic} alt=""/></div>&ensp;
                            <div className="relative items-center">
                                  <p className="text-xs font-light text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
                              <span className="time">10mins ago</span>
                            </div>
                        </li>
                        <li className="items p-2 text-xs"><div className="rounded-full w-9 h-9 flex-shrink-0 bg-slate-500"><img className="" src={pic} alt=""/></div>&ensp;
                            <div className="relative items-center">
                                  <p className="text-xs font-light text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
                              <span className="time">10mins ago</span>
                            </div>
                        </li>
                        <li className="items p-2 text-xs"><div className="rounded-full w-9 h-9 flex-shrink-0 bg-slate-500"><img className="" src={pic} alt=""/></div>&ensp;
                            <div className="relative items-center">
                                  <p className="text-xs font-light text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
                              <span className="time">10mins ago</span>
                            </div>
                        </li>
                        <li className="items p-2 text-xs"><div className="rounded-full w-9 h-9 flex-shrink-0 bg-slate-500"><img className="" src={pic} alt=""/></div>&ensp;
                            <div className="relative items-center">
                                  <p className="text-xs font-light text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
                              <span className="time">10mins ago</span>
                            </div>
                        </li>
                        
                        
                      </ul>
                      <div className="dropdown-menu-footer"><a href="">View all</a></div>
                    </div>
                  </li>
                  <li className="mr-6 text-xl relative"><label htmlFor="notification" title="Notifications"><IoMdNotifications/> <span className="badge bg-red-600"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>2</span></label>
                    <input type="checkbox" id="notification" className="dropdown-checkbox" name="dropdown-menu" />
                    <div className="dropdown xs:w-72 md:w-96 notification-dropdown">
                      <div className="dropdown-menu-header notifications">Notifications</div>
                      <ul className="dropdown-menu">
                        <li className="items p-2 text-xs"><div className="rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center bg-blue-600"><IoIosPersonAdd/></div>&ensp;
                            <div className="relative items-center">
                                  <p className="text-sm font-light text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
                              <span className="time">10mins ago</span>
                            </div>
                        </li>
                        <li className="items p-2 text-sm"><div className="rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center bg-gray-600"><IoIosPersonAdd/></div>&ensp;
                            <div className="relative items-center">
                                  <p className="text-sm font-light text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
                              <span className="time">10mins ago</span>
                            </div>
                        </li>
                        <li className="items p-2 text-sm"><div className="rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center bg-yellow-600"><IoIosPersonAdd/></div>&ensp;
                            <div className="relative items-center">
                                  <p className="text-sm font-light text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
                              <span className="time">10mins ago</span>
                            </div>
                        </li>
                        <li className="items p-2 text-xs"><div className="rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center bg-pink-600"><IoIosPersonAdd/></div>&ensp;
                            <div className="relative items-center">
                                  <p className="text-xs font-light text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ratione!</p>
                              <span className="time">10mins ago</span>
                            </div>
                        </li>
                      </ul>
                      <div className="dropdown-menu-footer"><a href="">View all</a></div>
                    </div>
                  </li>
                  <li className="mr-6 items-center"><Link to="/sitesettings" title="Site Setting"><IoMdCog/></Link></li>
                  <li className="mr-6 xs:mr-1 flex  relative items-center md:flex-no-wrap"><label className="flex flex-nowrap" htmlFor="userMenu"><div className="rounded-full w-7 h-7 bg-slate-500 flex-shrink-0 avatar"><img className="" src={pic} alt=""/></div>&ensp;
                 <div className="md:flex xs:hidden"> Hello!<span className="font-bold"> Ndubuisi</span></div><IoMdArrowDropdown/></label>
                    <input type="checkbox" className="dropdown-checkbox" id="userMenu" name="dropdown-menu" />
                    <div className="userMenu-dropdown top-6  xs:-left-20 dropdown overscroll-y-none left-4 xs:w-48 md:w-64">
                        <ul className="relative text-xs text-gray-700 font-semibold">
                          <li className="items  px-4"><Link to="" className="flex items-center flex-nowrap"><IoIosContact className="text-2xl"/>Profile</Link></li>
                          <li className="items  px-4"><Link to="" className="flex items-center flex-nowrap"><IoIosCog className="text-2xl"/>Profile Setting</Link></li>
                          <li className="items  px-4"><Link to="" className="flex items-center flex-nowrap"><FaRegQuestionCircle  className="text-2xl"/> Faq</Link></li>
                          <li className="items  px-4"><Link to="" className="flex items-center flex-nowrap"><IoIosLogOut className="text-2xl"/>Logout</Link></li>
                        </ul>
                    </div>
                 </li>
                </ul>
                <button type="button"  className="md:hidden btn p-4 focus:outline-none hover:bg-gray-800" onClick={()=>toggleMenu()}>
                    <svg className="w-6 h-6 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
    </div>
  )
}

export default MenuToggler
