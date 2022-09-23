import React from "react";

const CreatePost = () => {
  return (
    <div className="w-full card bg-slate-200 p-5">
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

              <div className="col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street address
                </label>
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal code
                </label>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </fieldset>
      
      </form>
    </div>
  );
};

export default CreatePost;
