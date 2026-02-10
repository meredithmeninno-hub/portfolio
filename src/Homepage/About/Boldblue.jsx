export function Boldblue ({text, marginLeft}){
    return(
        <p
        style = {{
            fontWeight: "600",
            fontSize: '2vw',
            color: "#0D00FF",
            marginLeft: marginLeft,
            marginTop: "1vw",
            maxWidth: "25vw"
        }}
        >
        {text}
        </p>
    )
}