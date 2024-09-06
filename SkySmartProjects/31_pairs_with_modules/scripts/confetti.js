export function generateConfetti(num) {
    // Массив цветов для конфетти
    const colors = ['d13447', 'ffbf00', '263672'];

    // Пустой массив для готовых конфетти
    const confettiArray = []
    for (let i = 0; num >= i; i++) {
        // Создание элемента для конфетти
        let confetti = document.createElement('div');

        // Заполняем около-рандомные стили для элемента
        confetti.style = `
        position: absolute;
        width: ${Math.random() * 20}px;
        height: ${Math.random() * 10}px;
        background-color: #${colors[Math.floor(Math.random() * colors.length)]};
        top: -10%;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random() + 0.1};
        transform: rotate(${Math.random() * 360}deg);
        animation: moveDown ease-in-out ${((Math.random() + 0.2) * 10)}s infinite; 
        `;

        // Вставляем готовый элемент конфетти в массив
        confettiArray.push(confetti);
    }
    // Возвращаем готовый массив конфетти.
    // Можно сразу вставлять элементы напрямую в HTML, но генерация большого кол-ва элементов с помощью цикла for в процессе игры вызывает проблемы с производительностью, поэтому функция вызывается в момент прогрузки страницы, а сами конфетти вставляются только в нужный момент.
    return confettiArray;
}