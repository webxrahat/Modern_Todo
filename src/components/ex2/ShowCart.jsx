import React from "react";

const ShowCart = ({ cart }) => {
 return (
  <div>
   {" "}
   <h2 className="text-2xl font-bold">
    {cart.length} Bottles are available in Shooping cart
   </h2>
   <div className="grid grid-cols-6 gap-y-2">
    {cart.map((sCart, i) => (
     <div key={i}>
      <div>
       <img src={sCart.photo} alt="img" className="w-16" />
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default ShowCart;
