import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Components/Weather';
import Carousel from './Components/Carousel';
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


      axios("https://ws.homeaway.com/public/search?listingId=869826").then(({data}) => {
          console.log(data)
        })

      axios.get("https://ws.homeaway.com/public/listingReviews?listingId=869826&unitId=1417765&q=AVAILABILITY&q=DETAILS&q=PHOTOS").then(({data}) => {
        console.log(data)
       })
    })
  }


  render() {
    return (
    <div>
      <div className="header">
        <img src="WhistlerBlackcomb_Logo.png" style={{width:"20%"}} />
        <h6>202-4800 Spearhead Dr Blackcomb Mountain V0N 1B4</h6>
      </div>


          <div className="row">
            <div className="col-xs-12">
             </div>
          </div>

        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="jumbotron"
          src='https://my.matterport.com/show/?m=6dkaZfYhjbc' frameborder='0' allowFullScreen></iframe>
      </div>
      <div></div>

      <div className="container">
          <div className="property">

            <div className="row">
            <div className="container col-sm-12 col-md-12">

            <div className="center-block">

              <h1>Live the Whistler life!!</h1>

                <p>
                  Surrounded by breathtaking scener!! Located on the slope of North America's top ski and snowboard resort with a peak elevation of <strong>2,240m</strong> providing the longest vertical ride. Whistler/Blackcomb can be enjoyed year round, boasting unbelievable skiing and snowboarding, four championship golf course with access to the <strong>BEST</strong> apres spots, mountain bike trails, hiking trails, glacier fed lakes and spring fed spas.
                </p>
            </div>

            </div>
            </div>
          </div>
      </div>

      <div>
        <Weather />
        <Carousel />
      </div>

      </div>
    );
  }
}

export default App;
