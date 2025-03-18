import { useLocation, useNavigate } from "react-router-dom";
import CopyToClipboardButton from '../../CopiText';
import { useState, } from "react";
import pdfPatient1 from "../patiendDetail/pdfImg/pdfPatient1.webp";
import pdfPatient2 from "../patiendDetail/pdfImg/pdfPatient2.webp";
import pdfPatient3 from "../patiendDetail/pdfImg/pdfPatient3.webp";
import pdfPatient5 from "../patiendDetail/pdfImg/pdfPatient4.webp";
import "./patiendDetail.css";
import foto from "../../img/helpBaby7.png"
import foto1 from "../../img/helpBaby5.png"
import foto2 from "../../img/helpBaby6.png"
import donat from "../../img/logo6.png"


const images = [foto, foto1, foto2]

export default function PatientDetail() {
  const { state: patient } = useLocation();
  const navigate = useNavigate();
  const [img, setImg] = useState(images[0])

  const data = "Пример текста для копирования";

  const progress = (parseInt(patient.sobrano) / parseInt(patient.sobr)) * 100;
  const [showDocuments, setShowDocuments] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  if (!patient) {
    return (
      <div>
        <h2>Пациент не найден</h2>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    );
  }

  return (
    <div id="patientDetail">
      <div className="patientDetailContainer">
        <div className="pddf">
          <button
            className="showDocsButton"
            onClick={() => setShowDocuments(!showDocuments)}>
            {showDocuments ? "Скрыть документы" : "Показать документы"}
          </button>
          {showDocuments && (
            <div className="documentsContainer">
              {[pdfPatient1, pdfPatient2, pdfPatient3, pdfPatient5].map(
                (doc, index) => (
                  <img
                    key={index}
                    src={doc}
                    alt={`Документ ${index + 1}`}
                    id="pdfThumbnail"
                    onClick={() => setEnlargedImage(doc)} />
                )
              )}
            </div>
          )}
        </div>
        <div className="patientDetailBlock">
          <div className="imgBlock">
            <img className="img1" src={img} alt="Фото пациента" />
            <div>
              {images.map((el, index) => (
                <img key={index} src={el} onClick={() => setImg(el)} />
              ))}
            </div>
          </div>
          <div>
            <h3>{patient.name}</h3>
            <div className="patientData1">
              <span>Диагноз:</span>
              <h4>{patient.diagnoz}</h4>
            </div>
            <div className="patientData2">
              <span>Лечение:</span>
              <h4>{patient.lechenia}</h4>
            </div>
            <div className="d4">
              <div className="polzunok">
                <progress value={progress} max="100"></progress>
                <div className="icon-wrapper" style={{ left: `calc(${progress}% - 15px)` }}>
                  <img src={donat} className="icon" />
                </div>
              </div>
              <div className="patientData4">
                <h4>
                  <span>{patient.sobrano}</span> <br /> сом СОБРАНО
                </h4>
                <h4>
                  <span>{patient.sobr}</span><br /> сом  НУЖНО
                </h4>
              </div>
            </div>

            <div className="patientData5">
              <p>{data}</p>
              <CopyToClipboardButton textToCopy={data} />
            </div>
          </div>
        </div>
      </div>
      {enlargedImage && (
        <div className="overlay" onClick={() => setEnlargedImage(null)}>
          <img src={enlargedImage} alt="Документ" className="enlargedImage" />
        </div>
      )}
    </div>
  );
}
