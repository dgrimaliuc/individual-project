const cardContainer = document.getElementById("card-container");
const cardTemplate = document.getElementById("card-template");

function cloneCardTemplate(data) {
  const clone = cardTemplate.content.cloneNode(true);
  const cardImage = clone.querySelector("#card-image");
  const cardTitle = clone.querySelector("#card-title");
  const cardDescription = clone.querySelector("#card-description");
  const cardPrice = clone.querySelector("#card-price");
  const cardGender = clone.querySelector("#card-gender");
  const cardColor = clone.querySelector("#card-color");
  const cardSize = clone.querySelector("#card-size");

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

const dataArray = [
  {
    title: "Stylish Elegance",
    description: "Premium T-shirts for style and comfort.",
    image: "art.jpg",
    price: 32,
    gender: "male",
    color: "black",
    size: "M",
  },
  {
    title: "Performance Max",
    description: "Breathable, moisture-wicking materials for active lifestyles.",
    image:
      "https://i.pinimg.com/564x/88/6c/93/886c9325fe4499c896ad9339d9e1ab5c.jpg",
    price: 24,
    gender: "male",
    color: "black",
    size: "M",
  },
  {
    title: "Classic Blend",
    description: "Blend of classic style and modern design.",
    image:
      "https://i.pinimg.com/564x/74/e7/17/74e7175f9fc6f2f069b1af983343f25b.jpg",
    price: 37,
    gender: "male",
    color: "black",
    size: "M",
  },
  {
    title: "Durable Essence",
    description: "High-quality materials that resist wear and tear.",
    image:
      "https://i.pinimg.com/564x/cb/48/04/cb4804a7acc15bf1594ba90070bbc5c6.jpg",
    price: 51,
    gender: "male",
    color: "white",
    size: "M",
  },
  {
    title: "Perfect Fit",
    description: "Tailored to fit your body perfectly.",
    image:
      "https://i.pinimg.com/564x/e0/84/dd/e084ddaaa060d33ad1758edc86b15f0b.jpg",
    price: 30,
    gender: "male",
    color: "white",
    size: "M",
  },
  {
    title: "Affordable Luxe",
    description: "Premium quality and style at a great price.",
    image:
      "https://i.pinimg.com/564x/9f/c1/4d/9fc14da9b2b20ca11b767cfba1c39a1f.jpg",
    price: 42,
    gender: "male",
    color: "red",
    size: "L",
  },
];

function drawCircle(color) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const diameter = 20; 

  canvas.width = diameter;
  canvas.height = diameter;

  ctx.beginPath();
  ctx.arc(diameter / 2, diameter / 2, diameter / 2, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();

  return canvas;
}

dataArray.forEach((data) => {
  const cardClone = cloneCardTemplate(data);
  cardContainer.appendChild(cardClone);
});


function saveDataToLocalStorage(dataArray) {
  dataArray.forEach((data, index) => {
    localStorage.setItem(`tshirtData_${index}`, JSON.stringify(data));
  });
}
saveDataToLocalStorage(dataArray);