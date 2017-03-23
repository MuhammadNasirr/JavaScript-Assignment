function fillCity() {
var cityName;
var zipEntered = document.getElementById("zip").value;
 switch (zipEntered) {
case "1" :
 cityName = "Karachi";
break;
 case "2" :
cityName = "islamabad";
 break;
 case "3" :
 cityName = "Lahore";
 case "4" :
 cityName = "Hydrabad";
}
document.getElementById("city").value = cityName;
}