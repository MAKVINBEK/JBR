import './whoHelpend.css'
import { BsHandIndex } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'


export default function WhoHelpendBlock ({date}) {

    const navigate = useNavigate()



    return (
        <div id='whoHelpedBlock'>
                  <div className='b11'><img onClick={() => navigate(`/patienthelpend/${date.id}`, {state: date})} src={date.photos[0]} alt="" /></div>  
                <div className='b22'>
                    <div>
                        <h3>{date.name} {date.surname}</h3>
                    <p><span>Диагноз:</span>{date.diagnosis}</p>
                    </div>
                    <div>
                        <div className='closed-text'>СБОР ЗАКРЫТ</div>
                    <h4 className='infoHelpend'
                        onClick={() => navigate(`/patienthelpend/${date.id}`, {state: date})}>
                        Подробнее<BsHandIndex />
                    </h4>
                    </div>
                    
                </div>
        </div>
    )
}