const productsRow = document.querySelector(".promotion__product");
const searchInput = document.querySelector(".header__box-input");
const pagination = document.querySelector(".pagination");
const counterButtonMinus = document.getElementById('counterButtonMinus');
const counterButtonPlus = document.getElementById('counterButtonPlus');


let search = "";

let pages;

let activePage = 1;


function getProductCard(product) {
  let check = cart.find((pr) => pr.id === product.id);

  // console.log(check);

  const productCard = document.createElement("div");
  productCard.className = "promotion__box";

  const productCardLink = document.createElement("a");
  productCardLink.className = "";
  productCardLink.href = `basket.html?category=${product.id}`

  const productCardBody = document.createElement("div");
  productCardBody.className = "product-card-body";

  const productImg = document.createElement("img");
  productImg.src = product.images[0];
  productImg.alt = product.name;
  productImg.style = 'width: 100%'

  const productLikeImg = document.createElement("img");
  productLikeImg.src = './imgs/svg/like.svg';
  productLikeImg.className = 'promotion__like'

  productLikeImg.addEventListener("click", (e) => {
    e.preventDefault();
    addToCartS(product.id)
  });

  productCardLink.appendChild(productCardBody)
  productCardBody.appendChild(productLikeImg);
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


  const productBtn = document.createElement("button");
  productBtn.className = 'promotion__btn'
  productBtn.innerHTML = "В корзину";

  productBtn.addEventListener("click", (e) => {
    e.preventDefault();
    productBtn.classList.add("product__active")
    addToCart(product.id)
  });

  productCardFooter.prepend(productBtn);
  productCardFooter.prepend(productRatings);
  productCardFooter.prepend(productTitle);
  productCardFooter.prepend(productCarS);

  productCard.append(productCardLink, productCardFooter);

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

  pages = Math.ceil(results.length / 10);

  pagination.innerHTML = "";

  for (let i = 1; i <= pages; i++) {
    pagination.innerHTML += `<button onClick="getPage(${i})" class="page-item ${i === activePage ? "page-active" : ""
      }">${i}</button>`;
  }

  productsRow.innerHTML = "";

  if (results.length !== 0) {
    let first = (activePage - 1) * 10;
    let last = activePage * 10;
    let lastResults = results.slice(first, last);
    lastResults.map((pr) => {
      productsRow.append(getProductCard(pr))
    });
  } else {
    productsRow.innerHTML = `<div>
      No products
    </div>`;
  }
}

counterButtonMinus.addEventListener('click', () => {
  activePage--;
  if (activePage < 1) {
    activePage = 1;
  }
  getProducts();
});

counterButtonPlus.addEventListener('click', () => {
  if (activePage < pages) {
    activePage++;
    getProducts();
  }
});


getProducts();

function getPage(page) {
  activePage = page;
  getProducts();
}





searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  activePage = 1;
  getProducts();
});

function addToCartS(id) {
  let product = products.find((pr) => pr.id === id);

  let check = like.find((pr) => pr.id === id);

  if (check) {
    like = like.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
  } else {
    product.quantity = 1;
    like.push(product);
  }
  localStorage.setItem("like", JSON.stringify(like));
  getProducts();
  getLikeTotal();
}