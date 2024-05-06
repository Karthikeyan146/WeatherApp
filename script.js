const apikey = "d4c991ffa7c33947105762bf7e6468b4";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


var input = document.getElementById("input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
    }
  });


async function weatherapp(){

    var city = document.getElementById("input");
    var icon = document.querySelector(".icon");

    const response = await fetch(apiurl + city.value + `&appid=${apikey}`);
    var data = await response.json();

if(data.cod === '404'){
  document.querySelector(".error").style.display = "block";
  document.querySelector(".body").style.display = "none";
}
else{
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name ;
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".speed").innerHTML = Math.round(data.wind.speed) + " km/h";
    



        if(data.weather[0].main == "Clouds"){
            icon.src ="./weather-img/cloud.png"
        }
        else if(data.weather[0].main == "Clear"){
            icon.src ="./weather-img/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            icon.src ="./weather-img/rain.png"
        }
        else if(data.weather[0].main == "Snow"){
            icon.src ="./weather-img/snow.png"
        }
        else if(data.weather[0].main == "Mist"){
            icon.src ="./weather-img/mist.png"
        }
    
        document.querySelector(".body").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    }
    // console.log(data);
    document.getElementById("form").reset();
}
