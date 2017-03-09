	var weather = new XMLHttpRequest();
	weather.open("GET", "http://api.wunderground.com/api/60c53164c6d2ad38/conditions/q/UK/London", false);
	weather.send(null);

	var r = JSOP.parse(weather.response);

	var dis = "Current Location:" +r.current_observation.display_location.full +"<p>";
	dis += "current temperature: "+ r.current_observation.temperature_string+"<p>";
	dis += "current wind speed: "+ r.current_observation.wind_string;
	
	document.getElementById("weather").innerHTML = dis;
	