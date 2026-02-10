import Aboutme from "../images/Aboutme.png"
import { Bio } from "./Bio.jsx"
import { Subtitle } from "./Subtitle.jsx"
import { Skills } from "./Skills.jsx"
import { Experience } from "./Experience.jsx"
import { Education } from "./Education.jsx"
import styles from '../globalHomepage.module.css'


export function About(){
    return(
     
    <div className = {styles.sectionGap}>
    <div
    className = {styles.divMarg}
    >
        <img src={Aboutme} 
        alt="About me"
        className = {styles.title}/>

<div
style={{display: "flex"
}}>
    <Bio/>
    <div
    style={{display: "block"}}>
    <Subtitle text="TECHNICAL SKILLS" marginLeft = "11vw"/>
    <Skills title="DESIGN" skills={[
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Figma",
        "Procreate",
        "Blender",
        "Rhino"
   
    ]}/> 
    </div>
</div>

<div
style={{display: "flex"
}}>
    <Experience/>
    <Education/>
    <Skills marginLeft = "18vw"title="PROGRAMMING" skills={[
        "HTML/CSS",
        "Javascript",
        "React",
        "Python",
        "Java"
    ]}/>

</div>

</div>
 </div>
    )
}
