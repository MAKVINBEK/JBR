import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoDocument } from "react-icons/io5";
import pdfPatient1 from "../patiendDetail/pdfImg/pdfPatient1.webp";
import pdfPatient2 from "../patiendDetail/pdfImg/pdfPatient2.webp";
import pdfPatient3 from "../patiendDetail/pdfImg/pdfPatient3.webp";
import pdfPatient5 from "../patiendDetail/pdfImg/pdfPatient4.webp";
import "./patiendDetail.css";
import foto from "../../img/helpBaby7.png"
import foto1 from "../../img/helpBaby5.png"
import foto2 from "../../img/helpBaby6.png"

const images = [foto, foto1, foto2]

export default function PatientDetail() {
  const { id } = useParams();
  const { state: patient } = useLocation();
  const navigate = useNavigate();

  const [img, setImg] = useState(images[0])


  const progress = (parseInt(patient.sobrano) / parseInt(patient.sobr)) * 100;

  const [showPdf, setShowPdf] = useState(false);

  const [showDocuments, setShowDocuments] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const requisites =
    "Карта: 1234 5678 9012 3456, Банк: Кыргызстан, Тел: +996 999 999 999";

  const copyRequisites = () => {
    const cardNumber = requisites.match(/\d{4} \d{4} \d{4} \d{4}/)[0];
    navigator.clipboard.writeText(cardNumber);
    alert("Номер карты скопирован!");
  };

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
        <div className="patientDetailBlock">
          <div className="imgBlock">
            <img src={img} alt="Фото пациента" />
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
            <div>
              <progress value={progress} max="100"></progress>
            </div>
            <div className="patientData4">
              <h4>
                {patient.sobrano} сом <br /> СОБРАНО
              </h4>
              <h4>
                {patient.sobr} сом <br /> НУЖНО
              </h4>
            </div>
            <div className="patientData5">
              <h4>Реквизиты для помощи:</h4>
              <p>{requisites}</p>
              <div>
                <button onClick={copyRequisites}>Скопировать реквизиты</button>
                <button>Скопировать номер</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className="showDocsButton"
            onClick={() => setShowDocuments(!showDocuments)}
          >
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
                    onClick={() => setEnlargedImage(doc)}
                  />
                )
              )}
            </div>
          )}
          <div></div>
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
