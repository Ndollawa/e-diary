import React from 'react'

function MenuToggler() {


function toggleMenu(){
  console.log("clicked");  
}
  return (
    <div className="md:hidden justify-between items-center bg-black text-white flex">
                <h1 className="text-2xl font-bold px-4">Better Code</h1>
                <button type="button"  className="btn p-4 focus:outline-none hover:bg-gray-800" onClick={()=>toggleMenu}>
                    <svg className="w-6 h-6 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
    </div>
  )
}

export default MenuToggler
