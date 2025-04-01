import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./patiendDetail.css";
import { get, } from "../../Api";
import { IoClose } from "react-icons/io5";
import pdf1 from "../patiendDetail/pdfImg/pdfPatient1.webp";
import pdf2 from "../patiendDetail/pdfImg/pdfPatient2.webp";
import pdf3 from "../patiendDetail/pdfImg/pdfPatient3.webp";
import pdf4 from "../patiendDetail/pdfImg/pdfPatient4.webp";
import donat from "../../img/logo6.png";

const Detail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDocuments, setShowDocuments] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await get.getProfile();

        if (data && data.length > 0) {
          const selectedItem = data.find((item) => String(item.id) === id);
          if (selectedItem) {
            setArticle(selectedItem);
          } else {
            setError("Услуга не найдена.");
          }
        } else {
          setError("Данные не найдены.");
        }
      } catch (error) {
        setError("Ошибка при загрузке данных. Попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!article) return <p>Загрузка данных...</p>;

  const photos = article.photos || [];
  const documents = article.documents || [];
  const progress = (parseInt(article.collected) / parseInt(article.sum)) * 100;

  const moveSlide = (direction) => {
    setCurrentSlide((prev) => {
      const nextIndex = prev + direction;
      if (nextIndex < 0) return photos.length - 1;
      if (nextIndex >= photos.length) return 0;
      return nextIndex;
    });
  };

  const doctaip = [pdf1, pdf2, pdf3, pdf4]

  return (
    <div className="container">
      <div className="contentic">
        <div id="patientDetail">
          <div className="patientDetailContainer">
            <button className="showDocsButton" onClick={() => setShowDocuments(!showDocuments)}>
              {showDocuments ? "Скрыть документы" : "Показать документы"}
            </button>

            {showDocuments && (
              <div className="documentsContainer">
                {documents.length > 0 ? (
                  documents.map((el, index) => (
                    <img
                      key={index}
                      src={el.file_url}
                      alt={`Документ ${index + 1}`}
                      id="pdfThumbnail"
                      onClick={() => setEnlargedImage(el.file_url)}
                    />
                  ))
                ) : (
                  <p>Нет документов</p>
                )}

              </div>
            )}

            <div className="patientDetailBlock">
              <div className="imgBlock">
                {photos.length > 0 && <img className="img1" src={photos[currentSlide]?.photo_url} alt="Фото пациента" />}
                <div className="sliderContainer" style={{ transform: `translateX(-${currentSlide * 110}px)` }}>
                  {photos.map((el, index) => (
                    <img key={index} src={el.photo_url} alt={`Фото ${index + 1}`} onClick={() => setCurrentSlide(index)} />
                  ))}
                </div>
                <button className='prev' onClick={() => moveSlide(-1)}>←</button>
                <button className='next' onClick={() => moveSlide(1)}>→</button>
              </div>

              <div>
                <h3>{article.needy}</h3>
                <div className="patientData1">
                  <span>Диагноз:</span>
                  <h4>{article.diagnosis}</h4>
                </div>
                <div className="patientData2">
                  <span>Лечение:</span>
                  <h4>{article.treatment}</h4>
                </div>

                <div className="d4">
                  <div className="polzunok">
                    <progress value={progress} max="100"></progress>
                    <div
                      className="icon-wrapper"
                      style={{ left: `calc(${progress}% - 15px)` }} >
                      <img src={donat} className="icon" />
                    </div>
                  </div>
                  <div className="patientData4">
                    <h4><span>{article.collected}</span> сом СОБРАНО</h4>
                    <h4><span>{article.sum}</span> сом НУЖНО</h4>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {enlargedImage && (
            <div className="overlay">
              <div>
                <p onClick={() => setEnlargedImage(!enlargedImage)}><IoClose /> </p>
                <img src={enlargedImage} alt="Документ" className="enlargedImage" />
                <button
                  className='prev'
                  onClick={() => {
                    const currentIndex = documents.findIndex(doc => doc.file_url === enlargedImage);
                    const prevIndex = (currentIndex - 1 + documents.length) % documents.length;
                    setEnlargedImage(documents[prevIndex].file_url);
                  }}
                >←</button>
                <button
                  className='next'
                  onClick={() => {
                    const currentIndex = documents.findIndex(doc => doc.file_url === enlargedImage);
                    const nextIndex = (currentIndex + 1) % documents.length;
                    setEnlargedImage(documents[nextIndex].file_url);
                  }}
                >→</button> </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
