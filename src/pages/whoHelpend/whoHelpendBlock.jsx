import './whoHelpend.css'
import { BsHandIndex } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'


export default function WhoHelpendBlock ({date}) {

    const navigate = useNavigate()



    return (
        <div id='whoHelpedBlock'>
                <div>
                    <img src={date.img} alt="" />
                </div>
                <div>
                    <h3>{date.name}</h3>
                    <p><span>Диагноз:</span>{date.info}</p>
                    <h3>{date.sbor}</h3>
                    <h4 className='infoHelpend'
                        onClick={() => navigate(`/patienthelpend/${date.id}`, {state: date})}>
                        Подробнее<BsHandIndex />
                    </h4>
                </div>
        </div>
    )
}