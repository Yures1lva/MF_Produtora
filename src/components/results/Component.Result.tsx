import styles from "./Results.module.css";
import Fade from 'react-reveal/Fade';

export interface ComponentResultProps{
    id?: number
    title: string;
    local: string;
    type: string;
    date: string;
    imgPerfil: string;
    img1: string;
    img2: string;
}

export function ComponetResult({title, local, type, date, imgPerfil, img1, img2}:ComponentResultProps){
    return(
        <>
        <div className="container">
                <div className={styles.TopContent}>
                  <Fade left>
                  <img className={styles.imagePerfil} src={imgPerfil}></img>
                    <div className={styles.descript}>
                        <h4>{title}</h4>
                        <ul>
                            <li>{local}</li>
                            <li>{type}</li>
                            <li>{date}</li>
                        </ul>
                    </div>
                  </Fade>
                </div>
                <div className={styles.introImages}>
                    <Fade left>
                        <img src={img1} alt="" />
                    </Fade>
                    <Fade right>
                    <img src={img2} alt="" /> 
                    </Fade>                
                </div>
            </div>
        </>
    )
}