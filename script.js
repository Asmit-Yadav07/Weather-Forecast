let citycall = document.getElementById("cityname")
let enter = document.querySelector(".enter")
enter.addEventListener("click", async () => {
    city = citycall.value
    if (city == "") {
        alert("Please Enter City Name")
    } else {
        try {
            let web = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=192828d3bbb9508880248b0993fae8e3`)

            let result = await web
            result = await result.json()
            // console.log(result)
            let data = result[0]
            let lat = data.lat
            let lon = data.lon
            // console.log(lat)
            // console.log(lon)
            // console.log(data.local_names)
    
            let web2 = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=192828d3bbb9508880248b0993fae8e3&units=metric`)
            let result2 = await web2
            result2 = await result2.json()
            // console.log(result2)
            // console.log(result2.main.feels_like)
            document.querySelector(".state").textContent = "State: " + data.state
            document.querySelector(".city").textContent = "City: " + data.name
            document.querySelector(".currentT").textContent = "Current Temp: " + result2.main.temp + "	°C"
            document.querySelector(".feels").textContent = "Feels Like: " + result2.main.feels_like + "	°C"
            document.querySelector(".MaxT").textContent = "Max. Temp: " + result2.main.temp_max + "	°C"
            document.querySelector(".MinT").textContent = "Max. Temp: " + result2.main.temp_min + "	°C"
            document.querySelector(".Humid").textContent = "Humidity: " + result2.main.humidity + "	%"
            document.querySelector(".Clouds").textContent = "Clouds: " + result2.weather[0].description
            document.querySelector(".Wind").textContent = "Wind Speed: " + result2.wind.speed + "  m/s"
        } catch (error) {
            console.error(error)
            alert("Invalid City Name")
        }
    }
})












