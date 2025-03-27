import React, { useEffect, useState } from "react";
import './homePage3.css'
import { get, } from "../../../Api";

export default function HomePage3() {
    const [articles, setArticles] =useState([])

    useEffect(() => {
        const loadArticles = async () => {
          try {
            const response = await get.getFaunder()
            setArticles(response.data);
          } catch (err) {
            console.error(err);
          }
        };
        loadArticles();
      }, []);

    return (
        <div id="homepage3">
            <div className="homepage3Container">
                <h2>Oснователи фонда</h2>
                <div className="homePage3Blocks">
                    
                    
                </div>
                <p>Подберите страховой продукт, который наилучшим образом
                    подойдёт именно вам</p>
            </div>
        </div>
    )
}