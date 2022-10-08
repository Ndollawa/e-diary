import React, {useState, FormEvent, FormEventHandler, FormHTMLAttributes, KeyboardEventHandler, EventHandler } from "react";
import {IoMdPricetags,IoIosList,IoMdColorWand,IoIosCreate,IoIosClose} from 'react-icons/io'
import Tinymce from "../utils/client/Tinymce";
import props from "../utils/client/pageProps";



const CreatePost:React.FC<props> = ({pageProps}:props):JSX.Element => { 
const [tags, setTags] = useState<string[]>([]);
const [tagName, setTagName] = useState("")


// const tagwrapper= document.getElementsByClassName('tag-wrapper')!;
    const addTag = (e:any) =>{
        if( e.key === 'Enter' ){
          setTags(tags=>{return [...tags,e.value]})
          alert(e.value)
          setTagName(e.value)
        }
      };
    const postSubmit:FormEventHandler= (event:FormEvent)=>{
      event.preventDefault();
    }



  return (
    
    <section className="max-w-7xl mx-auto py-4 px-5 h-full">
    <div className="flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-semibold pt-2 pb-6">{pageProps.pageTitle}</h1>
    </div>
    <div className="w-full card py-5 rounded-xl">
      <form
        action=""
        id="createpost"
        className="form"
        encType="multipart/form-data"
        method="post"
        onSubmit={postSubmit}
      >
        <fieldset className="p-2"><legend>New Post Data</legend>
          <div className="bg-white  py-5 sm:p-6">
            <div className="grid gap-6 grid-cols-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Post Title<span className="required"> * </span>
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-600 px-3 text-xl text-white"><IoIosCreate/></span>
                  
                <input
                  type="text"
                  name="postTitle"
                  id="postTitle"
                  autoComplete="given-name"
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                </div>
              </div>
{/* 
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">Website</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">http://</span>
                  <input type="text" name="company-website" id="company-website" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="www.example.com"/>
                </div>
              </div>
            </div> */}

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postCategory"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category<span className="required"> * </span>
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0  bg-gray-600 px-3 text-xl text-white"><IoIosList/></span>
                  <input
                  type="text"
                  name="postCategory"
                  id="postCategory"
                  autoComplete="family-name"
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postTag"
                  className="block text-sm font-medium text-gray-700"
                >
                   Post Tags<span className="required"> * </span>
                </label> 
                <div className="tag-container">
                  <span className="inline-flex w-25 items-center rounded-l-md border border-r-0  bg-gray-600 px-3 text-xl text-white">
                 <IoMdPricetags/> </span>
                   <div className="mt-1 rounded-md shadow-sm tag-wrapper">
                      {tags.map((tagName:string,i:number)=>{
                   return(<div className="tag" key={i}>
                      <span >{tagName}</span>
                      <IoIosClose className="text-sm ml-1.5"/>
                      </div>)})
                      }
                    <input 
                      className="tag-input" 
                      name="tag-input"
                      value={tagName}
                      // onChange={createTagName}
                      onKeyDown={addTag} 
                      type="text" />
                  </div>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postStatus"
                  className="block text-sm font-medium text-gray-700"
                >
                 Post Status
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 bg-gray-600 px-3 text-xl text-white"><IoMdColorWand/></span>
                  
                <select
                  id="postStatus"
                  name="postStatus"
                  className="block w-full flex-1 rounded-none h-10 px-2 rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                > 
                    <option value="Draft">Select Post Status...</option>
                      <option value="Published">Publish</option>
                      <option value="Draft"> Draft</option>
                      <option value="other">other</option>
                </select>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3 flex justify-center flex-col">
              <label
                  htmlFor="postCoverImage" className="block text-sm font-medium text-gray-700">
                Post Cover Iamge</label>
              <div className="mt-1 md:w-6/12 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex items-center text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input 
                  name="postCoverImage"
                  id="postCoverImage" type="file" className="sr-only"/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

              <div className="col-span-6 sm:col-span-3 flex justify-center flex-col">
              <label
                  htmlFor="postAttachments" className="block text-sm font-medium text-gray-700">
                  Post Attachments</label>
              <div className="mt-1 md:w-6/12 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex items-center text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input 
                  name="postAttachments"
                  id="postAttachments" type="file" className="sr-only"/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">Videos, Music,Files, Apps  up to 1024MB</p>
                </div>
              </div>
            </div>
            
             

            
                <div className="col-span-6">
                <label
                  htmlFor="postContent"
                  className="block text-sm font-medium text-gray-700"
                >
                  Post Content<span className="required"> *</span>
                </label>
                {/* <textarea
                  name="postContent"
                  id="postContent"
                  rows={20}
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea> */}
            <Tinymce />
              </div>
            </div>
          </div>
        </fieldset>
      <div className="flex items-center justify-center w-full py-4 px-10">
        <button type="submit" className="w-24 h-10 p-2 bg-slate-300 shadow-md rounded-xl mr-5" name=" ">Cancel</button>
        <button type="submit" className="w-24 h-10 p-2 bg-blue-800 text-white shadow-md rounded-xl mr-5" name=" ">Submit</button>
      </div>
      </form>
    </div>
    </section>
  );
};

export default CreatePost;
