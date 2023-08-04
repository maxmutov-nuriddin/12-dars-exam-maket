const productsRow = document.querySelectorAll(".promotion__product");
const drobdown = document.querySelector('.drobdown_none')
const btn = document.querySelector('.header__catalog-link')


btn.addEventListener("click", function(e) {
  e.preventDefault();
  drobdown.classList.toggle("drobdown_none")
})



function getProductCard(product) {
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

  const productTitle = document.createElement("h3");
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
  productBtn.href = '#'
  productBtn.className = 'promotion__btn'
  productBtn.innerHTML = "В корзину";

  productCardFooter.prepend(productBtn);
  productCardFooter.prepend(productRatings);
  productCardFooter.prepend(productTitle);
  productCardFooter.prepend(productCarS);

  productCard.append(productCardBody, productCardFooter);

  return productCard;
}

products.slice(1,5).map((product) => {
  let card = getProductCard(product);
  let cardCopy1 = card.cloneNode(true);
  let cardCopy2 = card.cloneNode(true);
  let cardCopy3 = card.cloneNode(true);
  productsRow[0].append(cardCopy1);
  productsRow[1].append(cardCopy2);
  productsRow[2].append(cardCopy3);
});