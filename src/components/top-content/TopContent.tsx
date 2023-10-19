import styles from "./TopContent.module.css"
import logo from '../../assets/imgs/logo2.png'
import Fade from 'react-reveal/Fade';


export function TopContent(){
    return(
        <>
            <div id="home" className={styles.imgFundo}>
                <div className="container">
                    <Fade left> 
                        <img src={logo} alt="Logo da Maycon Filmes Produtora" />
                    </Fade>                
                    <span>
                    <Fade right>
                        
                            <p>Somos uma produtora audiovisual que ama contar histórias e transformar sonhos em realidade.</p>
                            <p>Queremos trazer a melhor qualidade de produção  de conteúdo, realizamos também campanha política e produção de eventos.</p>                    
                    </Fade>
                    </span>
            
                    <div>
                        <Fade top>
                            <button>Solicitar Orçamento</button>
                        </Fade>                    
                    </div>
                </div>
            </div>

        </>
           
    )    
}
