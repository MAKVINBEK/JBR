import './whoHelpend'
import helpenBaby1 from '../whoHelpend/whoHelpendImg/helpendBaby1.png'
import helpenBaby2 from '../whoHelpend/whoHelpendImg/helpendBaby2.png'
import helpenBaby3 from '../whoHelpend/whoHelpendImg/helpendBaby3.png'
import helpenBaby4 from '../whoHelpend/whoHelpendImg/helpendBaby4.png'
import helpenBaby5 from '../whoHelpend/whoHelpendImg/helpendBaby5.png'
import helpenBaby6 from '../whoHelpend/whoHelpendImg/helpendBaby6.png'
import helpenBaby7 from '../whoHelpend/whoHelpendImg/helpendBaby7.png'
import helpenBaby8 from '../whoHelpend/whoHelpendImg/helpendBaby8.png'
import WhoHelpendBlock from './whoHelpendBlock'
import { useEffect, useState } from 'react'
import { TbZoom } from "react-icons/tb";
import axios from 'axios'
import { get, url } from '../../Api'




export default function WhoHelpend () {

    const HelpendDan = [
        {
            name: 'Логинов Максим',
            info: 'ДЦП, спастическая тетраплегия.',
            diagnoz: '8 лет., ДЦП, спастическая тетраплегия.',
            lechenia: 'Курс реабилитации в центре «Потенциал», г.Оренбург (ИП Преснова Н.Ю.)',
            sbor: 'СБОР ЗАКРЫТ',
            img: helpenBaby1
        },
        {
            name: 'Панков Миша',
            info: 'ДЦП, спастическая диплегия',
            diagnoz: '6 лет., ДЦП, спастическая диплегия.',
            lechenia: 'Курс реабилитации в ФОЦ «Адели - Пенза», г.Пенза',
            sbor: 'СБОР ЗАКРЫТ',
            img: helpenBaby2
        },
        {
            name: 'Меньшикова Маша',
            info: 'ДЦП, смешанная форма. Нижний парапарез. Задержка моторного развития.',
            diagnoz: '8 лет., ДЦП, смешанная форма. Нижний парапарез. Задержка моторного развития.',
            lechenia: 'Курс реабилитации в ООО «Школа АФК Добежиных», Краснодарский край',
            sbor: 'СБОР ЗАКРЫТ',
            img: helpenBaby3
        },
        {
            name: 'Черных Матвей',
            info: 'Аутизм, задержка психического развития.',
            diagnoz: '5 лет., Аутизм, задержка психического развития.',
            lechenia: 'Курс реабилитации в коррекционно-логопедическом центре г.Воронеж (ИП Запевалов А.Ю.)',
            sbor: 'СБОР ЗАКРЫТ',
            img: helpenBaby4
        },
        {
            name: 'Гараев Тимур',
            info: 'Нейрофиброматоз (незлокачественный). Врожденный ложный сустав костей левой голени.',
            diagnoz: '7 лет., Нейрофиброматоз (незлокачественный). Врожденный ложный сустав костей левой голени.',
            lechenia: 'Операция в клинике Paley European Institute в г.Варшава (частичный сбор).',
            sbor: 'СБОР ЗАКРЫТ',
            img: helpenBaby5
        },
        {
            name: 'Ахбаев Сабир',
            info: ' ДЦП, спастический тетрапарез, ЗПМР, эпилептическая активность мозга.',
            diagnoz: '9 лет., ДЦП, спастический тетрапарез, ЗПМР, эпилептическая активность мозга.',
            lechenia: 'Курс реабилитации в АНО «Казанский центр реабилитации и абилитации».',
            sbor: 'СБОР ЗАКРЫТ',
            img: helpenBaby6
        },
        {
            name: 'Ботников Артем',
            info: ' Аномалия развития костей нижней конечности. Врожденная малоберцовая геммимелия.',
            diagnoz: '3 года., Аномалия развития костей нижней конечности. Врожденная малоберцовая геммимелия.',
            lechenia: 'Операция в клинике Burjeel Medical City в ОАЭ (частичный сбор).',
            sbor: 'СБОР ЗАКРЫТ',
            img: helpenBaby7
        },
        {
            name: 'Ильин Рома',
            info: 'ДЦП, спастическая диплегия. ЗПМР',
            diagnoz: '4 года., ДЦП, спастическая диплегия. ЗПМР',
            lechenia: 'Курс реабилитации в ООО «Школа АФК Добежиных», Краснодарский край',
            sbor: 'СБОР ЗАКРЫТ',
            img: helpenBaby8
        },
    ]

    const [value,setValue]= useState("")
    const [articles, setArticles] =useState([])

    useEffect(() => {
        const loadArticles = async () => {
          try {
            const data = await get.Helped_Needy();
            console.log("Ответ от API:", data);
        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          console.error("Не массив! Ответ:", data);
          setArticles([]);
        }
          } catch (err) {
            console.error(err);
          }
        };
        loadArticles();
      }, []);

    const filteredCountries = articles.filter(country =>{
        return country.name.toLowerCase().includes(value.toLowerCase())
    })

    return(
        <div id='whoHelpend'>
            <div id='whoHelpendContainer'>
                    <h2>Кому помогли</h2>
                    <div className='serch'>
                                        <TbZoom />
                                        <input
                                        type="text" placeholder='пойск...' className='poisk_serch'
                                        onChange={(event) => setValue(event.target.value)}/></div>
                <div className='helpendBlocks'>
                    {filteredCountries.map((date, index) => (
                            <WhoHelpendBlock key={index} date={date}/>
                        ))}
                </div>
            </div>
        </div>
    )
}