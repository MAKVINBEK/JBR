import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./newsPage.css";

export default function NewsPage() {
    const { state: news } = useLocation();
    const navigate = useNavigate();

    if (!news) {
        return (
            <div className="newsContainer">
                <h2>Новость не найдена</h2>
            </div>
        );
    }

    return (
        <div className="newsContainerPage">
            <button className="backBtn" onClick={() => navigate(-1)}>← Назад</button>
            <div className="newsContent">
                <img src={news.img} alt={news.title} className="newsImage" />
                <div className="newsTextBlock">
                    <h2 className="newsDate">{news.data}</h2>
                    <h1 className="newsTitle">{news.title}</h1>
                    <p className="newsText">{news.info}</p>
                </div>
            </div>
        </div>
    );
}


