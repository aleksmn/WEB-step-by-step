// API Link:
// https://openweathermap.org/


// Get weather from API
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weather_api_key = config.WEATHER_API_KEY;


/////// STEP 1 ///////

// let weather = {
//     "apiKey": weather_api_key,
//     fetchWeather: function (city) {
//         fetch(
//             "https://api.openweathermap.org/data/2.5/weather?q=" 
//             + city  
//             + "&units=metric&appid=" 
//             + this.apiKey
//         ).then((responce) => responce.json())
//         .then((data) => console.log(data))
//     },
// };

// console.log("Погода в Лондоне:");
// console.log(weather.fetchWeather('london'));




//// ПРИМЕР
//// Получение переменной из объекта:

// const car = { type: "Fiat", model: "500", color: "white" };
// const { type } = car;

// console.log(type); // "Fiat"





/////// STEP 2 ///////


let weather = {
    "apiKey": weather_api_key,
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((responce) => responce.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
    }
};

//// проверка:
weather.fetchWeather('london');




/////// STEP 3 ///////


