const mydata = document.getElementById('getWeather');
mydata.addEventListener('click', (e) => {
    e.preventDefault();
    if(document.getElementById('city').value == ""){
        alert("Please enter a city name");
        return;
    }
    const city = document.getElementById('city').value;
    const apikey = '02c0a4cb6d534fb8ec504bd1d2f69fe2';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
         const iconcode = data.weather[0].icon;
         const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
         const weatherDetails = 
        `<div class="card mb-3" style = "background-image: url(./images/qWAse0.jpg);">
         <img src="${iconurl}" class="card-img-top" alt="icon" style="width:19%">
         <hr>
         <div class="card-body">
         <h4 class="card-title"style= "font-family: Times New Roman"><strong style= "font-family: Times New Roman">City :  </strong>${data.name}</h4>
         <p class="card-text" style= "font-family: Times New Roman"><strong style= "font-family: Times New Roman">Main :  </strong>${data.weather[0].main}</p>
         <p class="card-text" style= "font-family: Times New Roman"><strong style= "font-family: Times New Roman">Temprature :  </strong>${data.main.temp} °C</p>
         <p class="card-text" style= "font-family: Times New Roman"><strong style= "font-family: Times New Roman">Humidity :  </strong>${data.main.humidity} %</p>
         <p class="card-text" style= "font-family: Times New Roman"><strong style= "font-family: Times New Roman">Pressure :  </strong>${data.main.pressure} mb</p>
         <p class="card-text" style= "font-family: Times New Roman"><strong style= "font-family: Times New Roman">Visibility :  </strong>${data.visibility / 1000} km</p>
         </div>
         </div>`;
        document.getElementById('weatherDetails').innerHTML = weatherDetails;
    })
    .catch((error) => {
        console.log(error);
    })
});
function calculateDewPoint(temp, humidity) {
    const a = 17.27;
    const b = 237.7;
    const alpha = ((a * temp) / (b + temp)) + Math.log(humidity / 100);
    const dewPoint = (b * alpha) / (a - alpha);
    return dewPoint.toFixed(2);
}


