// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const API_KEY = '1b583f6e6461ad21a423827ee79b0cc3'; // OpenWeatherMap API key
const searchBtn = document.getElementById('searchBtn');
const locationInput = document.getElementById('locationInput');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const weatherIcon = document.getElementById('weatherIcon');
const locationDisplay = document.getElementById('location');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const skeletonLoader = document.getElementById('skeletonLoader');
const mainContent = document.getElementById('mainContent');
const outfitContent = document.getElementById('outfitContent');

// Default weather data (for demo purposes)
const defaultWeatherData = {
    temperature: 21,
    description: 'Heavy intensity rain',
    humidity: 88,
    windSpeed: 6,
    icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    location: 'Tokyo, JP'
};

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('weatherAppTheme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('weatherAppTheme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'bx bx-moon' : 'bx bx-sun';
}

// Loading State Management
function showLoading() {
    skeletonLoader.classList.add('active');
    mainContent.classList.add('loading');
}

function hideLoading() {
    skeletonLoader.classList.remove('active');
    mainContent.classList.remove('loading');
}

// Weather Background Management
function updateWeatherBackground(weatherDescription, iconId) {
    const body = document.body;
    
    // Remove existing weather classes
    body.classList.remove('sunny', 'rainy', 'cloudy', 'snowy', 'stormy', 'foggy');
    
    // Determine weather type based on description and icon
    const desc = weatherDescription.toLowerCase();
    const icon = iconId.toLowerCase();
    
    if (desc.includes('clear') || desc.includes('sunny') || icon.includes('01')) {
        body.classList.add('sunny');
    } else if (desc.includes('rain') || desc.includes('drizzle') || icon.includes('09') || icon.includes('10')) {
        body.classList.add('rainy');
    } else if (desc.includes('snow') || desc.includes('sleet') || icon.includes('13')) {
        body.classList.add('snowy');
    } else if (desc.includes('thunder') || desc.includes('storm') || icon.includes('11')) {
        body.classList.add('stormy');
    } else if (desc.includes('fog') || desc.includes('mist') || desc.includes('haze') || icon.includes('50')) {
        body.classList.add('foggy');
    } else if (desc.includes('cloud') || icon.includes('02') || icon.includes('03') || icon.includes('04')) {
        body.classList.add('cloudy');
    } else {
        body.classList.add('cloudy'); // Default fallback
    }
}

// Outfit Suggestions
function generateOutfitSuggestions(temperature, description, humidity, windSpeed) {
    const suggestions = [];
    const temp = parseInt(temperature);
    const desc = description.toLowerCase();
    
    // Temperature-based suggestions
    if (temp <= 0) {
        suggestions.push('🧥 Heavy winter coat and warm layers essential');
        suggestions.push('🧤 Don\'t forget gloves, scarf, and warm hat');
        suggestions.push('👢 Wear insulated waterproof boots');
    } else if (temp <= 10) {
        suggestions.push('🧥 Warm jacket or heavy sweater recommended');
        suggestions.push('🧣 Light scarf and gloves might be helpful');
        suggestions.push('👟 Closed-toe shoes with warm socks');
    } else if (temp <= 20) {
        suggestions.push('👕 Light jacket or cardigan is perfect');
        suggestions.push('👖 Long pants or jeans recommended');
        suggestions.push('👟 Comfortable sneakers or boots');
    } else if (temp <= 30) {
        suggestions.push('👕 T-shirt or light blouse is ideal');
        suggestions.push('🩳 Shorts or light pants work well');
        suggestions.push('👟 Breathable sneakers or loafers');
    } else {
        suggestions.push('👕 Light, breathable clothing recommended');
        suggestions.push('🩳 Shorts and tank tops are perfect');
        suggestions.push('🩴 Sandals or very light shoes');
        suggestions.push('🧴 Don\'t forget sunscreen!');
    }
    
    // Weather condition-based suggestions
    if (desc.includes('rain') || desc.includes('drizzle')) {
        suggestions.push('☂️ Umbrella or rain jacket essential');
        suggestions.push('🥾 Waterproof shoes recommended');
    } else if (desc.includes('snow')) {
        suggestions.push('❄️ Waterproof boots with good grip');
        suggestions.push('🧤 Warm, waterproof gloves needed');
    } else if (desc.includes('wind') || windSpeed > 20) {
        suggestions.push('🧥 Wind-resistant jacket advised');
        suggestions.push('🧢 Secure hat or avoid loose accessories');
    } else if (desc.includes('sun') || desc.includes('clear')) {
        suggestions.push('🕶️ Sunglasses and sun hat recommended');
        suggestions.push('🧴 Apply sunscreen before going out');
    }
    
    // High humidity suggestions
    if (humidity > 80) {
        suggestions.push('👕 Choose moisture-wicking fabrics');
        suggestions.push('🌬️ Avoid heavy, non-breathable materials');
    }
    
    return suggestions.slice(0, 3); // Return max 3 suggestions
}

function updateOutfitSuggestions(temperature, description, humidity, windSpeed) {
    const suggestions = generateOutfitSuggestions(temperature, description, humidity, windSpeed);
    outfitContent.innerHTML = suggestions.map(suggestion => `<p>${suggestion}</p>`).join('');
}

// Function to update weather display
function updateWeatherDisplay(data) {
    temperature.innerHTML = `${Math.round(data.temperature)}<span>°C</span>`;
    description.textContent = data.description;
    humidity.textContent = `${data.humidity}%`;
    windSpeed.textContent = `${data.windSpeed}Km/h`;
    weatherIcon.src = data.icon;
    weatherIcon.onerror = function() {
        this.src = 'https://openweathermap.org/img/wn/01d@2x.png'; // Fallback icon
    };
    if (data.location) {
        locationDisplay.textContent = data.location;
    }
    
    // Update background based on weather
    updateWeatherBackground(data.description, data.icon);
    
    // Update outfit suggestions
    updateOutfitSuggestions(data.temperature, data.description, data.humidity, data.windSpeed);
}

// Function to fetch weather data from backup service (wttr.in)
async function getWeatherDataBackup(city) {
    try {
        console.log(`Using backup API for: ${city}`);
        
        // Using wttr.in - completely free weather service
        const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.current_condition && data.current_condition[0]) {
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
        alert('Unable to fetch weather data. Please check your internet connection and try again.');
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
        
        if (!API_KEY || API_KEY === 'YOUR_API_KEY') {
            console.log('No OpenWeatherMap API key, using backup service...');
            return getWeatherDataBackup(city);
        }
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        console.log(`API URL: ${url}`);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data);
        
        if (data.main && data.weather && data.weather[0]) {
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
            if (data.message.includes('Invalid API key') || data.message.includes('city not found')) {
                console.log('API issue, using backup service...');
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

// Enhanced function to perform search with loading
function performSearch() {
    const city = locationInput.value.trim();
    if (city) {
        showLoading();
        setTimeout(() => {
            getWeatherData(city).then(() => {
                hideLoading();
            }).catch(() => {
                hideLoading();
            });
        }, 500); // Show loading for at least 500ms for better UX
        locationInput.value = '';
    } else {
        alert('Please enter a city name');
    }
}

// Update weather fetch functions to be async-friendly
async function getWeatherDataEnhanced(city) {
    try {
        if (!API_KEY || API_KEY === 'YOUR_API_KEY') {
            await getWeatherDataBackup(city);
        } else {
            await getWeatherData(city);
        }
    } catch (error) {
        console.error('Weather data fetch error:', error);
        throw error;
    }
}

// Event listeners
searchBtn.addEventListener('click', performSearch);

locationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Theme toggle event listener
themeToggle.addEventListener('click', toggleTheme);

// Initialize app
function initializeApp() {
    initializeTheme();
    updateWeatherDisplay(defaultWeatherData);
    
    // Add smooth transitions after initialization
    setTimeout(() => {
        document.body.style.transition = 'background 0.5s ease';
    }, 100);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Add some fun console messages
console.log('%c🌤️ Weather App Enhanced! 🌈', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%c✨ Features: Theme Toggle | Dynamic Backgrounds | Skeleton Loading | Outfit Suggestions', 'color: #764ba2; font-size: 12px;');
