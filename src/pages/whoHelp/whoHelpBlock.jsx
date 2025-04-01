import "./whoHelp.css";
import donat from '../../img/logo6.png'
import { BsHandIndex } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

export default function WhoHelpBlock({ dann }) {
  const navigate = useNavigate();
  const progress = (parseInt(dann.collected) / parseInt(dann.sum)) * 100;

  return (
    <div className="whoHelpBlock">
      <div onClick={() => navigate(`/patient/${dann.id}`, { state: dann })}>{dann.photos.length > 0 && <img src={dann.photos[0].photo_url} alt="Selected" />}</div>
      <div>
        <div>
          <h3>{dann.name} {dann.surname}</h3>
          <p>
            <strong className="spanText">Диагноз:</strong>
            {dann.diagnosis}
          </p></div>
        <div>
          <div className="Polzunok">
            <progress value={progress} max="100"></progress>
            <div className="icon-wrapper" style={{ left: `calc(${progress}% - 10px)` }}>
              <img src={donat} className="icon" />
            </div>
          </div>

          <div className="whoHelpBlock2">
            <h4>{dann.collected} сом <br />собрано</h4>
            <div>{dann.sum} сом <br /> <span>нужно</span></div>


          </div>

          <button id="helpBtn" onClick={() => navigate(`/whoHelpOplata/${dann.id}`)} >
            Хочу помочь
          </button>
          <NavLink
            to={`/patient/${dann.id}`}
            className="info">
            Подробнее <BsHandIndex />
          </NavLink></div>
      </div>
    </div>
  );
}
