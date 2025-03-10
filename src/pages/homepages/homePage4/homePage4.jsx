import './homePage4.css'
import DTP from  '../../../img/dtp.png'
import SUD from '../../../img/sud.png'
import Sale from '../../../img/sale.png'
import Delivery from '../../../img/delivery.png'


export default function HomePage4 () {
    return (
            <div className='homepage4Container'>
                    <h2>Почему доверяют</h2>
                    <h3>Более 10 000 клиентов доверили нашему агентству <br />
                        страхование транспортных средств
                    </h3>
                <div>
                    <p>Преимущества</p>
                    <div className='homePage4Blocks'>
                        <div>
                            <img src={DTP} alt="" />
                            <h4>Помощь при ДТП</h4>
                            <p>Если у вас случилось ДТП - просто позвоните нам и мы подскажем <br /> порядок действий</p>
                        </div>
                        <div>
                            <img src={SUD} alt="" />
                            <h4>Юридическое сопровождение</h4>
                            <p>Представительство в суде, <br /> юридические консультации даже <br /> по сымым сложным вопросам</p>
                        </div>
                        <div>
                            <img src={Sale} alt="" />
                            <h4>Скидки постоянным клиентам</h4>
                            <p>Накопительная система скидок. <br /> Получите выгоду до 80%</p>
                        </div>
                        <div>
                            <img src={Delivery} alt="" />
                            <h4>Доставка полиса на дом</h4>
                            <p>Доставим полис на дом в любое <br />удобное для вас время</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}