const API_key = `73a39c0e0e89ce4466183492d8c6dc3d`;
const searchCity = () => {
    const cityName = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`
   fetch(url)
   .then(response => response.json())
   .then(data => displayWeather(data))
}

const displayWeather = (weather) => {
   document.getElementById("city").innerText = `${weather.name}`;
   document.getElementById("city-temp").innerText = `${weather.main.temp}`;
   document.getElementById("weather-type").innerText = `${weather.weather[0].main}`;


   //set weather icon
   const url = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
   const weatherIcon = document.getElementById("weather-icon");
   weatherIcon.setAttribute("src", url);
}