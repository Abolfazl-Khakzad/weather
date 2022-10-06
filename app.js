
var cityInput = document.getElementById("cityInput");
var addInput = document.getElementById("send");
var cityOutput = document.getElementById("cityoutput");
var descOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
const apiKey = "336f3ebdb6295d06e9b67312409b46c6";



 async function GetWeather(){
var result=await(
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${cityInput.value}&appid=${apiKey}`)
).json();

setInfo(result)

}


function setInfo(data){
var cityName=data['name'];
var description=data['weather'][0]['description'];
var temp=data['main']["temp"];


cityOutput.innerHTML=`city : ${cityName}`;
descOutput.innerHTML=`description : ${description}`;
tempOutput.innerHTML=`temp : ${((temp)-273).toFixed(2)}`;
}

addInput.addEventListener("click",GetWeather)
