import styles from "./Results.module.css";
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
                  <img className={styles.imagePerfil} src={imgPerfil}></img>
                    <div className={styles.descript}>
                        <h4>{title}</h4>
                        <ul>
                            <li>{local}</li>
                            <li>{type}</li>
                            <li>{date}</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.introImages}>
                    <div><img src={img1} alt="" /></div>
                    <div><img src={img2} alt="" /></div> 
                    <div><img src={img1} alt="" /></div>
                    <div><img src={img2} alt="" /></div> 
                </div>
            </div>
        </>
    )
}