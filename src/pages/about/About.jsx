import Header from '../../components/Header'
import HeaderImage from '../../images/metal3.jpg'
import StoryImage from '../../images/puente.jpeg'
import StoryImages from '../../images/porton_vehicular.jpeg'
import StoryImag from '../../images/gallery6.jpeg'
import StoryIma from '../../images/gallery22.jpeg'
import StoryIm from '../../images/balcon.jpeg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="Elegancia Forjada" image={HeaderImage} >
    Bienvenido a nuestro taller de ornamentación, donde el metal cobra vida y se transforma en elegantes obras de arte. En nuestro portafolio, encontrarás una amplia variedad de creaciones meticulosamente elaboradas, desde exquisitos ornamentos y detalles decorativos hasta impresionantes estructuras arquitectónicas. Cada pieza en nuestro portafolio refleja la pasión, la maestría y el compromiso con la excelencia que nos distingue. Descubre 
    la belleza única y el estilo distintivo que podemos brindar a tus espacios con nuestra extraordinaria ornamentación.
    </Header>.

    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="ImageS" />
        </div>
        <div className="about__section-content">
          <h1>Puente Oxidado: Un Enlace Escultural entre la Modernidad y el Pasado</h1>
          <p>
          Descubre la majestuosidad del Puente Oxidado, una maravilla de la ingeniería metálica que fusiona la modernidad con un encanto histórico. Nuestro equipo de expertos en ornamentación metálica ha aplicado una técnica única para conferir a este puente un hermoso color de óxido que evoca la pátina del tiempo. Este puente no solo es una proeza arquitectónica, sino también una obra de arte escultural que cautivará a todos los que lo atraviesen. Nuestros servicios de diseño y construcción en metal están a tu disposición para crear proyectos icónicos como este, donde la estética con color de óxido cobra vida y se convierte en una experiencia en sí misma.
          </p>
          
        </div>
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Acceso Vehicular en Metal para Zonas Residenciales con Estilo y Seguridad</h1>
          <p>
           Nos enorgullecemos de ofrecer soluciones de acceso vehicular en metal que combinan estilo, durabilidad y seguridad para zonas residenciales. Nuestra gama de portones y puertas de metal está diseñada para realzar el atractivo de tu propiedad mientras protege tu privacidad y bienestar. Con una meticulosa atención al detalle y la utilización de materiales de alta calidad, nuestros portones vehiculares añaden un toque distintivo a tu hogar. Desde elegantes diseños contemporáneos hasta estilos clásicos atemporales, nuestros servicios personalizados de diseño y fabricación aseguran que encuentres la opción perfecta para tus necesidades. 
          </p>
        </div>
        <div className="about__section-image">
            <img src={StoryImages} alt="Imagevision" />
          </div>
      </div>
    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={StoryImag} alt="ImageM" />
        </div>
        <div className="about__section-content">
          <h1>Elegancia Forjada en Metal: La Escultura de Mula Pequeña</h1>
          <p>
          Sumérgete en el encanto artístico de nuestra escultura de mula pequeña, una creación única forjada en metal. Esta cautivadora pieza combina habilidad artesanal con detalles meticulosos para dar vida a la nobleza y la simplicidad de estos animales icónicos. Con su tamaño compacto y diseño cuidadosamente esculpido, la escultura de mula pequeña se convierte en un impresionante elemento decorativo para cualquier espacio, desde interiores hasta jardines. Nuestro equipo de talentosos artistas metalúrgicos ha creado esta obra maestra con pasión y dedicación, asegurando que cada línea y curva refleje la esencia misma de las mulas. Embellece tu entorno con esta maravilla escultural que perdurará en el tiempo, transmitiendo la belleza y el carácter del metal fusionado con la elegancia de las mulas.
          </p>
        </div>
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Elevando la Excelencia en Estructuras para Techos y Edificaciones</h1>
          <p>
          Nuestro equipo de ingenieros y arquitectos está comprometido con la excelencia en cada proyecto, ofreciendo diseños vanguardistas y materiales de primera calidad que garantizan la máxima durabilidad y resistencia. Ya sea que necesites un techo elegante y funcional para tu hogar o una edificación comercial a medida, nuestro enfoque personalizado nos permite adaptarnos a tus requisitos exactos. Con una combinación perfecta de precisión técnica y estética sofisticada, nuestras estructuras metálicas son un testimonio del equilibrio entre la forma y la función.
          </p>
        </div>
        <div className="about__section-image">
            <img src={StoryIma} alt="Imagevision" />
          </div>
      </div>
    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={StoryIm} alt="ImageM" />
        </div>
        <div className="about__section-content">
          <h1>Terminaciones en Metal para Inmuebles que Inspiran Elegancia</h1>
          <p>
          Especializados en la creación de balcones y acabados arquitectónicos en metal, nuestro equipo de artesanos y diseñadores se esfuerza por llevar la belleza del metal a nuevas alturas. Nuestros balcones de metal son una combinación única de sofisticación y resistencia, añadiendo un toque distintivo a tu inmueble. Ya sea que busques un diseño moderno y minimalista o un estilo clásico y ornamentado, nuestros expertos pueden personalizar cada proyecto para cumplir con tus preferencias y requisitos.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About