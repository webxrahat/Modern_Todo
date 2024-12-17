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

const setToLs = (id) => {
 const setCartItem = getLocalItem();
 setCartItem.push(id);
 setLocalStroage(setCartItem);
};

export { setToLs, getLocalItem };
