import { Button } from "../../Homepage/Button/Button.jsx";
import styles from "./Nav2.module.css"

export function Nav2(){
    return(
    <div className = {styles.nav}>
        <div className = {styles.alignl}>
        <Button text = "HOME" to="/"/>
        </div>
    </div>
    )
}