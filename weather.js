const apikey = "4ffa5b7b2fb28c40ce30897f43a74691";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const waetherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const responce = await fetch(apiurl + city + `&appid=${apikey}`);
    if (responce.status == 404) {
        document.querySelector(".error").style.display = "bolck";
        document.querySelector(".weather").style, display = "none";
    } else {
        var data = responce.json();
        console.log(data);
      
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main?.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            waetherIcon.src = "image/cloudy.png";
        }
        else if (data.weather[0].main == "Rain") {
            waetherIcon.src = "image/rain.png";
        }
         else if (data.weather[0].main == "Clear") {
            waetherIcon.src = "image/sun.png";
        }
         else if (data.weather[0].main == "Smoke") {
            waetherIcon.src = "image/fog.png";
        }
        document.querySelector(".weather").style, display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
