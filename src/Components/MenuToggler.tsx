// import React, {useState} from 'react'



interface FuncProp {
  toggleMenu : () => void
}
   const MenuToggler:React.FC<FuncProp> = ({toggleMenu}:FuncProp)=> {

    // const [txt,setTxt] = useState("")

  return (
    <div className="flex justify-between items-center bg-black text-white h-24">
                <h1 className="text-2xl font-bold px-4">Better Code</h1>
                <ul className='flex w-auto h-6 justify-between'>
                  <li className="nav-item">Link</li>
                  <li className="nav-item">Link</li>
                  <li className="nav-item"><div className=""><img className="" src="" alt=""/></div>
                  Hello!<span className="font-bold"> Ndubuisi</span></li>
                </ul>
                <button type="button"  className="md:hidden btn p-4 focus:outline-none hover:bg-gray-800" onClick={()=>toggleMenu()}>
                    <svg className="w-6 h-6 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
    </div>
  )
}

export default MenuToggler
