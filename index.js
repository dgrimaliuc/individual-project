const cardContainer = document.getElementById('card-container');
const cardTemplate = document.getElementById('card-template');

const dataArray = [
  {
    title: 'Durable Essence',
    description: 'High-quality materials that resist wear and tear.',
    image:
      'https://i.pinimg.com/564x/cb/48/04/cb4804a7acc15bf1594ba90070bbc5c6.jpg',
    price: 51,
    gender: 'male',
    color: 'white',
    size: 'M',
  },
  {
    title: 'Perfect Fit',
    description: 'Tailored to fit your body perfectly.',
    image:
      'https://i.pinimg.com/564x/e0/84/dd/e084ddaaa060d33ad1758edc86b15f0b.jpg',
    price: 30,
    gender: 'male',
    color: 'white',
    size: 'M',
  },
  {
    title: 'Affordable Luxe',
    description: 'Premium quality and style at a great price.',
    image:
      'https://i.pinimg.com/564x/9f/c1/4d/9fc14da9b2b20ca11b767cfba1c39a1f.jpg',
    price: 42,
    gender: 'male',
    color: 'white',
    size: 'L',
  },
  {
    title: 'Stylish Elegance',
    description: 'Premium T-shirts for style and comfort.',
    image: './assets/TShirt-Yellow.webp',
    price: 62,
    gender: 'male',
    color: 'yellow',
    size: 'XL',
  },
  {
    title: 'Sporty Sophistication',
    description: 'Performance-driven with a stylish edge.',
    image:
      'https://i.pinimg.com/564x/4f/2f/da/4f2fda425377c03fed2344c6345cb23c.jpg',
    price: 54,
    gender: 'male',
    color: 'green',
    size: 'M',
  },
  {
    title: 'Timeless Tradition',
    description: 'Honoring classic menswear with modern flair.',
    image:
      'https://i.pinimg.com/564x/97/40/f6/9740f6ae9f500b8b7dfbd785d891c078.jpg',
    price: 37,
    gender: 'female',
    color: 'purple',
    size: 'S',
  },
  {
    title: 'Stylish Elegance',
    description: 'Premium T-shirts for style and comfort.',
    image:
      'https://i.pinimg.com/564x/de/e0/e6/dee0e6494ede76017d51dcc28eec6e8f.jpg',
    price: 32,
    gender: 'male',
    color: 'blue',
    size: 'M',
  },
  {
    title: 'Performance Max',
    description:
      'Breathable, moisture-wicking materials for active lifestyles.',
    image:
      'https://i.pinimg.com/564x/88/6c/93/886c9325fe4499c896ad9339d9e1ab5c.jpg',
    price: 24,
    gender: 'male',
    color: 'black',
    size: 'L',
  },
  {
    title: 'Classic Blend',
    description: 'Blend of classic style and modern design.',
    image:
      'https://i.pinimg.com/564x/74/e7/17/74e7175f9fc6f2f069b1af983343f25b.jpg',
    price: 37,
    gender: 'male',
    color: 'black',
    size: 'S',
  },
  {
    title: 'Effortless Elegance',
    description: 'Timeless style meets modern comfort.',
    image:
      'https://i.pinimg.com/564x/b3/24/bd/b324bdbbe1c2f53bf3575ac63ade27fc.jpg',
    price: 17,
    gender: 'female',
    color: 'blue',
    size: 'S',
  },
  {
    title: 'Breathable Bliss',
    description: 'Classic silhouettes with a contemporary twist.',
    image:
      'https://i.pinimg.com/564x/06/14/39/0614397c37c51329cd66d6dcec4f8840.jpg',
    price: 27,
    gender: 'female',
    color: 'brown',
    size: 'M',
  },
  {
    title: 'Vintage Charm',
    description: 'Lightweight and moisture-wicking for active days.',
    image:
      'https://i.pinimg.com/564x/4a/47/22/4a4722001bc9c1385c2ccbd56b95b765.jpg',
    price: 37,
    gender: 'female',
    color: 'black',
    size: 'L',
  },
  {
    title: 'Rugged Resilience',
    description: 'Durable fabrics built to last.',
    image:
      'https://i.pinimg.com/564x/03/40/ee/0340ee7e473b38c4bfb95532be8ffe3f.jpg',
    price: 28,
    gender: 'male',
    color: 'gray',
    size: 'L',
  },
  {
    title: 'Refined Relaxation',
    description: 'Premium quality for elevated everyday wear.',
    image:
      'https://i.pinimg.com/564x/2f/45/f2/2f45f2d5654d21b597418fe4cee9f038.jpg',
    price: 28,
    gender: 'male',
    color: 'gray',
    size: 'L',
  },
  {
    title: 'Adaptive Adventure',
    description: 'Flexible and functional for any activity.',
    image:
      'https://i.pinimg.com/564x/66/5d/53/665d53da0c40f8985962c8bbcd191c9e.jpg',
    price: 68,
    gender: 'female',
    color: 'beige',
    size: 'S',
  },
  {
    title: 'Minimalist Masterpiece',
    description: 'Clean lines and a sleek aesthetic.',
    image:
      'https://i.pinimg.com/564x/82/eb/3d/82eb3debb96c5f7e34959e5a088ef480.jpg',
    price: 19,
    gender: 'male',
    color: 'beige',
    size: 'M',
  },
  {
    title: 'Coastal Comfort',
    description: 'Breezy designs inspired by the seaside.',
    image:
      'https://i.pinimg.com/564x/34/0e/94/340e9467fc810c097c75e6b4cb238bec.jpg',
    price: 22,
    gender: 'male',
    color: 'beige',
    size: 'L',
  },
  {
    title: 'Tailored Transition',
    description: 'Versatile pieces for work or play.',
    image:
      'https://i.pinimg.com/564x/b0/06/9e/b0069e11e8fa75fcc8306b062d9ad2b1.jpg',
    price: 26,
    gender: 'male',
    color: 'blue',
    size: 'M',
  },
  {
    title: 'Elevated Essentials',
    description: 'Elevated basics to elevate your wardrobe.',
    image:
      'https://i.pinimg.com/736x/94/8e/5b/948e5b5ccf6ea60cb68d0807dcd5c96f.jpg',
    price: 106,
    gender: 'female',
    color: 'red',
    size: 'M',
  },
  {
    title: 'Outdoor Modern',
    description: 'Modern style for the great outdoors.',
    image:
      'https://i.pinimg.com/564x/fc/89/b8/fc89b8f94d64059abde3817d1c172e87.jpg',
    price: 86,
    gender: 'female',
    color: 'brown',
    size: 'S',
  },
  {
    title: 'Tailored Transition',
    description: 'Versatile pieces for work or play.',
    image:
      'https://i.pinimg.com/564x/ad/a7/48/ada74809f9af3c4b4ce769ab88528bed.jpg',
    price: 76,
    gender: 'male',
    color: 'red',
    size: 'M',
  },
];

let filteredCards =
  JSON.parse(localStorage.getItem('filtered-items')) || dataArray;

function saveDataToLocalStorage(dataArray) {
  localStorage.setItem('shop-items', JSON.stringify(dataArray));
}

function cloneCardTemplate(data) {
  const clone = cardTemplate.content.cloneNode(true);

  const cardImage = clone.querySelector('#card-image');
  const cardTitle = clone.querySelector('#card-title');
  const cardDescription = clone.querySelector('#card-description');
  const cardPrice = clone.querySelector('#card-price');
  const cardGender = clone.querySelector('#card-gender');
  const cardColor = clone.querySelector('#card-color');
  const cardSize = clone.querySelector('#card-size');

  clone.querySelector('#add_to_cart_button').addEventListener('click', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(data);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    location.reload();
  });

  cardImage.src = data.image;
  cardTitle.textContent = data.title;
  cardDescription.textContent = data.description;
  const circle = drawCircle(data.color);
  cardColor.appendChild(circle);
  cardPrice.textContent = `$${data.price}`;
  cardSize.textContent = `Size: ${data.size}`;
  cardGender.textContent = `${data.gender}`;

  return clone;
}

const dropdownIcon = document.getElementById('dropdownIcon');
const dropdownList = document.getElementById('dropdownList');
const sortText = document.getElementById('sortText');

dropdownIcon.addEventListener('click', function () {
  dropdownList.style.display =
    dropdownList.style.display === 'none' ? 'block' : 'none';
});

dropdownList.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    const sortOrder = event.target.textContent.toLowerCase();
    const sortedData = sortByName(filteredCards, sortOrder);
    localStorage.setItem('filtered-items', JSON.stringify(sortedData));

    cardContainer.innerHTML = '';

    sortedData.forEach((data) => {
      const cardClone = cloneCardTemplate(data);
      cardContainer.appendChild(cardClone);
    });
  }
});

function sortByName(dataArray, order) {
  return dataArray.sort((a, b) => {
    if (order === 'ascending') {
      return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
    } else {
      return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1;
    }
  });
}

saveDataToLocalStorage(dataArray);

function drawCircle(color) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const diameter = 20;

  canvas.width = diameter;
  canvas.height = diameter;

  ctx.beginPath();
  ctx.arc(diameter / 2, diameter / 2, diameter / 2, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();

  return canvas;
}

filteredCards.forEach((data) => {
  const cardClone = cloneCardTemplate(data);
  cardContainer.appendChild(cardClone);
});
