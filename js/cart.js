let cartRow = document.querySelector(".carts__box");
let allpriceElement = document.getElementById('allprice');


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
        <button onClick="decreaseQuantity(${id})">-</button>
        <span>${quantity}</span>
        <button onClick="increaseQuantity(${id})">+</button>
      </div>
    </div>
  `;
}

function getCartProducts() {
  cartRow.innerHTML = "";
  let allprice = 0;

  cart.map((pr) => {
    cartRow.innerHTML += getCartCard(pr);
    allprice += pr.price * pr.quantity;
  });

  allpriceElement.textContent = `${allprice} ₽`;
}

getCartProducts();

function increaseQuantity(id) {
  cart = cart.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
}

function decreaseQuantity(id) {
  let product = cart.find((pr) => pr.id === id);

  if (product.quantity === 1) {
    let isDelete = confirm("Do you want to delete this product ?");
    if (isDelete) {
      cart = cart.filter((pr) => pr.id !== id);
      getCartProducts();
    }
  } else {
    cart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity--;
      }
      return pr;
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
}