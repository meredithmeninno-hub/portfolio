import { Experience } from "./Experience/Experience.jsx"

import styles from "./Resume.module.css"

export function Resume({paddingTop}){
    return(
        <div className = {styles.resume} style={{ paddingTop: `${paddingTop}vw`}}>
        <h3 className = {styles.title}>Experience</h3>

        <div className = {styles.exp}>
        <Experience subtitle = "FADS Magazine" date="2024-2025" role="Graphic and Layout Designer "/>


        <Experience subtitle = "A Bold Step Exhibit" date="January 2024" role="Opening Day Volunteer"/>
        </div>

        <h3 className = {styles.title}>Skillset</h3>
        <h3 className = {styles.subtitle}>DESIGN</h3>

        </div>
    )
}