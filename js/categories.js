const productsRow = document.querySelector(".category__products");
const searchInput = document.querySelector(".header__box-input");

let search = "";

function getCatalogsCard(product) {
  let check = cart.find((pr) => pr.id === product.id);



  const productCard = document.createElement("div");
  productCard.className = "promotion__box";

  const productCardLink = document.createElement("a");
  productCardLink.className = "";
  productCardLink.href =`basket.html?category=${product.id}`

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

const category = new URLSearchParams(location.search).get("category");

let categoryProducts = products.filter((pr) => pr.category == category);

console.log(categoryProducts);

function getProducts() {
    let results = categoryProducts.filter(
      (pr) =>
        pr.name.toLowerCase().includes(search)
    )

  productsRow.innerHTML = "";

  if (results.length !== 0) {
    results.map((pr) => {
      productsRow.append(getCatalogsCard(pr))
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