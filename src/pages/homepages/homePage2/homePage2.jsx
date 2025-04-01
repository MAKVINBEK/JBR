import React from "react";
import dogovor from '../../../img/live.png'
import './homePage2.css'
import { NavLink } from "react-router-dom";
import { FaHandHoldingHeart } from "react-icons/fa";


export default function HomePage2 () {
    return (
            <div className="homePage2Conteiner">
                <div className="homepage2Block1">
                    <h2>
                    Подари надежду — измени будущее
                    </h2>
                    <p>
                    Твоя помощь может изменить чью-то жизнь. Дари надежду сегодня – это первый шаг к светлому будущему.
                    </p>
                    <NavLink className="NavLinkHel" to="/oplataPage">Хочу помочь<FaHandHoldingHeart size={15} /></NavLink>
                </div>
                    <img className="homepage2Block2" src={dogovor} alt="" />
            </div>
    )
}