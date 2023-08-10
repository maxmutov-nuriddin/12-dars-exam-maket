const productsRow = document.querySelector(".promotion__product");
const searchInput = document.querySelector(".header__box-input");

let search = "";


function getProductCard(product) {
  let check = cart.find((pr) => pr.id === product.id);

  // console.log(check);

  const productCard = document.createElement("div");
  productCard.className = "promotion__box";

  const productCardBody = document.createElement("div");
  productCardBody.className = "product-card-body";

  const productImg = document.createElement("img");
  productImg.src = product.images[0];
  productImg.alt = product.name;
  productImg.style = 'width: 100%'

  productCardBody.appendChild(productImg);

  const productCardFooter = document.createElement("div");
  productCardFooter.className = "promotion__content";

  const productCarS = document.createElement("div");
  productCarS.className = 'promotion__prices'

  const productTitle = document.createElement("a");
  productTitle.href = `catalogs.html?category=${product.category}`
  productTitle.className = 'promotion__titles'
  const productTitleText = document.createTextNode(product.name);

  productTitle.appendChild(productTitleText);

  const productPrice = document.createElement("p");
  productPrice.className = 'promotion__price'
  productPrice.innerHTML = `<ins> ${product.price} </ins>`;

  const productPriceS = document.createElement("p");
  productPriceS.className = 'promotion__price'
  productPriceS.innerHTML = `<ins> 44.50 </ins>`;

  productCarS.prepend(productPrice)
  productCarS.prepend(productPriceS)

  const productRatings = document.createElement('img');
  productRatings.src = './imgs/svg/rating.svg'
  productRatings.alt = 'rating'
  productRatings.className = 'promotion__rating'


  const productBtnS = document.createElement("button");
  productBtnS.className = 'promotion__btn'
  productBtnS.innerHTML = "В корзину";
  // console.log(productBtnS);
  productBtnS.addEventListener("click", () => { addToCart(product.id) });


  productCardFooter.prepend(productBtnS);
  productCardFooter.prepend(productRatings);
  productCardFooter.prepend(productTitle);
  productCardFooter.prepend(productCarS);

  productCard.append(productCardBody, productCardFooter);

  return productCard;
}

function addToCart(id) {
  console.log(addToCart);
  let product = products.find((pr) => pr.id === id);

  let check = cart.find((pr) => pr.id === id);

  if (check) {
    cart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getProducts();
  getCartTotal();
}

function getProducts() {
  let results = products.filter(
    (pr) =>
      pr.name.toLowerCase().includes(search)
  );


  productsRow.innerHTML = "";

  if (results.length !== 0) {
    results.map((pr) => {
      productsRow.append(getProductCard(pr))
    });
  } else {
    productsRow.innerHTML = `<div>
      No products
    </div>`;
  }
}

getProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  getProducts();
});

