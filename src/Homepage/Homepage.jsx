import { Welcome } from "./Welcome/Welcome.jsx"
import { About } from "./About/About.jsx"
import { Contents } from "./Contents/Contents.jsx"
import styles from "./globalHomepage.module.css"

export function Homepage(){
    return(
        <>
        <Welcome/>
        <About/>
        <Contents/>
        </>
    )
}

