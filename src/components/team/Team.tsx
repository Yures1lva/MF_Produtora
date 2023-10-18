import style from "./Team.module.css"
import integrante1 from "../../assets/imgs/team/maycon.png"
import integrante2 from "../../assets/imgs/team/loyrielly.png"
import integrante3 from "../../assets/imgs/team/integrante01.png"
import { CardTeam } from "./CardTeam"

const team = [
    {
        img: integrante1,
        name: "Maycon Douglas",
        skill1: "Gerente de Negócios",
        skill2: "Filmaker",
        skill3: "Fotógrafo",
        skill4: "Designer",        
    },
    {
        img: integrante2,
        name: "Loyrielly Farias",
        skill1: "Gestora Financeira",
        skill2: "Digit. Influencer",
        skill3: "Apresentadora",
        skill4: "Mediadora",        
    },
    {
        img: integrante3,
        name: "Integrante 03",
        skill1: "especialidade 01",
        skill2: "especialidade 02",
        skill3: "especialidade 03",
        skill4: "especialidade ",        
    },
    {
        img: integrante3,
        name: "Integrante 04",
        skill1: "especialidade 01",
        skill2: "especialidade 02",
        skill3: "especialidade 03",
        skill4: "especialidade ",        
    }
]

export function Team(){
    return(
        <>
            <div className={style.title}>
            <p className='container title-section'>Nossos profissionais</p>
            </div>        

            <div  className="container">

            <div className={style.cards}>
                {team.map((item)=>(
                    <CardTeam
                    img={item.img}
                    name={item.name}
                    skill1={item.skill1}
                    skill2={item.skill2}
                    skill3={item.skill3}
                    skill4={item.skill4}
                    />
                ))}
            </div>
           </div>

           
        </>
    )
}






