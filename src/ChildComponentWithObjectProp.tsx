import React from "react"

type UserData = {
    name: string
    age: number
}

type Props = {
    data: UserData
}

export default React.memo(function ChildComponentWithObjectProp({data}: Props) {
    console.log("Render ChildComponentWithObjectProp", data)
    return (
        <div style={{background: "blue", padding: "10px"}}>
            <h3 style={{borderBottom: "white 1px solid", margin: 0}}>Child component with object prop</h3>
            <div>Name: {data.name}</div>
            <div>Age: {data.age}</div>
        </div>
    )
}, function(prev: Props, next: Props) {
    return prev.data.name === next.data.name && prev.data.age === next.data.age
})