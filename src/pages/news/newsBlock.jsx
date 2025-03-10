import './news.css'
import { useNavigate } from 'react-router-dom'

export default function NewsBlock ({arr}) {

    const navigate = useNavigate()

    return (
        <div id='newsBlock'>
            <div className='newsBlockContainer'>
                <div className='newsBlockImg'>
                    <img src={arr.img} alt="" />
                </div>
                <div>
                    <p>{arr.data}</p>
                    <h3>{arr.title}</h3>
                </div>
            </div>
            <h4
                className='newsPageStranik'
                onClick={() => navigate(`/newsPage/${arr.id}`, {state: arr})}            
            >Посетить страницу</h4>
        </div>
    )
}