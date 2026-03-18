import { Project } from "./Project.jsx"

import perfumeteaser from "./teaserimgs/perfumeteaser.png"
import refractedteaser from "./teaserimgs/refractedteaser.png"
import fadsteaser from "./teaserimgs/fadsteaser.png"

export function ProjectSection({paddingTop}){
    return(
        <div style = {{paddingTop: `${paddingTop}vw`}}>

        <Project page="/pivione" title="PIVIONE" subtitle="PACKAGING DESIGN"
        abt="Perfume packaging design with hand-drawn abstraction representative of the peony flower" imgheight = "45" imgsrc = {perfumeteaser}
        />
        
        <Project page="/refracted" title="REFRACTED" subtitle="Festival Identity"
        abt="Festival identity kit including logo, posters variations, and social media content." imgheight = "30" imgsrc = {refractedteaser}
        />

        <Project page="/fads" title="FADS MAGAZINE" subtitle="EDITORIAL DESIGN"
        abt="Magazine spread and single pages created for the Fashion and Design Society at UC Davis" imgheight = "30" imgsrc = {fadsteaser}
        />
        </div>
    )

}