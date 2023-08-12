const productsRow = document.querySelectorAll(".promotion__product");
const offerBox = document.querySelector(".offer__content");
const article = document.querySelector(".article__box");

const specialOffer = [
  {
    title: 'Оформите карту <br> «Северяночка»',
    description: 'И получайте бонусы при покупке <br> в магазинах и на сайте',
    img: '../imgs/png/card.png',

  },
  {
    title: 'Покупайте <br> акционные товары',
    description: 'И получайте вдвое больше <br> бонусов',
    img: '../imgs/png/box.png'
  }
]

function offer(card) {
  const offerBoxs = document.createElement('div');
  offerBoxs.className = 'offer__card';


  const offerTitle = document.createElement('h3');
  offerTitle.className = 'offer__card-title';
  offerTitle.innerHTML = `${card.title}`;


  const offerContent = document.createElement('div');
  offerContent.className = 'offer__text';

  const offerCard = document.createElement('div');
  offerCard.className = 'offer__card';

  const offerText = document.createElement('div');
  offerText.className = 'offer__text';

  const offerCardDescription = document.createElement('p');
  offerCardDescription.className = 'offer__card-description';
  offerCardDescription.innerHTML = `${card.description}`

  const offerImage = document.createElement('div');
  offerImage.className = 'offer__image';

  const offerCardImage = document.createElement('img');
  offerCardImage.className = 'offer__card-img';
  offerCardImage.src = `${card.img}`

  offerBoxs.prepend(offerImage);
  offerBoxs.prepend(offerContent);
  offerContent.prepend(offerCardDescription);
  offerContent.prepend(offerTitle)
  offerImage.prepend(offerCardImage)

  return offerBoxs;
}

specialOffer.map((cards) => {
  let card = offer(cards);
  offerBox.append(card);
});





function getProductCard(product) {
  let check = cart.find((pr) => pr.id === product.id);


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
  productsRow.forEach(row => {
    while (row.firstChild) {
      row.removeChild(row.firstChild);
    }
  });

  products.slice(1, 5).map((product) => {
    let card = getProductCard(product);
    productsRow[0].append(card);
  });
  products.slice(7, 11).map((product) => {
    let card = getProductCard(product);
    productsRow[1].append(card);
  });
  products.slice(13, 17).map((product) => {
    let card = getProductCard(product);
    productsRow[2].append(card);
  });

}


getProducts();

const articles = [
  {
    img: '../imgs/png/persson-arm.png',
    data: '05.03.2021',
    title: 'Режим использования масок и<br> перчаток на территории магазинов',
    description: 'Подробная информация о режимах<br> использования масок и перчаток на<br> территории магазинов "ЛЕНТА". Информация<br> обновляется каждый будний день.',
    link: 'Подробнее'
  },
  {
    img: '../imgs/png/flawers.png',
    data: '05.03.2021',
    title: 'Режим использования масок и<br> перчаток на территории магазинов',
    description: '8 Марта – это не просто Международный<br> женский день, это ещё день тюльпанов,<br> приятных сюрпризов и праздничных тёплых<br> пожеланий.',
    link: 'Подробнее'
  },
  {
    img: '../imgs/png/fruits.png',
    data: '05.03.2021',
    title: 'Режим использования масок и<br> перчаток на территории магазинов',
    description: 'Голосуйте за любимые категории, выбирайте<br> категорию-победителя в мобильном<br> приложении и получайте кешбэк 10%<br> баллами в апреле!',
    link: 'Подробнее'
  }
]

articles.map((data) => {
  const articleItem = document.createElement('div');
  articleItem.className = 'article-item';

  const articleImage = document.createElement('div');
  articleImage.className = 'article__image';

  const articleContent = document.createElement('div');
  articleContent.className = 'article__content';

  const articleImg = document.createElement('img');
  articleImg.className = 'article__img';
  articleImg.src = data.img;

  articleImage.prepend(articleImg);

  const articleDate = document.createElement('p');
  articleDate.className = 'article__date';
  articleDate.innerHTML = data.data;

  const articleHeading = document.createElement('h3');
  articleHeading.className = 'article__heading';

  const articleHeadings = document.createElement('a');
  articleHeadings.className = 'article__heading';
  articleHeadings.href = '../statya.html';
  articleHeadings.innerHTML = data.title;

  const articleDescription = document.createElement('p');
  articleDescription.className = 'article__description';
  articleDescription.innerHTML = data.description;

  const articleMore = document.createElement('a');
  articleMore.className = 'article__more';
  articleMore.href = '../index.html';
  articleMore.innerHTML = data.link;

  articleItem.appendChild(articleImage);
  articleItem.appendChild(articleContent);
  articleImage.appendChild(articleImg);
  articleContent.appendChild(articleDate);
  articleContent.appendChild(articleHeading);
  articleHeading.appendChild(articleHeadings);
  articleContent.appendChild(articleDescription);
  articleContent.appendChild(articleMore);

  article.appendChild(articleItem);
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