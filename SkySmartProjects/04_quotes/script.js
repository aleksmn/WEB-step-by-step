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



function generateQuote() {

    function hide() {
        image.classList.remove('show');
        quote.classList.remove('show');
    }

    function show() {
        image.src = `./images/${randomImg}`;

        quote.textContent = randomQuote;

        if (randomQuote.length > 40) {
            quote.style.justifyContent = "left";
            quote.style.fontSize = "30px";
            
        }
        else {
            quote.style.justifyContent = "center";
            quote.style.fontSize = "38px";
            
        }

        image.classList.add('show');
        quote.classList.add('show');
    }

    function getRandomElement(arr) {
        const index = Math.floor(Math.random() * arr.length)
        return arr[index]
    }

    const randomBeginning = getRandomElement(beginning);
    const randomEnd = getRandomElement(ending);
    const randomImg = getRandomElement(images);

    const randomQuote = randomBeginning +  randomEnd;

    setTimeout(show, 500);

    setTimeout(hide, 100);

}


generateQuote();

