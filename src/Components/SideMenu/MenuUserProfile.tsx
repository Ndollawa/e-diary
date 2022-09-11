import React from 'react'

export default function MenuUserProfile() {
  return (
    <div className="text-gray-200 border-gray-800 rounded flex items-center justify-between p-2">
    <div className="flex items-center space-x-2">
        {/* <!-- AVATAR IMAGE BY FIRST LETTER OF NAME --> */}
        <img src="https://ui-avatars.com/api/?name=Habib+Mhamadi&size=128&background=ff4433&color=fff" className="w-7 rounded-full" alt="Profile"/>
        <h1>Ndubuisi O.</h1>
    </div>
    <a  href="#" className="hover:bg-gray-800 hover:text-white p-2 rounded">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>       
    </a>
</div>
  )
}
