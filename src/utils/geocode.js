const request = require('request')

const geocode = (address,  callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiZGFybGxpbmdicnlhbiIsImEiOiJjanN6YzF0bjMwbG1sM3lwaXBzZmw4aGEwIn0.qLS8U2RgJbwlOpevPYkA-g&limit=1`

    request({url:url, json:true}, (error, response)=> {
        if(error) {
            callback('Unable to connect to location services.', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longtitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode