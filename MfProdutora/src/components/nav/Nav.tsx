import "./Nav.css"




export function Nav(){
    return (
        <>
                    <nav className="navigation container">
                        <a className="logo" href="/"><img src="" alt="logo" /></a>
                        
                        <div className="navigatioMenu">
                        {/*<button className="hamburguer" onClick={changeStyle}>
                        <FaBars/>
                        </button>*/}
                            <ul >
                                <li><a  href="">Início</a></li>
                                <li><a  href="/results">Resultados</a></li>
                                <li><a  href="/services">Serviços</a></li>
                                <li><a  href="/feedback">Feedback</a></li>
                                <li><a  href="/team">Equipe</a></li>
                                <li><a  href="/contact">Contato</a></li>
                                <li><button>Orçamento</button></li>
                            </ul>
                        </div>
                    </nav>
        </>
    )
}