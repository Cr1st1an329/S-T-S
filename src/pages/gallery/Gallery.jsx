import Header  from '../../components/Header'
import HeaderImage from '../../images/metal2.jpg'
import './gallery.css'

const Gallery = () => {
  const HgalleryLength = 35;
  const VgalleryLength = 21;
  const images = []
  const imag = []

  for(let i = 0; i <= HgalleryLength; i++){
    images.push(require(`../../images/Gallery/Horizontales/gallery${i}.jpeg`))
  }

  for(let i = 0; i <= VgalleryLength; i++){
    imag.push(require(`../../images/Gallery/Verticales/gallery${i}.jpeg`))
  }


  return (
    <>
    <Header title="Descubriendo Nuestra Pasión por la Carpintería Metálica" image={HeaderImage}>
    Bienvenido a Soldaduras Tridente Sierra, donde la pasión por la carpintería metálica y la decoración se entrelazan para crear espacios únicos y cautivadores. A lo largo de nuestra trayectoria, hemos llevado a cabo diversos proyectos que van desde la fabricación de muebles a medida hasta la creación de sorprendentes detalles decorativos en metal. Con un equipo de expertos diseñadores, nos esforzamos por ofrecer soluciones creativas y personalizadas que realzan la belleza de cada ambiente. Descubre la magia de la carpintería metálica y 
    déjanos dar vida a tus ideas de decoración. ¡Bienvenido a un mundo de posibilidades artísticas y estilos excepcionales!
    </Header>
    <section>
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery  ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    <section>
    <div className="container gallery__container">
        {
          imag.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery  ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery