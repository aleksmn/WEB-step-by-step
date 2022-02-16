const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    valid_form();
});


function valid_form() {

    let age = document.getElementById("age");
    let country = document.getElementById("country");
    let email = document.getElementById("email");

    const passport =  document.querySelector('input[name="passport"]:checked').value;


    const text = "Отправлены следующие данные:\n"
            + "Ваш возраст: " + age.value 
            + "\nСтрана проживания: " + country.value
            + "\nЭлектронная почта: " + email.value
            + "\nЗагранпаспорт: " + passport;


    document.getElementById("data").innerText = text;

}


