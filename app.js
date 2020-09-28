const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('roncegno', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(40.0115, 44.15499, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})