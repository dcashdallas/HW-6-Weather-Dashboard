
var city = "Dallas"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=807b882f00d9a36d9dc05ec782b8847e";
$.ajax({
    url: queryURL,
    method: "POST"
}).then(function (response) {
    console.log(response);
    console.log(response.main)
    console.log(response.name)
});
