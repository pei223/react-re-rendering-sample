import { useState } from 'react'
import './App.css'
import ParentComponent from './ParentComponent'

function App() {
  const [message, setMessage] = useState("")

  console.log("Render App", message)

  return (
    <div className="App" style={{
      background: "silver",
      padding: "10px 50px",
    }}>
      <div style={{marginBottom: "20px"}}>
        <span>Message</span>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <ParentComponent messageFromRoot={message} />
    </div>
  )
}

export default App
