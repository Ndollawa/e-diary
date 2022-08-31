import React,{useState} from 'react'
import {MenuItems} from "./MenuLinks"

export default function Menuitem() {

  const classes = "block py-2.5 px-4 flex items-center space-x-2 text-white hover:bg-gray-800 hover:text-white rounded";
  const [menuItems, setMenuItems] = useState(MenuItems);      
  // const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = (id:number)=>{
    setMenuItems((prevValue)=>{
     return prevValue.map((menu)=>{ return menu.id === id ? {...menu, isOpen:!menu.isOpen } : menu})
     } );
    
  }

     const link =    menuItems.map((item, index):(JSX.Element|undefined) => { 
          if(item.type === "link"){
                    // BASIC LINK 
                  return <a href={item.url} className={ item.isActive ?"bg-gray-800 " + classes: classes } key={item.id}>
                           {item.icon} <span>{item.title}</span>
                        </a> }else if(item.type === "dropdown"){
                    //  DROPDOWN LINK 
                   return     <div className="block">
                            <div className={ item.isActive ?"bg-gray-800 justify-between cursor-pointer " + classes: classes+" justify-between cursor-pointer"} key={item.id} onClick={()=>handleToggleMenu(item.id)}>
                                <div className="flex items-center space-x-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                    <span>{item.title}</span>
                                </div>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={item.isOpen ? {display:"none"} : undefined}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                <svg  className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={!item.isOpen ? {display:"none"} : undefined}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>    
                            </div>
                            <div className="text-sm border-l-2 border-gray-800 mx-6 my-2.5 px-2.5 flex flex-col gap-y-1"  style={item.isOpen ? {display:"none"} : undefined}>
                            {item.subMenu?.map((link,i):(JSX.Element|undefined) =>{
                             return ( <a href={link.url} key={i} className="block py-2 px-4 hover:bg-gray-800 hover:text-white rounded">
                                    {link.title}
                                </a>)
                                })
                                }
                            </div>
                        </div>}
        return;
       });
  return (
    <>
 {link}                    
    </>
  )
}
