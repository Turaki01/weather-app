const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/36bd7836e2dd9a63504b4c701426c52a/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '?units=si';

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            const currentlyData = response.body.currently;
            const dailyData = response.body.daily;

            callback(undefined, `${dailyData.data[0].summary} It is currently ${currentlyData.temperature} degrees out. There is a ${currentlyData.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast;