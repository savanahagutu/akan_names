var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

var maleNames = ["Kwasi", "Kwadwo", "Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

var name =(document.getElementById("name").value);
var date = parseInt(document.getElementById("date").value);

var date0fbirth = new Date(year + "/" + month + "/" + day);
  var results = date0fbirth.getDay();
  var output = document.getElementById("output");
  var male = document.getElementById("male")
  var female = document.getElementById("female")

  if (month =="" && year =="" && day =="" && name=="") {
    alert("Please Enter you credentials");
    return false;
  }