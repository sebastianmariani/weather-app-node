const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=7180aac380a211a6f59853956ef3fa0d&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log(`Unable to find location. ${response.body.error}`)
    } else {
        console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like there are ${response.body.current.feelslike} degrees.`)
    }
}) 


const urlGeolocation = 'https://api.mapbox.com/geocoding/v5/mapbox.places/NYC.json?access_token=pk.eyJ1Ijoic2ViYXN0aWFubWFyaWFuaSIsImEiOiJja2ZqZWx3ZDkwaGg2MnRuNHRsaTUzcW8yIn0.5ZpMKXse8TBWvTvXOWx_aA&limit=1'

request({ url:urlGeolocation, json:true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to mapbox!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search!')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(`Latitude: ${latitude} Longitude: ${longitude}`)
    }
})