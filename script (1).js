
const API_KEY = '1b583f6e6461ad21a423827ee79b0cc3'; // OpenWeatherMap API key
const searchBtn = document.getElementById('searchBtn');
const locationInput = document.getElementById('locationInput');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const weatherIcon = document.getElementById('weatherIcon');
const locationDisplay = document.getElementById('location');

// Default weather data (for demo purposes)
const defaultWeatherData = {
    temperature: 11,
    description: 'Light Rain',
    humidity: 71,
    windSpeed: 6,
    icon: 'https://cdn.weatherapi.com/weather/64x64/day/296.png',
    location: 'Search for a location'
};

// Function to update weather display
function updateWeatherDisplay(data) {
    temperature.innerHTML = `${Math.round(data.temperature)}<span>°C</span>`;
    description.textContent = data.description;
    humidity.textContent = `${data.humidity}%`;
    windSpeed.textContent = `${data.windSpeed}Km/h`;
    weatherIcon.src = data.icon;
    if (data.location) {
        locationDisplay.textContent = data.location;
    }
}

// Function to fetch weather data from OpenWeatherMap (free backup service)
async function getWeatherDataBackup(city) {
    try {
        console.log(`Using backup API for: ${city}`);
        
        // Using wttr.in - completely free weather service
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await response.json();
        
        if (response.ok && data.current_condition && data.current_condition[0]) {
            const current = data.current_condition[0];
            const nearest_area = data.nearest_area && data.nearest_area[0];
            const location = nearest_area ? 
                `${nearest_area.areaName[0].value}, ${nearest_area.country[0].value}` : 
                city.charAt(0).toUpperCase() + city.slice(1);
            
            const weatherData = {
                temperature: parseInt(current.temp_C),
                description: current.weatherDesc[0].value,
                humidity: parseInt(current.humidity),
                windSpeed: Math.round(parseInt(current.windspeedKmph)),
                icon: `https://openweathermap.org/img/wn/${getWeatherIcon(current.weatherCode)}@2x.png`,
                location: location
            };
            updateWeatherDisplay(weatherData);
        } else {
            throw new Error('Invalid response from backup API');
        }
    } catch (error) {
        console.error('Backup API error:', error);
        alert('Unable to fetch weather data. Please try again later.');
    }
}

// Function to map weather codes to OpenWeatherMap icons
function getWeatherIcon(code) {
    const iconMap = {
        '113': '01d', // Clear/Sunny
        '116': '02d', // Partly cloudy
        '119': '03d', // Cloudy
        '122': '04d', // Overcast
        '143': '50d', // Mist
        '176': '10d', // Patchy rain possible
        '179': '13d', // Patchy snow possible
        '182': '13d', // Patchy sleet possible
        '185': '13d', // Patchy freezing drizzle possible
        '200': '11d', // Thundery outbreaks possible
        '227': '13d', // Blowing snow
        '230': '13d', // Blizzard
        '248': '50d', // Fog
        '260': '50d', // Freezing fog
        '263': '09d', // Patchy light drizzle
        '266': '09d', // Light drizzle
        '281': '13d', // Freezing drizzle
        '284': '13d', // Heavy freezing drizzle
        '293': '10d', // Patchy light rain
        '296': '10d', // Light rain
        '299': '10d', // Moderate rain at times
        '302': '10d', // Moderate rain
        '305': '10d', // Heavy rain at times
        '308': '10d', // Heavy rain
        '311': '09d', // Light freezing rain
        '314': '09d', // Moderate or heavy freezing rain
        '317': '13d', // Light sleet
        '320': '13d', // Moderate or heavy sleet
        '323': '13d', // Patchy light snow
        '326': '13d', // Light snow
        '329': '13d', // Patchy moderate snow
        '332': '13d', // Moderate snow
        '335': '13d', // Patchy heavy snow
        '338': '13d', // Heavy snow
        '350': '13d', // Ice pellets
        '353': '09d', // Light rain shower
        '356': '09d', // Moderate or heavy rain shower
        '359': '10d', // Torrential rain shower
        '362': '13d', // Light sleet showers
        '365': '13d', // Moderate or heavy sleet showers
        '368': '13d', // Light snow showers
        '371': '13d', // Moderate or heavy snow showers
        '374': '13d', // Light showers of ice pellets
        '377': '13d', // Moderate or heavy showers of ice pellets
        '386': '11d', // Patchy light rain with thunder
        '389': '11d', // Moderate or heavy rain with thunder
        '392': '11d', // Patchy light snow with thunder
        '395': '11d'  // Moderate or heavy snow with thunder
    };
    return iconMap[code] || '01d';
}

// Function to fetch weather data from OpenWeatherMap
async function getWeatherData(city) {
    try {
        console.log(`Searching for weather data for: ${city}`);
        
        if (!API_KEY || API_KEY === 'YOUR_OPENWEATHER_API_KEY') {
            console.log('No OpenWeatherMap API key, using backup service...');
            return getWeatherDataBackup(city);
        }
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        console.log(`API URL: ${url}`);
        
        const response = await fetch(url);
        const data = await response.json();
        
        console.log('API Response:', data);
        
        if (response.ok && data.main) {
            const location = `${data.name}, ${data.sys.country}`;
            const weatherData = {
                temperature: data.main.temp,
                description: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),
                humidity: data.main.humidity,
                windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                location: location
            };
            updateWeatherDisplay(weatherData);
        } else if (data.message) {
            console.error('API Error:', data.message);
            if (data.message.includes('Invalid API key')) {
                console.log('Invalid API key, using backup service...');
                return getWeatherDataBackup(city);
            }
            alert(`Error: ${data.message}`);
        } else {
            console.log('Primary API failed, using backup service...');
            return getWeatherDataBackup(city);
        }
        
    } catch (error) {
        console.error('Primary API error:', error);
        console.log('Falling back to backup service...');
        return getWeatherDataBackup(city);
    }
}

// Event listeners
searchBtn.addEventListener('click', () => {
    const city = locationInput.value.trim();
    if (city) {
        getWeatherData(city);
        locationInput.value = '';
    }
});

locationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = locationInput.value.trim();
        if (city) {
            getWeatherData(city);
            locationInput.value = '';
        }
    }
});

// Initialize with default data
updateWeatherDisplay(defaultWeatherData);
