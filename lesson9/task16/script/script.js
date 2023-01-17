const container = document.getElementById('container');

fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(data => data.json())
    .then(json => {
        console.log(json)
        container.innerHTML = `
            <img src="http://openweathermap.org/img/w/${json.weather[0].icon}.png" alt=""/>
            <div><h2>City:</h2> <p> ${json.name} </p> </div>
            <div><h2>Temp:</h2> <p> ${json.main.temp} </p></div>
            <div><h2>Pressure:</h2> <p> ${json.main.pressure} </p></div>
            <div><h2>Description:</h2> <p> ${json.weather[0].description} </p></div>
            <div><h2>Humidity:</h2> <p>  ${json.main.humidity} </p></div>
            <div><h2>Speed:</h2> <p>  ${json.wind.speed} </p></div>
            <div><h2>Deg: </h2> <p>${json.wind.deg} </p></div>`
    })
    .catch(error => container.innerHTML = '<div>Error</div>')