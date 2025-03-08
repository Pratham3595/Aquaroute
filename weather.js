const apiKey = "c4aea038ca4f45d6852111739250503"; // Replace with your WeatherAPI.com API key

async function getWeather(lat = null, lon = null) {
    const location = document.getElementById("location").value.trim();
    const userLat = document.getElementById("lat").value.trim();
    const userLon = document.getElementById("lon").value.trim();
    let url = "";

    if (location) {
        url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&alerts=yes&aqi=yes`;
    } else if (userLat && userLon) {
        url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${userLat},${userLon}&days=3&alerts=yes&aqi=yes`;
    } else if (lat && lon) {
        url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=3&alerts=yes&aqi=yes`;
    } else {
        document.getElementById("weather-info").innerHTML = `<p style="color:red;">Enter city or coordinates.</p>`;
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            document.getElementById("weather-info").innerHTML = `<p style="color:red;">${data.error.message}</p>`;
            return;
        }

        // Get weather icon
        const iconUrl = `https:${data.current.condition.icon}`;
        document.getElementById("weather-icon").src = iconUrl;
        document.getElementById("weather-icon").style.display = "block";

        // Display weather info
        document.getElementById("weather-info").innerHTML = `
            <h3>📍 ${data.location.name}, ${data.location.country}</h3>
            <p>🌡 Temperature: <strong>${data.current.temp_c}°C</strong></p>
            <p>💧 Humidity: <strong>${data.current.humidity}%</strong></p>
            <p>☁ Condition: <strong>${data.current.condition.text}</strong></p>
            <p>🌬 Wind Speed: <strong>${data.current.wind_kph} km/h</strong></p>
            <p>🌀 Air Quality Index: <strong>${data.current.air_quality["us-epa-index"]}</strong></p>
        `;

        // Check for weather alerts
        let alertsData = data.alerts && data.alerts.alert;
        const alertMessage = document.getElementById("weather-alert");

        if (alertsData && alertsData.length > 0) {
            let alertInfo = alertsData[0]; // Get the first alert

            alertMessage.style.color = "red"; // Red text for alerts
            alertMessage.innerHTML = `
                <h4>${alertInfo.headline}</h4>
                <p>${alertInfo.msgtype}: ${alertInfo.description}</p>
                <p><strong>⚠️ Severity:</strong> ${alertInfo.severity}</p>
                <p><strong>📆 Effective:</strong> ${alertInfo.effective}</p>
                <p><strong>⌛ Expires:</strong> ${alertInfo.expires}</p>
            `;

            // Show a popup alert with the weather warning
            window.alert(`🚨 WEATHER ALERT 🚨\n\n${alertInfo.headline}\n${alertInfo.description}\n⚠️ Severity: ${alertInfo.severity}\n📆 Effective: ${alertInfo.effective}\n⌛ Expires: ${alertInfo.expires}`);
        } else {
            alertMessage.style.color = "green"; // Green text if no alert
            alertMessage.innerHTML = "<p>No weather alerts currently.</p>";
        }

    } catch (error) {
        document.getElementById("weather-info").innerHTML = `<p style="color:red;">Error fetching weather data!</p>`;
    }
}

// Get user's current location
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => getWeather(position.coords.latitude, position.coords.longitude),
            error => alert("Geolocation access denied! Please enter location manually.")
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
