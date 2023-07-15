type Props = {
    message: string
}

export default function ChildComponentWithStringProp({ message }: Props) {
    console.log("Render ChildComponentWithStringProp", message)
    return (
        <div style={{background: "green", padding: "10px"}}>
            <p>Child Component with props</p>
            <p>Message: {message}</p>
        </div>
    )
}