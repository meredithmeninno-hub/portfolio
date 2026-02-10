export function Subtitle({text, marginLeft, marginTop}){
    return(
        <p
        style = {{
            fontStyle: "italic",
            fontSize: '1vw',
            color: "#0D00FF",
            marginLeft: marginLeft,
            marginTop: marginTop,
            minWidth: "10vw"
        }}
        >
        {text}
        </p>
    )
}