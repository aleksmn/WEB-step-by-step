const myDiv = document.getElementById("demo");

myDiv.innerHTML += '<button id="craft" type="button">Начать крафт</button>';

const craftBtn = document.getElementById("craft");


craftBtn.onclick = function() {

  let winCount = 0;
  let tries = 10;

  for (let i = 1; i <= tries; i++) {
    setTimeout(function () {
      if (Math.random() > 0.5) {
        myDiv.innerHTML += `<p>Крафт ${i}: Удача!</p>`;
        winCount += 1;
      } else {
        myDiv.innerHTML += `<p>Крафт ${i}: Неудача!</p>`;
      }
    }, i * 1000);
  }

  setTimeout(function () {
    myDiv.innerHTML += `<p><strong>Удачных попыток: ${winCount} из ${tries} </strong></p>`;
  }, 11000);

}
