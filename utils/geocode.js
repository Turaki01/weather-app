const request = require('request');

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHVyYWtpIiwiYSI6ImNrN2V4Z2J3aDExenUzbnBha3M0am5qeTgifQ.AkJjOd3xZuYar5Ne5cmQzw&limit=1';

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const cordinates = response.body.features[0].center;
            const placeName = response.body.features[0].place_name;
            callback(undefined, {
                latitude: cordinates[1],
                longitude: cordinates[0],
                location: placeName
            })
        }
    })
}

module.exports = geoCode