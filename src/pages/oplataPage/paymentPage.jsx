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
            <h2>Сделать пожертвование</h2>
            <div className="input-group">
                <FaUser className="icon" />
                <input type="text" placeholder="ФИО" required />
            </div>
            <div className="input-group">
                <FaEnvelope className="icon" />
                <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
                <FaCreditCard className="icon" />
                <input type="text" placeholder="Реквизиты карты" required />
            </div>
            <div className="amount-selection">
                {[500, 1000, 3000, 5000].map((val) => (
                    <button key={val} onClick={() => setAmount(val)} className={amount === val ? "selected" : ""}>
                        {val} сом
                    </button>
                ))}
                <div className="input-group">
                    <FaMoneyBillWave className="icon" />
                    <input 
                        type="number" 
                        placeholder="Другая сумма" 
                        value={customAmount} 
                        onChange={(e) => setCustomAmount(e.target.value)}
                    />
                </div>
            </div>
            <div className="input-group">
                <FaComment className="icon" />
                <textarea placeholder="Оставьте пожелание"></textarea>
            </div>
            <button className="pay-button" onClick={handlePayment}>Перейти к оплате</button>
        </div>
    );
}