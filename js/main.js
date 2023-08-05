const drobdown = document.querySelector('.drobdown_none')
const btn = document.querySelector('.header__catalog-link')


btn.addEventListener("click", function(e) {
  e.preventDefault();
  drobdown.classList.toggle("drobdown_none")
})
