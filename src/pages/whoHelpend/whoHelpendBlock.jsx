import './whoHelpend.css'
import { BsHandIndex } from "react-icons/bs";
import {NavLink, useNavigate} from 'react-router-dom'


export default function WhoHelpendBlock ({date}) {

    const navigate = useNavigate()



    return (
        <div id='whoHelpedBlock'>
                  <div className='b11'><img onClick={() => navigate(`/patienthelpend/${date.id}`, {state: date})} src={date.img} alt="" /></div>  
                <div className='b22'>
                    <div>
                        <h3>{date.name} {date.surname}</h3>
                    <p><span>Диагноз:</span>{date.diagnosis}</p>
                    </div>
                    <div>
                        <div className='closed-text'>СБОР ЗАКРЫТ</div>
                    <NavLink to={`/patienthelpend/${date.id}`} className='infoHelpend' >
                        Подробнее<BsHandIndex />
                    </NavLink>
                    </div>
                    
                </div>
        </div>
    )
}