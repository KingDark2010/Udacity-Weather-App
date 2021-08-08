/* Global Variables */
const myAPIKey = "bb7e8ef5d08175ea55f1996421350176";
const zipCode = document.querySelector("#zip");
const generateBTN = document.querySelector("#generate");


// Event listener to add function to existing HTML DOM element
generateBTN.addEventListener("click", async function() {
    // create api call on click
    const fullAPILink = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${myAPIKey}`;
    const resp = await fetch(fullAPILink);
    const data = await resp.json();
    console.log(data);
    const temps = data.main.temp;
    console.log(temps);
});

// Create a new date instance dynamically with JS
/* let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear(); */