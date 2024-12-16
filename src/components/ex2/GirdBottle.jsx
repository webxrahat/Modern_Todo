import React from "react";

const GridBottle = ({ singleBottle, handleShop }) => {
 //  console.log(singleBottle);

 const { id, model, price, photo } = singleBottle;

 return (
  <div>
   <img src={photo} alt="img" className="w-60 h-72" />
   <div className="my-2 px-2 font-semibold">
    <h4>{model}</h4>
    <p>${price}</p>
   </div>
   <button
    onClick={() => handleShop(singleBottle)}
    className="bg-teal-200 px-5 py-1 w-full"
   >
    Shop
   </button>
  </div>
 );
};

export default GridBottle;
