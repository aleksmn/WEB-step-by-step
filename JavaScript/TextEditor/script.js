// Текствый редактор
const editor = document.getElementById('editor');

// отслеживаем каждое нажатие клавиши и при каждом нажатии выполняем команду
editor.addEventListener('keyup', function () {
    // записываем содержимое нашего редактора в хранилище
    localStorage.setItem('text_in_editor', editor.innerHTML);
});

// Если в локальном хранилище что-то есть, то отображаем содержимое в редакторе
// обращаемся по ключу
editor.innerHTML = localStorage.getItem("text_in_editor");