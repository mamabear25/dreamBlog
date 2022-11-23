import React from "react";
import "../styles/navbar.scss";
import Logo from "../img/logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                    <h6>ART</h6>
                    </Link>
                    <Link className="link" to="/?cat=politics">
                    <h6>POLITICS</h6>
                    </Link>
                    <Link className="link" to="/?cat=diy">
                    <h6>DIY</h6>
                    </Link>
                    <Link className="link" to="/?cat=music">
                    <h6>MUSIC</h6>
                    </Link>
                    <Link className="link" to="/?cat=travel">
                    <h6>TRAVEL</h6>
                    </Link>
                    <Link className="link" to="/?cat=science">
                    <h6>SCIENCE</h6>
                    </Link>
                    <span>TechMomma</span>
                    <span>Logout</span>
                    <span className="create">
                        <Link className="link" to="/create">Create</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar