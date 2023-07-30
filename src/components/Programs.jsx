import {FaCrown} from 'react-icons/fa'
import { SectionHead } from './SectionHead'
import {programs} from '../data'
import { Card } from '../UI/Card'



export const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title="Nos Caracterizamos Por:"/>
        <div className="programs__wrapper">
            {
                programs.map(({id, icon, title, info, path}) => {
                    return (
                        <Card className="programs__program" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                        </Card>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}
