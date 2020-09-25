const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=7180aac380a211a6f59853956ef3fa0d&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like there are ${response.body.current.feelslike} degrees.`)
}) 