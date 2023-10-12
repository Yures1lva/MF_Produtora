import styles from "./Services.module.css"

interface CardType{
    img: string,
    type: string,
    content: string,
}

export function ServiceCard({img, type, content}: CardType){
    return (
        <>
            <article className={styles.card}>
                        <img src={img} alt="ícone do serviços" />
                        <h4>{type}</h4>
                        <div></div>
                        <p>{content}</p>
                    </article>
        </>
    )
}