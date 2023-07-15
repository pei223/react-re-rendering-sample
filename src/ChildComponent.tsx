export default function ChildComponent() {
    console.log("Render ChildComponent")
    return (
        <div style={{background: "red", padding: "10px"}}>
            <p>Child Component</p>
        </div>
    )
}