import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <section id="contactUs" className="page-section secPad">
                    <div className="container">

                        <div className="row">
                            <div className="heading text-center">
                                <h2>Let's Keep In Touch!</h2>
                                <p>Thank you for visiting out my profile. If you would like to get into contact with me, please fill out the form below.</p>
                            </div>
                        </div>

                        <div className="row mrgn30">

                            <form method="post" action="" id="contactfrm" role="form">

                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Enter name" title="Please enter your name (at least 2 characters)" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" title="Please enter a valid email address" />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="comments">Comments</label>
                                        <textarea name="comment" className="form-control" id="comments" cols="3" rows="5" placeholder="Enter your message…" title="Please enter your message (at least 10 characters)"></textarea>
                                    </div>
                                    <button name="submit" type="submit" className="btn btn-lg btn-primary" id="submit">Submit</button>
                                    <div className="result"></div>
                                </div>
                            </form>
                            <div className="col-sm-4">
                                <h4>Address:</h4>
                                <address>
                                Ring road near by Shyamoli Square, Dhaka
                                </address>
                                <h4>Phone:</h4>
                                <address>
                                01977-282927
                                </address>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact
