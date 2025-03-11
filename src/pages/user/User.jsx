import css from "./User.module.css"

const User = ()=> {

    const progrest = (parseInt(1500) / parseInt (2500) * 100)
    return(
        <div className={css.content}>
        <div className={css.patientDetail}>
            <div className={css.patientDetailContainer}>
                <div className={css.block1}>
                <img src="https://fit4brain.com/wp-content/uploads/2015/02/carm-girl.jpg" alt="Фото пациента" />
                <div className={css.patientBlock}>
                    <h3 className={css.name}>Быкова Есения</h3>
                    <div className={css.patientBlock1}>
                        <span>Диагноз:</span>
                        <h4>Врожденный порок развития верхней и нижней правой конечностей.</h4>
                    </div>
                    <div className={css.patientBlock2}>
                        <h4>Требуется лечение:</h4>
                        <h4>Курс реабилитации в ООО «Развитие без барьеров» г.Санкт-Петербург</h4>
                    </div>
                    <progress value={progrest} max="100"></progress>
                    <div className={css.patientBlock4}>
                        <h4>СОБРАНО <br /> 1500 сом</h4>
                        <h4>НУЖНО <br />2500 сом </h4>
                    </div>
                </div>
                </div>
                <p className={css.oplata}>Помочь переводом</p>
                <div className={css.cards}>
                <a href="https://app.mbank.kg/qr/#00020101021132440012c2c.mbank.kg01020210129967734545081302125204999953034175911MUNARBEK%20K.630470b2" className="pay-button" >
                    Оплатить через Mbank
                </a>
                <a className="pay-button" >
                    Оплатить через Optima Bank
                </a>
                <a className="pay-button" >
                    Оплатить через Demir Bank
                </a>
                </div>
            </div>
            <div className={css.patientDetailContainers}>
                <h3>Валантеры</h3>
                <div>
                  <div>
                    <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-closeup_176420-15568.jpg?semt=ais_hybrid" alt="Фото валантера" />
                    <span>ФИО: Абдрахманов Еркин  Аскатович</span>
                  </div>  
                  <div>
                    <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-closeup_176420-15568.jpg?semt=ais_hybrid" alt="Фото валантера" />
                    <span>ФИО: Абдрахманов Еркин  Аскатович</span>
                  </div>  
                  <div>
                    <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-closeup_176420-15568.jpg?semt=ais_hybrid" alt="Фото валантера" />
                    <span>ФИО: Абдрахманов Еркин  Аскатович</span>
                  </div>  
                  <div>
                    <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-closeup_176420-15568.jpg?semt=ais_hybrid" alt="Фото валантера" />
                    <span>ФИО: Абдрахманов Еркин  Аскатович</span>
                  </div>  
                  <div>
                    <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-closeup_176420-15568.jpg?semt=ais_hybrid" alt="Фото валантера" />
                    <span>ФИО: Абдрахманов Еркин  Аскатович</span>
                  </div>  
            </div>
            </div>
        </div>
        </div>
    )
}

export default User