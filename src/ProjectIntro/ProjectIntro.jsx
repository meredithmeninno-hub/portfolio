import styles from "./ProjectIntro.module.css"

export function ProjectIntro({logo, name, softwares = [], overview}){
    return(
    <div className = {styles.container}
    >
    <img src={logo}
    alt={logo}
    className = {styles.logo}
    />

    <h2 className = {styles.name}>
    {name}</h2>
    

    <h1 className = {styles.softwares}>
       {softwares.join(' | ')}
    </h1>
    
    <p className = {styles.overview}>
        {overview}
    </p>

    </div>
    )
}