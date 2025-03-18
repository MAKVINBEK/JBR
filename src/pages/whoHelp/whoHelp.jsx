import './whoHelp.css'
import helpBaby from '../../img/helpBaby.png'
import helpBaby1 from '../../img/helpBaby2.png'
import helpBaby2 from '../../img/helpBaby3.png'
import helpBaby3 from '../../img/helpBaby4.png'
import helpBaby4 from '../../img/helpBaby5.png'
import helpBaby5 from '../../img/helpBaby6.png'
import helpBaby6 from '../../img/helpBaby7.png'
import helpBaby7 from '../../img/helpBaby8.png'
import { useState, useEffect } from "react";
import WhoHelpBlock from './whoHelpBlock'
import { data } from '../../data'




export default function WhoHelp () {

    const [patients, setPatients] = useState ([
        {
            id:"1",
            name:'Сидоркин Макар',
            info:"Выраженный подклапанный стеноз аорты. Мышечный дефект межжелудочковой перегородки",
            diagnoz: '2 года., Выраженный подклапанный стеноз аорты. Мышечный дефект межжелудочковой перегородки (рестриктивный). Митральная недостаточность 2 степени.',
            lechenia: 'Операция в клинике Boston Childrens Операция в клинике Boston Childrens Hospital, США (частичный сбор).',
            sobr: '5 000 000',
            sobrano: '3 350 150',
            img: helpBaby,
            deadline: "2025-04-02T23:59:59",
            phone: '996773454508',
            rekvizity: '1234567890123455'
        },
        {
            id:"2",
            name:'Быкова Есения',
            info:"Врожденный порок развития верхней и нижней правой конечностей.",
            diagnoz: '10 лет., Врожденный порок развития верхней и нижней правой конечностей.',
            lechenia: 'Операция в госпитале Святой Марии (Paley Orthopedic & Spine Institute), США (частичный сбор).',              
            sobr: '50000',
            sobrano: '21323',
            img: helpBaby1,
            deadline: "2024-03-03T23:59:59",
            phone: '996773454508',
            rekvizity: '1234567890123455'
        },
        {
            id:"3",
            name:'Задорин Ян',
            info:"Правосформирован праворасположенное сердце. Корригированный ВПС. Инверсия желудочков. Единое",
            diagnoz: '4 года., Правосформированное праворасположенное сердце. Корригированный ВПС. Инверсия желудочков. Единое предсердие. Стеноз легочной артерии.',
            lechenia: 'Операция в клинике Boston Childrens Hospital, США (частичный сбор).',
            sobr: '5000000',
            sobrano: '540000',
            img: helpBaby2,
            deadline: "2024-03-01T23:59:59",
            phone: '996773454508',
            rekvizity: '1234567890123455'
        },
        {
            id:"4",
            name:'Кенжеев Ару',
            info:"ВПС. Функционально - единственный желудочек сердца, гипоплазия ЛЖ, стеноз и гипоплазия митрального",
            diagnoz: '5 лет., ВПС. Функционально - единственный желудочек сердца, гипоплазия ЛЖ, стеноз и гипоплазия митрального клапана, двойное отхождение сосудов от правого желудочка, ДМП, ДМЖП, недостаточности трикуспидального клапана 1-2степени, большие аорто-лёгочные коллатеральные артерии.',
            lechenia: 'Операция в клинике Шарите, Германия (частичный сбор).',
            sobr: '3000000',
            sobrano: '998045',
            img: helpBaby3,
            deadline: "2024-03-05T23:59:59",
            phone: '996773454508',
            rekvizity: '1234567890123455'
        },
        {
            id:"5",
            name:'Хараишвили Эмилия',
            info:"ДЦП, спастическая диплегия.",
            diagnoz: '9 лет., ДЦП, спастическая диплегия.',
            lechenia: 'Курс реабилитации в МЦ «Сакура»',
            sobr: '150000',
            sobrano: '103500',
            img: helpBaby4,
            deadline: "2024-03-04T23:59:59",
            phone: '996773454508',
            rekvizity: '1234567890123455'
        },
        {
            id:"6",
            name:'Закиров Тимур',
            info:"ДЦП, ЗПР, сколиоз 2 степени.",
            diagnoz: '8 лет., ДЦП, ЗПР, сколиоз 2 степени.',
            lechenia: 'Курс реабилитации в ДЦА «Родник»',
            sobr: '68000',
            sobrano: '31440',
            img: helpBaby5,
            deadline: "2026-03-06T23:59:59",
            phone: '996773454508',
            rekvizity: '1234567890123455'
        },
        {
            id: '7',
            name:'Курганов Вова',
            info:"  ДЦП, смешанная форма, ЗПР.",
            diagnoz: '7 лет., ДЦП, смешанная форма, ЗПР.',
            lechenia: 'Курс реабилитации в ООО РЦ «САТОРИ», г.Раменское',
            sobr: '129000',
            sobrano: '30150',
            img: helpBaby6,
            deadline: "2024-03-07T23:59:59",
            phone: '996773454508',
            rekvizity: '1234567890123455'
        },
        {
            id: "8",   
            name:'Хазов Кирилл',
            info:"Детский аутизм, системное нарушение речи тяжелой степени",
            diagnoz: '4 года., Детский аутизм, системное нарушение речи тяжелой степени',
            lechenia: 'Курс реабилитации в ООО «Развитие без барьеров» г.Санкт-Петербург',
            sobr: '149400',
            sobrano: '127225',
            img: helpBaby7,
            deadline: "2024-03-08T23:59:59",
            phone: '996773454508',
            rekvizity: '1234567890123455'
        },
    ])

    function getTimeLeft(deadline) {
        const now = new Date();
        const diff = new Date(deadline) - now;

        return diff > 0 ? diff : 0;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setPatients((prevPatients) =>
                [...prevPatients].sort((a, b) => getTimeLeft(a.deadline) - getTimeLeft(b.deadline))
            );
        },);

        return () => clearInterval(interval);
    }, []);

    return (
            <div className='WhoHelpContainer'>
                    <h2>Наши подопечные</h2>

                <div className='helpBlocks'>
                {patients.map((patient) => (
                        <WhoHelpBlock key={patient.id} dann={patient} />
                ))}
                </div>
            </div>
    )
}