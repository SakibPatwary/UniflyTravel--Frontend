import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="social text-center">
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-flickr"></i></a>
                            <a href="#"><i className="fa fa-github"></i></a>
                        </div>

                        <div className="clear"></div>
                    </div>
                </footer>
                <section className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                Copyright 2021 | All Rights Reserved by UNIFLY TRAVELS
                            </div>
                        </div>
                    </div>
                </section>
                <a href="#top" className="topHome"><i className="fa fa-chevron-up fa-2x"></i></a>

            </div>
        )
    }
}

export default Footer