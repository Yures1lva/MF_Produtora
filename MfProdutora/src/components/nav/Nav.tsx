import styles from "./Nav.module.css"


export function Nav(){
    return (
        <>
            <header>
                <nav className="container">
                    <a className={styles.logo} href=""><img src="" alt="logo" />logo</a>
                    <ul>
                    <li><a  href="">Início</a></li>
                    <li><a  href="">Resultados</a></li>
                    <li><a  href="">Serviços</a></li>
                    <li><a  href="">Equipe</a></li>
                    <li><a  href="">Contato</a></li>
                    <li><button>Orçamento</button></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}