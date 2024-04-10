let key = "cd86a0af9e4c4235b44223125240904"
let val ="Hayward, Ca" 
input = document.getElementById("search").value
let data = ""
async function getWeather(){
    let jsonResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${val}`, {mode:"cors"})
    let weatherData = await jsonResponse.json()
    return weatherData
}
getWeather().then((x)=>{
    data = x
let loc = document.getElementById("loc")
loc.innerText = data.location.name + ", " + data.location.region
let temp = document.getElementById("temp")
temp.innerText = data.current.temp_f // farenheight
let conditionIcon = document.getElementById("conditionIcon")
conditionIcon.src = data.current.condition.icon
let feelsLike = document.getElementById("feelsLike")
feelsLike.innerText = data.current.condition.text
let windSpeed = document.getElementById("windSpeed")
windSpeed.innerText =  data.current.wind_mph + " mph"
let humidity = document.getElementById("humidity")
humidity.innerText = data.current.humidity + " %"
let uvIndex = document.getElementById("uvIndex")
uvIndex.innerText = data.current.uv 
let pressure = document.getElementById("pressure")
pressure.innerText = data.current.pressure_mb + " mb"
})