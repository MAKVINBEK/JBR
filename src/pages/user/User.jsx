import css from "./User.module.css"
import foto from "../../img/helpBaby7.png"
import foto1 from "../../img/helpBaby5.png"
import foto2 from "../../img/helpBaby6.png"
import { useState } from "react"
import mbank from "../../img/mbank.webp"
import obank from "../../img/obank.webp"
import optima from "../../img/optimabank.jpg"


const images = [foto, foto1, foto2]

const User = () => {
  const [img, setImg] = useState(images[0])
  const progrest = (parseInt(1500) / parseInt(2500) * 100)
  return (
    <div className={css.content}>
      <div className={css.patientDetail}>
        <div className={css.patientDetailContainer}>
          <div className={css.block1}>
            <div className="imgBlock">
              <img src={img} alt="Фото пациента" />
              <div>
                {images.map((el, index) => (
                  <img key={index} src={el} onClick={() => setImg(el)} />
                ))}
              </div>
            </div>
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
              <div className={css.blo44}>
                <progress value={progrest} max="100"></progress>
                <div className={css.patientBlock4}>
                  <h4>СОБРАНО <br /> 1500 сом</h4>
                  <h4>НУЖНО <br />2500 сом </h4>
                </div>
              </div>
            </div>
          </div>
          <p className={css.oplata}>Помочь</p>
          <div className="whoHelpOplata-buttons">
            <img className="pay-button" src={mbank} alt="" />
            <img className="pay-button" src={obank} alt="" />
            <img className="pay-button" src={optima} alt="" />
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