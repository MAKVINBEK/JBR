import css from "./User.module.css"

const User = ()=> {


    const progrest = (parseInt(1500) / parseInt (2500) * 100)

    return(
        <div className={css.content}>
        <div className={css.patientDetail}>
            <div className={css.patientDetailContainers}>
                <div className={css.foto}>
                  <div><img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-closeup_176420-15568.jpg?semt=ais_hybrid" alt="Фото валантера" /></div>  
                    <h4>валантер</h4>
                </div>

                <div className={css.patientBlock}>
                    <div className={css.patientBlock1}>
                        <span>ФИО: Абдрахманов Еркин  Аскатович</span>
                    </div>
                    
                </div>
            </div>
            <div className={css.patientDetailContainer}>
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
                        <h4>1500 сом <br /> СОБРАНО</h4>
                        <h4>2500 сом <br /> НУЖНО</h4>
                    </div>
                    <div className={css.requisites}>
                        <h4>Реквизиты для помощи:396658646843518</h4>
                        <p></p>
                        <button >Скопировать реквизиты</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default User