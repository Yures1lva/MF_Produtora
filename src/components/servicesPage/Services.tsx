import styles from "./Services.module.css"
import { ServiceCard  } from "./ServiceCard"
import drone from "../../assets/imgs/servicesImgs/drone.svg"
import audio from "../../assets/imgs/servicesImgs/audio.svg"
import post from "../../assets/imgs/servicesImgs/post.svg"
import video from "../../assets/imgs/servicesImgs/video.svg"


const destaqueEspecialidades = [
    {
        img: drone,
        type: "Filmes e Fotos Aéreas",
        content: "Filmes e fotos aéreas capturadas com dronês, oferece uma perspectiva única e cativante, além de proporcionar um toque cinematográfico, os filmes e fotos aéreas com drones oferecem um olhar inovador e moderno para promover produtos e serviços."        
    },
    {
        img: audio,
        type: "Produções e Audiovisual",
        content: "Produções e Audiovisual são áreas fundamentais para marcas que buscam se destacar no mercado, as produções e o audiovisual oferecem uma maneira eficaz de apresentar produtos e serviços de forma atraente e convincente"        
    },
    {
        img: video,
        type: "Comerciais e Inspeções",
        content: "É possível fortalecer sua presença no mercado. Ao integrar abordagens inovadoras e tecnologias avançadas, sua marca pode otimizar a eficácia de suas campanhas publicitárias e assegurar a integridade e segurança de suas operações comerciais"        
    },
    {
        img: post,
        type: "Social Media e mais",
        content: "As redes sociais proporcionam uma plataforma dinâmica e interativa para você se conectar com seu público-alvo de maneira significativa e autêntica, isso é possível com mídias sociais adaptadas para seu público alvo."        
    }
]

export function Services(){
    return (
        <>
        <div id="services"></div>

            <div  className={styles.background}>
                <div className={styles.containerServices}>
                    <p  className="title-section" >Principais Serviços</p>
                    <h3 >Conheça Nosso principais<br/><span>Serviços</span> oferecidos</h3>
                    <div className={styles.cards}>
                        
                        {destaqueEspecialidades.map((item) => (
                            <ServiceCard

                                img={item.img}
                                type={item.type}
                                content={item.content}

                            />
                        ))}
                    </div>
                    <p>Também temos</p>        
                </div>
            </div>
            
            <div className={styles.mScroll}> 
                <div className={styles.mScroll__title}> 
                    <div> 
                    <h2> 
                    <a  id="feedback" href="https://dribbble.com/JulianoF">  </a>

                        <a href="https://dribbble.com/JulianoF">Filmes Publicitários</a>
                        <a href="https://dribbble.com/JulianoF">Cobertura de Eventos</a>
                        <a href="https://dribbble.com/JulianoF">Vídeos Educativos</a>
                        <a href="https://dribbble.com/JulianoF">Redes Sociais</a>
                        <a href="https://dribbble.com/JulianoF">Design de Interfaces</a>
                        <a href="https://dribbble.com/JulianoF">Vídeos Corporativos</a>
                        <a href="https://dribbble.com/JulianoF">Book pessoal</a>
                        <a href="https://dribbble.com/JulianoF">Pacotes em grupo</a>   
                        <a href="https://dribbble.com/JulianoF">Design de Artes</a>    
                    </h2> 
                    
                    </div> 
                </div> 
            </div>
        </>
    )
}