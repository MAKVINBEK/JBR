import "./whoHelp.css";
import donat from "../../img/donat.png";
import { BsHandIndex } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

export default function WhoHelpBlock({ dann }) {
  const navigate = useNavigate();
  const progress = (parseInt(dann.sobrano) / parseInt(dann.sobr)) * 100;

  return (
    <div className="whoHelpBlock">
      <div><img src={dann.img} alt="" /></div>
      <div>
        <h3>{dann.name}</h3>
        <p>
          <span className="spanText">Диагноз:</span>
          {dann.info}
        </p>
        <div className="Polzunok">
          <progress value={progress} max="100"></progress>
        </div>

        <div className="whoHelpBlock2">
          <h4>{dann.sobrano}сом <br />собрано</h4>
          <div>{dann.sobr}сом <br /> нужно</div>
        </div>

        <button
          id="helpBtn"
          onClick={() =>
            navigate(`/whoHelpOplata/${dann.name}`, { state: dann })}>
          <img src={donat} /> Хочу помочь
        </button>
        <h4
          className="info"
          onClick={() => navigate(`/patient/${dann.id}`, { state: dann })}>
          Подробнее <BsHandIndex />
        </h4>
      </div>
    </div>
  );
}
