import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./whoHelpendPatient.css";
import { get } from "../../../Api";


export default function WhoHelpendPatient() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const loadArticle = async () => {
        try {
          const data  = await get.getNeedy();
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

  const moveSlide = (direction) => {
    setCurrentSlide((prev) => {
      const nextIndex = prev + direction;
      if (nextIndex < 0) return photos.length - 1; 
      if (nextIndex >= photos.length) return 0; 
      return nextIndex;
    });
  };

    if (!article) {
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
                 <img className="img1" src={article.img} alt="Фото пациента" />
                <div className="sliderContainer" style={{ transform: `translateX(-${currentSlide * 110}px)` }}>
                  {photos.map((el, index) => (
                    <img key={index} src={el} alt={`Фото ${index + 1}`} onClick={() => setCurrentSlide(index)} />
                  ))}
                </div>
                <button className='prev' onClick={() => moveSlide(-1)}>←</button>
                <button className='next' onClick={() => moveSlide(1)}>→</button>
              </div>
                <div className="patientInfo">
                    <p className="patientName">{article.name} {article.surname}</p>
                    <p className="patientAge">{article.age} лет</p>
                    <p className="diagnosis"><strong>Диагноз:</strong> {article.diagnosis}</p>
                    <p className="treatment">
                        <strong>Лечение:</strong> {article.treatment}
                    </p>
                    <div className='closed-text tt'>СБОР ЗАКРЫТ </div>
                    <button className="backButton" onClick={() => navigate(-1)}>Назад</button>
                </div>
        </div>
    );
}
