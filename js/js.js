// addToCartS(product.id)

// function addToCartS(id) {
//   let product = products.find((pr) => pr.id === id);

//   let check = cart.find((pr) => pr.id === id);

//   if (check) {
//     cart = cart.map((pr) => {
//       if (pr.id === id) {
//         pr.quantity++;
//       }
//       return pr;
//     });
//   } else {
//     product.quantity = 1;
//     cart.push(product);
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   getProducts();
//   getCartTotal();
// }