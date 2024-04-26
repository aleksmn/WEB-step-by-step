const gameBoard = document.querySelector(".board");
const form = gameBoard.querySelector('.board__form');
const startButton = form.querySelector('.board__button');
const input = form.querySelector('.board__input');

let totalTime = 60;
let totalFlips = 0;
let intervalId;

function createBoard(columns) {
  gameBoard.textContent = "";

  // Создание клона шаблона
  const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
  // В шаблоне находится таблица
  const gameTable = template.querySelector('.table');
  // В шаблоне находится кнопка "Рестарт"
  const restartBtn = template.querySelector(".table__button");

  // Добавляются правила для grid-контейнера в зависимости от значения параметра columns
  gameTable.style = `
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${columns}, 1fr);
  `;

  // Получившаяся таблица добавляется в игровое поле
  gameBoard.append(gameTable);

  // Слушатель события клика на кнопке "Рестарт"
  restartBtn.addEventListener("click", () => {
    // Обновление страницы
    location.reload();
  });
  // Добавление кнопки "Рестарт" в игровое поле
  gameBoard.append(restartBtn);
};