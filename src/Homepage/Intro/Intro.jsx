import styles from "./Intro.module.css"

export function Intro(){
const bracketl = "["
const bracketr = "]"
    return(
        <>
        <div className = {styles.logo}></div>
       <div className = {styles.font}>
        <h3 className = {styles.name}>{bracketl}MEREDITH MENINNO{bracketr}</h3>
        <p className = {styles.multi}>Multidisciplinary designer practicing</p>
        <p className = {styles.bio}>
            <em>Graphic Design</em>, 
            <em> Illustration</em>,   
            <em> UI / UX</em>,
            <em> Web Developement</em>, and 
            <em> 3D Modeling</em>
        </p>
       </div>
       </>
    )

}