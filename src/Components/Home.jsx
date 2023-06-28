import React from 'react'
import { Products } from './Products'

export const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-white border-0 color-white ">
                <img src="https://img.freepik.com/free-photo/shopping-concept-with-young-couple-space_23-2147707435.jpg?w=2000" className="card-img" alt="bg-image" height="550px" />
                <div className="card-img-overlay ">
                    <div className="container d-flex  flex-column justify-content-center align-items-end ">


                        <h5 className="card-title display-3 fw-bolder mb-0">New Seasons Arrivals</h5>
                        <p className="card-text  lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>

            <Products />
        </div>
    )
}
