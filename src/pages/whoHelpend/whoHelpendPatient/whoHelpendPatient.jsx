import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./whoHelpendPatient.css";
import foto from "../../../img/helpBaby7.png"
import foto1 from "../../../img/helpBaby5.png"
import foto2 from "../../../img/helpBaby6.png"

const images = [foto, foto1, foto2]

export default function WhoHelpendPatient() {
    const { state: patient } = useLocation();
    const navigate = useNavigate();
    const [img, setImg] = useState(images[0])

    if (!patient) {
        return (
            <div className="whoHelpendContainer">
                <h2>Данные о пациенте не найдены</h2>
                <button onClick={() => navigate(-1)}>Назад</button>
            </div>
        );
    }

    return (
        <div className="whoHelpendContainer">
                <div className="imgBlock">
            <img className="img1" src={img} alt="Фото пациента" />
            <div>
              {images.map((el, index) => (
                <img key={index} src={el} onClick={() => setImg(el)} />
              ))}
            </div>
          </div>
                <div className="patientInfo">
                    <p className="patientName">{patient.name} {patient.surname}</p>
                    <p className="patientName">{patient.age} лет</p>
                    <p className="diagnosis"><strong>Диагноз:</strong> {patient.diagnosis}</p>
                    <p className="treatment">
                        <strong>Лечение:</strong> {patient.treatment}
                    </p>
                    <div className='closed-text tt'>СБОР ЗАКРЫТ </div>
                    <button className="backButton" onClick={() => navigate(-1)}>Назад</button>
                </div>
        </div>
    );
}
