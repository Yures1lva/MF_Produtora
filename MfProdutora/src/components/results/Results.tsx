import { ComponetResult } from './Component.Result'
import styles from './Results.module.css'
import divider from '../../App.module.css'

export function Results(){
    return(
        <>
        <div className={styles.background}>
            <div className='container'>
               <p className='title-section'>Nossos Resultados</p>
            </div>
        </div>
        <h3 className='container'>Conheça o resultado de<br></br> nossos melhores <span>Projetos</span></h3>

        <ComponetResult/>
        <div className={divider.divider}></div>
        <ComponetResult/>

        </>
    )
}