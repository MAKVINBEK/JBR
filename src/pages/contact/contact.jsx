import React from "react";
import dispatcher from "../../img/dispatcher.jpg"
import './contact.css'
import telephone from '../../img/telephone.png'
import email from '../../img/email.png'
import { IoLocationOutline } from "react-icons/io5";
import social1 from '../../img/icons1.png'
import social2 from '../../img/icons2.png'
import social3 from '../../img/icons3.png'
import social4 from '../../img/icons4.png'



export default function Contact () {
    return(
            <div className="contactContainer">
                <img src={dispatcher} alt="" />
                <div>
                    <h2>Контакты</h2>
                    <div className="contactBlock">
                        <div>
                            <p>У Вас есть вопросы?</p>
                            <p>Мы будем рады оперативно на них ответить или просто пообщаться с Вами.</p>
                            <p>Пожалуйста, пишите и не стесняйтесь!</p>
                        </div>
                        <div>
                            <div className="contactTelephone">
                                <p><img src={telephone}/>+996 999 999 999</p>
                                <p><img src={telephone}/>+996 999 999 999</p>
                            </div>
                                <h4 className="contactEmail"><img src={email} alt="" />navisasset@mail.com</h4>
                                <h4 className="contactAddress"><IoLocationOutline size={20}/>Кыргызская республика, г.Бишкек, Проспект Манаса 64/1</h4>
                        </div>
                        <div className="socialMedia">
                            <h3>Мы в соцсетях:</h3>
                            <div>
                                <img src={social1} alt="" />
                                <img src={social2} alt="" />
                                <img src={social3} alt="" />
                                <img src={social4} alt="" />
                            </div>
                        </div>
                    </div>
                    <p>Если у Вас возникли вопросы технического или финансового плана, напишите нам и мы поможем Вам в решении вашего вопроса. Мы отвечаем на вопросы в течение 15-60 минут, в зависимости от загрузки сервиса.</p>
                </div>
            </div>
    )
}