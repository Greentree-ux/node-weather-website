const request = require('postman-request')

const forecast = (lat, lon, callback) => {

    const url = 'http://api.weatherstack.com/forecast?access_key=2ca25f2eccf41c25b45d9aa860a815bc&query=' + lat +',' + lon

    request({url, json: true}, (error, {body}) => {

        if (error) {
            callback('Unable to connect to weather services, check your network!', undefined)
        } else if (body.error) {
            callback('Check the location details!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. The current temperature is ' + body.current.temperature + ' degrees Celcius. It feels like ' + body.current.feelslike + ' degrees Celcius. Wind speed is ' + body.current.wind_speed + ' kmph.')
        }
    })
}

module.exports = forecast