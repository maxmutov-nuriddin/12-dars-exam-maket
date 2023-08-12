let cartRow = document.querySelector(".like__card");

function getCartCard({ id, images, name, price, description, quantity }) {
  return `
  <div class="cart-card">
  <div class="cart-card-content">
  <div class="cart-card-img">
  <img src="${images[0]}" alt="" />
</div>
<div>
  <div class="cart__title-boxs">
    <h3>${name}</h3>
    <p>${price} $</p>
    <p>${description}</p>
  </div>
</div>
  </div>
  <div class="cart__btn-box">
    <button onClick="decreaseQuantity(${id})">Delete</button>
  </div>
</div>
  `;
}

function getCartProducts() {
  cartRow.innerHTML = "";
  like.map((pr) => {
    cartRow.innerHTML += getCartCard(pr);
  });
}


getCartProducts();

function decreaseQuantity(id) {
  let product = like.find((pr) => pr.id === id);

  if (product.quantity === 1) {
    let isDelete = confirm("Do you want to delete this product ?");
    if (isDelete) {
      like = like.filter((pr) => pr.id !== id);
      getLikeTotal();
    }
  } else {
    like = like.map((pr) => {
      if (pr.id === id) {
        pr.quantity--;
      }
      return pr;
    });
  }

  localStorage.setItem("like", JSON.stringify(like));
  getCartProducts();
}