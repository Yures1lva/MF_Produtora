import { ComponetResult } from './Component.Result'
import styles from './Results.module.css'
//import {ComponentResultProps} from './Component.Result'
import client01 from "../../assets/imgs/clients/client01.png"
import img01A from "../../assets/imgs/clients/01A.png"
import img01B from "../../assets/imgs/clients/01B.png"
import img02A from "../../assets/imgs/clients/02A.png"
import img02B from "../../assets/imgs/clients/02B.png"
import client02 from "../../assets/imgs/clients/client02.png"




const client = [
    {
        id: 1,
        title: "Jr soluções em Construções",
        local: "Tucuruí - PA",
        type: "Video Comercial",
        date: "20/05/2023",
        imgPerfil: client01,
        img1: img01A,
        img2: img01B,
    },
    {
        id: 1,
        title: "Diego e Fernanda",
        local: "Jacundá - PA",
        type: "Ensáio Fotográfico",
        date: "15/08/2022",
        imgPerfil: client02,
        img1: img02A,
        img2: img02B,
    },

]

export function Results(){
    return(
        <>
        <div className={styles.background}>
            <div className='container'>
               <p id='results' className='title-section'>Nossos Resultados</p>
            </div>
        </div>
        <div   className={styles.containerResult}>
            <h3  className='container'>Conheça o resultado de<br></br> nossos melhores <span>Projetos</span>.</h3>

            {client.map((i) =>(
                <ComponetResult
                title={i.title}
                type={i.type}
                date={i.date}
                local={i.local}
                imgPerfil={i.imgPerfil}
                img1={i.img1}
                img2={i.img2}
                />
            ))}
            
        </div>

        </>
    )
}