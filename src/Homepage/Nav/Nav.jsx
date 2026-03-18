
import { Homepage } from "../Homepage.jsx"
import { Button } from "../Button/Button.jsx"
import styles from "./Nav.module.css"

export function Nav(){
    return(
    <div className = {styles.nav}>
        <div className = {styles.alignl}>
        <Button text = "ABOUT ME" scrollTo = "abtme"/>
        <Button text = "MY WORK" scrollTo = "mywork"/>
        </div>

        <div className = {styles.alignr}>
        <Button text = "CONTACT" scrollTo = "contact"/>
        </div>
    </div>
    )
}