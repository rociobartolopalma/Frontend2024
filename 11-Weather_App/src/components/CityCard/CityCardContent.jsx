import React from 'react'
//import PropTypes from 'prop-types'

const CityCardContent = ({weather}) => {
    const dayStyle = '#49D3F9'
    const nightStyle = '#666'
    const style = weather.current.is_day ? dayStyle : nightStyle

    return(
        <>
         <img 
            src={`http:${weather.current.condition.icon}`} 
            className="card-img-top mt-2" 
            alt="weather.current.condition.text"
            style={{backgroundColor:style}}
            />

            <div className="card-body text-center">
                <h5 className="card-title">{`${weather.location.name},${weather.location.region} - ${weather.location.country}`}</h5>
                <p className="card-text">{weather.current.condition.text}</p>
                <p className="card-text">
                    <i className="bi bi-thermometer-half text-danger"></i>&nbsp;{`Temperatura: ${weather.current.condition.text}°C`}&nbsp;&nbsp;
                    <i className="bi bi-droplet-half text-primary"></i>&nbsp;{`Humedad: ${weather.current.humidit}%`}&nbsp;&nbsp;
                    <i className="bi bi-wind text-success"></i>&nbsp;{`Viento: ${weather.current.wind_kph} kph`}
                </p>                
                </div> 
        </>
    )
}

//CityCardContent.propTypes = {
//    weather: PropTypes.object.isRequired
//}

export default CityCardContent 