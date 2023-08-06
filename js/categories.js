const productsRow = document.querySelector(".category__products");
const searchInput = document.querySelector(".header__box-input");

let search = "";

function getCatalogsCard(product) {
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
  productTitle.href = '../catalogs.html'
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


  const productBtn = document.createElement("a");
  productBtn.href = '../basket.html'
  productBtn.className = 'promotion__btn'
  productBtn.innerHTML = "В корзину";

  productCardFooter.prepend(productBtn);
  productCardFooter.prepend(productRatings);
  productCardFooter.prepend(productTitle);
  productCardFooter.prepend(productCarS);

  productCard.append(productCardBody, productCardFooter);

  return productCard;
}

function getProducts() {
  let results = products.filter(
    (pr) =>
      pr.name.toLowerCase().includes(search)
  );


  productsRow.innerHTML = "";

  if (results.length !== 0) {
    results.map((pr) => {
      productsRow.insertAdjacentHTML("beforeend", getCatalogsCard(pr).outerHTML);
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
