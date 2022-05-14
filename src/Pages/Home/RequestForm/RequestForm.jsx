import React from "react";

const RequestForm = () => {
  return (
    <div className="z-20 relative">
      <div className="container mx-auto bg-slate-500 p-6 px-10 rounded-lg mt-[-4rem]">
        <h3 className="text-2xl text-primary mb-6">Get Free Estimate</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn btn-primary mt-4">REQUEST A QUOTE</button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
