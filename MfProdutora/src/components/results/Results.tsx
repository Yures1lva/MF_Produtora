import styles from './Results.module.css'

export function Results(){
    return(
        <>
        <div className={styles.background}></div>
        <div className='container'>
            <p className='title-section '>Nossos Resultados</p>
            <h3>Conheça o resultado de<br></br> nossos melhores <span>Projetos</span></h3>
        </div>
        </>
    )
}