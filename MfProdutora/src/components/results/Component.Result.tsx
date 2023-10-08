import styles from "./Results.module.css";


export function ComponetResult(){
    return(
        <>
        <div className="container">
                <div className={styles.TopContent}>
                  <div className={styles.imagePerfil}><img  src="../../assets/imgs/clients/client-01.png" alt="" />imgPerfil</div>
                    <div className={styles.descript}>
                        <h4>Jr Soluções em Construções</h4>
                        <ul>
                            <li>Tucuruí - PA</li>
                            <li>Video comercial</li>
                            <li>20/05/2023</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.introImages}>
                    <div>img1<img src="" alt="" /></div>
                    <div>img2<img src="" alt="" /></div> 
                </div>
            </div>
        </>
    )
}