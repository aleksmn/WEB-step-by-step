// если в нашем хранилище уже что-то есть…
if (localStorage.getItem('text_in_editor') !== null) {
    // …то отображаем его содержимое в нашем редакторе
    document.getElementById('editor').innerHTML = localStorage.getItem('text_in_editor');
}
// отслеживаем каждое нажатие клавиши и при каждом нажатии выполняем команду
document.addEventListener('keydown', function (e) {
    // записываем содержимое нашего редактора в хранилище
    localStorage.setItem('text_in_editor', document.getElementById('editor').innerHTML);
});