const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = `https://api.darksky.net/forecast/ca0b017e5ea70961b4747d01f14de2ed/${latitude},${longtitude}?units=si`
    request({url: url, json:true}, (error, response)=> {
        if(error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Could you be more specific?', undefined)
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} The temperature is ${response.body.currently.temperature} and it has a ${response.body.currently.precipProbability * 100}% to rain. `
            )
        }
    })
}

module.exports = forecast