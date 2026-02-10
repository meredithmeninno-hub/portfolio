

export function Skills({marginLeft, title, skills = []}){
    return(
        <div style={{textAlign: "right",
            marginRight: "10vw"
        }}>
        
       <h1
       style={{
        fontSize: "1.5vw",
        color: "#0D00FF",
        fontWeight: "300",
        marginLeft: marginLeft,
        marginTop: "2vw"
       }}
       >{title}</h1>

      <ul
            style={{
                fontSize: "1.2vw",
                minWidth: "20vw",
                marginTop: "1vw"
            }}>
                {skills.map(function(skill, index) {
                    return (
                        <li
                        key={index}
                        style={{marginTop: index > 0 ? "0.8vw" : "0"}}
                        >
                            {skill}
                        </li>
                    )
                })}
            </ul>



       </div>
    )
}

