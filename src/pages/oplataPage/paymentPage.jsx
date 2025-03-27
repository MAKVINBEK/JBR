import { useState } from "react";
import { FaUser, FaEnvelope, FaCreditCard, FaComment, FaMoneyBillWave } from "react-icons/fa";
import "./paymentPage.css";
import mbank from "../../img/mbank.webp"
import obank from "../../img/obank.webp"
import optima from "../../img/optimabank.jpg"

export default function PaymentPage() {

    const data = [
        {

        }
    ]
    
    return (
        <div className="payment-container">
            <h3>Выберите банк для оплаты:</h3>
            <div>
                <h4>Выбрать сумму</h4>
                <div className="whoHelpOplata-summ">
                    <button>100сом</button>
                    <button>200сом</button>
                    <button>500сом</button>
                    <button>1000сом</button>
                    <button>Другая сумма</button>
                </div>
                <div className="whoHelpOplata-buttons">
                    <img className="pay-button" src={mbank} alt="" />
                    <img className="pay-button" src={obank} alt="" />
                    <img className="pay-button" src={optima} alt="" />
            </div>
            </div>
            
        </div>
    );
}