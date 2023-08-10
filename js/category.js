const productsRow = document.querySelector(".promotion__product");
const searchInput = document.querySelector(".header__box-input");


let search = "";


function getProductCard({id, images, name, category, price}) {
  let check = cart.find((pr) => pr.id === id);



  const productCard = document.createElement("div");
  productCard.className = "promotion__box";

  const productCardBody = document.createElement("div");
  productCardBody.className = "product-card-body";

  const productImg = document.createElement("img");
  productImg.src = images[0];
  productImg.alt = name;
  productImg.style = 'width: 100%'

  productCardBody.appendChild(productImg);

  const productCardFooter = document.createElement("div");
  productCardFooter.className = "promotion__content";

  const productCarS = document.createElement("div");
  productCarS.className = 'promotion__prices'

  const productTitle = document.createElement("a");
  productTitle.href = `catalogs.html?category=${category}`
  productTitle.className = 'promotion__titles'
  const productTitleText = document.createTextNode(name);

  productTitle.appendChild(productTitleText);

  const productPrice = document.createElement("p");
  productPrice.className = 'promotion__price'
  productPrice.innerHTML = `<ins> ${price} </ins>`;

  const productPriceS = document.createElement("p");
  productPriceS.className = 'promotion__price'
  productPriceS.innerHTML = `<ins> 44.50 </ins>`;

  productCarS.prepend(productPrice)
  productCarS.prepend(productPriceS)

  const productRatings = document.createElement('img');
  productRatings.src = './imgs/svg/rating.svg'
  productRatings.alt = 'rating'
  productRatings.className = 'promotion__rating'


  const productBtn = document.createElement("button");
  productBtn.className = 'promotion__btn'
  productBtn.innerHTML = "В корзину";
  
  productBtn.addEventListener("click", () => addToCart(product.id));

  productBtn.addEventListener("click", () => {
    productBtn.classList("active-cart");
    // console.log(productBtn);
    addToCart(product.id);
  })


  productCardFooter.prepend(productBtn);
  productCardFooter.prepend(productRatings);
  productCardFooter.prepend(productTitle);
  productCardFooter.prepend(productCarS);

  productCard.append(productCardBody, productCardFooter);

  return productCard;
}

function addToCart(id) {
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
      productsRow.insertAdjacentHTML("beforeend", getProductCard(pr).outerHTML);
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

