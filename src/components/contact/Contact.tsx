import style from "./Contact.module.css"
import insta from "../../assets/imgs/contact/insta.svg"
import zap from "../../assets/imgs/contact/zap.svg"
import yt from "../../assets/imgs/contact/yt.svg"
import email from "../../assets/imgs/contact/email.svg"



export function Contact(){
    return(
        <>

            <div className={style.title}>
                <p className='container title-section'>Contato</p>
            </div>

            <div className={style.descript}>
                <p className="container">Somos A MF produtora queremos trazer a melhor qualidade de produção de conteúdo em audiovisual, realizamos também campanha política e produções de eventos. Entre em contato e peça seu orçamento.</p>    
                <button>Pedir orçamento</button>
                <p className="container">ou entre em contato em uma de nossas redes sociais.</p>
            </div> 

            <div className="container">
                <ul className={style.links}>
                    <li><a href=""><img src={insta} alt="" /></a></li>
                    <li><a href=""><img src={yt} alt="" /></a></li>
                    <li><a href=""><img src={email} alt="" /></a></li>
                    <li><a href=""><img src={zap} alt="" /></a></li>
                </ul>
            </div>
        </>
    )
}