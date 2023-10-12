import styles from "./TopContent.module.css"

export function TopContent(){
    return(
        <>
            <div className={styles.imgFundo}>
                <div className="container">
                    <strong>MF  Produtora</strong>
                
                   
                    <span>

                    <p>Somos uma produtora audiovisual que ama contar histórias e transformar sonhos em realidade.</p>
                    <p>Queremos trazer a melhor qualidade de produção  de conteúdo, realizamos também campanha política e produção de eventos.</p>

                    
                    </span>
            
                    <button>Solicitar Orçamento</button>
                </div>
            </div>
        </>
           
    )    
}
