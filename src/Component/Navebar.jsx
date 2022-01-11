import React, { Component } from 'react'

export class Navebar extends Component {
    render() {
        return (
            <div>
                <section id="home">
                    <div className="banner-container">
                        <div className="container banner-content">
                            <div id="da-slider" className="da-slider">
                                <div className="da-slide">
                                    <h2>Travel Plans</h2>
                                    <p>Get your plans right away.. enjoy!!!</p>
                                    <div className="da-img"></div>
                                </div>
                                <div className="da-slide">
                                    <h2>Amazing Tours</h2>
                                    <p>Travel you remember for life long!!</p>
                                    <div className="da-img"></div>
                                </div>
                                <div className="da-slide">
                                    <h2>Best Travel Travel</h2>
                                    <p>Get best deals at our place</p>
                                    <div className="da-img"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="#top"></div>

                <section id="introText">
                    <div className="container">
                        <div className="text-center">
                            <h1>UNIFLY TRAVELS Gives You a Great Holiday Package</h1>
                            <p>Contact us for the best deals!!</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Navebar
