// Wait for the DOM to be fully loaded before manipulating it
document.addEventListener("DOMContentLoaded", function () {
    // Get the elements by their class names or IDs
    var temperatureElement = document.querySelector(".degreecelsius");
    var weatherTypeElement = document.querySelector(".sunny");
    var precipitationElement = document.getElementById("weathertype1");
    var humidityElement = document.getElementById("weathertype2");
    var windElement = document.getElementById("weathertype3");
    var locationInput = document.querySelector(".locationbutton");

    // OpenWeatherMap API endpoint and API key
    var apiKey = "YOUR_API_KEY";

    // Event listener for the button click
    document.querySelector(".locationbutton").addEventListener("click", function () {
        var location = locationInput.value;
        if (location.trim() === "") {
            return;
        }
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&appid=" + apiKey;

        // Fetch weather data from the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Update the content of identified elements with real-time data
                temperatureElement.textContent = data.main.temp + "°C";
                weatherTypeElement.textContent = data.weather[0].description;
                precipitationElement.querySelector(".wtv").textContent = data.clouds.all + "%";
                humidityElement.querySelector(".wtv").textContent = data.main.humidity + "%";
                windElement.querySelector(".wtv").textContent = data.wind.speed + " Km/h";
            })
            .catch(error => {
                console.error("Error fetching weather data: ", error);
            });
    });
});
