import React from "react";
import "../styles/footer.scss";
import Logo from "../img/logo.png"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <img src={Logo} alt="" />
                    <span>Made with &hearts; by <b>Silver Okonkwo</b> for <b>techMomma</b></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer