import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "./whoHelpOplata.css"; 

export default function WhoHelpOplata() {
    const location = useLocation();
    const { name, phone, rekvizity } = location.state || {};

    const handlePayment = (bank) => {
        let paymentUrl = "";

        switch (bank) {
            case "mbank":
                paymentUrl = "https://app.mbank.kg/qr/#00020101021132440012c2c.mbank.kg01020210129967734545081302125204999953034175911MUNARBEK%20K.630470b2";
                break;
            case "optimabank":
                paymentUrl = "https://online.optimabank.kg/payment?account=123456789";
                break;
            case "demirbank":
                paymentUrl = "https://demirbank.kg/payment?recipient=MUNARBEK_K";
                break;
            default:
                toast.error("Выберите правильный банк");
                return;
        }

        window.location.href = paymentUrl;
    };

    return (
        <div className="whoHelpOplataContainer">
            <h2>Помочь для: {name}</h2>
            <p>Телефон: {phone}</p>
            <p>Реквизиты: {rekvizity}</p>

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
