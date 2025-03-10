import React from "react";
import './homePage5.css'


export default function HomePage5 () {
    return (
        <div id="homePage5">
            <div className="homePage5Container">
                    <h2>Cвязаться прямо сейчас</h2>
                    <p>Оставьте телефон номер и мы сами свяжемся с вами.</p>
                <div>
                    <input type="text" placeholder="+996 (000) 000-000" />
                    <button>Оставить</button>
                </div>
                <p>Оставляя заявку, вы соглашаетесь на обработку персональных <br />
                    данных и с условиями бронирования счёта.
                </p>
            </div>
        </div>  
    )
}