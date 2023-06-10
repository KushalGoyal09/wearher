const form = document.getElementById('locationForm');
const locationInput = document.getElementById('locationInput');
const weatherInfo = document.getElementById('weatherInfo');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('windSpeed');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const location = locationInput.value;
  getWeather(location);
});

async function getWeather(location) {
  const apiKey = 'fd4aa4b2890e410f824173905230806'; 
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    const data = await response.json();

    locationElement.textContent = `Location: ${data.location.name}, ${data.location.country}`;
    temperatureElement.textContent = `Temperature: ${data.current.temp_c}°C`;
    humidityElement.textContent = `Humidity: ${data.current.humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
    weatherInfo.classList.remove('hidden');
  } catch (error) {
    alert('An error occurred. Please try again.');
  }
}
