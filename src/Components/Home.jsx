import React from "react";
import { Products } from "./Products";
import "./Home.css";

export const Home = () => {
  return (
    <div className="hero">
      {/* <div className="card text-bg-white border-0 color-white ">
                <img src="https://img.freepik.com/free-photo/shopping-concept-with-young-couple-space_23-2147707435.jpg?w=2000" className="card-img" alt="bg-image" height="550px" />
                <div className="card-img-overlay ">
                    <div className="container d-flex  flex-column justify-content-center align-items-end ">
                        <h5 className="card-title display-3 fw-bolder mb-0">New Seasons Arrivals</h5>
                        <p className="card-text  lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div> */}

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/images/home/product4.jpg"
              className="d-block w-100"
              alt="IPhone"
              height="500px"
            />

            <div class="carousel-caption top-left ">
            <h5 className="card-title display-3 fw-bolder mb-0">New Seasons Arrivals</h5>
                        <p className="card-text  lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/product2.jpg"
              className="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/product3.jpg"
              className="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/img4.jpg"
              className="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Products />
    </div>
  );
};
