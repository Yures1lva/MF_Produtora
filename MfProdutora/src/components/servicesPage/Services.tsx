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
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like"        
    },
    {
        img: audio,
        type: "Produções e Audiovisual",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like"        
    },
    {
        img: video,
        type: "Comerciais e Inspeções",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like"        
    },
    {
        img: post,
        type: "Social Media e mais",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like"        
    }
]

export function Services(){
    return (
        <>
            <div className={styles.background}>
                <div className={styles.containerServices}>
                    <p id="services" >Principais Serviços</p>
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
                    <a href="https://dribbble.com/JulianoF">  </a>

                        <a href="https://dribbble.com/JulianoF">Especialidade 1</a>
                        <a href="https://dribbble.com/JulianoF">Especialidade 2</a>
                        <a href="https://dribbble.com/JulianoF">Especialidade 3</a>
                        <a href="https://dribbble.com/JulianoF">Especialidade 4</a>
                        <a href="https://dribbble.com/JulianoF">Especialidade 5</a>
                        <a href="https://dribbble.com/JulianoF">Especialidade 6</a>
                        <a href="https://dribbble.com/JulianoF">Especialidade 7</a>    
                    </h2> 
                    
                    </div> 
                </div> 
            </div>
        </>
    )
}