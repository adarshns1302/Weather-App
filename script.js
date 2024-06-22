const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'YOUR API KEY',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather=(city)=>{

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		
		cityname.innerHTML=city.toUpperCase();
		console.log(response)
		humidity2.innerHTML= response.humidity
		wind_speed2.innerHTML= response.wind_speed
		cloud_pct.innerHTML =response.cloud_pct 
		temp.innerHTML= response.temp
		feels_like.innerHTML= response.feels_like+('<small class="text-body-dark "> &#8451</small>')
		humidity.innerHTML= response.humidity+('<small class="text-body-dark ">%</small>')
		min_temp.innerHTML= response.min_temp+('<small class="text-body-dark "> &#8451</small>')
		max_temp.innerHTML= response.max_temp+('<small class="text-body-dark "> &#8451</small>')
		wind_speed.innerHTML= response.wind_speed+('<small class="text-body-dark "> Km/hr</small>')
		wind_degrees.innerHTML=response.wind_degrees+('<small class="text-body-dark "> &#xb0</small>')
		sunrise.innerHTML= response.sunrise
		sunset.innerHTML=response.sunset
	})
	.catch(err => console.error(err));	
}

submit_btn.addEventListener("click",(e)=>{
    e.preventDefault()       
	getweather(city.value)
})

getweather("Delhi")


// weather of other places
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=America', options)
	.then(response => response.json())
	.then((response) => 
	{
		// weather of america
		console.log(response)
		// cloud_pct1.innerHTML +=response.cloud_pct 
		feels_like1.innerHTML+= response.feels_like+('<small class="text-body-dark">&#8451</small>')
		temp1.innerHTML+= response.temp+('<small class="text-body-dark">&#8451</small>')
		humidity3.innerHTML+= response.humidity+('<small class="text-dark">%</small>')
		min_temp1.innerHTML+= response.min_temp+('<small class="text-body-dark">&#8451</small>')
		max_temp1.innerHTML+= response.max_temp+('<small class="text-body-dark">&#8451</small>')
		wind_speed3.innerHTML+= response.wind_speed+('<small class="text-body-dark"> Km/hr</small>')
		// wind_degrees1.innerHTML+= response.wind_degrees

	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Russia', options)
	.then(response => response.json())
	.then((response) => 
	{
		// weather of RUSSIA
		console.log(response)
		// cloud_pct2.innerHTML+=response.cloud_pct 
		feels_like2.innerHTML+= response.feels_like+('<small class="text-body-dark">&#8451</small>')
		temp2.innerHTML+= response.temp+('<small class="text-body-dark">&#8451</small>')
		humidity4.innerHTML+= response.humidity+('<small class="text-body-dark">%</small>')
		min_temp2.innerHTML+= response.min_temp+('<small class="text-body-dark">&#8451</small>')
		max_temp2.innerHTML+= response.max_temp+('<small class="text-body-dark">&#8451</small>')
		wind_speed4.innerHTML+= response.wind_speed+('<small class="text-body-dark"> Km/hr</small>')
		// wind_degrees2.innerHTML+= response.wind_degrees
		
	})
	.catch(err => console.error(err));
