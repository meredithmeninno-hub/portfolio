import styles from "./Button.module.css"


export function Button({text}){
   
    const bracel = "{"
    const bracer = "}"
   return(
    <p className = {styles.button}>
        {bracel} {text} {bracer}
    </p>
   )
}