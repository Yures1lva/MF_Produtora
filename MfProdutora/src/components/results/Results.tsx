import { ComponetResult } from './Component.Result'
import styles from './Results.module.css'
import divider from '../../App.module.css'
//import {ComponentResultProps} from './Component.Result'
import imgPerfil from "../../assets/imgs/clients/client01.png"
import img01A from "../../assets/imgs/clients/01A.png"
import img01B from "../../assets/imgs/clients/01B.png"


const client = [
    {
        id: 1,
        title: "Jr soluções em Construções",
        local: "Tucuruí - PA",
        type: "Video Comercial",
        date: "20/05/2023",
        imgPerfil: imgPerfil,
        img1: img01A,
        img2: img01B,
    }
]

export function Results(){
    return(
        <>
        <div className={styles.background}>
            <div className='container'>
               <p className='title-section'>Nossos Resultados</p>
            </div>
        </div>
        <div className={styles.containerResult}>
            <h3 className='container'>Conheça o resultado de<br></br> nossos melhores <span>Projetos</span></h3>

            <ComponetResult
            title="Jr soluções em Construções"
            key={1}
            type="Video Comercial"
            date="20/05/2023"
            local= "Tucuruí - PA"
            imgPerfil={imgPerfil}
            img1={img01A}
            img2={img01B}
            />
            <div className={divider.divider}></div>
            <ComponetResult
            title="Jr soluções em Construções"
            key={1}
            type="Video Comercial"
            date="20/05/2023"
            local= "Tucuruí - PA"
            imgPerfil={imgPerfil}
            img1={img01A}
            img2={img01B}
            />
            
        </div>
        </>
    )
}