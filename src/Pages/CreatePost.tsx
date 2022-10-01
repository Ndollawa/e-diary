import React from "react";
import Tinymce from "../Middlewares/Tinymce";

const CreatePost = () => {
  return (
    <div className="w-full card bg-slate-200 p-5 rounded-xl">
      <form
        action=""
        id="createpost"
        className="form"
        encType="multipart/form-data"
        method="post"
      >
        <fieldset className="p-2"><legend>New Post Data</legend>
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Post Title<span className="required"> * </span>
                </label>
                <input
                  type="text"
                  name="postTitle"
                  id="postTitle"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postCategory"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category<span className="required"> * </span>
                </label>
                <input
                  type="text"
                  name="postCategory"
                  id="postCategory"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postTag"
                  className="block text-sm font-medium text-gray-700"
                >
                  Post Tags<span className="required"> * </span>
                </label> 
                <input
                  type="text"
                  name="postTag"
                  id="postTag"
                  title="  Hint:Use UPPERCASE htmlFor first letter of each tag and
                      seperate using comma(,).&nbsp; @example(Technology,
                      Economy, Politics)"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postStatus"
                  className="block text-sm font-medium text-gray-700"
                >
                 Post Status
                </label>
                <select
                  id="postStatus"
                  name="postStatus"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                > 
                    <option value="Draft">Select...</option>
                      <option value="Published">Publish</option>
                      <option value="Draft"> Draft</option>
                      <option value="other">other</option>
                </select>
              </div>

            

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postCoverImage"
                  className="block text-sm font-medium text-gray-700"
                >
                Post Cover Iamge
                </label>
                <input
                  type="file"
                  name="postCoverImage"
                  id="postCoverImage"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="postAttachments"
                  className="block text-sm font-medium text-gray-700"
                >
                  Post Attachments
                </label>
                <input
                  type="file"
                  name="postAttachments"
                  id="postAttachments"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea> */}
            <Tinymce />
              </div>
            </div>
          </div>
        </fieldset>
      <div className="flex items-center justify-between w-full py-4 px-10">
        <button type="submit" className="w-24 h-10 p-2 bg-slate-300 shadow-md rounded-xl" name=" ">Cancel</button>
        <button type="submit" className="w-24 h-10 p-2 bg-blue-800 text-white shadow-md rounded-xl" name=" ">Submit</button>
      </div>
      </form>
    </div>
  );
};

export default CreatePost;
