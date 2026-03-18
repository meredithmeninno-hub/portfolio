import { Projectinfo } from "../Projectinfo.jsx"
import { Nav2 } from "../Nav2/Nav2.jsx"

import flatpackaging from "./images/flatpackaging.png"
import drawing from "./images/drawing.png"
import bottle from "./images/bottle.mp4"
import label from "./images/label.png"
import boxmov from "./images/box.mp4"
import box from "./images/box.png"

import styles from "./Pivione.module.css"

export function Pivione(){
    return(
        <>
        <Nav2 />
        <Projectinfo
        title = "PIVIONE"
        subtitle = "PACKAGING DESIGN"
        info = "PIVIONE is a passion project inspired by the peony flower. Its many layered folds and organic structure led me to begin creating abstract, free-flowing lines that encapsulate the movement of scent and the structure of the flower."
        />

        <div className = {styles.container}>
        <img className = {styles.flatpackaging} src={flatpackaging}/>
        <div>
        <img className = {styles.drawing} src={drawing}/>
        <p
        className = {styles.subtitle}
        >Original Drawing</p>
        </div>
        </div>
        

        <div className = {styles.container}>
        <video autoPlay muted loop className = {styles.video}>
            <source src={bottle}  type="video/mp4"/>
        </video>
        <img  className = {styles.label} src={label}/>
        </div>


        <div className = {styles.container}>
        <video autoPlay muted loop className = {styles.video2}>
            <source src={boxmov}  type="video/mp4"/>
        </video>
        <img  className = {styles.box} src={box}/>
        </div>
       
        </>
    )
}