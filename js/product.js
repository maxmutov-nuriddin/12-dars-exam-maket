const productsRow = document.querySelectorAll(".promotion__product");
const bigBox = document.querySelector('.promotion__boxs');
const boxTitle = document.querySelector('.basked__heading')


const category = new URLSearchParams(location.search).get("category");

let categoryProducts = products.filter((pr) => pr.id == category);




function productDescription(product) {
  console.log(product);
  const basketContent = document.createElement('div');
  basketContent.classList.add('basked__content');

  const basketImages = document.createElement('div');
  basketImages.classList.add('basked__images');

  const basketImagesSmall = document.createElement('div');
  basketImagesSmall.classList.add('basked__image-small', 'indicators');

  for (let index = 0; index < 3; index++) {
    const imageSmall = document.createElement('img');
    imageSmall.classList.add('basked__image-small');
    imageSmall.src = product.images[index];
    imageSmall.alt = 'maslo';
    basketImagesSmall.appendChild(imageSmall);
  }

  basketImages.appendChild(basketImagesSmall);

  const basketImagesLarge = document.createElement('div');
  basketImagesLarge.classList.add('basked__image-large', 'show');

  const imageLarge = document.createElement('img');
  imageLarge.classList.add('basked__image-large');
  imageLarge.src = product.images[3];
  imageLarge.alt = 'maslo';
  basketImagesLarge.appendChild(imageLarge);

  basketImages.appendChild(basketImagesLarge);

  basketContent.appendChild(basketImages);

  const basketInfo = document.createElement('div');
  basketInfo.classList.add('basked__info');

  const basketPrices = document.createElement('ul');
  basketPrices.classList.add('basked__prices');

  const regularPriceItem = document.createElement('li');
  regularPriceItem.classList.add('basked__list-item', 'basket__price-item_regular');

  const regularPriceValue = document.createElement('ins');
  regularPriceValue.classList.add('basked__price-value');
  regularPriceValue.textContent = '192,69';

  const regularPriceLabel = document.createElement('p');
  regularPriceLabel.classList.add('basket__price-label');
  regularPriceLabel.textContent = 'Обычная цена';

  regularPriceItem.appendChild(regularPriceValue);
  regularPriceItem.appendChild(regularPriceLabel);

  basketPrices.appendChild(regularPriceItem);

  const withCardPriceItem = document.createElement('li');
  withCardPriceItem.classList.add('basket__price-item', 'basket__price-item_with-card');

  const withCardPriceValue = document.createElement('ins');
  withCardPriceValue.classList.add('basked__price-values');
  withCardPriceValue.textContent = product.price;

  const withCardPriceLabel = document.createElement('p');
  withCardPriceLabel.classList.add('basket__price-label');
  withCardPriceLabel.textContent = 'С картой Северяночки';

  withCardPriceItem.appendChild(withCardPriceValue);
  withCardPriceItem.appendChild(withCardPriceLabel);

  basketPrices.appendChild(withCardPriceItem);

  basketInfo.appendChild(basketPrices);

  const basketButton = document.createElement('div');
  basketButton.classList.add('basked__button');

  const basketButtonLink = document.createElement('button');
  basketButtonLink.classList.add('basked__button-link');
  basketButtonLink.textContent = 'В корзину';
  basketButtonLink.addEventListener("click", (e) => {
    e.preventDefault();
    addToCart(product.id)
  });

  basketButton.appendChild(basketButtonLink);

  basketInfo.appendChild(basketButton);

  basketContent.appendChild(basketInfo);

  const container = document.createElement('div');
  container.classList.add('basket__content');
  container.appendChild(basketContent);

  return container;
}

categoryProducts.map((product) => {
  let cards = productDescription(product);
  bigBox.append(cards);
  boxTitle.innerHTML = product.description
});


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





function getBasketCard(product) {
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


function getProducts() {
  productsRow.forEach(row => {
    while (row.firstChild) {
      row.removeChild(row.firstChild);
    }
  });

  products.slice(1, 5).map((product) => {
    let card = getBasketCard(product);
    productsRow[0].append(card);
  });
  products.slice(7, 11).map((product) => {
    let card = getBasketCard(product);
    productsRow[1].append(card);
  });
}


getProducts();


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


getProducts();



const indicators = document.querySelector(".indicators");
const showImg = document.querySelector(".show img");


indicators.addEventListener("click", (e) => {
  e.target.src && (showImg.src = e.target.src);
});