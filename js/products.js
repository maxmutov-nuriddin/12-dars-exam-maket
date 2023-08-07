const catalogGrid = document.querySelector('.catalog__grid');

const gridBox = [
  {
    img: [
      './imgs/png/eeg.png',
      './imgs/png/bread.png',
      './imgs/png/vegetables.png',
      './imgs/png/tasty.png',
      './imgs/png/drink.png',
      './imgs/png/tastytwo.png',
      './imgs/png/tea.png',
      './imgs/png/pasta.png',
      './imgs/png/multitul.png',
      './imgs/png/pet.png',
      './imgs/png/baby.png',
      './imgs/png/sausage.png',
      './imgs/png/products.png',
    ]
  }
];

function catalogGridBox(grid, number) {
  const first = document.createElement('div');
  first.className = `item catalog__grid-item${number}`;

  const img = document.createElement('img');
  img.className = 'grid-img';
  img.src = grid.img[number - 1];

  first.prepend(img); 

  catalogGrid.prepend(first);
  return catalogGrid;
}

for (let index = 13; index >= 1; index--) {
  catalogGridBox(gridBox[0], index); 
}

gridBox.map((data) => {
  let grid = catalogGridBox(data, index); 
  catalogGrid.append(grid);
});