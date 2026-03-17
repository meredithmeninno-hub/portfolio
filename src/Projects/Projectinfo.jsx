import styles from "./Projectinfo.module.css"


export function Projectinfo({title, subtitle, info}){
    return(
        <div className = {styles.container}>
            <h1 className = {styles.title}>{title}</h1>
            <h3 className = {styles.subtitle}>{subtitle}</h3>
            <p className = {styles.info}>{info}</p>
        </div>
    )
}