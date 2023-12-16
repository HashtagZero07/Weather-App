var apiKey = '0d34f3cb82aa8afd726262e78ad04bef';
var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={country}&appid=0d34f3cb82aa8afd726262e78ad04bef';

function getWeather() {
    const country = document.getElementById('searchInput').value;

    fetch(`${apiUrl.replace('{country}', country)}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('weatherDescription');

    const celsiusTemperature = data.main.temp - 273.15;

    temperature.textContent = `${celsiusTemperature.toFixed(2)} °C`;
    description.textContent = data.weather[0].description;
}

document.querySelector('.searchButton').addEventListener('click', getWeather);