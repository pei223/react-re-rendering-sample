import React from "react"

export default React.memo(function ChildComponent() {
    console.log("Render ChildComponent")
    return (
        <div style={{background: "red", padding: "10px"}}>
            <h3 style={{ margin: 0}}>Child component</h3>
        </div>
    )
})