const weatherContainer = document.querySelector("#weather");
const cityContainer = document.querySelector("#city");

const API_KEY = "203634bdb11e91b4800fa884e4582ed2";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        const name = data.name;
        const weather = data.weather[0].main;
        cityContainer.innerText = `${name}`;
        weatherContainer.innerText = `${weather}`;
    });
}

function onGeoError() {
    cityContainer.innerText = "Not Avaliable"
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

