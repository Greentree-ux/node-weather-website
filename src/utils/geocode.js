const request = require ('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW1pdGF2YW1iIiwiYSI6ImNrd2l0aGxjZTFieGMydm96Z2IzbndxNTYifQ.arhJUtIwo4PH53MdHzKAfw&limit=1'
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Cannot connect to Geocoding service!', undefined)
        } else if (body.features.length === 0) {
            callback('Please check the name of place!', undefined)
        } else { 
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
    }

    module.exports = geocode