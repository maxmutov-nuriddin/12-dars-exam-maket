const drobdown = document.querySelector('.drobdown_none')
const btn = document.querySelector('.header__catalog-link')
const drobdownBox = document.querySelector('.drobdown__list')
const cartTotal = document.querySelector('.count__cards')
const likeTotal = document.querySelector('.count__likes')




function drobdownPage(params) {
  const drobdownItems = document.createElement('li')
  drobdownItems.className = 'drobdown__items'

  const drobdownLink = document.createElement('a')
  drobdownLink.href = `catalogs.html?category=${params}`
  drobdownLink.className = 'drobdown__items-link'
  drobdownLink.innerHTML = `${params}`

  drobdownItems.prepend(drobdownLink)

  return drobdownItems
}

const uniqueCategories = [];
const categoryItems = [];

products.forEach(product => {
  const category = product.category;

  if (!uniqueCategories.includes(category)) {
    uniqueCategories.push(category);
    const categoryItem = drobdownPage(category);
    categoryItems.push(categoryItem);
  }
});

categoryItems.map(categoryItem => {
  drobdownBox.append(categoryItem);
});


btn.addEventListener("click", function (e) {
  e.preventDefault();
  drobdown.classList.toggle("drobdown_none")
})


let cartJson = localStorage.getItem("cart");

let cart = JSON.parse(cartJson) || [];

function getCartTotal() {
  cartTotal.innerHTML = cart.length;
}

getCartTotal();

let likeJson = localStorage.getItem("like");

let like = JSON.parse(likeJson) || [];

function getLikeTotal() {
  likeTotal.innerHTML = like.length;
}

getLikeTotal();