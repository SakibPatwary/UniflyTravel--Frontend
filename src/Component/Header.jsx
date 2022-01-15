import React, { Component } from "react";

export class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="container">
                        <nav className="navbar navbar-inverse" role="navigation">
                            <div className="navbar-header">
                                <button
                                    type="button"
                                    id="nav-toggle"
                                    className="navbar-toggle"
                                    data-toggle="collapse"
                                    data-target="#main-nav"
                                >
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a href="#" className="navbar-brand scroll-top logo">
                                    <b>UNIFLY TRAVELS</b>
                                </a>
                            </div>
                            <div id="main-nav" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav" id="mainNav">
                                    <li className="active">
                                        <a href="#home" className="scroll-link">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#packages" className="scroll-link">
                                            Places
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#portfolio" className="scroll-link">
                                            Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#aboutUs" className="scroll-link">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contactUs" className="scroll-link">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#login"
                                            className="scroll-link"
                                            style={{ color: "white"}}
                                        >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="20"
                                                    fill="currentColor"
                                                    className="bi bi-person-circle"
                                                    viewBox="1 0 16 14"
                                                >
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                                    />
                                                </svg>
                                                <b>{"Login"}</b>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
