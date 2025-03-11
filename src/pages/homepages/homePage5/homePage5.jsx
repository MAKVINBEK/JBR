import React from "react";
import './homePage5.css'
import Certificat1 from '../../../img/certificat1.jpg'
import Certificat2 from '../../../img/certificat2.jpg'
import Certificat3 from '../../../img/certificat3.jpg'


export default function HomePage5 () {
    return (
        <div id="homePage5">
            <div className="homePage6Container">
                <h2>Наши сертификаты</h2>
                <div>
                    <img src={Certificat1} alt="" />
                    <img src={Certificat2} alt="" />
                    <img src={Certificat3} alt="" />
                </div>
            </div>
        </div>  
    )
}