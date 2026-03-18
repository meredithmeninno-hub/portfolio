import styles from "./Button.module.css"
import { useNavigate } from "react-router-dom"

export function Button({text, to, scrollTo}){
   
    const navigate = useNavigate()
    const bracel = "{"
    const bracer = "}"

    const handleClick = () => {
        if(scrollTo){
            document.getElementById(scrollTo)?.scrollIntoView({behavior: 'smooth'})}
        else if (to){
            navigate(to, {viewTransition : true})
        }
    }

   return(
    <p className = {styles.button} onClick = {handleClick}>
        {bracel} {text} {bracer}
    </p>
   )
}