const cardContainer = document.getElementById('card-container');
const cardTemplate = document.getElementById('card-template');

function cloneCardTemplate(data) {
  const clone = cardTemplate.content.cloneNode(true);
  const cardImage = clone.querySelector('#card-image');
  const cardTitle = clone.querySelector('#card-title');
  const cardDescription = clone.querySelector('#card-description');

  cardImage.src = data.image;
  cardTitle.textContent = data.title;
  cardDescription.textContent = data.description;

  return clone;
}

const dataArray = [
  {
    title: 'Card 1',
    description: 'This is card 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Card 2',
    description: 'This is card 2',
    image: 'https://via.placeholder.com/150',
  },
  // ... more data objects
];

dataArray.forEach((data) => {
  const cardClone = cloneCardTemplate(data);
  cardContainer.appendChild(cardClone);
});
