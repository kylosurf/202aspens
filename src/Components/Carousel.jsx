import React, { Component } from 'react'

class Carousel extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <div className="container">

        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

        <div className="carousel-inner">

            <div className="item active">
              <img src="202_Aspens_floor_view.jpg" alt="Los Angeles" style={{width:"100%"}} />
              <div className="carousel-caption">
                <h3>202 Aspens</h3>
                <p>Floor Plan</p>
              </div>
            </div>

            <div className="item">
              <img src="202_Aspens_living_room.jpg" alt="New York" style={{width:"100%"}} />
              <div className="carousel-caption">
                <h3>202 Aspens</h3>
                <p>Living Room</p>
              </div>
            </div>

            <div className="item">
              <img src="202_Aspens_kitchen.jpg" alt="New York" style={{width:"100%"}} />
              <div className="carousel-caption">
                <h3>202 Aspens</h3>
                <p>Kitchen</p>
              </div>
            </div>

            <div className="item">
              <img src="202_Aspens_bedroom.jpg" alt="Chicago" style={{width:"100%"}} />
              <div className="carousel-caption">
                <h3>202 Aspens</h3>
                <p>Bedroom</p>
              </div>
            </div>

            <div className="item">
              <img src="202Aspens_360_view.jpg" alt="New York" style={{width:"100%"}} />
              <div className="carousel-caption">
                <h3>202 Aspens</h3>
                <p>360 Degree View</p>
              </div>
            </div>

          </div>


          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>

        </div>
    </div>
    )
  }
}


export default Carousel
