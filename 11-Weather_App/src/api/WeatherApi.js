export const getWeather = async () => {
    const key = '53d260c413974ef1b2b222950240205'
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Tuxtepec&aqi=no`
    const response = await fetch(url)
    const weather = await response.json()

    //console.log(weather.current.condition.text)
    return weather
}