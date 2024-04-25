const cartWrapper = document.querySelector('.cart-wrapper');
const isCartOpenKey = 'isCartOpen';
const isCartOpen = JSON.parse(localStorage.getItem(isCartOpenKey)) ?? false;

function updateCartState() {
  cartWrapper.classList.toggle('active');
  localStorage.setItem('isCartOpen', !isCartOpen);
}

const cartButton = document.querySelector('.cart-button');
cartButton.addEventListener('click', () => {
  updateCartState();
});

document.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('fa-shopping-bag') ||
    cartWrapper.contains(e.target)
  )
    return;

  cartWrapper.classList.remove('active');
  localStorage.setItem('isCartOpen', false);
});

if (isCartOpen) {
  cartWrapper.classList.add('active');
}

const cartItems = JSON.parse(localStorage.getItem('cart')) ?? [];

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
  removeButton.addEventListener('click', () => {
    const index = cartItems.findIndex(
      (cartItem) => cartItem.title === item.title
    );
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    location.reload();
  });

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

function createEmptyCart() {
  const emptyCartContainer = document.createElement('div');
  emptyCartContainer.classList.add('empty-cart-container');
  const emptyCart = document.createElement('h5');
  emptyCart.textContent = 'Your cart is empty';
  emptyCartContainer.appendChild(emptyCart);
  emptyCart.classList.add('empty-cart-title');
  cartWrapper.appendChild(emptyCartContainer);
}

if (cartItems.length === 0) {
  createEmptyCart();
}

cartItems.forEach((item) => {
  addCartItem(item);
});
