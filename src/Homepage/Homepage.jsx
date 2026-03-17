import { Nav } from "./Nav/Nav.jsx"
import { Intro } from "./Intro/Intro.jsx"
import { Meetyou } from "./Meetyou/Meetyou.jsx"
import { Resume } from "./Resume/Resume.jsx"
import { ProjectSection } from "./Project/ProjectSection.jsx"
import { Contact } from "./Contact/Contact.jsx"

export function Homepage(){
    return(
        <>
       <Nav/>
       <Intro/>
       <Meetyou paddingTop = "10"/>
       <Resume paddingTop = "5"/>
       <ProjectSection paddingTop = "10"/>
       <Contact paddingTop = "10"/>
       </>
    )
}