import  {SectionHead}  from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import  {Card } from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { works } from "../data"
import { useState } from "react"


const Jobs = () => {
    const [index, setIndex] = useState(0)
    const {name, description, material, example} = works[index];

    const prevJobHandler = () => {
        setIndex(prev => prev - 1);
        if(index <= 0){
            setIndex(works.length - 1);
        }
    }

    const nextJobHandler = () => {
        setIndex(prev => prev + 1);

        if(index >= works.length -1){
            setIndex(0);
        }
    }

  return (
    <section className="jobs">
        <div className="container jobs__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Trabajos realizados" />
            <Card className="jobs">
                <div className="jobs__example">
				    <img src={example} alt={name} />
                </div>
                <p className="jobs__description">{`"${description}"`}</p>
                <h5>{name}</h5>
                <small className="job__title">{material}</small>
            </Card>
            <div className="jobs__btn-container">
                <button className="jobs__btn" onClick={prevJobHandler} ><IoIosArrowDropleftCircle/></button>
                <button className="jobs__btn" onClick={nextJobHandler}  ><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Jobs