import React from "react";
import './homePage3.css'
import manPhoto from '../../../img/man.png'

export default function HomePage3() {
    return (
        <div id="homepage3">
            <div className="homepage3Container">
                <h2>Oснователи фонда</h2>
                <div className="homePage3Blocks">
                    <div>
                        <img src={manPhoto} alt="" />
                            <h4>Эркин Эркинов</h4>
                            <p>Помогать наиболее уязвимым слоям населения</p>
                    </div>
                    <div>
                        <img src={manPhoto} alt="" />
                            <h4>Эркин Эркинов</h4>
                            <p>Помогать наиболее уязвимым слоям населения</p>
                    </div>
                    <div>
                        <img src={manPhoto} alt="" />
                            <h4>Эркин Эркинов</h4>
                            <p>Помогать наиболее уязвимым слоям населения</p>
                    </div>
                </div>
                <p>Подберите страховой продукт, который наилучшим образом
                    подойдёт именно вам</p>
            </div>
        </div>
    )
}