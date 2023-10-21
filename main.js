// Get the elements
const locationInput = document.querySelector('.locationbutton1');
const findButton = document.querySelector('.locationbutton2');
const dayOfWeek = document.querySelector('.dayofweek');
const dateElement = document.querySelector('.date');
const locationElement = document.querySelector('.location');
const weatherIcon = document.querySelector('.imgicon');
const temperatureElement = document.querySelector('.degreecelsius');
const weatherDescription = document.querySelector('.sunny');

// OpenWeatherMap API endpoint and your API key
const apiKey = '9c02ef314b76977899fff3664f641e19';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Event listener for the Find button
findButton.addEventListener('click', () => {
    const location = locationInput.value;
    // Call the getWeather function with the location as a parameter
    getWeather(location);
});

// Function to get weather data from OpenWeatherMap API
async function getWeather(location) {
    
    try {
        // Fetch data from the API
        const response = await fetch(`${apiUrl}?q=${location}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        // Update the UI with the fetched data
        dayOfWeek.textContent = getDayOfWeek();
        dateElement.textContent = getCurrentDate();
        locationElement.textContent = `${location}, ${data.sys.country}`;
        weatherIcon.src = `./Weathericons/${getWeatherIcon(data.weather[0].icon)}.png`;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
    } catch (error) {
        // Handle errors, for example, display an error message to the user
        console.error('Error fetching weather data:', error);
    }
}

// Function to get the current day of the week
function getDayOfWeek() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return days[today.getDay()];
}

// Function to get the current date in the format: DD MM YYYY
function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();
    return `${day} ${month} ${year}`;
}

// Function to map weather icons from OpenWeatherMap to your local icons
function getWeatherIcon(iconCode) {
    // Add your mapping logic here based on OpenWeatherMap icon codes
    // For example, if(iconCode === '01d') return 'sunny-logo';
    // You need to map different icon codes to your local icons
}
