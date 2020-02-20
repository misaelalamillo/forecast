// create a heading/ navbar with weather dashboard 
// create a row with 2 col, one for the search of city and the other a card
// where you're able to input the city, date, humidity, wind speed, uv index 
// on that column create a second row with a card of the 5-day forecast
// give a function for each city that is being searched
var body= $("body").addClass("container");
var row= $("<div>").addClass("row");
var navbar= $("<h1>").addClass("nav").text("WEATHER DASHBOARD");
    body.append(navbar);
//here i am creating the search bar and whenever the user searches up a city the city will stay within the history
var search= $("<form>").addClass("col-md-4");
var lookup= $("<input>");
var searchbutton= $("<button>").text(localStorage.getItem("search"));

search.append(lookup);
search.append(searchbutton);
row.append(search);
body.append(row);

var weatherdisplay= $("<div>").addClass("col-md-8");
var rowtwo= $("<div>").addClass("row");
var forecast= $("<div>").addClass("row");

weatherdisplay.append(rowtwo);
weatherdisplay.append(forecast);
row.append(weatherdisplay);

var weather= $("<div>").addClass("card");
var weathertitle= $("<h5>").addClass("card-title");
var temperature= $("<p>").addClass("card-text");
var humidity= $("<p>").addClass("card-text");
var wind= $("<p>").addClass("card-text");
var uv= $("<p>").addClass("card-text");

weather.append(weathertitle).text("City: ");
weather.append(temperature).text("Temperature: ");
weather.append(humidity).text("Humidity: ");
weather.append(wind).text("Wind Speed: ");
weather.append(uv).text("UV Index: ");
rowtwo.append(weather);

//i am giving the search button a funtion and relating it to the weather api key so the forecast can appear
searchbutton.on("click",function(e){
    e.preventDefault();
    var city= lookup.val();
    var queryURL="api.openweathermap.org/data/2.5/weather?q="+ 
    city + "&appid=6fdb70213b542b548407636082212729";
    
    
    $.ajax({
        url: queryURL,
        method:"GET"
    })
    .then(function(response){
        console.log(response);
    })
    
})

//here i am creating the 5 cards for the 5 day forecast 
var weatherforecast= $("<div>").addClass("col-md-2");
var rowthree= $("<div>").addClass("row");
var fiveday= $("<div>").addClass("row");

var weatherfive= $("<div>").addClass("card");
var forecasttitle= $("<h2>").addClass("card-title");
var temp= $("<p>").addClass("card-text");
var humid= $("<p>").addClass("card-text");

weatherforecast.append(forecasttitle).text("5 Day Forecast: ");
weatherforecast.append(temp).text("Temperature: ");
weatherforecast.append(humid).text("Humidity: ");
rowthree.append(weatherforecast);

var weatherforecast= $("<div>").addClass("col-md-2");
var rowthree= $("<div>").addClass("row");
var fiveday= $("<div>").addClass("row");

var weatherfive= $("<div>").addClass("card");
var forecasttitle= $("<h2>").addClass("card-title");
var temp= $("<p>").addClass("card-text");
var humid= $("<p>").addClass("card-text");

weatherforecast.append(forecasttitle).text("5 Day Forecast: ");
weatherforecast.append(temp).text("Temperature: ");
weatherforecast.append(humid).text("Humidity: ");
rowthree.append(weatherforecast);

var weatherforecast= $("<div>").addClass("col-md-2");
var rowthree= $("<div>").addClass("row");
var fiveday= $("<div>").addClass("row");

var weatherfive= $("<div>").addClass("card");
var forecasttitle= $("<h2>").addClass("card-title");
var temp= $("<p>").addClass("card-text");
var humid= $("<p>").addClass("card-text");

weatherforecast.append(forecasttitle).text("5 Day Forecast: ");
weatherforecast.append(temp).text("Temperature: ");
weatherforecast.append(humid).text("Humidity: ");
rowthree.append(weatherforecast);

var weatherforecast= $("<div>").addClass("col-md-2");
var rowthree= $("<div>").addClass("row");
var fiveday= $("<div>").addClass("row");

var weatherfive= $("<div>").addClass("card");
var forecasttitle= $("<h2>").addClass("card-title");
var temp= $("<p>").addClass("card-text");
var humid= $("<p>").addClass("card-text");

weatherforecast.append(forecasttitle).text("5 Day Forecast: ");
weatherforecast.append(temp).text("Temperature: ");
weatherforecast.append(humid).text("Humidity: ");
rowthree.append(weatherforecast);

var weatherforecast= $("<div>").addClass("col-md-2");
var rowthree= $("<div>").addClass("row");
var fiveday= $("<div>").addClass("row");

var weatherfive= $("<div>").addClass("card");
var forecasttitle= $("<h2>").addClass("card-title");
var temp= $("<p>").addClass("card-text");
var humid= $("<p>").addClass("card-text");

weatherforecast.append(forecasttitle).text("5 Day Forecast: ");
weatherforecast.append(temp).text("Temperature: ");
weatherforecast.append(humid).text("Humidity: ");
rowthree.append(weatherforecast);

var weatherforecast= $("<div>").addClass("col-md-2");
var rowthree= $("<div>").addClass("row");
var fiveday= $("<div>").addClass("row");

var weatherfive= $("<div>").addClass("card");
var forecasttitle= $("<h2>").addClass("card-title");
var temp= $("<p>").addClass("card-text");
var humid= $("<p>").addClass("card-text");

weatherforecast.append(forecasttitle).text("5 Day Forecast: ");
weatherforecast.append(temp).text("Temperature: ");
weatherforecast.append(humid).text("Humidity: ");
rowthree.append(weatherforecast);
//here i ma setting the date in the form of m/d/yyy in each card title 
var userinput="";
var currenttime=moment().format('L');

$("card-title").text(currenttime);

function updatetime() {
    currenttime= moment().format('L');
    $("card-title").text(currenttime);
}

setInterval(updatetime, 1000);





