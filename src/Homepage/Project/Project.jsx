import { Button } from "../Button/Button.jsx"

import styles from "./Project.module.css"

export function Project({page, title, subtitle, abt, imgsrc, imgheight, marginLeft}){

    return(
        <div className = {styles.container}>

        <div className = {styles.txtcontainer}>
            <h1 className = {styles.title}>{title}</h1>
            <h3 className = {styles.subtitle}>{subtitle}</h3>
            <p className = {styles.abt}>{abt}</p>
            <Button text="VIEW" to={page}/>
        </div>
        
        <div className = {styles.imgcontainer}>
        <img style={{ height: `${imgheight}vw` }} className = {styles.img} src={imgsrc}/>
        </div>

        </div>
    )
}