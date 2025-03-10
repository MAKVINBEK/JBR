import './homePage1.css'
import Contract from '../../../img/contract2.png'

export default function HomePage1 () {
    return (
        <div id='HomePage1'>
            <div className='homePage1Container'>
                <div className='homePageBlock1'>
                    <div>
                        <img src={Contract} alt="" />
                        <h2>
                        Добро начинается с тебя! Помоги тем, <br /> кто нуждается!
                        </h2>
                    </div>
                        <h3>
                        Благотворительный фонд - эффективное <br /> взаимодействие между получателями помощи и  <br />
                        благотворителями!
                        </h3>
                </div>
                <div className='homePageBlock2'>
                    <h2>Оставить заявку</h2>
                        <input type="text" placeholder='Ваше имя'/>
                        <input type="text" placeholder='Номер телефона'/>
                        <button>Отправить</button>
                    <p>Оставляя заявку, вы соглашаетесь на <br /> обработку персональных данных 
                        и с условиями бронирования счёта</p>
                </div>
            </div>
        </div>
    )
}