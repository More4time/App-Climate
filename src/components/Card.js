import React from "react";
import Spinner from "./Spinner";

const Card = ({showData, loadingData, weather,forecast}) =>{

    var today = new Date()
    var day = today.getDate()
    var month = today.getMonth() + 1 
    var year = today.getFullYear()
    var date = day + "/" + month + "/" + year
    var url = ""
    var iconUrl= ""

    var iconUrl3 ="";
    var iconUrl6="";
    var iconUrl9="";
    var forecastDate3="";
    var forecastDate6="";
    var forecastDate9="";

    if(loadingData){
        return <Spinner></Spinner>
    }

    if(showData){
        url = "http://openweathermap.org/img/w/"
        iconUrl= url + weather.weather[0].icon + ".png"

        iconUrl3= url + forecast.list[1].weather[0].icon + ".png"
        iconUrl6= url + forecast.list[9].weather[0].icon + ".png"
        iconUrl9= url + forecast.list[17].weather[0].icon + ".png"

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) 
        forecastDate6 = forecast.list[9].dt_txt.substring(8, 10) + '/' + forecast.list[9].dt_txt.substring(5, 7) + '/' + forecast.list[9].dt_txt.substring(0, 4) 
        forecastDate9 = forecast.list[17].dt_txt.substring(8, 10) + '/' + forecast.list[17].dt_txt.substring(5, 7) + '/' + forecast.list[17].dt_txt.substring(0, 4) 
    }
    return (
        <div className="mt-5">
            {
                showData === true ?(

                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-tittle">{weather.name}({weather.sys.country})</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                    <p className="card-desc"><img src={iconUrl} alt="icon"></img>{weather.weather[0].description}</p>
                                    <img className="img-fluid rounded-start" alt=".." src="https://images.unsplash.com/photo-1584351583369-6baf055b51a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                        <h5 className="card-text">Temparatura maxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Temparatura minima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Sensación termica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Humedad: {(weather.main.humidity)}%</h5>
                                        <h5 className="card-text">Velocidad del viento: {(weather.wind.speed)}m/s</h5>
                                    </div>
                                    <hr/>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <p>{forecastDate3}</p>
                                            <p className="description"><img src={iconUrl3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate6}</p>
                                            <p className="description"><img src={iconUrl6} alt="icon"/>{forecast.list[9].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[9].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate9}</p>
                                            <p className="description"><img src={iconUrl9} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[9].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>       
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ):(
                    <h2 className="text-light">Sin datos</h2>
                )
            }
        </div>
    )
}

export default Card