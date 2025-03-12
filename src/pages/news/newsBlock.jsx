import './news.css'
import { useNavigate } from 'react-router-dom'

export default function NewsBlock ({arr}) {

    const navigate = useNavigate()

    return (
            <div className='newsBlockContainer' onClick={() => navigate(`/newsPage/${arr.id}`, {state: arr})}>
                <div className='newsBlockImg'>
                    <img src={arr.img} alt="" />
                </div>
                <div>
                    <p>{arr.data}</p>
                    <h3>{arr.title}</h3>
                </div>
            </div>
    )
}