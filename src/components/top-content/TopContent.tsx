import styles from "./TopContent.module.css"
import logo from '../../assets/imgs/logo2.png'

export function TopContent(){
    return(
        <>
            <div id="home" className={styles.imgFundo}>
                <div className="container">
                    <img src={logo} alt="Logo da Maycon Filmes Produtora" />
                
                   
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
