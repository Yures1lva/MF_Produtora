import styles from './Results.module.css'

export function Results(){
    return(
        <>
        <div className={styles.background}>
            <div className='container'>
               <p className='title-section'>Nossos Resultados</p>
            </div>
        </div>
        <h3 className='container'>Conheça o resultado de<br></br> nossos melhores <span>Projetos</span></h3>

        <article  className='container'>
            <div>
                <img src="" alt="" />
                <div>
                    <h4>Jr Soluções em Construções</h4>
                    <ul>
                        <li>Tucuruí - PA</li>
                        <li>Video comercial</li>
                        <li>20/05/2023</li>
                    </ul>
                    </div>
            </div>
        </article>
        </>
    )
}