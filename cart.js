const cartWrapper = document.querySelector('.cart-wrapper');

const cartButton = document.querySelector('.cart-button');
cartButton.addEventListener('click', () => {
  cartWrapper.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('fa-shopping-bag') ||
    cartWrapper.contains(e.target)
  )
    return;
  cartWrapper.classList.remove('active');
});

const cartItems = localStorage.getItem('cart') ?? [
  {
    title: 'T-Shirt - Nike',
    price: 100,
    color: 'Yellow',
    size: 'XL',
    image: './assets/TShirt-Yellow.webp',
  },
];

function addCartItem(item) {
  // Create caret icon
  const caretIcon = document.createElement('i');
  caretIcon.classList.add('fa', 'fa-caret-up');

  // Create cart cards wrapper
  const cartCardsWrapper = document.createElement('div');
  cartCardsWrapper.classList.add('cart-cards-wrapper');

  // Create cart card
  const cartCard = document.createElement('div');
  cartCard.classList.add('cart-card');

  // Create image element
  const image = document.createElement('img');
  image.classList.add('cart-card-image');
  image.setAttribute('src', item.image);
  image.setAttribute('alt', 'Not Found');

  // Create cart card body
  const cartCardBody = document.createElement('div');
  cartCardBody.classList.add('cart-card-body');

  // Create cart card info
  const cartCardInfo = document.createElement('div');
  cartCardInfo.classList.add('cart-card-info');

  // Create heading
  const heading = document.createElement('h4');
  heading.textContent = item.title;

  // Create price paragraph
  const pricePara = document.createElement('p');
  pricePara.textContent = `Price: ${item.price}`;

  // Create color paragraph
  const colorPara = document.createElement('p');
  colorPara.textContent = `Color: ${item.color}`;

  // Create size paragraph
  const sizePara = document.createElement('p');
  sizePara.textContent = `Size: ${item.size}`;

  // Append elements to cart card info
  cartCardInfo.appendChild(heading);
  cartCardInfo.appendChild(pricePara);
  cartCardInfo.appendChild(colorPara);
  cartCardInfo.appendChild(sizePara);

  // Create remove button
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-item');
  removeButton.textContent = 'Remove';

  // Append cart card info and remove button to cart card body
  cartCardBody.appendChild(cartCardInfo);
  cartCardBody.appendChild(removeButton);

  // Append image and cart card body to cart card
  cartCard.appendChild(image);
  cartCard.appendChild(cartCardBody);

  // Append cart card to cart cards wrapper
  cartCardsWrapper.appendChild(cartCard);

  // Append caret icon and cart cards wrapper to cart wrapper
  cartWrapper.appendChild(caretIcon);
  cartWrapper.appendChild(cartCardsWrapper);
}

cartItems.forEach((item) => {
  addCartItem(item);
});
