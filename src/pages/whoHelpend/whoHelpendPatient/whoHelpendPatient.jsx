import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./whoHelpendPatient.css";

export default function WhoHelpendPatient() {
    const { state: patient } = useLocation();
    const navigate = useNavigate();

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
                <div className="imageContainer">
                    <img src={patient.img} alt={patient.name} className="patientImage" />
                </div>
                <div className="patientInfo">
                    <h1 className="patientName">{patient.name}</h1>
                    <p className="diagnosis"><strong>Диагноз:</strong> {patient.diagnoz}</p>
                    <p className="treatment">
                        <strong>Лечение:</strong> {patient.lechenia}
                    </p>
                    <div className="statusClosed">
                        <h2>{patient.sbor}</h2>
                    </div>
                    <button className="backButton" onClick={() => navigate(-1)}>Назад</button>
                </div>
        </div>
    );
}
