import './footer.css'
import socila1 from '../../img/icons1.png'
import social2 from '../../img/icons2.png'
import social3 from '../../img/icons3.png'
import social4 from '../../img/icons4.png'

const Footer = ()=> {
    return (
        <div id="footer">
            <div className="footerContainer">
                <div><img src={socila1} alt="" /></div>
                <div><img src={social2} alt="" /></div>
                <div><img src={social3} alt="" /></div>
                <div><img src={social4} alt="" /></div>
            </div>
        </div>
    )
}

export default Footer