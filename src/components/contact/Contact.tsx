import style from "./Contact.module.css"
import insta from "../../assets/imgs/contact/instagram.svg"
import zap from "../../assets/imgs/contact/whatsapp.svg"
import yt from "../../assets/imgs/contact/youtube.svg"
import email from "../../assets/imgs/contact/email.svg"
import Fade from 'react-reveal/Fade';




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
                <Fade bottom>
                <ul className={style.links}>
                    <li><a target="_blank" href="https://www.instagram.com/mfprodutora_/"><img src={insta} alt="" /></a></li>
                    <li><a target="_blank" href="https://www.youtube.com/@mayconfilmes30" ><img src={yt} alt="" /></a></li>
                    <li><a target="_blank" href="mailto:mfprodutoraltda@gmail.com"><img src={email} alt="" /></a></li>
                    <li><a target="_blank" href="https://api.whatsapp.com/send?phone=5594991621273&text="><img src={zap} alt="" /></a></li>
                </ul>
                </Fade>
            </div>
        </>
    )
}