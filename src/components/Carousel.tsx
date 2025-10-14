import React from 'react'
import photo1 from '../assets/img/1.jpg'
import photo2 from '../assets/img/2.jpg'
import photo3 from '../assets/img/3.jpg'

export default function Carousel() {
    return (
        <div id="carouselExample" className="carousel slide w-50">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={photo1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={photo2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={photo3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}