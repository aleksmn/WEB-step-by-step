function valid_form() {
    let age = document.getElementById("age");
    let country = document.getElementById("country");
    let email = document.getElementById("email");

    alert("Ваш возраст: " + age.value 
            + "\nСтрана проживания: " + country.value
            + "\nЭлектронная почта: " + email.value);

}