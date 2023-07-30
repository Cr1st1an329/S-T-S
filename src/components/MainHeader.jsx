import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'
const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h3>La Ornamentación Que Espera</h3>
          <h1>Tridente Sierra</h1>
          <p>
             Nuestra empresa de ornamentación se distingue por ofrecer un excelente servicio, adaptándonos a las necesidades y solicitudes de nuestros clientes. Nos enfocamos en comprender a fondo sus ideas y deseos para crear espacios únicos y personalizados.
             Nuestro equipo altamente capacitado trabaja de cerca con cada cliente, utilizando materiales de calidad y técnicas innovadoras para lograr resultados sobresalientes. Nos enorgullece ser la empresa de ornamentación confiable que convierte sus sueños en realidad.
          </p>
          <Link  to="/about" className='btn lg'>Nuestro Portafolio</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} class='imgHeader' alt="Main Header " />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader