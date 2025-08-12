# Weather Forecasting App 🌤️

**Created by: Pushkar Singh**  
*CS50 Final Project - Harvard University Online Course*

A responsive web application that provides real-time weather information with beautiful glassmorphism UI design and intelligent outfit suggestions. This is my final project submission for Harvard University's CS50 Introduction to Computer Science course.

![Weather App Demo](https://img.shields.io/badge/Status-Active-brightgreen) ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

> **Student Note**: This project represents my journey learning web development through CS50. I've implemented everything from scratch, including the API integrations, responsive design, and JavaScript functionality. It showcases the programming concepts I've learned throughout the course.

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **Dual API Integration**: Primary OpenWeatherMap API with wttr.in as backup service
- **Intelligent Outfit Suggestions**: AI-powered clothing recommendations based on weather conditions
- **Dynamic Theme Switching**: Light/dark mode with automatic theme persistence
- **Dynamic Weather Backgrounds**: Visual backgrounds that change based on weather conditions
- **Responsive Glass Morphism Design**: Modern UI that works across all device sizes
- **Loading Animations**: Skeleton loaders for better user experience
- **Error Handling**: Robust error handling with fallback mechanisms
- **Offline Demo Mode**: Works with default data when APIs are unavailable

## 🚀 Live Demo

Open `index.html` in your web browser to see the app in action, or use the standalone version in `weather-app-standalone.html`.

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for real-time weather data)
- API key for OpenWeatherMap (already included for demo)

## 🛠️ Installation

### For CS50 Staff/Graders:
1. **Download the project files** from the submission folder
2. **Extract all files** to a local directory
3. **Open `index.html`** in any modern web browser

### For General Use:
1. **Clone or Download the project**
   ```bash
   git clone https://github.com/pushkarsingh/weather-forecasting-app.git
   ```
   Or download the ZIP file and extract it.

2. **Navigate to the project directory**
   ```bash
   cd weather-forecasting-app
   ```

3. **Open the application**
   - Open `index.html` in your preferred web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

## 🔧 Configuration

### API Key Setup (Optional)

The app comes with a demo API key, but for production use:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the API key in `script.js`:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

### Customization

- **Colors**: Modify CSS custom properties in `style.css`
- **Weather Backgrounds**: Add new weather conditions in the `updateWeatherBackground()` function
- **Outfit Suggestions**: Customize recommendations in the `generateOutfitSuggestions()` function

## 📁 Project Structure

```
weather-forcasting-app/
│
├── index.html                              # Main HTML file
├── script.js                              # JavaScript functionality
├── style.css                              # CSS styles and animations
├── weather-app-standalone.html            # Standalone version
├── Weather_Forecasting_App_Project_Report.html # Project documentation
└── README.md                              # This file
```

## 💻 Technical Details

### Technology Stack
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with animations and responsive design
- **JavaScript (ES6+)**: Async/await, fetch API, DOM manipulation
- **External APIs**:
  - OpenWeatherMap API (primary)
  - wttr.in API (backup)
- **Icons**: Boxicons library
- **Fonts**: Google Fonts integration

### Key Functions

| Function | Purpose |
|----------|---------|
| `fetchWeatherData()` | Fetches weather data from APIs |
| `updateWeatherDisplay()` | Updates UI with weather information |
| `generateOutfitSuggestions()` | Creates clothing recommendations |
| `updateWeatherBackground()` | Changes background based on weather |
| `toggleTheme()` | Switches between light/dark themes |

### Weather Conditions Supported

- ☀️ Clear/Sunny
- 🌧️ Rainy/Drizzle
- ⛅ Cloudy
- ❄️ Snow
- ⛈️ Thunderstorms
- 🌫️ Fog/Mist

## 🎨 Design Features

- **Glass Morphism**: Modern frosted glass effect
- **Responsive Layout**: Works on mobile, tablet, and desktop
- **Smooth Animations**: CSS transitions and transforms
- **Weather-based Themes**: Dynamic color schemes
- **Loading States**: Skeleton loading animations
- **Accessibility**: ARIA labels and keyboard navigation

## 🔄 How It Works

*As a CS50 student, I designed the application flow as follows:*

1. **User Input**: Enter a city name in the search box
2. **API Request**: App fetches data from OpenWeatherMap (learned API integration in CS50)
3. **Fallback**: If primary API fails, uses wttr.in backup (error handling from CS50 teachings)
4. **Data Processing**: Formats and validates weather data using JavaScript concepts
5. **UI Update**: Updates display with weather information using DOM manipulation
6. **Smart Suggestions**: Generates outfit recommendations (my creative addition)
7. **Visual Effects**: Updates background and animations (CSS skills from CS50)

### My Learning Journey 📚
This project allowed me to apply:
- **Week 8 concepts**: HTML, CSS, and JavaScript
- **API integration**: Fetching data from external services
- **Error handling**: Implementing try-catch blocks and fallback mechanisms
- **Responsive design**: Making the app work on all devices
- **Problem-solving**: Debugging and optimizing code performance

## 🐛 Troubleshooting

### Common Issues

**API Key Errors**
- Ensure your API key is valid and active
- Check if you've exceeded rate limits

**Location Not Found**
- Try different city name variations
- Include country code (e.g., "London, UK")

**No Data Loading**
- Check internet connection
- Verify API endpoints are accessible
- App will use demo data if APIs fail

### Browser Support

| Browser | Supported Version |
|---------|-------------------|
| Chrome | 60+ |
| Firefox | 60+ |
| Safari | 12+ |
| Edge | 79+ |

## 📱 Mobile Optimization

- Touch-friendly interface
- Responsive breakpoints
- Optimized loading times
- Swipe gestures (where applicable)

## 🤝 Contributing

*As this is my CS50 final project, contributions are welcome for educational purposes!*

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Note**: This project is part of my academic work for CS50, but I'm open to feedback and suggestions from fellow students and developers.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Pushkar Singh** 👨‍🎓
- **Student ID**: 2024204933
- **Course**: Harvard University CS50 - Introduction to Computer Science (Online)
- **Project Type**: Final Project - Web Application Development
- **Submission Date**: January 2025
- **GitHub**: [@pushkarsingh](https://github.com/pushkarsingh)

### Why I Built This Project
As a CS50 student, I wanted to create something practical that people could actually use. Weather apps are something everyone can relate to, and I thought adding outfit suggestions would make it unique. This project challenged me to:

- Learn API integration beyond what was taught in class
- Implement responsive design principles
- Handle errors gracefully (because APIs can fail!)
- Create an intuitive user experience
- Apply all the JavaScript concepts from CS50

### What I Learned
- How to work with multiple APIs and handle failures
- CSS Grid and Flexbox for responsive layouts
- JavaScript async/await for API calls
- Local storage for theme preferences
- The importance of user experience in web development

## 🙏 Acknowledgments

*Special thanks to everyone who made this project possible:*

- **Professor David J. Malan** and the entire CS50 teaching staff for an incredible course
- **Harvard University** for making CS50 freely available online
- **My fellow CS50 students** in the online community for support and encouragement
- **OpenWeatherMap** for providing free weather data API
- **wttr.in** for the excellent backup weather service
- **Boxicons** for the beautiful weather icons
- **Stack Overflow community** for helping debug tricky issues
- **MDN Web Docs** for excellent JavaScript and CSS references

### CS50 Community Shoutout 📢
To my fellow CS50 students: keep coding, keep learning, and remember - this was CS50! 🎉

## 📞 Support & Contact

*As a CS50 student, I'm always happy to help fellow learners!*

If you encounter any issues or have questions:

1. **Check the troubleshooting section** above for common issues
2. **Review the project documentation** and code comments
3. **Open an issue on GitHub** if you find bugs
4. **Reach out to me** for academic discussions about the code

### For CS50 Staff
This project includes comprehensive comments in the code and this documentation. If you need any clarification about my implementation choices, please feel free to ask!

---

## 🎯 Final Thoughts

**"This was CS50!"** 🎉

This project represents the culmination of my learning journey through Harvard's CS50 course. From struggling with basic C programs in Week 1 to building this fully-functional web application, it's been an incredible experience.

**Built with ❤️ by Pushkar Singh for Harvard CS50**

*This project demonstrates the practical application of web development concepts learned in CS50, including API integration, responsive design, modern JavaScript programming, and problem-solving skills that will stay with me throughout my coding career.*



