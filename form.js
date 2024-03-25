var submission = function() {
  var daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
  ];
  var maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame"
  ];
  var femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama"
  ];
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var output = document.getElementById("output");
  
  // Validate input fields
  if (!firstname || !lastname || !email || !year || !month || !day) {
      output.style.color = "red";
      output.innerHTML = "Please fill in all the fields.";
      return;
  }

  // Validate year, month, and day
  if (year < 1980 || year > 2020 || month < 1 || month > 12 || day < 1 || day > 31) {
      output.style.color = "red";
      output.innerHTML = "Please enter valid date of birth.";
      return;
  }

  var dateOfBirth = new Date(year, month - 1, day);
  var dayOfWeekIndex = dateOfBirth.getDay();

  // Determine Akan name based on gender
  var akanName = (gender === "male") ? maleNames[dayOfWeekIndex] : femaleNames[dayOfWeekIndex];

  output.style.color = "green";
  output.innerHTML = "Hey, " + firstname + " " + lastname + "! You were born on a " + daysOfTheWeek[dayOfWeekIndex] + ", and your Akan name is " + akanName + ".";
};