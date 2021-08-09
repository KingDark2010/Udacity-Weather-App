/* Global Variables */
const myAPIKey = "bb7e8ef5d08175ea55f1996421350176";
// zip code better use U.S. zip code
const zipCode = document.querySelector("#zip");
const generateBTN = document.querySelector("#generate");
const feelings = document.querySelector("#feelings");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1)+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
generateBTN.addEventListener("click", function() {
    // create api call on click
    //const fullAPILink = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${myAPIKey}`;
    //const resp = await fetch(fullAPILink);
    //const data = await resp.json();
    //console.log(data);
    //const temps = data.main.temp;
    //console.log(temps);
    // send data to server.js

    // fixed as reviewer asked
    getDate().then(data => postData('/postData',
    {
        temp: data.main.temp,
        date: newDate,
        feelings: feelings.value
    }).then(updateUI(data)));
/*     await fetch('/postData'), {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: newDate,
            temp: temps,
            feeling: feelings.value
        })
    };
    document.querySelector('#date').innerHTML = `Date: ${newDate}`;
    document.querySelector('#temp').innerHTML = `Temp: ${data.main.temp}`;
    document.querySelector('#content').innerHTML = `Feeling: ${feelings.value}`; */
});

// get data from API
async function getDate() {
    const fullAPILink = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${myAPIKey}&units=metric`;
    const resp = await fetch(fullAPILink);
    const resData = await resp.json();
    return resData
}

// post data to server
async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
}

//update UI
async function updateUI(data) {
    document.querySelector('#date').innerHTML = `Date: ${newDate}`;
    document.querySelector('#temp').innerHTML = `Temp: ${data.main.temp}`;
    document.querySelector('#content').innerHTML = `Feeling: ${feelings.value}`;
}