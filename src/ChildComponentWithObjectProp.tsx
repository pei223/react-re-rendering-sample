type UserData = {
    name: string
    age: number
}

type Props = {
    data: UserData
}

export default function ChildComponentWithObjectProp({data}: Props) {
    console.log("Render ChildComponentWithObjectProp", data)
    return (
        <div style={{background: "blue", padding: "10px"}}>
            <p>Child Component with object props</p>
            <p>name: {data.name}</p>
            <p>age: {data.age}</p>
        </div>
    )
}