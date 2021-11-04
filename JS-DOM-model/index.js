function myFunction() {

    // Вставить HTML внутрь элемента
    document.querySelector("h1").innerHTML="<em>Good Bye!</em>"

    // Добавить класс
    document.querySelector("h1").classList.toggle("huge")

    // Сменить атрибут тега
    document.querySelector("a").setAttribute('href', "https://yandex.ru");

}

function time() {
    document.getElementById('time').innerHTML=Date()
}