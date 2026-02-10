import { Boldblue } from "./Boldblue.jsx"
import { Subtitle } from "./Subtitle.jsx"

export function Education(){
    return(
        <div
        style={{display: "block",
            marginLeft: "7vw"
        }}
        >
         <Subtitle text="EDUCATION"
         marginTop = "1.5vw"
         maxWidth = "15vw"/>
        
        <Boldblue text = "University of California, Davis"/>
        
        <p
        style={{
            fontWeight: "300",
            maxWidth: "15vw",
            fontSize: "1.2vw",
            lineHeight: "1.5vw",
            marginTop: "0.4vw"
        }}
        >
            2022 - 2025 | Bachelors of Arts, Design
        </p>
        </div>
    )
}