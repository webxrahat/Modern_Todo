import React, { useEffect, useState } from "react";
import GridBottle from "./GirdBottle";
import { setToLs } from "../../utility/localStroage";

const E_bottle = () => {
 const [showBottle, setShowBottle] = useState([]);

 const [cart, setCart] = useState([]);

 useEffect(() => {
  fetch("bottles.json")
   .then((res) => res.json())
   .then((data) => setShowBottle(data));
 }, []);

 const handleShop = (bottle) => {
  const showCart = [...cart, bottle];

  setCart(showCart);

  setToLs(bottle.id);
  // console.log(showCart);
 };

 return (
  <div className="max-w-7xl mx-auto">
   <div className="my-8  flex justify-between">
    <h1 className="text-2xl font-bold ">
     {showBottle.length} Bottles are available here
    </h1>
    <h2 className="text-2xl font-bold">
     {cart.length} Bottles are available in Shooping cart
    </h2>
   </div>
   <div className="grid grid-cols-5 gap-5">
    {showBottle.map((singleBottle, index) => (
     <GridBottle
      key={index}
      singleBottle={singleBottle}
      handleShop={handleShop}
     />
    ))}
   </div>
  </div>
 );
};

export default E_bottle;
