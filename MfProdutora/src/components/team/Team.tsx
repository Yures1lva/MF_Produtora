import style from "./Team.module.css"
import integrante1 from "../../assets/imgs/team/integrante01.png"
import { CardTeam } from "./CardTeam"

const team = [
    {
        img: integrante1,
        name: "Integrante 01",
        skill1: "especialidade 01",
        skill2: "especialidade 02",
        skill3: "especialidade 03",
        skill4: "especialidade extendida ",        
    },
    {
        img: integrante1,
        name: "Integrante 02",
        skill1: "especialidade 01",
        skill2: "especialidade 02",
        skill3: "especialidade 03",
        skill4: "especialidade  maior",        
    },
    {
        img: integrante1,
        name: "Integrante 03",
        skill1: "especialidade 01",
        skill2: "especialidade 02",
        skill3: "especialidade 03",
        skill4: "especialidade maior",        
    },
    {
        img: integrante1,
        name: "Integrante 04",
        skill1: "especialidade 01",
        skill2: "especialidade 02",
        skill3: "especialidade 03",
        skill4: "especialidade extendida ",        
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






