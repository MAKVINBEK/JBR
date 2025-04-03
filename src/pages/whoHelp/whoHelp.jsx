import "./whoHelp.css";
import { useState, useEffect } from "react";
import WhoHelpBlock from './whoHelpBlock';
import { TbZoom } from "react-icons/tb";
import { get } from "../../Api";

export default function WhoHelp() {
  const [value, setValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const data = await get.getDisplay();
        console.log("Ответ от API:", data);
        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          console.error("Не массив! Ответ:", data);
          setArticles([]);
        }
      } catch (err) {
        console.error("Ошибка запроса:", err);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);
  
  

  const filteredCountries = articles.filter((country) =>
    `${country.name} ${country.surname}`.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="WhoHelpContainer">
      <h2>Наши подопечные</h2>
      <div className="serch">
        <TbZoom />
        <input
          type="text"
          placeholder="поиск..."
          className="poisk_serch"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>

      <div className="helpBlocks">
        {loading ? (
          <p>Загрузка...</p>
        ) : filteredCountries.length > 0 ? (
          filteredCountries.map((patient) => (
            <WhoHelpBlock key={patient.id} dann={patient} />
          ))
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
}
