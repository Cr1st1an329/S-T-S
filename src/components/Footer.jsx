import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaWhatsapp } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className='logo'>
            <img src={Logo} alt="Footer" className="rounder-img"/>
          </Link>
          <p>
            La Ornamentación Que Espera
          </p>
          <div className="footer__socials">
            <a href="https://api.whatsapp.com/send?phone=+573246842806&text=Hola+Soldaduras+Tridente+Sierra%2C+me+encantaría+trabajar+con+ustedes%21" target="_blank" rel='noreferrer noopener'><FaWhatsapp/></a>
            <a href="https://www.facebook.com/profile.php?id=100094081443015" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
            <a href="https://www.tiktok.com/@soldadurastridentesierra?lang=es" target="_blank" rel='noreferrer noopener'><FaTiktok/></a>
            <a href="https://www.instagram.com/soladaduras_tridente_sierra/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
          </div>
        </article>
        <article>
          <h4>Vínculos</h4>
          <Link to="https://www.instagram.com/soladaduras_tridente_sierra/">Instagram</Link>
          <Link to="https://api.whatsapp.com/send?phone=+573246842806&text=Hola+Soldaduras+Tridente+Sierra%2C+me+encantaría+trabajar+con+ustedes%21">Whatsapp</Link>
          <Link to="https://www.facebook.com/profile.php?id=100094081443015">Facebook</Link>
          <Link to="https://www.tiktok.com/@soldadurastridentesierra?lang=es">TikTok</Link>
        </article>
        <article>
          <h4>Más Información</h4>
          <Link to="https://bit.ly/taller-S-T-S">Ubicación</Link>
          <Link to="https://bit.ly/taller-S-T-S">Carrera 92 #56 h 39 sur, Bogotá D.C</Link>
        </article>
        <article>
          <h4>Póngase En Contacto</h4>
          <Link to="https://api.whatsapp.com/send?phone=+573246842806&text=Hola+Soldaduras+Tridente+Sierra%2C+me+encantaría+trabajar+con+ustedes%21">Tel: 324 684 2806</Link>
          <Link to="mailto:siervo.sierra1@gmail.com">Correo: siervo.sierra1@gmail.com</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 Cristian Camilo Sierra &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer