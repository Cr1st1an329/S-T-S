import Image from '../images/escalera.jpeg'
import { SectionHead } from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import  { Card } from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values" /> 
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond/>} title="Donde el Cliente es la Inspiración" />
          <p>
          Pensar en el cliente es el pilar fundamental para una empresa de ornamentación o carpintería metálica. En este sector, la clave del éxito reside en comprender y atender las preferencias y exigencias de cada cliente de manera personalizada. Desde el primer contacto, es esencial escuchar atentamente sus ideas y requerimientos, para poder ofrecer soluciones a medida que se ajusten a sus expectativas y presupuesto.
          </p>
          <div className="values__wrapper">
            {
              values.map(({id, icon, title, desc}) => {
                return <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values