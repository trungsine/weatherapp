let searchBox = document.querySelector('.search-box');
let city = document.querySelector('.city');
let date = document.querySelector('.date');
let weather = document.querySelector('.weather');
let temperature = document.querySelector('.temperature');
let highLow = document.querySelector('.high-low');
let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
}

// event

searchBox.addEventListener('keydown' ,searchCity) 

function searchCity(event) {
    // console.log(event);
    if(event.key === 'Enter') {
        console.log(searchBox.value) // them value vao 
        getResponse(searchBox.value);
    }
}

function getResponse(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=8422b4bfc1f694b66b798fa79716d51c`)
    .then(function(response){
        // console.log(response) 
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson); 

        let today = new Date ();
        
        
        city.textContent= `${myJson.name} , ${myJson.sys.country}`;
        date.textContent = today.toLocaleDateString('en-gb',options);
        weather.textContent = `${myJson.weather[0].main}`;
        temperature.textContent = `${Math.round(myJson.main.temp)}°C`;
        highLow.textContent = `
        ${Math.round(myJson.main.temp_min)}°C /  
        ${Math.round(myJson.main.temp_max)}°C 
        `;  
    });
}
