const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  // console.log(event);
  event.preventDefault();
  // console.log("Форма отправлена!");
  validForm();
});

function validForm() {
  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;
  const email = document.getElementById("email").value;

  // // Получаем значение из инпута radio
  const passport = document.querySelector(
    'input[name="passport"]:checked'
  ).value;


  const text = `
        Отправлены следующие данные:

        Ваш возраст: ${age};
        Страна проживания: ${country};
        Электронная почта: ${email};
        Загранпаспорт: ${passport}.
        `;

  document.getElementById("data").innerText = text;
}
