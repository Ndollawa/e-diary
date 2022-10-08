import React from 'react';
import props from "../utils/client/pageProps";


const CreateUser:React.FC<props> = ({pageProps}:props) => {
  return (
     
    <section className="max-w-7xl mx-auto py-4 px-5 h-full">
    <div className="flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-semibold pt-2 pb-6">{pageProps.pageTitle}</h1>
    </div>
    <div>CreateUser</div>
    </section>
  )
}

export default CreateUser
