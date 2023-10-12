import style from "./Team.module.css"

interface Team {
    img: string,
    name: string,
    skill1: string,
    skill2: string,
    skill3: string,
    skill4: string,        
}

export function CardTeam({img,name,skill1,skill2,skill3,skill4}:Team){
    return (
        <>
           <article className={style.cardTeam}>
                <span className={style.descript}>
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                    <p>{skill1}</p>
                    <p>{skill2}</p>
                    <p>{skill3}</p>
                    <p>{skill4}</p>
                </span>
            </article>
        </>
    )
}