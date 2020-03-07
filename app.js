const request = require('request');

const url = 'https://api.darksky.net/forecast/36bd7836e2dd9a63504b4c701426c52a/37.8267,-122.4233?units=si';

const geolocationUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVyYWtpIiwiYSI6ImNrN2V4Z2J3aDExenUzbnBha3M0am5qeTgifQ.AkJjOd3xZuYar5Ne5cmQzw&limit=1"

// request({
//     url: url,
//     json: true
// }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const currentlyData = response.body.currently;

//         const dailyData = response.body.daily

//         console.log(`${dailyData.data[0].summary} It is currently ${currentlyData.temperature} degrees out. There is a ${currentlyData.precipProbability}% chance of rain.`)
//     }

// })


request({
    url: geolocationUrl,
    json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect to Geo location service')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location try again with another search parameter')
    } else {
        const cordinates = response.body.features[0].center;

        const latitude = cordinates[0];
        const longitude = cordinates[1];

        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
    }
})