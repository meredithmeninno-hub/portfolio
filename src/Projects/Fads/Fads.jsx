import styles from "./Fads.module.css"

import { Projectinfo } from "../Projectinfo.jsx"
import { Nav2 } from "../Nav2/Nav2.jsx"

import japan from "./images/fadsmagazinejapan.png"
import signature from "./images/fadsmagazinesignature.png"
import cd from "./images/cd.png"

export function Fads (){
    return(
        <>
        <Nav2/>
        <Projectinfo title="FADS Magazine"
        subtitle = "Editorial Design"
        info="The Fashion and Design Society annual magazine showcases and celebrates the work of the designers at UC Davis. Highlights include signature collection pages, faculty interviews, and student-directed photoshoots. "
        />

        <img className = {styles.magmock}src={japan}/>


    <div className = {styles.processcontainer}>
        <p className = {styles.process}>The Design Japan spread was informed by an interview with the hosting professor, highlighting the coexistence of traditional architecture alongside modern design. His framing of Japan as a “designer’s playground” guided the selection of the hero image, which captures the charm of dense, busy architecture, supported by smaller photographs showcasing trip highlights such as subway signage, temples, and playful street moments. All imagery was taken by two student photographers on the trip, adding an authentic perspective. The sakura flowers used to decorate the typography take on a pop-art style, reimagining a classic symbol of Japanese culture.</p>
    </div>

    <img className = {styles.magmock} src={signature}/>

     <div className = {styles.processcontainer}>
        <p className = {styles.process}>The signature collection pages were developed from interviews with the designers and featured photography from photoshoots they organized.</p>
        <p className = {styles.process}> 
        For Lace and Alloy, I paired script and serif typography to reflect the elegance and structure of the collection’s two primary materials. I opted for a more minimalist design to allow the whimsical essence of the imagery to speak for itself. The layout emphasized garment details, including a cut-out image treatment to bring focus to craftsmanship where the original photography lacked contrast. 
        </p>
      
        <p className = {styles.process}>
        For Cannibalismus Sexualis, I used a black background to compliment the vibrant magenta tones and reinforce the collection’s dark atmosphere, alongside gothic-inspired typography that echoed its grim themes. Imagery was curated to showcase the collection’s dynamic silhouettes from multiple angles, including  close-ups of makeup to highlight its integral role in the overall design narrative.
        </p>
    </div>

    <img className = {styles.cd} src={cd}/>

    <div className = {styles.processcontainer}>
        <p className = {styles.process}>The CD originated from a desire to represent the diversity of personalities and taste in FADs through member music taste. Attendees were surveyed about their favorite songs, and the results were compiled into a limited-edition CD distributed to the first 10 magazine orders. Inspired by the iconic “I ♥ NY” tees, the rest of the design centered around stylistic consistency through a typewriter-style font. The overlaid fabric texture on top of the heart recenters the club’s fashion-forward identity. 
</p>
    </div>

    <div className = {styles.end}></div>
        </>
    )
}