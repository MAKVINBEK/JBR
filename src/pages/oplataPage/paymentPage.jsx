import { useState } from "react";
import { FaUser, FaEnvelope, FaCreditCard, FaComment, FaMoneyBillWave } from "react-icons/fa";
import "./paymentPage.css";

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
                <button className="pay-button" onClick={() => handlePayment("mbank")}>
                    Оплатить через Mbank
                </button>
                <button className="pay-button" onClick={() => handlePayment("optimabank")}>
                    Оплатить через Optima Bank
                </button>
                <button className="pay-button" onClick={() => handlePayment("demirbank")}>
                    Оплатить через Demir Bank
                </button>
            </div>
        </div>
    );
}