import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const Task = () => {
 const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;

  console.log(name);
 };

 return (
  <>
   {/* Input Section */}
   <div className="flex items-center justify-center mt-10">
    <form onSubmit={handleSubmit} className="flex space-x-4">
     <input
      type="text"
      name="name"
      placeholder="Add a new task..."
      className="w-72 h-10 px-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
     />
     <button className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
      Submit
     </button>
    </form>
   </div>

   {/* Task List Section */}
   <div className="flex items-center justify-center mt-8">
    <div className="flex items-center bg-white shadow-lg p-4 rounded-lg w-80">
     <p className="text-lg font-medium text-gray-800">Mango</p>
     <div className="flex space-x-2 ml-auto">
      <button
       className="text-teal-500 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded"
       title="Mark as Complete"
      >
       <BsFillCheckCircleFill size={24} />
      </button>
      <button
       className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
       title="Delete Task"
      >
       <MdDelete size={24} />
      </button>
     </div>
    </div>
   </div>
  </>
 );
};

export default Task;
