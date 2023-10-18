import style from "./Footer.module.css"
import logo from '../../assets/imgs/logo2.png'

export function Footer(){
    return(
        <>

            <div className={style.footer}>
                <footer className="container">
                    <ul className={style.menu}>
                        <li className={style.logo}>
                            <a href="/">
                                <img src={logo} alt="logo" />
                            </a>
                        </li>
                        
                        <li>
                            <ul className={style.about}>
                                <li><h3>Sobre</h3></li>
                                <li><a>home</a></li>
                                <li><a>Resultados</a></li>
                                <li><a>Serviços</a></li>
                                <li><a>Feedback</a></li>
                                <li><a>Equipe</a></li>
                                <li><a>Contato</a></li>

                                
                            </ul>
                        </li>
                        
                        <li>
                            <ul className={style.contact}>
                                <li><h3>Contato</h3></li>
                                <li><a target="_blank" href="https://www.instagram.com/mfprodutora_/">Instagram</a></li>
                                <li><a target="_blank" href="mailto:mfprodutoraltda@gmail.com" >Email</a></li>
                                <li><a target="_blank" href="https://api.whatsapp.com/send?phone=5594991621273&text=" >Whatsapp</a></li>
                                <li><a target="_blank" href="https://www.youtube.com/@mayconfilmes30"  >Youtube</a></li>
                            </ul>
                        </li>
                    </ul>
                </footer>
                
            </div>
            <div className={style.signature}>
                    <p>desenvolvido por <a><span>ydev</span></a></p>
                </div>

       </>
    )
}