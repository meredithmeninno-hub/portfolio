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
        <h3 className = {styles.subtitle}>Design</h3>
        <div className = {styles.skills}>
            <p>Adobe Illustrator</p>
            <p>Adobe Photoshop</p>
            <p>Adobe InDesign</p>
            <p>Adobe AfterEffects</p>
            <p>Figma</p>
            <p>Procreate</p>
            <p>Blender</p>
            <p>Rhino</p>
        </div>

        <h3 className = {styles.subtitle2}>Programming</h3>
        <div className = {styles.skills}>
            <p>HTML/CSS</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Python</p>
            <p>Java</p>
    
        </div>


         <h3 className = {styles.title}>Education</h3>
        <Experience subtitle = "University of California, Davis" date="2022-2025" role="Bachelors of Arts, Design"/>

        </div>
    )
}