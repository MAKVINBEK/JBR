import './news.css'
import NewsBlock from './newsBlock'
import news2 from '../news/newsIMg/news.png'
import news4 from '../news/newsIMg/news2.png'
import news1 from '../news/newsIMg/news1.png'
import news3 from '../news/newsIMg/news3.png'


export default function NewsBlocks () {

    const newsDan = [
        {
            id: 1,
            img: news1,
            data: '25 Февраль 2025',
            title: 'Кыргызстан  интегрирует перспективы инвалидности в политику и расширяет доступ к услугам для лиц с инвалидностью',
            info: 'Бишкек, 25 февраля 2025 года - Министерство труда, социального обеспечения и миграции, Совет по делам лиц с инвалидностью при Кабинете Министров совместно с агентствами ООН и гражданским обществом провели ежегодную встречу по обзору прогресса в продвижении прав лиц с инвалидностью в Кыргызстане. На встрече были рассмотрены результаты 2024 года и определены приоритеты на 2025 год. Национальные партнеры и агентства ООН также обсудили планы по продвижению прав лиц с инвалидностью. '
        },
        {
            id: 2,
            img:news2,
            data: '25 Апрель 2017',
            title: 'Правительства должны инвестировать в иммунизацию наиболее уязвимых детей',
            info: 'Женева/Бишкек, 25 апреля 2017 г. - «Призывает правительства стран Европы и Центральной Азии инвестировать в системы здравоохранения, отдавая приоритет вопросам охвата иммунизацией наиболее уязвимых детей. При этом следует уделять внимание вызывающей обеспокоенность тенденции к  усугублению проблемы нерешительности в отношении вакцин».'
        },
        {
            id:3,
            img:news3,
            data: '10 февраль 2025',
            title: 'Передалb 507 компьютеров Министерству здравоохранения',
            info: 'Бишкек, 7 февраля 2025 года – Представитель встретился с министром здравоохранения Кыргызской Республики, чтобы передать Министерству здравоохранения 507 компьютеров. Эта инициатива направлена на улучшение услуг первичной медико-санитарной помощи и развитие цифровых инноваций в здравоохранении Кыргызстана через систему I-EMDOO.'
        },
        {
            id: 4,
            img: news4,
            data: '30 октябрь 2024',
            title: 'Кыргызстан получил полмиллиона доз вакцины против кори и краснухи для усиления иммунизации детей',
            info: 'Кыргызстан получил 526 тыс. доз вакцины против кори и краснухи, что позволит провести вакцинацию более 342 тыс. детей и взрослых. Эта партия позволит укрепить результаты текущих усилий по контролю вспышки кори в стране. Вакцины были закуплены и доставлены ЮНИСЕФ при финансовой поддержке Глобального альянса по вакцинам (Gavi).'
        },
        {
            id: 4,
            img: news4,
            data: '30 октябрь 2024',
            title: 'Кыргызстан получил полмиллиона доз вакцины против кори и краснухи для усиления иммунизации детей',
            info: 'Кыргызстан получил 526 тыс. доз вакцины против кори и краснухи, что позволит провести вакцинацию более 342 тыс. детей и взрослых. Эта партия позволит укрепить результаты текущих усилий по контролю вспышки кори в стране. Вакцины были закуплены и доставлены ЮНИСЕФ при финансовой поддержке Глобального альянса по вакцинам (Gavi).'
        }
    ]

    return (
                <div className='newsBlock'>
                    {newsDan.map((arr, index) => (
                            <NewsBlock key={index} arr={arr}/>
                        ))}
                </div>
    )
}