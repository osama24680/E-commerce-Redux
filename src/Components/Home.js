import React from 'react'
import header from "../assets/header.jpg"
import Products from "./Products"
const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white rounded-0 border-0" >
                <img src={header} className="card-img border-0 rounded-0" alt="..." height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
                        <p className="card-text text-uppercase">check out all the trends</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home