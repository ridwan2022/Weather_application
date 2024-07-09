const apikey = "02dba899a1f911129ec55072cd40b033";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-photo");
async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

else {   
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    console.log(data);
    
    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png";
    }
    
    else if (data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png";
    }
    
    else if (data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png";
    }
    
    else if (data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Haze"){
        weathericon.src = "images/Haze.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})

