import React, { useEffect, useRef, useState } from "react";
import './header.css'
import logo from '../../img/logo6.png'
import { Turn as Hamburger } from 'hamburger-react'
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
    const [isActive, setIsActive] = useState(false)
    const menuRef = useRef(null)
    const [open, setOpen] = useState(false)
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsActive(false);
            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive]);


    return (
        <div ref={menuRef} id="header">
            <div id="headerContainer">
                <NavLink onClick={() => setIsActive(false)} className="logo" to="/">
                    <img className="logoImg" src={logo} />
                    <div className="logoCompanyH3">
                        <h3>Единый</h3>
                        <h3>Реестр</h3>
                        <h3>Добра</h3>
                    </div>
                </NavLink>
               
                <div>
                    <div>
                        <h4>Служба поддержки</h4>
                        <a href="tel:+996 999 999 999">+996 999 999 999</a>
                    </div>
                    {open && location.pathname !== '/login' && (
                        <div className="overlays">
                            <div className="cardKab">
                                <p>Только нуждающиеся могут войти!</p>
                                <div>
                                    <button className="btn" onClick={() => setOpen(false)}>Назад</button>
                                    <NavLink to="/dashboard" className="btn">Продолжить</NavLink>
                                </div>
                            </div>
                        </div>
                    )}
                    <button onClick={() => {if (location.pathname !== '/login') {setOpen(true);}}}
                     className="lKab none">Войти</button>
                    <div className="burger" onClick={() => setIsActive(!isActive)}>
                        <Hamburger toggled={isActive} toggle={setIsActive} />
                    </div>
                </div>
            </div>
            
            <div className="topHed">
            <div className={isActive ? "servic noActive" : "servic"}>
                    <div className="burM">
                        <NavLink onClick={() => setIsActive(false)} className={"NavLink"} to="/whoToHelp">Кому помочь</NavLink>
                        <NavLink onClick={() => setIsActive(false)} className={"NavLink"} to="/news">Новости</NavLink>
                        <NavLink onClick={() => setIsActive(false)} className={"NavLink"} to="/whoHelpend">Кому помогли</NavLink>
                        <NavLink onClick={() => setIsActive(false)} className={"NavLink"} to="/contact">Контакты</NavLink>
                    </div>
                    <div className="bLKab">
                        <button onClick={() => { setOpen(true); setIsActive(false); }} className="lKab">Войти</button>
                    </div>
                </div>
            </div>

        </div>

    )
}