const drobdown = document.querySelector('.drobdown_none');
const btn = document.querySelector('.header__catalog-link');
const drobdownBox = document.querySelector('.drobdown__list');
const cartTotal = document.querySelector('.count__cards');
const likeTotal = document.querySelector('.count__likes');
const modalS = document.querySelector(".header__profile-link");
const closeBtn = document.querySelector(".modal-close");
const modalContent = document.querySelector(".modal-content");
const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-btn");
const InputName = document.querySelector('.header__profile-link')
const dataName = document.querySelector('.login-input')
const logout = document.querySelector('.header__profile-dropdown-btn')



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


document.getElementById('submitBtn').addEventListener('click', function () {
  var fileInput = document.getElementById('myFile');
  var file = fileInput.files[0];

  var reader = new FileReader();
  reader.onload = function (event) {
    var base64Image = event.target.result;
    localStorage.setItem('image', base64Image);

    var previewImg = document.getElementById('preview');
    previewImg.src = base64Image;
  };
  reader.readAsDataURL(file);
});

window.addEventListener('load', function () {
  var savedImage = localStorage.getItem('image');
  var previewImg = document.getElementById('preview');
  if (savedImage) {
    previewImg.src = savedImage;
  } else {
    previewImg.src = '../imgs/png/user.png';
  }
});



modalS.addEventListener("click", () => {
  modal.classList.add("modal-show");
  modalContent.classList.add("modal-content-show");
});

closeBtn.addEventListener("click", () => closeModal());

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("modal-show");
  modalContent.classList.remove("modal-content-show");
}


let name = localStorage.getItem("name");
if (name) {
  InputName.innerHTML = name;
}

localStorage.setItem("log", 'header__profile-dropdown-btns');

function logOutS() {
  let logS = localStorage.getItem("log");
  logout.classList.remove(logS);
}



loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let setName = dataName.value.trim();
  if (setName === "") {
    setName = "User";
  }
  localStorage.setItem("name", setName);
  InputName.innerHTML = setName;
  dataName.value = "";
  closeModal()
});

logOutS()



function logOut() {
  localStorage.removeItem("name");
  localStorage.removeItem("image")
}

function logS() {
  let logS = localStorage.getItem("log");
  logout.classList.add(logS);
}

logout.addEventListener("click", () => {
  const confirmed = confirm("Вы уверены, что хотите выйти?");
  if (confirmed) {
    logOut();
    location.reload();
  }
  logS();
});