import contents from "../images/contents.png"
import styles from "../globalHomepage.module.css"
import { Project } from "./Project.jsx"

export function Contents(){
    return(
    <div className = {`${styles.sectionGap} ${styles.divMarg}`}>
        <img src={contents}
        className = {styles.title}
        />

        <Project softwares={[
            "Adobe Illustrator",
            "Photoshop",
            "Procreate"
        ]} title = "REFRACTED"
        projectType = "FESTIVAL IDENTITY"
        page = "refracted"
        />

        <Project softwares={[
            "Adobe Illustrator",
            "Photoshop",
            "Indesign"
        ]} title = "FADS Magazine"
        projectType = "EDITORIAL DESIGN"/>


        <Project softwares={[
            "Adobe Illustrator",
            "Photoshop",
        ]} title = "NAILZAROVA"
        projectType = "LOGO DESIGN"/>
    </div>
    )
}

