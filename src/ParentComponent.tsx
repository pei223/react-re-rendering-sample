import { useState } from "react"
import ChildComponentWithStringProp from "./ChildComponentWithStringProp"
import ChildComponent from "./ChildComponent"
import ChildComponentWithObjectProp from "./ChildComponentWithObjectProp"

type Props = {
    messageFromRoot: string
}


export default function ParentComponent({messageFromRoot}: Props) {
    const [message, setMessage] = useState(messageFromRoot)
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    console.log("Render ParendComponent", message, name, age)

    return (
        <div style={{background: "gray", padding: "20px"}}>
            <h3>Parent component</h3>
            <ChildComponent />
            <div style={{marginTop: "30px"}}>
                <span>Message</span>
                <input value={message} onChange={(e) => setMessage(e.target.value)} />
                <ChildComponentWithStringProp message={message} />
            </div>
            <div style={{marginTop: "30px"}}>
                <div>
                    <span>Name</span>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <span>Age</span>
                    <button onClick={() => setAge(age + 1)} >Add</button>
                </div>
                <ChildComponentWithObjectProp data={
                    {
                        age, name
                    }
                } />
            </div>
        </div>
    )
}