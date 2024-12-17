const getLocalItem = () => {
 const addToCart = localStorage.getItem("cart");
 if (addToCart) {
  return JSON.parse(addToCart);
 } else {
  return [];
 }
};

const setLocalStroage = (cart) => {
 const setToCart = JSON.stringify(cart);
 localStorage.setItem("cart", setToCart);
};

const deleteStroage = (id) => {
 const cartDelete = getLocalItem();
 const singleCart = cartDelete.filter((idx) => idx !== id);
 setLocalStroage(singleCart);
};

const setToLs = (id) => {
 const setCartItem = getLocalItem();
 setCartItem.push(id);
 setLocalStroage(setCartItem);
};

export { setToLs, getLocalItem, deleteStroage };
