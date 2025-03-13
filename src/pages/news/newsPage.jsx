import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./newsPage.css";
import News from "./news";
import NewsBlocks from "./NevsBlock";
import { LuCalendar } from "react-icons/lu";

export default function NewsPage() {
    const { state: news } = useLocation();
    const navigate = useNavigate();

    if (!news) {
        return (
            <div className="newsContainer">
                <h2>Новость не найдена</h2>

                <div>
                    <h2>Другие новости</h2>
                    <NewsBlocks />
                </div>
            </div>
        );
    }

    return (
        <div className="bag">
            <div className="w">
            <div className="top">
                    <button className="backBtn" onClick={() => navigate(-1)}>← Назад</button>
                    <h1 className="newsTitle">{news.title}</h1>
                    <h3 className="newsDate"><LuCalendar size={20}/>{news.data}</h3>
                </div>
                </div>
            <div className="newsContainerPage">
                <div className="newsContent">
                    <img src={news.img} alt={news.title} className="newsImage" />
                    <div className="newsTextBlock">
                        <p className="newsText">{news.info}</p>
                    </div>
                </div>
            </div>
            <div className="bc">
                <div className="newsContainer">
                    <h2>Другие Новости</h2>
                    <NewsBlocks />
                </div>
            </div>
        </div>

    );
}


