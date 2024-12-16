import React, { useState } from "react";

const NewTask = () => {
 const [iValue, setIvalue] = useState([]);

 //  const [newValue, setNewValue] = useState([]);

 const handleSubmit = (e) => {
  e.preventDefault();

  const formValue = e.target;
  const name = formValue.name.value;
  const nValue = name;
  setIvalue((pre) => [...pre, nValue]);
  formValue.reset();
 };

 console.log(iValue);

 return (
  <div>
   <form onSubmit={handleSubmit}>
    <input type="text" name="name" className="bg-slate-400" />
    <button className="bg-teal-600">Add Task</button>
   </form>

   {iValue.map((va, i) => (
    <p key={i}>{va}</p>
   ))}
  </div>
 );
};

export default NewTask;
