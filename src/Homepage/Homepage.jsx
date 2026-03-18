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

       <section id="abtme">
       <Meetyou paddingTop = "10"/>
       <Resume paddingTop = "5"/>
       </section>

       <section id="mywork">
       <ProjectSection paddingTop = "10"/>
       </section>
    
        <section id="contact">
       <Contact paddingTop = "20"/>
       </section>
       </>
    )
}