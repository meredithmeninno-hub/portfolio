import meredith from "../images/meredith.png"
import me from "../images/me.png"
import functionMeredith from "../images/functionMeredith.png"
import portfolio from "../images/portfoliotxt.png"
import styles from "./Welcome.module.css"
import gstyles from "../globalHomepage.module.css"
import { Button } from "../Button.jsx"

export function Welcome() {
    return(
        <div className = {styles.divMarg} >
            <div className={styles.container}>
                <Hi />
                <img src={me} className={styles.meImage} alt="Me" />
            </div>

            <div>
            
                <Portfolio />
            </div>
        </div>
    )
}

function Hi() {
    return(
        <div className={gstyles.divMarg}>
            <p className={styles.hiText}>hi I'm</p>
            <img src={meredith} alt="Meredith" className={styles.meredithImage} />
            <img src={functionMeredith} className={styles.functionMeredithImage} alt="Function" />
        </div>
    )
}

function Portfolio() {
    return(
        <>
            <p className={styles.portfolioText}>welcome to my</p>
            <img src={portfolio} alt="Portfolio" className={styles.portfolioImage} />
        </>
    )
}