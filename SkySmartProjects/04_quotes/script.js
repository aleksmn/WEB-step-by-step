const image = document.getElementById("image");
const quote = document.getElementById("quote");

const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
]

const beginning = [
    'Кто рано встает, ',
    'Не бойся ошибаться, ',
    'Когда меня рожали, ',
    'Каждый может кинуть камень в волка, ',
    'Нельзя стоять, когда другие работают, ',
    'Иногда, жизнь - это жизнь, ',
];

const ending = [
    'тот потом пожалеет о своем решении.',
    'собственно, тогда я и родился.',
    'но не каждый может кинуть волка в камень.',
    'надо лежать.',
    'а ты в ней - иногда.',
    'бойся не ошибаться.',
];

generateQuote();

function generateQuote() {
    const randomBeginning = getRandomElement(beginning, beginning.length);
    const randomEnd = getRandomElement(ending, ending.length);
    const randomImg = getRandomElement(images, images.length);

    const randomQuote = randomBeginning + ' ' + randomEnd;

    setTimeout(hide, 100);

    function hide() {
        image.classList.remove('show');
        quote.classList.remove('show');
        setTimeout(show, 500);
    }

    function show() {
        image.src = `./images/${randomImg}`;

        if (randomQuote.length <= 48) {
            quote.style.fontSize = '36px';
            quote.style.justifyContent = 'center';
        } else {
            quote.style.fontSize = '30px';
            quote.style.justifyContent = 'left';
        }

        quote.textContent = randomQuote;

        image.classList.add('show');
        quote.classList.add('show');
    }

    function getRandomElement(arr, endIndex) {
        return arr[Math.floor(Math.random() * endIndex)]
    }
}