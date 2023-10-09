import styles from "./Services.module.css"
import { ServiceCard  } from "./ServiceCard"
import drone from "../../assets/imgs/services/drone.svg"
import audio from "../../assets/imgs/services/audio.svg"
import post from "../../assets/imgs/services/post.svg"
import video from "../../assets/imgs/services/video.svg"


export function Services(){
    return (
        <>
            <div className={styles.background}>
                <div className={styles.containerServices}>
                <p >Principais Serviços</p>
                <h3>Conheça Nosso principais<br/><span>Serviços</span> oferecidos</h3>
                <div className={styles.cards}>
                    <ServiceCard
                    img={drone}
                    type="Filmes e Fotos Aéreas"
                    content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like"
                    />
                    <ServiceCard
                    img={audio}
                    type="Produções e Audiovisual"
                    content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like"
                    />
                    <ServiceCard
                    img={video}
                    type="Comerciais e Inspeções"
                    content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like"
                    />                                     
                    <ServiceCard
                    img={post}
                    type="Social Media e mais"
                    content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like"
                    />
                    
                   
                    
                </div>
                </div>

            </div>
        
        </>
    )
}