import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Components/Weather';
import './App.css';

class App extends Component {
  componentWillMount() {
    axios.post("https://ws.homeaway.com/oauth/token", null, {
      auth: {
        username: '9bc1e393-b2a0-4498-af48-cce77e40f1eb',
        password: '3305fd97-8fcf-46c4-a5da-c241362aef17'
      }
    })
    .then((response) => {
        this.bearerToken = response.data.access_token
        this.refreshToken = response.data.refresh_token

        axios.defaults.headers.common['Authorization'] = `Bearer ${this.bearerToken}`;

        //Get the Listing

      
      axios.get("https://ws.homeaway.com/public/listingReviews?listingId=869826&unitId=1213354").then((response) => {
          console.log(response.data)
        })

      axios.get("https://ws.homeaway.com/public/listing?id=869826&q=AVAILABILITY&q=DETAILS&q=PHOTOS").then((response) => {
        console.log(response.data)
       })
    })
  }
  

  render() {
    return (
      <div className="container">

        <div className="weather App">
        
          <div className="row">
            <div className="col-xs-12">
              <header className="App">Welcome to 202</header>
             </div>
          </div>
        </div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" width='100%' height='80%'
          src='https://my.matterport.com/show/?m=6dkaZfYhjbc' frameborder='0' allowFullScreen></iframe>
      </div>
        <Weather />
    </div>
    );
  }
}

export default App;
