import React, { useState } from "react";
import "./Weather.css";
import axios from 'axios';

const Weather = () => {
  const [search,setSeearch]=useState();
  const [city,setCity]=useState();
  const [searchCity,setSeearchCity]=useState([]);

  const inputCityName=(e)=>{
    setSeearch(e.target.value);
    console.log(search);
  
  }
  
  const getWeather= async()=>{
      try {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c00e3a8717268cf0f6fe9bf2b53d1ede`
      const response=await axios.get(url);
      console.log(response.data);
      setCity(response.data)
      
      } catch (error) {
        console.log("error");
      }
     setSeearchCity((prev)=>{
      return [...prev,search]
     })
      // setSeearchCity([...searchCity,search]);
      // console.log(searchCity);
      setSeearch("");
      
  }
  var date = new Date();
  var fulldate=date.toDateString();
  var time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  return (
    <div className="weather-img">
      <div className="hero">
        <div className="left">
         {
          !city?<p className="no-data">Search and Get Weather Details....</p>:
          <div className="show-weather">
            <div>
              <span>{city?.main?.temp}°</span>
            </div>
            <div>
              <span>{city?.name}</span>
              <span>{fulldate} {time}</span>
            </div>
            <div className=" weather-icon-div">
              <span className="weather-icon"><img className="weather-icon" src={`http://openweathermap.org/img/wn/${city?.weather[0]?.icon}@2x.png`} alt="Weather"/></span>
              <span className="weather-icon-name">{city?.weather[0]?.main}</span>
            </div>
          </div>
         }
        </div>
        <div className="right">
          <div className="details">
            <div className="search-bar">
              <input value={search} onChange={inputCityName} type="text" placeholder="Enter Location" />
              <button onClick={getWeather}>Search</button>
            </div>
            <div>
              <hr className="hr-line" />
            </div>
            <div className="prev-details">
            <p>Previous Search</p>
            {
              searchCity.map((item)=>{
                return (
                  <div className="prev-details-item">
                  <span>{item}</span>
                  </div>
                  
                )
              })
            }
            </div>
            <div>
              <hr className="hr-line" />
            </div>
            <div className="Weather-Details">
              <p>Weather Details</p>
             <div>
             <span>Humidity</span>
              <span className="Weather-Details-number">{city?.main?.humidity}%</span>
             </div>
             <div>
             <span>Wind</span>
             <span className="Weather-Details-number">{city?.wind?.speed}km/h</span>
              
             </div>
             <div>
             <span>Feels Like</span>
             <span className="Weather-Details-number">{city?.main?.feels_like}</span>
              
             </div>
            </div>
            <div>
              <hr className="hr-line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
