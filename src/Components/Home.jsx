import React from 'react'
import { Products } from './Products'
import './Home.css'

export const Home = () => {
    return (
        <div className='hero'>
            {/* <div className="card text-bg-white border-0 color-white ">
                <img src="https://img.freepik.com/free-photo/shopping-concept-with-young-couple-space_23-2147707435.jpg?w=2000" className="card-img" alt="bg-image" height="550px" />
                <div class="card-img-overlay ">
                    <div className="container d-flex  flex-column justify-content-center align-items-end ">
                        <h5 className="card-title display-3 fw-bolder mb-0">New Seasons Arrivals</h5>
                        <p className="card-text  lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div> */}

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://img.freepik.com/free-photo/shopping-concept-with-young-couple-space_23-2147707435.jpg?w=2000" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

            <Products />
        </div>
    )
}
