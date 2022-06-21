const form=document.getElementById("myForm");

form.addEventListener('submit',async function(e){
    let lang;
    let lat;
    //const APIkey='a9f7b40a8bmsh42a4e2679db1244p1df444jsn220e244a814b'
    const place=document.getElementById("location").value;
    console.log(place);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a9f7b40a8bmsh42a4e2679db1244p1df444jsn220e244a814b',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };
    e.preventDefault();
   if(navigator.geolocation){ if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          // Storing Longitude and Latitude in variables
          long = position.coords.longitude;
          lat = position.coords.latitude;
        });
      }
        
    
 let response=await fetch('https://community-open-weather-map.p.rapidapi.com/weather?q='+place+'&units=metric',options);
 //let response=await fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?q=${place}&appid=${APIkey}`)
 let result = await response.json().then(data=>display(data)).catch(()=>{alert("Wrong city")});
 
 console.log(result);
    }
  function  display(data){
         const output=document.getElementById("output") 
         const temperature=data.main.temp;
         const tempelement=document.createElement("div");
         tempelement.innerHTML=`Temperature of ${place} is:   ${temperature}`
         output.appendChild(tempelement);
         
         const pressure=data.main.pressure;
         const pressureelement=document.createElement("div");
         pressureelement.innerHTML=`Air pressure is :  ${pressure}`
         output.appendChild(pressureelement);

         const humidity=data.main.humidity;
         const humidityelement=document.createElement('div');
         humidityelement.innerHTML=`Humidity is:   ${humidity}`
         output.appendChild(humidityelement);

         
    }
   
})