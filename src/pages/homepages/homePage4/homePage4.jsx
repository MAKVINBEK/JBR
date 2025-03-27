import { get } from '../../../Api';
import './homePage4.css'
import { useEffect, useState } from 'react'


export default function HomePage4 () {
    const [articles, setArticles] =useState([])

    useEffect(() => {
        const loadArticles = async () => {
          try {
            const response = await get.getFaunder()
            setArticles(response.data);
          } catch (err) {
            console.error(err);
          }
        };
        loadArticles();
      }, []);

    return (
            <div className='homepage4Container'>
                    <h2>Почему доверяют</h2>
                    <p>Более 10 000 клиентов доверили нашему агентству 
                        страхование транспортных средств
                    </p>
                <div>
                    <p>Преимущества</p>
                    <div className='homePage4Blocks'>
                    
                    </div>
                </div>
            </div>
    )
}