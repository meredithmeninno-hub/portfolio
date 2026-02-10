import { Button } from "../Button.jsx"
import styles from "./Projectstyles.module.css"

export function Project({softwares = [], title, projectType, page}){
    return(
    
        <div className = {styles.container}>
           
        <div>
         <h1
         className = {styles.softwares}
         >
            {softwares.join(' | ')}
        </h1>

        <h1 className = {styles.ptitle}
        >
            {title}
        </h1>

        <h1>
            {projectType}
        </h1>
        </div>

        <Button text="VIEW" page={page}/>
        </div>

    )
           
}