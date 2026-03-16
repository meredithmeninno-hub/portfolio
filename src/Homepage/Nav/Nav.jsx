import { Button } from "../Button/Button.jsx"
import styles from "./Nav.module.css"

export function Nav(){
    return(
    <div className = {styles.nav}>
        <div className = {styles.alignl}>
        <Button text = "ABOUT ME"/>
        <Button text = "MY WORK"/>
        </div>

        <div className = {styles.alignr}>
        <Button text = "CONTACT"/>
        </div>
    </div>
    )
}