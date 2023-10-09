import styles from "./Nav.module.css"

export function Nav(){
    return (
        <>
            <header>
                <nav className="container">
                    <a className={styles.logo} href=""><img src="" alt="logo" />logo</a>
                    <ul>
                    <li><a  href="">Início</a></li>
                    <li><a  href="#results">Resultados</a></li>
                    <li><a  href="#services">Serviços</a></li>
                    <li><a  href="#feedback">Feedback</a></li>
                    <li><a  href="#team">Equipe</a></li>
                    <li><a  href="#contact">Contato</a></li>
                    <li><button>Orçamento</button></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}