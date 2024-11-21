# Weather App 🌦️

This is a simple weather application that allows users to search for weather conditions in any city worldwide. The app fetches real-time weather data from the OpenWeatherMap API and displays it in an easy-to-read format.

# About The Project

![OverView](images/preview.jpg)

## Features

- Search for weather by city name 🌍
- Displays temperature, weather description, humidity, and wind speed 🌀
- Dynamic weather icons based on the current condition ☀️🌧️❄️
- Responsive and user-friendly interface 🖥️📱

---

## Installation

### Prerequisites

- A web browser (e.g., Chrome)
- A text editor or IDE (e.g., VS Code)
- A local web server (e.g., Live Server`)

---

### Steps

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/SalahShallapy/Weather_App.git
   cd weather-app
   ```

## Configuration

Get an API Key
This project requires an API key from [OpenWeatherMap](https://openweathermap.org/). Follow these steps to get one:

Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/).
Go to the API keys section in your account and generate a new API key.
Replace the placeholder in the config.js file with your API key:

```bash
export const API_KEY = "your_api_key_here";
```

## File Structure

weather-app/
│
├── index.html # Main HTML file
├── style.css # CSS for styling
├── views/
│ ├── index.js # JavaScript logic
│ └── config.js # Contains the API key
└── images/ # Weather icons and

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>
