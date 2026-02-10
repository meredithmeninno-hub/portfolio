import styles from "./globalR.module.css"

import refractedLogo from "./images/refractedlogo.png"
import postmocks from "./images/postmocks.png"
import storymock from "./images/storymock.png"
import refractedposterlarge from "./images/refractedposterlarge.png"
import refractedposterlargeblu from "./images/refractedposterlargeblu.png"
import refractedposterlargeblack from "./images/refractedposterlargeblack.png"
import rawphotos from "./images/rawphotos.png"

import { ProjectIntro } from "../ProjectIntro/ProjectIntro.jsx"
import refractedpostermockup from "./images/refractedpostermockup.png"



export function Refracted() {
    return(
    <>
    <ProjectIntro 
    logo = {refractedLogo}
    name="REFRACTED FESTIVAL"
    softwares = {["ADOBE ILLUSTRATOR", "PHOTOSHOP", "PROCREATE"]}
    overview = "Refracted is a music festival organized to honor the vulnerability, raw emotion, and community of emo and alternative rock. It features both the icons who shaped these genres as well as the emerging artists who have revitalized the scene in recent years. "
    />

    <img src={refractedpostermockup}
    className = {styles.postermockup}
    style = {{marginTop : "20vw"}}
    />

    <img src={postmocks}
    className = {styles.postmocks}
    style = {{marginTop : "10vw"}}
    />

    <img src={storymock}
    className = {styles.storymock}
    style = {{marginTop : "10vw"}}/>

    <img src={refractedposterlarge}
    className = {styles.posterlarge}
     style = {{marginTop : "10vw"}}
    />    

     <img src={refractedposterlargeblu}
    className = {styles.posterlarge}
     style = {{marginTop : "10vw"}}
    />        

     <img src={refractedposterlargeblack}
    className = {styles.posterlarge}
     style = {{marginTop : "10vw"}}
    />  

    <div
    style ={{marginLeft:"10vw",
        marginTop : "10vw",
        paddingBottom: "20vw"
    }}
    >
    <h1 className = {styles.title}>
    PROCESS OVERVIEW
    </h1>

    <p className = {styles.par}>
    This project began with research into emo and alternative music culture, focusing on the history of the genres and the emotional weight behind the music. Shattered mirrors and glass became a central visual metaphor, representing both intensity and vulnerability while reflecting the raw, expressive nature of these scenes. The logo builds on this concept and was designed to resemble a sticker, referencing the skate culture closely associated with both genres.
    </p>

    <p className = {styles.par}>
    The imagery was created through a hands-on process of staging and photographing a combination of sourced materials arranged to resemble a shattered mirror, including a picture frame, broken mirror shards, doilies, and glue. This approach allowed the visuals to remain imperfect and authentic.
    </p>

    <p className = {styles.par}>
    For the poster design, hierarchy within the band lineup was intentionally avoided to emphasize the equal importance of each artist, with the diversity of performers serving as the primary draw of the festival. Social media assets were adapted from the main poster using the mirror frame to maintain visual consistency. The primary flyer was also reformatted for Instagram Stories while preserving the overall aesthetic and tone of the project.
    </p>
    
    <img src={rawphotos}
    alt = "shattered mirror on top of grass"
    className = {styles.rawphotos}
    /> 
    </div> 

    
    </>  
)
}

