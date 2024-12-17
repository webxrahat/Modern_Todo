import React, { useEffect, useState } from "react";
import GridBottle from "./GirdBottle";
import { getLocalItem, setToLs } from "../../utility/localStroage";
import ShowCart from "./ShowCart";

const E_bottle = () => {
 const [showBottle, setShowBottle] = useState([]);

 const [cart, setCart] = useState([]);

 useEffect(() => {
  fetch("bottles.json")
   .then((res) => res.json())
   .then((data) => setShowBottle(data));
 }, []);

 useEffect(() => {
  if (showBottle.length > 0) {
   const getItems = getLocalItem();
   const saveCart = [];
   for (const id of getItems) {
    // console.log(id);
    const cartId = showBottle.find((itemId) => itemId.id === id);
    if (cartId) {
     saveCart.push(cartId);
    }
   }
   //  console.log(saveCart);
   setCart(saveCart);
  }
 }, [showBottle]);
 //  console.log("hy");

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
    <ShowCart cart={cart} />
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
