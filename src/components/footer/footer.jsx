import React from "react";
import './footer.css'
import logo from '../../img/logo6.png'
import { FaHandHoldingHeart } from "react-icons/fa";
import socila1 from '../../img/icons1.png'
import social2 from '../../img/icons2.png'
import social3 from '../../img/icons3.png'
import social4 from '../../img/icons4.png'
import { NavLink } from "react-router-dom";


export default function Footer() {
    return (
        <div id="footer">
            <div className="footerContainer">
                <NavLink to="/" className="NavLink logo">
                    <img className="logoImg" src={logo} />
                    <div className="logoCompanyH3">
                        <h3>Единый</h3>
                        <h3>Реестр</h3>
                        <h3>Добра</h3>
                    </div>
                </NavLink>
                <div className="futMenu">
                    <NavLink  className={"futLink"} to="/whoToHelp">Кому помочь</NavLink>
                    <NavLink  className={"futLink"} to="/news">Новости</NavLink>
                    <NavLink  className={"futLink"} to="/whoHelpend">Кому помогли</NavLink>
                    <NavLink  className={"futLink"} to="/contact">Контакты</NavLink>
                </div>
                <div>
                    <img src={socila1} alt="" />
                    <img src={social2} alt="" />
                    <img src={social3} alt="" />
                    <img src={social4} alt="" />
                </div>
            </div>
        </div>
    )
}