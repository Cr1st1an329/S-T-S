import Header from '../../components/Header'
import HeaderImage from '../../images/metal.jpg'
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Comunicate con nosotros" image={HeaderImage}>
    Somos una empresa especializada en ornamentación y carpintería metálica que combina la elegancia y la belleza del metal para crear obras únicas y excepcionales. Nuestra pasión por el diseño 
    y la artesanía nos impulsa a transformar tus ideas en realidad, añadiendo toques distintivos a tus espacios.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:siervo.sierra1@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="https://www.instagram.com/soladaduras_tridente_sierra/" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
          <a href="https://api.whatsapp.com/send?phone=+573246842806&text=Hola+Soldaduras+Tridente+Sierra%2C+me+encantaría+trabajar+con+ustedes%21" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact