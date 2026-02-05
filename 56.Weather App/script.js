const getWeather=async(city)=>{
    try {
        const response=await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }
        const data=response.json();
        return data;
    } catch (error) {
        console.log( error);
        return;
    }
}

const showWeather=async()=>{
    const citySelect=document.getElementById("city-select")
    const city=citySelect.value;

    if(!city) return;

    const data=await getWeather(city);

    if(!data){
        alert("Something went wrong, please try again later");
        return;
    }

    document.getElementById("location").textContent=data.name;
    document.getElementById("main-temperature").textContent=data.main.temp;

    if (data.weather && data.weather.length > 0) {
        document.getElementById("weather-icon").src=data.weather[0].icon;
        document.getElementById("weather-main").textContent=data.weather[0].main;
    }else{
        document.getElementById("weather-main").textContent = "N/A";
        document.getElementById("weather-icon").src = "";
    }


    document.getElementById("feels-like").textContent=data.main.feels_like;
    document.getElementById("humidity").textContent=data.main.humidity;
    if (data.wind.speed) {
        document.getElementById("wind").textContent = data.wind.speed;    
    } else {
        document.getElementById("wind").textContent = "N/A";     
    }
    if (data.wind.gust) {  
        document.getElementById("wind-gust").textContent = data.wind.gust;
    } else {
        document.getElementById("wind-gust").textContent = "N/A";
    }

}

document.getElementById("get-weather-btn").addEventListener("click", showWeather);