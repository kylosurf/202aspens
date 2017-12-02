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
    axios("https://api.darksky.net/forecast/512cb51de02d6b18f1080d793848841d/50.1158752,-122.9450087").then(({data}) => {
      console.log(data)
      this.setState({
        weatherData: data
      })
    })
  }


  render(){
    if(Object.keys(this.state.weatherData).length === 0) {
      return  <div>Loading...</div>
    } else {
      return<div className="container">

          <div className="weather">

              <div className="row">
              <div className="container col-sm-12 col-md-12">


              <table class="table table-striped table-inverse">
                <thead>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td><h4><strong>Snowfall Report</strong></h4>
                    <div>{this.state.weatherData.daily.summary}</div></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td><h4><strong>Hourly</strong></h4>
                    <div>{this.state.weatherData.hourly.summary}</div></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td><h4><strong>Current Tempurature</strong></h4>
                    <div>{this.state.weatherData.currently.apparentTemperature}</div></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <h4><strong>Wind Speed</strong></h4>
                    <div>{this.state.weatherData.currently.windSpeed}</div>
                  </tr>
                </tbody>
              </table>

</div>
</div>
            </div>
        </div>
    }
  }

}


export default Weather;
