import React, { useEffect, useRef, useState } from "react";
import './header.css'
import logo from '../../img/logo6.png'
import { Turn as Hamburger } from 'hamburger-react'
import { FaHandHoldingHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header () {
    const[isActive, setIsActive]=useState(false)
    const menuRef = useRef(null)
    const close = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)){
                setIsActive(false);
            }
            
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive]);


    return (
        <div id="header">
            <div id="headerContainer">
                    <NavLink className="logo" to="/">
                    <img className="logoImg"src={logo}/> 
                    <div className="logoCompanyH3">
                        <h3>Единый</h3>
                        <h3>Реестр</h3>
                        <h3>Добра</h3>
                    </div>
                    </NavLink>
                    <div ref={menuRef} className={isActive ?"servic noActive":"servic"}>
                        <NavLink onClick={() => setIsActive(false)} className={({ isActive }) => isActive ? "active-navLink" : "NavLink"}  to="/whoToHelp">Кому помочь</NavLink>
                       <NavLink onClick={() => setIsActive(false)} className={({ isActive }) => isActive ? "active-navLink" : "NavLink"} to="/news">Новости</NavLink>
                        <NavLink onClick={() => setIsActive(false)} className={({ isActive }) => isActive ? "active-navLink" : "NavLink"} to="/whoHelpend">Кому помогли</NavLink>
                        <NavLink onClick={() => setIsActive(false)} className={({ isActive }) => isActive ? "active-navLink" : "NavLink"} to="/contact">Контакты</NavLink>
                </div>
                <div>
                    <div>
                        <h4>Служба поддержки</h4>
                        <p>+996 999 999 999</p>
                    </div>
                    <NavLink className="NavLinkHel" to="/oplataPage">Хочу помочь<FaHandHoldingHeart size={15}/></NavLink>
                    <div className="burger"  onClick={() => setIsActive(!isActive)}>
                        <Hamburger toggled={isActive} toggle={setIsActive} />
                    </div>
                </div>
            </div>
        </div>
    )
}