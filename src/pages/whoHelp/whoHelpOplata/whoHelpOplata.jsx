import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "./whoHelpOplata.css";
import mbank from "../../../img/mbank.webp"
import obank from "../../../img/obank.webp"
import optima from "../../../img/optimabank.jpg"

export default function WhoHelpOplata() {
    const location = useLocation();

    return (
        <div className="whoHelpOplataContainer">
            <h3>Выберите банк, чтобы сделать пожертвование</h3>
            <div className="whoHelpOplata-buttons">
                <img className="pay-button" src={mbank} alt="" />
                <img className="pay-button" src={obank} alt="" />
                <img className="pay-button" src={optima} alt="" />
            </div>
        </div>
    );
}
