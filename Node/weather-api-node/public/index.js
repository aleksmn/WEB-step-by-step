const weather = {
  fetchWeather: function () {
    fetch("/weather")
      .then((responce) => responce.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    console.log(data);

    const { name, iconUrl, description, temp, humidity, speed } = data;

    console.log(name, iconUrl, description, temp, humidity, speed);

    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src = iconUrl;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = `${Math.round(temp)}°C`;
    document.querySelector(".humidity").innerText = `влажность: ${humidity}%`;
    document.querySelector(".wind").innerText = `скорость ветра: ${speed} м/с`;

    document.querySelector(".weather").classList.remove("loading");
  },
};

weather.fetchWeather();
