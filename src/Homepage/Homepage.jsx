import { Nav } from "./Nav/Nav.jsx"
import { Intro } from "./Intro/Intro.jsx"
import { Meetyou } from "./Meetyou/Meetyou.jsx"
import { Resume } from "./Resume/Resume.jsx"

export function Homepage(){
    return(
        <>
       <Nav/>
       <Intro/>
       <Meetyou paddingTop = "20"/>
       <Resume paddingTop = "3"/>
       </>
    )
}