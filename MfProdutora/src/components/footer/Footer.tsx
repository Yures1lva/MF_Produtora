import style from "./Footer.module.css"

export function Footer(){
    return(
        <>

            <div className={style.footer}>
                <footer className="container">
                    <ul className={style.menu}>
                        <li className={style.logo}>
                            <a href="/">
                                <img src="" alt="logo" />
                            </a>
                        </li>
                        
                        <li>
                            <ul className={style.about}>
                                <li><h3>Sobre</h3></li>
                                <li><a>Política de privacidade</a></li>
                                <li><a>Termos de uso</a></li>
                                <li><a>Sobre este site</a></li>
                            </ul>
                        </li>
                        
                        <li>
                            <ul className={style.contact}>
                                <li><h3>Contato</h3></li>
                                <li><a>Instagram</a></li>
                                <li><a>Email</a></li>
                                <li><a>Whatsapp</a></li>
                                <li><a>Youtube</a></li>
                            </ul>
                        </li>
                    </ul>
                </footer>
            </div>

       </>
    )
}