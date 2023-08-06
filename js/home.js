const productsRow = document.querySelectorAll(".promotion__product");
const offerBox = document.querySelector(".offer__content");

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

specialOffer.map((special) => {
  console.log(special);
})


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

products.slice(1, 5).map((product) => {
  let card = getProductCard(product);
  let cardCopy1 = card.cloneNode(true);
  let cardCopy2 = card.cloneNode(true);
  let cardCopy3 = card.cloneNode(true);
  productsRow[0].append(cardCopy1);
  productsRow[1].append(cardCopy2);
  productsRow[2].append(cardCopy3);
});