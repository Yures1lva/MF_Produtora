import "./Nav.css"
import logo from '../../assets/imgs/logo.png'
import  {useState, useEffect} from 'react'





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
                                    <li className="items" ><a  href="">Início</a></li>
                                    <li className="items" ><a  href="/results">Resultados</a></li>
                                    <li className="items" ><a  href="/services">Serviços</a></li>
                                    <li className="items" ><a  href="/feedback">Feedback</a></li>
                                    <li className="items" ><a  href="/team">Equipe</a></li>
                                    <li className="items" ><a  href="/contact">Contato</a></li>
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