import { Projectinfo } from "../Projectinfo.jsx"
import { Nav2 } from "../Nav2/Nav2.jsx"

import styles from "./Refracted.module.css"

import brickmockup from "./images/brickmockup.png"

import raw1 from "./images/raw1.png"
import raw2 from "./images/raw2.png"
import raw3 from "./images/raw3.png"
import raw4 from "./images/raw4.png"

import post1 from "./images/post1.png"
import post2 from "./images/post2.png"
import post3 from "./images/post3.png"

import story from "./images/story.png"

import posterbundle from "./images/posterbundle.png"


export function Refracted(){
    return(
    <div>
        <Nav2 />
        <Projectinfo title="REFRACTED" subtitle="FESTIVAL IDENTITY"
        info = "REFRACTED is a music festival organized to honor the vulnerability, raw emotion, and community of emo and alternative rock. It features both the icons who shaped these genres as well as the emerging artists who have revitalized the scene in recent years. "
        />

        {/* <img className = {styles.brickmockup}src={brickmockup}/> */}
        <div className = {styles.postercontainer}>
        <img className = {styles.posterbundle} src={posterbundle}/>
        </div>


        <div className = {styles.processcontainer}>
            <p className = {styles.process}>
                I began this projects through researching emo and alternative music culture, focusing on the history and meaning behind the music. I landed on shattered mirrors and glass as a visual metaphor for intensity and vulnerability to represent the stylistic distinctions of these music genres. The logo leans into this idea and was designed to feel like a sticker, referencing skate culture tied to both genres.
            </p>

            <p className = {styles.process}>
                I created the imagery by staging and photographing materials combined to mimic a shattered mirror (picture frame, smashed mirror shards, doilies, and glue), keeping the visuals raw and authentic. 
            </p>

            <p className = {styles.process}>
                For the poster, I  intentionally avoided hierarchy in the band lineup to reflect how every artist is equally important to the scene, as the range of the bands is the main selling point of the festival. Social media content was adapted from the main poster using a the frame from the mirror-creation. Adjustments were made to the main flier for Instagram Stories while maintaining the overall look.
            </p>
        </div>

        <div className = {styles.rawcontainer}>
        <div>
        <img className = {styles.raw} src={raw1}/>
        <img className = {styles.raw} src={raw2}/>
        </div>

        <div>
        <img className = {styles.raw} src={raw3}/>
        <img className = {styles.raw} src={raw4}/>
        </div>
        </div>

        <p className = {styles.label}>Raw Photos</p>

        <div className = {styles.postcontainer}>
            <img className = {styles.post} src={post1}/>
             <img className = {styles.post} src={post2}/>
              <img className = {styles.post} src={post3}/>
        </div>

        <img className = {styles.story} src={story}/>

        
    </div>
    )
}