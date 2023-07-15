import { useState } from "react"
import ChildComponentWithStringProp from "./ChildComponentWithStringProp"
import ChildComponent from "./ChildComponent"
import ChildComponentWithObjectProp from "./ChildComponentWithObjectProp"

type Props = {
    messageFromRoot: string
}


export default function ParentComponent({messageFromRoot}: Props) {
    const [message, setMessage] = useState(messageFromRoot)
    const [userData, setUserData] = useState({
        name: "",
        age: 1
    })

    console.log("Render ParendComponent", message, userData)

    return (
        <div style={{background: "gray", padding: "30px"}}>
            <h3 style={{borderBottom: "white 1px solid", margin: 0}}>Parent component</h3>
            <div style={{marginBottom: "30px"}}>
                <div>Message: {message}</div>
                <div>Name: {userData.name}</div>
                <div>Age: {userData.age}</div>
            </div>
            <ChildComponent />
            <div style={{marginTop: "30px", padding: "5px", border: "white 1px solid"}}>
                <div style={{marginBottom: "10px"}}>
                    <span>Message</span>
                    <input value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <ChildComponentWithStringProp message={message} />
            </div>
            <div style={{marginTop: "30px", padding: "5px", border: "white 1px solid"}}>
                <div style={{marginBottom: "10px"}}>
                    <div>
                        <span>Name</span>
                        <input value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} />
                    </div>
                    <div>
                        <span>Age</span>
                        <button onClick={() => setUserData({...userData, age: userData.age + 1})} >Add</button>
                        <ChildComponentWithObjectProp data={
                            userData
                        } />
                    </div>
                </div>
            </div>
        </div>
    )
}