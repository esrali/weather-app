// -----------global variables
var api;
var apiData;
var days;
var firstDay;
var secondDay;
var thirdDay;
var months;
var curentMonth;
var dayNumber;
var inputValue;

function getDay(){
    var x= new Date();
    days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    firstDay = days[x.getDay()];
    secondDay= days[x.getDay()+1];
    thirdDay= days[x.getDay()+2];
    months=["january","	February","	March","April","may","june","july","August","September","October","November","December"];
    curentMonth = months[x.getMonth()]
    dayNumber= x.getDate();
}
getDay()

async function getWeather(city="cairo"){
    api=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c0df68faf4ea4103b06143020240401&q=${city}&days=3`);
    apiData= await api.json();
    // console.log(apiData);
    display();
}

getWeather();

function display(){
    //first day
    document.getElementById("country").innerHTML=apiData.location.name;
    document.getElementById("maxTemp1").innerHTML=apiData.current.temp_c+"<sup>o</sup>c";
    document.querySelector("#home .cloud").setAttribute("src","https:"+apiData.current.condition.icon);
    document.getElementById("state1").innerHTML=apiData.current.condition.text;
    document.getElementById("firstDay").innerHTML=firstDay;
    document.getElementById("currentMonth").innerHTML=dayNumber +" "+curentMonth;
    //second day
    document.getElementById("state2").innerHTML = apiData.forecast.forecastday[1].day.condition.text;
    document.getElementById("temp2").innerHTML=apiData.forecast.forecastday[1].day.maxtemp_c + "<sup>o</sup>c";
    document.getElementById("minTemp").innerHTML=apiData.forecast.forecastday[1].day.mintemp_c +"<sup>o</sup>";
    document.getElementById("imgDay2").setAttribute("src", "https:" + apiData.forecast.forecastday[1].day.condition.icon);
    document.getElementById("secondDay").innerHTML=secondDay;
    //third day
    document.getElementById("img3").setAttribute("src", "https:" + apiData.forecast.forecastday[2].day.condition.icon);
    document.getElementById("temp3").innerHTML=apiData.forecast.forecastday[2].day.maxtemp_c+"<sup>o</sup>c";
    document.getElementById("minTemp3").innerHTML=apiData.forecast.forecastday[2].day.mintemp_c +"<sup>o</sup>";
    document.getElementById("state3").innerHTML = apiData.forecast.forecastday[2].day.condition.text;
    document.getElementById("thirdDay").innerHTML=thirdDay;

}

document.getElementById("search").addEventListener("keyup",function(){
    inputValue=document.getElementById("search").value;
    getWeather(inputValue);
})

document.getElementById("press").addEventListener("click",function(){
    var inputValue2=document.getElementById("search").value;
    getWeather(inputValue2);
    console.log(inputValue2);
})


