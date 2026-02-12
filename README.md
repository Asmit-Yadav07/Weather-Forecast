# 🌤️ SkyCast | Weather Forecasting App

A sleek, real-time weather application built with **Vanilla JavaScript** and **Tailwind CSS**. This project focuses heavily on efficient **API integration**, data parsing, and dynamic UI updates based on live meteorological data.



## 🎯 Project Focus: API Handling
The primary goal of this project was to master the flow of data between a third-party service and a user interface. 
* **Endpoint Management:** Fetching current weather and 5-day forecasts.
* **Error Handling:** Gracefully managing 404s (city not found) and API rate limits.
* **Data Transformation:** Converting raw JSON data (Kelvin to Celsius, Unix timestamps to readable time).

## ✨ Key Features
* **Live Search:** Search weather by city name globally.
* **Geolocation Integration:** One-tap weather updates based on your current coordinates.
* **Dynamic Backgrounds:** UI colors/icons change based on weather conditions (Sunny, Rainy, Snowy).
* **Detailed Metrics:** View humidity, wind speed, UV index, and "Feels Like" temperatures.
* **Responsive Design:** Fully optimized for mobile and desktop using Tailwind CSS.

## 🛠️ Tech Stack
* **Frontend:** HTML5, Tailwind CSS
* **Logic:** Vanilla JavaScript (ES6+)
* **API:** [OpenWeatherMap API](http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=192828d3bbb9508880248b0993fae8e3) 

## 📦 How to Use
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/weather-app.git](https://github.com/Asmit-Yadav07/Weather-Forecast)