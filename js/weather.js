window.onload = (event) =>{
    setup();
}
let apiData;


function setup(){
    fetch('http://dataservice.accuweather.com/forecasts/v1/daily/1day/327144?apikey=1j6yVYMscpQujmX4UWTplhqAUu3pp4oS&details=true')
    .then(response => {return response.json()})
    .then(data => {
        apiData = data;
        console.log(data);
        })
    .catch(err => {})
    
}

function printData(data){
    // let html = document.querySelector('#display');
    console.log(data.DailyForecasts[0]);
    console.log(data.DailyForecasts[0].Temperature.Maximum.Value);
    console.log(data.DailyForecasts[0].Temperature.Maximum.Unit);
    console.log(data.DailyForecasts[0].Temperature.Minimum.Value);
    console.log(data.DailyForecasts[0].Temperature.Minimum.Unit);
    console.log(data.DailyForecasts[0].AirAndPollen);
    console.log(data.DailyForecasts[0].AirAndPollen[0].Name);
    console.log(data.DailyForecasts[0].AirAndPollen[0].Category);
    // html.innerHTML = `${weather.DailyForecasts[0].AirAndPollen[0].Name}:${weather.DailyForecasts[0].AirAndPollen[0].Value}`;
}

function allergens(){
    // let html = document.querySelector('#allergyReport').children;
    let html = document.querySelector('#allergyReport');
    
    let status = document.querySelector('#activity');

    for(i=0;i<5;i++){
        let listitem = document.createElement('li');
        listitem.classList.add('colorsize2');
        listitem.innerHTML=`${apiData.DailyForecasts[0].AirAndPollen[i].Name}:${apiData.DailyForecasts[0].AirAndPollen[i].Category}`;
        html.appendChild(listitem);
    }

    if(apiData.DailyForecasts[0].AirAndPollen[0].Category=='Good'||apiData.DailyForecasts[0].AirAndPollen[0].Category=='Low'){
        status.innerHTML="Conditions are optimal most individuals will remain unaffected by allergens while about their daily activities.";
    }else if(apiData.DailyForecasts[0].AirAndPollen[0].Category=='Moderate'){
        status.innerHTML="Healthy Inidividuals will see no adverse effect from Air quality.Those sensitive to allergies should restrict their activities outdoors.";
    }else{
        status.innerHTML="Air Quality is Bad for all individuals limit activity outdoors.Limit physicall activities as much as possible."; 
    }
}

function weather(){
    let html = document.querySelector('#weatherInfo');
    
    let status = document.querySelector('#heat');

    let listitem = document.createElement('li');
    listitem.classList.add('colorsize');
    listitem.innerHTML=`${apiData.DailyForecasts[0].Temperature.Maximum.Value} F`;
    html.appendChild(listitem);

    if(apiData.DailyForecasts[0].Temperature.Maximum.Value>=98){
        status.innerHTML="Its Hot out there make sure to drink plenty of water. Remain indoors or in cool areas as long as possible. Be minfull of the young an elderly health due to the heat.Be mindful of your consition in order to avoid heat illness";
    }else if(apiData.DailyForecasts[0].Temperature.Maximum.Value<98 && apiData.DailyForecasts[0].Temperature.Maximum.Value>=85){
        status.innerHTML="Its Warm out there make sure to drink plenty of water. Keep cool by finding shade to combat the heat.";
    }else if(apiData.DailyForecasts[0].Temperature.Maximum.Value<85 && apiData.DailyForecasts[0].Temperature.Maximum.Value>=67){
        status.innerHTML="Its a Great Day to be Outside enjoy the weather go out and have fun in the great Outdoors."
    }else{
        status.innerHTML="Its A bit chilly Out there consider bringing a jacket. Or were thicker clothing."; 
    }

    
}

