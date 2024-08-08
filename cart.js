const isCartOpenKey = 'isCartOpen';

const cartWrapper = document.querySelector('.cart-wrapper');
// Create cart cards wrapper
const cartCardsWrapper = document.createElement('div');
cartCardsWrapper.classList.add('cart-cards-wrapper');

const orderButton = document.createElement('button');
orderButton.textContent = 'Order';
orderButton.classList.add('order-button');
orderButton.addEventListener('click', () => {
  alert('Order has been placed!');
  localStorage.setItem('cart', JSON.stringify({}));
  localStorage.setItem(isCartOpenKey, false);
  location.reload();
});

// Create cart cards wrapper
const totalPrice = document.createElement('div');
totalPrice.classList.add('total-price');

// Create caret icon
const caretIcon = document.createElement('i');
caretIcon.classList.add('fa', 'fa-caret-up');

const isCartOpen = JSON.parse(localStorage.getItem(isCartOpenKey)) ?? false;

function updateCartState() {
  cartWrapper.classList.toggle('active');
  localStorage.setItem(isCartOpenKey, !isCartOpen);
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
  localStorage.setItem(isCartOpenKey, false);
});

if (isCartOpen) {
  cartWrapper.classList.add('active');
}

const cartItems = JSON.parse(localStorage.getItem('cart')) ?? [];

function showCartItem(item) {
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
  pricePara.textContent = `Price: $${item.price * item.quantity}`;

  // Create color paragraph
  const colorPara = document.createElement('p');
  colorPara.textContent = `Color: ${item.color}`;

  // Create size paragraph
  const sizePara = document.createElement('p');
  sizePara.textContent = `Size: ${item.size}`;

  const quantityWrapper = document.createElement('div');
  quantityWrapper.classList.add('quantity-wrapper');

  const quantity = document.createElement('label');
  quantity.textContent = item.quantity;
  quantity.classList.add('item-quantity');

  const plusItem = document.createElement('div');
  plusItem.textContent = `+`;
  plusItem.classList.add('plus-item');
  plusItem.addEventListener('click', () => {
    item.quantity++;
    quantity.textContent = item.quantity;
    pricePara.textContent = `Price: $${item.price * item.quantity}`;
    calculateTotal();
    localStorage.setItem('cart', JSON.stringify(cartItems));
  });

  const minusItem = document.createElement('div');
  minusItem.textContent = `-`;
  minusItem.classList.add('minus-item');
  calculateTotal();
  minusItem.addEventListener('click', () => {
    if (item.quantity > 1) {
      item.quantity--;
      quantity.textContent = item.quantity;
      pricePara.textContent = `Price: $${item.price * item.quantity}`;
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      delete cartItems[item.id];
      localStorage.setItem('cart', JSON.stringify(cartItems));
      location.reload();
    }
    calculateTotal();
  });

  quantityWrapper.appendChild(minusItem);
  quantityWrapper.appendChild(quantity);
  quantityWrapper.appendChild(plusItem);

  // Append elements to cart card info
  cartCardInfo.appendChild(heading);
  cartCardInfo.appendChild(pricePara);
  cartCardInfo.appendChild(colorPara);
  cartCardInfo.appendChild(sizePara);
  cartCardInfo.appendChild(quantityWrapper);

  // Create remove button
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-item');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    delete cartItems[item.id];
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

if (Object.values(cartItems).length === 0) {
  createEmptyCart();
}

Object.values(cartItems).forEach((item) => {
  showCartItem(item);
});

function calculateTotal() {
  totalPrice.textContent = `Total: $${Object.values(cartItems).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )}`;
}

calculateTotal();
cartCardsWrapper.appendChild(totalPrice);
cartCardsWrapper.appendChild(orderButton);
