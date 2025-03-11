import React from "react";
import dogovor from '../../../img/menlike.jpg'
import './homePage2.css'


export default function HomePage2 () {
    return (
            <div className="homePage2Conteiner">
                <div className="homepage2Block1">
                    <h2>
                        Будьте уверенными
                            в завтрашнем дне
                    </h2>
                    <p>
                    Главной целью благотворительного фонда является  
                    создание таких условий, при которых у каждого 
                     нуждающегося имеется возможность получить  
                      помощь, а у каждого благотворителя – возможность ее оказать.
                    </p>
                    <button>Подробнее</button>
                </div>
                <div className="homepage2Block2">
                    <img className="img"src={dogovor} alt="" />
                </div>
            </div>
    )
}