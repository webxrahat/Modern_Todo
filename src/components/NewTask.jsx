import React, { useState } from "react";

const NewTask = () => {
 const [tasks, setTasks] = useState([]);

 // Add new task
 const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const taskName = form.name.value.trim();

  if (taskName) {
   setTasks((prev) => [...prev, taskName]);
  }
  form.reset();
 };

 // Delete task
 const handleDelete = (index) => {
  setTasks((prev) => prev.filter((_, i) => i !== index));
 };

 return (
  <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
   <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
    <h1 className="text-2xl font-bold text-center text-teal-600 mb-4">
     To-Do List
    </h1>
    <form onSubmit={handleSubmit} className="flex mb-4">
     <input
      type="text"
      name="name"
      placeholder="Enter a task"
      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-600"
     />
     <button
      type="submit"
      className="px-4 py-2 bg-teal-600 text-white font-medium rounded-r-md hover:bg-teal-700 focus:ring-2 focus:ring-teal-600 focus:outline-none"
     >
      Add
     </button>
    </form>

    {tasks.length > 0 ? (
     <ul className="space-y-2">
      {tasks.map((task, index) => (
       <li
        key={index}
        className="flex justify-between items-center bg-gray-50 p-3 border rounded-md shadow-sm"
       >
        <span className="text-gray-700">{task}</span>
        <button
         onClick={() => handleDelete(index)}
         className="text-red-500 hover:text-red-700 focus:outline-none"
        >
         Delete
        </button>
       </li>
      ))}
     </ul>
    ) : (
     <p className="text-gray-500 text-center">
      No tasks added yet. Start by adding one above!
     </p>
    )}
   </div>
  </div>
 );
};

export default NewTask;
