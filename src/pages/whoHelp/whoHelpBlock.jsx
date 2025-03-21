import "./whoHelp.css";
import donat from '../../img/logo6.png'
import { BsHandIndex } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import data from "../../data";

export default function WhoHelpBlock({ dann }) {
  const navigate = useNavigate();
  const progress = (parseInt(dann.sobrano) / parseInt(dann.sobr)) * 100;

  return (
    <div className="whoHelpBlock">
      <div onClick={() => navigate(`/patient/${dann.id}`, { state: dann })}><img src={dann.img} alt="" /></div>
      <div>
        <div>
        <h3>{dann.name}</h3>
        <p>
          <strong className="spanText">Диагноз:</strong> 
          {dann.info}
        </p></div> <div>
        <div className="Polzunok">
          <progress value={progress} max="100"></progress>
          <div className="icon-wrapper" style={{ left: `calc(${progress}% - 10px)` }}>
          <img src={donat} className="icon" />
        </div>
        </div>

        <div className="whoHelpBlock2">
          <h4>{dann.sobrano} сом <br />собрано</h4>
          <div>{dann.sobr} сом <br /> <span>нужно</span></div>
        </div>
       
        <button
          id="helpBtn"
          onClick={() =>
            navigate(`/whoHelpOplata/${dann.name}`, { state: dann })}>
           Хочу помочь
        </button>
        <h4
          className="info"
          onClick={() => navigate(`/patient/${dann.id}`, { state: dann })}>
          Подробнее <BsHandIndex />
        </h4></div>
      </div>
    </div>
  );
}
