const gameBoard = document.querySelector(".board");
const form = gameBoard.querySelector('.board__form');
const startButton = form.querySelector('.board__button');
const input = form.querySelector('.board__input');

startButton.addEventListener("click", (event) => {
  event.preventDefault()
  let columns = input.value;
  let count;
  if (input.value >= 2 && input.value <= 6 && input.value % 2 == 0) {
    count = input.value * input.value;
  } else {
    alert("Нужно написать четное число в указанном диапазоне.");
    return;
  }

  createBoard(count, columns);
});


function createBoard(count, columns) {

  gameBoard.textContent = "";

  const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
  const gameTable = template.querySelector('.table');
  const restartBtn = template.querySelector(".table__button");

  for (let i = 0; i < count; i++) {
    gameTable.append(createCard());
  }

  gameTable.style = `
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${columns}, 1fr);
  `;

  gameBoard.append(gameTable);

  restartBtn.addEventListener("click", () => {
    location.reload();
  });

  gameBoard.append(restartBtn);

};


function createCard(flippedIcon) {
  // Клонирование шаблона
  const template = document.querySelector('#cardTemplate').cloneNode(true).content;
  // Поиск нужного элемента
  const card = template.querySelector('.card');
  // Добавление иконки, название которой передаем через параметр flippedIcon
  card.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);
  // card.addEventListener('click', (event) => gameLogic(event, card));

  // rutern card означает, что получившийся объект "выбрасывается" в то место, где будет вызвана функция createCard
  return card;
}

// Дублирование всех элементов входящего массива
function dublicateElements(array) {
  const newArr = [];

  // Перебирается массив array и каждый элемент массива (item) дважды вставляется в новый массив
  array.forEach((item) => {
    newArr.push(item, item);
  });

  return newArr;
}



function createIconsArray(initialCount) {
  // Массив названий иконок
  const cardsIcons = [
    "compass",
    "cloud",
    "play",
    "bolt",
    "stop",
    "cogs",
    "atom",
    "basketball-ball",
    "arrows",
    "angle-left",
    "bars",
    "file",
    "filter",
    "gear",
    "folder",
    "folder-open",
    "shield",
    "scissors",
    "pen-clip",
  ];

  // Выбор нужного количества иконок с помощью среза
  let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
  // Создание пар элементов
  const duobleCards = dublicateElements(cards);
  // Случайное перемешивание элементов и возврат итогового массива
  return shuffleArray(duobleCards);
};

// Перемешивание элементов массива
function shuffleArray(array) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  };

  return array;
}


// console.log(createIconsArray(16))