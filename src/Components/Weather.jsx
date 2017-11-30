import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  constructor() {
    super()
    this.api = "512cb51de02d6b18f1080d793848841d"
    this.state = {
      weatherData: {}
    }
  }

  componentWillMount() {
    axios.get("https://api.darksky.net/forecast/512cb51de02d6b18f1080d793848841d/50.1158752,-122.9450087").then((response)=>{
      console.log(response.data)
      this.setState({
        weatherData: response.data
      })
    })
  }


  render(){
    if(Object.keys(this.state.weatherData).length === 0) {
      return (
        <div>Loading...</div>
      )
    } else {
      return(
        <div className="container">
          <div className="row">
          <div className="col-xs-12">
            <h2>Whistler Balckcomb Weather Report</h2>
          </div>
          </div>
            <h3>Snowfall Report</h3>
            <div>{this.state.weatherData.daily.summary}</div>
            <h3>Current Tempurature</h3>
            <div>{this.state.weatherData.currently.apparentTemperature}</div>
            <h3>Hourly</h3>
            <div>{this.state.weatherData.hourly.summary}</div>
          </div>
      )

    }
  }

}


export default Weather;


