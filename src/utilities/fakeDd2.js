// // manage local storae to cart data 
// const addToDb = (id) => {
//     // first declear a let variable which contains object 
//     let shippingCart = {};

//     // check shipping-cart in local storage 
//     const storedCart = localStorage.getItem('shipping-cart');
//     // now shopping cart stay we convert  JSON.parse  
//     if (storedCart) {
//         shippingCart = JSON.parse(storedCart);
//     } else {
//         shippingCart = {};
//     }
//     // add quentity need shipping cart id
//     const quentity = shippingCart[id];
//     if (quentity) {
//         const newQuentity = quentity + 1;
//         shippingCart[id] = newQuentity;
//     } else {
//         shippingCart[id] = 1;
//     }
//     localStorage.setItem('shipping-cart', JSON.stringify(shippingCart));
// }
// // Remove Item from local storage 
// const removeFromDb = (id) => {
//     const storedCart = localStorage.getItem('shipping-cart');
//     if (storedCart) {
//         const shippingCart = JSON.parse(storedCart);
//         if (id in shippingCart) {
//             delete shippingCart[id];
//             localStorage.setItem('shipping-cart', JSON.stringify(shippingCart));
//         }
//     }
// }


// export { addToDb, removeFromDb }