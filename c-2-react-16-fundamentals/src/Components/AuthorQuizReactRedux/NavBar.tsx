import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" width="30" height="24"
                             className="d-inline-block align-text-top" />
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Add Author</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;