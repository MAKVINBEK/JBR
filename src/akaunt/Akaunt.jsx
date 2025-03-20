import css from "./Akaunt.module.css"
import bakay from "../img/bakay.png"
import foto from "../img/helpBaby7.png"
import foto1 from "../img/helpBaby5.png"
import foto2 from "../img/helpBaby6.png"
import { useEffect, useRef, useState } from "react"
import { GrAddCircle } from "react-icons/gr";
import axios from 'axios'
import { url } from "../Api"


const images = [foto, foto1, foto2]

const Ak = () => {
  const [img, setImg] = useState(images[0])
  const progrest = (parseInt(1500) / parseInt(2500) * 100)
  const [articles, setArticles]= useState([])
  const [postes, setPostes]= useState([])
  const [open, setOpen]= useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
          const handleClickOutside = (event) => {
              if (menuRef.current && 
                menuRef.current.id !== "ignore" && 
                !menuRef.current.contains(event.target)) {
                  setOpen(false);
              }
          };
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, []);

useEffect(() => {
  const Loades = async () => {
    try{
      const response = await axios.get(`${url}/Валантеры`);
      setArticles(response.data)
    }catch(err){
      console.error(err);
    }
  }
  Loades()
}, [])

useEffect(() => {
  const LoadesPost = async () => {
    try{
      const response = await axios.post(`${url}/Валантеры`);
      setPostes(response.data)
    }catch(err){
      
    }
  }
  LoadesPost()
}, [])


  return (
    <div className={css.content}>
      <div className={css.patientDetail}>
        <div className={css.patientDetailContainer}>
          <div className={css.block1}>
          <div className="imgBlock">
            <img src={img} alt="Фото пациента" />
            <div>
              {images.map((el, index) => (
                <img key={index} src={el} onClick={() => setImg(el)} />
              ))}
            </div>
          </div>
            <div className={css.patientBlock}>
              <h3 className={css.name}>Быкова Есения</h3>
              <div className={css.patientBlock1}>
                <span>Диагноз:</span>
                <h4>Врожденный порок развития верхней и нижней правой конечностей.</h4>
              </div>
              <div className={css.patientBlock2}>
                <h4>Требуется лечение:</h4>
                <h4>Курс реабилитации в ООО «Развитие без барьеров» г.Санкт-Петербург</h4>
              </div>
              <div className={css.blo44}>
              <progress value={progrest} max="100"></progress>
              <div className={css.patientBlock4}>
                <h4>СОБРАНО <br /> 1500 сом</h4>
                <h4>НУЖНО <br />2500 сом </h4>
              </div>
              </div>
              <button className={css.btn}>Добавить сумму</button>
            </div>
          </div>
          <p className={css.oplata}>Ваши реквезиты</p>
          <div className={css.cards}>
            <a href="https://app.mbank.kg/qr/#00020101021132440012c2c.mbank.kg01020210129967734545081302125204999953034175911MUNARBEK%20K.630470b2" >
              <img src="https://mbank.kg/media/logo/mbank_logo_full_E3tUOOl.png" alt="" /></a>
            <a> <img src={bakay} alt="" /></a>
            <a > <img src="https://www.deposit.kg/wp-content/uploads/2025/01/logo_obank_dark-1.png" alt="" /></a>
            <a  ><img src="https://export.gov.kg/assets/bashkaruu/img/providers/bakay_bank_67.png" alt="" /></a>
          </div>
        </div>
        <div className={css.patientDetailContainers}>
          <h3>Валантеры</h3>
          <div className={css.flexx}>
            <div className={css.wrapp}>
              {articles.map((el=>(
                <div>
              <img src={el.img} alt="Фото валантера" />
              <span>ФИО: {el.name} {el.surname}</span>
            </div>
              )))}
          </div>
          <button id="ignore" onClick={() => setOpen(true)} className={css.btns}>Добавить <GrAddCircle /></button>
          <div id="ignore" onClick={() => setOpen(!open)} className={css.pilus}><GrAddCircle /></div>
          {open &&(
            <form ref={menuRef} className={css.add}>
              <input type="text"  placeholder="Имя" required/>
              <input type="text"  placeholder="Фамилия" required/>
              <div>
                <input type="file"  placeholder="Фото" required/>
                <button>Добавть Фотографию</button>
              </div>
              <button type="submit">Добавть</button>
            </form>
          )}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Ak