import {Link} from 'react-router-dom'
import './notFound.css'

const NotFouns = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>La Pagina No Funciona</h2>
        <Link to="/" className='btn'>Vuelva Al Inicio</Link>
      </div>
    </section>
  )
}

export default NotFouns