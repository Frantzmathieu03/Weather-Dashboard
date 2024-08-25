document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const cityInput = document.getElementById('city-input');
    const historyList = document.getElementById('history-list');
    const currentWeatherDetails = document.getElementById('current-weather-details');
    const forecastDetails = document.getElementById('forecast-details');

    searchButton.addEventListener('click', () => {
        const cityName = cityInput.value.trim();
        if (cityName) {
            fetchWeatherData(cityName);
            addToSearchHistory(cityName);
        }
    });

    historyList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            fetchWeatherData(e.target.textContent);
        }
    });

    function fetchWeatherData(city) {
        const apiKey = 'faff234bf817057f05695e651b7fad30';
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        fetch(currentWeatherUrl)
            .then(response => response.json())
            .then(data => {
                displayCurrentWeather(data);
            });

        fetch(forecastUrl)
            .then(response => response.json())
            .then(data => {
                displayForecast(data);
            });
    }

    function displayCurrentWeather(data) {
        const { name, main, weather, wind } = data;
        const weatherHtml = `
            <h3>${name}</h3>
            <p>Date: ${new Date().toLocaleDateString()}</p>
            <img src="http://openweathermap.org/img/wn/${weather[0].icon}.png" class="weather-icon" alt="${weather[0].description}">
            <p>Temperature: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
        `;
        currentWeatherDetails.innerHTML = weatherHtml;
    }

    function displayForecast(data) {
        const forecastHtml = data.list.slice(0, 5).map(day => `
            <div class="forecast-day">
                <span>${new Date(day.dt * 1000).toLocaleDateString()}</span>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" class="weather-icon" alt="${day.weather[0].description}">
                <span>${day.main.temp}°C</span>
                <span>Wind: ${day.wind.speed} m/s</span>
                <span>Humidity: ${day.main.humidity}%</span>
            </div>
        `).join('');
        forecastDetails.innerHTML = forecastHtml;
    }

    function addToSearchHistory(city) {
        const historyItem = document.createElement('li');
        historyItem.textContent = city;
        historyList.appendChild(historyItem);
    }
});
