let key = "cd86a0af9e4c4235b44223125240904"
let val ="Hayward, Ca" 
let date = new Date()
let daysofWeek= ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let day =  document.getElementById("dayOfWeek")
let searchBtn = document.getElementById("searchBtn")
day.innerText = daysofWeek[date.getDay()]
input = document.getElementById("search").value
path = "./assets/weather/64x64/day/"
weatherImagesUrl = {
    "Sunny":`${path}113.png`,
    "Partly cloudy":"./assets/weather/64x64/day/116.png",
    "Cloudy": "./assets/weather/64x64/day/119.png",
    "Raining": "./assets/weather/64x64/day/266.png",
    "Clear":"./assets/weather/64x64/day/116.png"
}
let data = ""
// input value
let search = document.getElementById("search")
    searchBtn.addEventListener("click",()=>{
            getWeather(search.value).then((data)=>{
         
            let currTime = document.getElementById("time")
            currTime.innerText = data.current.last_updated
            let loc = document.getElementById("loc")
            loc.innerText = data.location.name + ", " + data.location.region
            let temp = document.getElementById("temp")
            temp.innerText = "+" + data.current.temp_f +"°F" // farenheight
            let conditionIcon = document.getElementById("conditionIcon")
            console.log(data.current.condition.text)
            console.log(weatherImagesUrl[data.current.condition.text])
            conditionIcon.src = weatherImagesUrl[data.current.condition.text]
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
    })})

async function getWeather(str){
    let jsonResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${str}`, {mode:"cors"})
    let weatherData = await jsonResponse.json()
    return weatherData
}
