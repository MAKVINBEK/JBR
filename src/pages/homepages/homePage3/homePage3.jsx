import React, { useEffect, useState } from "react";
import "./homePage3.css";
import { get } from "../../../Api";

export default function HomePage3() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await get.getFaunder();
        if (response && Array.isArray(response)) {
          setArticles(response);
        } else {
          throw new Error("Некорректный формат данных");
        }
      } catch (err) {
        console.error("Ошибка загрузки статей:", err);
        setError("Не удалось загрузить данные.");
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

  return (
    <div id="homepage3">
      <div className="homepage3Container">
        <h2>Oснователи фонда</h2>
        {loading ? (
          <p>Загрузка...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="homePage3Blocks">
            {articles.map((el) => (
              <div key={el.id} className="founder-card">
                <img src={el.img} alt={el.name} loading="lazy" className="founder-image" />
                <h4>{el.name} {el.surname}</h4>
                <p>{el.title}</p>
              </div>
            ))}
          </div>
        )}
        <p>Мы создали этот фонд, чтобы помогать тем, кто нуждается в поддержке.</p>
      </div>
    </div>
  );
}
