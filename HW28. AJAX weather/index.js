const container = document.getElementById('container');

const url = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

const displayWeather = (data) => {
    const city = data.name;
    const temperature = data.main.temp;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const windDirection = data.wind.deg;
    const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    const cityElement = document.createElement('p');
    cityElement.textContent = `City: ${city}`;

    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Temperature: ${temperature}°C`;

    const pressureElement = document.createElement('p');
    pressureElement.textContent = `Pressure: ${pressure} hPa`;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${description}`;

    const humidityElement = document.createElement('p');
    humidityElement.textContent = `Humidity: ${humidity}%`;

    const windSpeedElement = document.createElement('p');
    windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`;

    const windDirectionElement = document.createElement('p');
    windDirectionElement.textContent = `Wind Direction: ${windDirection}°`;

    const iconImage = document.createElement('img');
    iconImage.src = icon;
    iconImage.alt = 'Weather Icon';

    container.append(cityElement, temperatureElement, pressureElement, descriptionElement, humidityElement, windSpeedElement, windDirectionElement, iconImage);
};

const displayError = (message) => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `${message}`;
    container.append(errorMessage);
};


fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to fetch weather data...')
        }
    })
    .then(data => displayWeather(data))
    .catch(error => displayError(error.message));