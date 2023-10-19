import "./Nav.css"
import logo from '../../assets/imgs/logo.png'
import  {useState, useEffect} from 'react'
import { HashLink as Link } from "react-router-hash-link"





export function Nav(){
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () =>{
        setToggleMenu(!toggleMenu)
    }
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() =>{
        const changeWidth = () =>{
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)
    }, [])
    return (
        <>
                    <header className="navigation">
                        <nav className="container">
                            <a className="logo" href="/"><img src={logo} alt="logo" /></a>                        
                                {(toggleMenu || screenWidth > 860) && (
                                    <ul className="list">
                                    <li className="items" ><Link to="#home" smooth> <a>Início</a></Link> </li>
                                    <li className="items" ><Link to="#results" smooth><a>Resultados</a></Link></li>
                                    <li className="items" ><Link to="#services" smooth><a>Serviços</a></Link></li>
                                    <li className="items" ><Link to="#feedback" smooth><a>Feedback</a></Link></li>
                                    <li className="items" ><Link to="#team" smooth><a>Equipe</a></Link></li>
                                    <li className="items" ><Link to="#contact" smooth><a>Contato</a></Link></li>
                                    <li className="items" ><a className="buttonNav">Orçamento</a></li>
                                </ul>  
                                )

                                }       
                                <button onClick={toggleNav} className="controlNav">
                                    menu</button>
                        </nav>
                    </header>
        </>
    )
}