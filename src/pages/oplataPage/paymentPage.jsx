import { useState } from "react";
import { FaUser, FaEnvelope, FaCreditCard, FaComment, FaMoneyBillWave } from "react-icons/fa";
import "./paymentPage.css";
import mbank from "../../img/mbank.png"
import obank from "../../img/obank.png"
import bakaibank from "../../img/bakaiban.png"

export default function PaymentPage() {
    const [amount, setAmount] = useState(1000);
    const [customAmount, setCustomAmount] = useState("");

    const handlePayment = () => {
        window.location.href = "https://mbank.kg/payment"; 
    };

    return (
        <div className="payment-container">
            <h3>Выберите банк для оплаты:</h3>
            <div className="whoHelpOplata-buttons">
                    <img className="pay-button" src="https://i.banks.kg/10311/conversions/mbank-foto-large-webp.webp" alt="" />
                    <img className="pay-button" src="https://i.banks.kg/10185/conversions/deputy-chairman-become-vacant-obank-large-webp.webp" alt="" />
                    <img className="pay-button" src="https://cdn-1.aki.kg/cdn-st-0/qdk/R/2371426.1dd12bee8445617550da67f82909c6a4.jpg" alt="" />
            </div>
        </div>
    );
}