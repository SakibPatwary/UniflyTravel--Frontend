import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
          <div>
            <section id="aboutUs" className="secPad">
              <div className="container">
                <div className="heading text-center">
                  <h2>About Us</h2>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="images/1.jpg"
                      alt=""
                      className="img-responsive img-thumbnail"
                    />
                  </div>
                  <div className="col-md-8">
                    <p>
                      ‘UNIFLY TRAVELS’ <br/>
                      “Travel is the main thing you purchase
                      that makes you more extravagant”. We, at ‘Unifly Travels’, swear by this and put stock in satisfying travel
                      dreams that make you perpetually rich constantly. We have
                      been moving excellent encounters for a considerable length
                      of time through our cutting-edge planned occasion bundles
                      and other fundamental travel administrations. We rouse our
                      clients to carry on with a rich life, brimming with
                      extraordinary travel encounters.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default About
