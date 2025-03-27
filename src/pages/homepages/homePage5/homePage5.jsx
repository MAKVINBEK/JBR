import React, { useEffect, useState } from "react";
import './homePage5.css'
import { get } from "../../../Api";

export default function HomePage5 () {
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
        <div id="homePage5">
            <div className="homePage6Container">
                <h2>Наши сертификаты</h2>
                
                <div>
                   
                </div>
            </div>
        </div>  
    )
}