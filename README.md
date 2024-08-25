# Weather Dashboard

## Overview

The Weather Dashboard is a web application that enables users to search for and view the current weather and a 5-day forecast for any city. It also maintains a history of recent searches.

## Features

- **Current Weather Display**: Shows the current weather details for a searched city, including temperature, humidity, wind speed, and a weather icon.
- **5-Day Forecast**: Provides a 5-day weather forecast including temperature, wind speed, and humidity for each day.
- **Search History**: Keeps a history of searched cities, allowing users to click on previous searches to view their weather details again.

## Technologies Used

- **HTML**: For the structure of the dashboard.
- **CSS**: For styling the dashboard styles.css.
- **JavaScript**: For dynamic interactions and fetching weather data from the OpenWeatherMap API.
- **OpenWeatherMap API**: Provides weather data.


- A web browser to view and test the application.


## How It Works

### 1. HTML Structure

The HTML file (`index.html`) sets up the basic structure of the Weather Dashboard:
- **Header**: Displays the title of the dashboard.
- **Main Section**: Contains:
  - A search input field and button for querying weather data.
  - A section for displaying search history.
  - Sections for current weather and 5-day forecast.

### 2. JavaScript Functionality

The JavaScript file (`index.js`) handles the application's logic:
- **Event Listeners**:
  - **Search Button**: When clicked, fetches weather data for the city entered in the input field and adds the city to the search history.
  - **Search History**: Clicking on a history item fetches weather data for that city.

- **Fetching Weather Data**:
  - Uses the OpenWeatherMap API to get current weather and forecast data.
  - Constructs URLs for API requests using the city name and an API key.
  - Fetches data and processes the JSON response.

- **Displaying Data**:
  - **Current Weather**: Updates the DOM with details like temperature, humidity, wind speed, and an icon representing the weather.
  - **5-Day Forecast**: Updates the DOM with a forecast for the next 5 days, showing temperature, wind speed, and humidity.

- **Managing Search History**:
  - Adds the searched city to a list in the DOM.
  - Allows users to click on previous searches to view their weather data again.

### 3. API Integration

The project uses the OpenWeatherMap API to fetch weather data. You need to replace the placeholder API key in `index.js` with your own key obtained from OpenWeatherMap.

```javascript
const apiKey = 'faff234bf817057f05695e651b7fad30';
