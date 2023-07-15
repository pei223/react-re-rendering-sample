import React from "react"

type Props = {
    message: string
}

export default React.memo(function ChildComponentWithStringProp({ message }: Props) {
    console.log("Render ChildComponentWithStringProp", message)
    return (
        <div style={{background: "green", padding: "10px"}}>
            <h3 style={{borderBottom: "white 1px solid", margin: 0}}>Child component with string prop</h3>
            <div>Message: {message}</div>
        </div>
    )
})