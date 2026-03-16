import styles from "./Experience.module.css"

export function Experience({title, subtitle, date, role}){
    return(
        <div className = {styles.section}>
        <h3 className = {styles.subtitle}>{subtitle}</h3>
        <p className = {styles.info}>{date} | {role}</p>
        </div>
    )
}