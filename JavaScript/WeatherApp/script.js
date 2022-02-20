// API Link:
// https://openweathermap.org/


// Get weather from API
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weather_api_key = config.WEATHER_API_KEY;

let weather = {
    "apiKey": weather_api_key,
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city  
            + "&units=metric&appid=" 
            + this.apiKey
        ).then((responce) => responce.json())
        .then((data) => console.log(data))
    },
};








