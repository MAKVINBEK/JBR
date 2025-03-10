import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./whoHelpOplata.css"; 
import { toast } from "react-toastify";
import OplataHelpImg from '../../../img/payHelpImg.jpg'


export default function WhoHelpOplata () {
    const location = useLocation();
    const { name, phone, rekvizity } = location.state || {};

    const [amount, setAmount] = useState(""); 
    const suggestedAmounts = [100, 200, 500, 1000];

    const handlePayment = () => {
        if (!amount || amount <= 0) {
            toast.error("Введите корректную сумму");
            return;
        }

        const mbankUrl = `https://app.mbank.kg/qr/#00020101021132440012c2c.mbank.kg01020210129967734545081302125204999953034175911MUNARBEK%20K.630470b2`;

        window.location.href = mbankUrl;
    };

    return (
        <div className="whoHelpOplata">
            <div className="whoHelpOplataContainer">
                <h2>Помочь для:{name}</h2>
                <p>Телефон: {phone}</p>
                <p>Реквизиты: {rekvizity}</p>

                <h3>Выберите сумму:</h3>
                <div className="whoHelpOplata-buttons">
                    {suggestedAmounts.map((sum) => (
                        <button key={sum} onClick={() => setAmount(sum)}>
                            {sum} сом
                        </button>
                    ))}
                </div>

                <input 
                    type="number" 
                    placeholder="Другая сумма" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                />

                <button className="pay-button" onClick={handlePayment}>
                    Оплатить через Mbank
                </button>
            </div>
            {/* <img src={OplataHelpImg} alt="" /> */}
        </div>
        );
    }
