import './homePage1.css';
import Contract from '../../../img/contract2.png';
import { post } from '../../../Api'; 
import { useState } from 'react';
import { toast } from 'react-toastify';
import InputMask from "react-input-mask";

export default function HomePage1() {
    const [formData, setFormData] = useState({
        name: '',
        phone_number: ''
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await post.sendAplication({
                name: formData.name,
                phone_number: formData.phone_number, 
            });
            setFormData({
                name: '',
                phone_number: ''
            });
            toast.success('dskmvjndkbfhj')
        } catch (err) {
            console.error('Ошибка:', err);
            setError(err.message || 'Произошла ошибка при отправке заявки');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id='HomePage1'>
            <div className='homePage1Container'>
                <div className='homePageBlock1'>
                    <div>
                        <img src={Contract} alt="Контракт" />
                        <h2>Помогаем нуждающимся — подайте заявку, и мы свяжемся с вами!</h2>
                    </div>
                    <h3>
                    Мы здесь, чтобы поддержать вас в трудный момент.  <br />Оставьте заявку, и мы поможем вам как можно скорее.
                    </h3>
                </div>
                <div className='homePageBlock2'>
                    <h2>Получить помощь</h2>
                    <form className='formnom' onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name"
                            placeholder='Ваше имя'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="tel" 
                            name="phone_number"
                            placeholder='Номер телефона'
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Отправка...' : 'Отправить'}
                        </button>
                    </form>
                    <p>Мы заботимся о вашей конфиденциальности. <br /> Оставляя заявку, вы соглашаетесь на обработку данных для оказания помощи.</p>
                </div>
            </div>
        </div>
    );
}