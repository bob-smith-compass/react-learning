import React, { Component } from 'react';
import './carousel.css';

export default class Carousel extends Component {
    render() {
        return (
            <div>

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.pexels.com/photos/789382/pexels-photo-789382.jpeg" className="d-block w-100" alt="something" />
                        </div>
                        <div className="carousel-item">
                            <img src="../../img/2.jpg" className="d-block w-100" alt="something" />
                            <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Second slide"><title>Placeholder</title><rect fill="#666" width="100%" height="100%"></rect><text fill="#444" dy=".3em" x="50%" y="50%">Second slide</text></svg>
                        </div>
                        <div className="carousel-item">
                            <img src="../../img/3.jpg" className="d-block w-100" alt="something" />
                            <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Second slide"><title>Placeholder</title><rect fill="#666" width="100%" height="100%"></rect><text fill="#444" dy=".3em" x="50%" y="50%">Second slide</text></svg>
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

            </div>
        )
    }
}
